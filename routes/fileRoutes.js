const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileController.js');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('file'), fileController.uploadFile);
router.get('/', fileController.getAllFiles);
router.get('/:id', fileController.getFile);
router.put('/:id', upload.single('file'), fileController.updateFile);
router.delete('/:id', fileController.deleteFile);

module.exports = router;