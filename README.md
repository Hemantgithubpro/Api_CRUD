# File Editing Platform

## Description
The File Storage API is a robust backend solution for managing file uploads, retrievals, updates, and deletions. Built with Node.js, Express, and MongoDB, it provides a set of RESTful endpoints for seamless file management operations.

## Features
- File upload
- File retrieval by ID
- File update (replace existing file)
- File deletion
- Storing files using MongoDb


## Installation

1. Clone the repository:
   ```
   git clone https://github.com/hemantgithubpro/Api_CRUD.git
   cd Api_CRUD
   ```

2. Install dependencies:
   ```
   npm i
   ```

3. Create a `.env` file in the root directory and add the following:
   ```
   PORT=3000
   MONGO_URI=mongodb://localhost:27010/fileStorage
   ```

## Usage
To start the server in development mode:

```
npm run dev
```

The server will start on `http://localhost:3000`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/files | Upload a new file |
| GET | /api/files/:id | Retrieve a file by ID |
| PUT | /api/files/:id | Update (replace) a file |
| DELETE | /api/files/:id | Delete a file |
| GET | /api/files | List all files (metadata) |
