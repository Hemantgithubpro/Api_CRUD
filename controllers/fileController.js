const File = require('../models/File');
const fs = require('fs').promises;
const path = require('path');

exports.uploadFile = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const newFile = new File({
      filename: req.file.filename,
      originalName: req.file.originalname,
      path: req.file.path
    });

    await newFile.save();
    res.status(201).json({ message: 'File uploaded successfully', fileId: newFile._id });
  } catch (error) {
    next(error);
  }
};

exports.getFile = async (req, res, next) => {
  try {
    const file = await File.findById(req.params.id);
    if (!file) {
      return res.status(404).json({ message: 'File not found' });
    }

    res.download(file.path, file.originalName);
  } catch (error) {
    next(error);
  }
};

exports.updateFile = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const file = await File.findById(req.params.id);
    if (!file) {
      return res.status(404).json({ message: 'File not found' });
    }

    // Remove the old file
    await fs.unlink(file.path);

    // Update file information
    file.filename = req.file.filename;
    file.originalName = req.file.originalname;
    file.path = req.file.path;
    file.uploadDate = Date.now();

    await file.save();
    res.json({ message: 'File updated successfully' });
  } catch (error) {
    next(error);
  }
};

exports.deleteFile = async (req, res, next) => {
  try {
    const file = await File.findById(req.params.id);
    if (!file) {
      return res.status(404).json({ message: 'File not found' });
    }

    // Remove the file from the file system
    await fs.unlink(file.path);

    // Remove the file entry from the database
    await File.findByIdAndDelete(req.params.id);

    res.json({ message: 'File deleted successfully' });
  } catch (error) {
    next(error);
  }
};

exports.getAllFiles = async (req, res, next) => {
  try {
    const files = await File.find().select('-__v');
    res.json(files);
  } catch (error) {
    next(error);
  }
};