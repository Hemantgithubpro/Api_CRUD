const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');
const fileRoutes = require('./routes/fileRoutes');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use('/api/files', fileRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));