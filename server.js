import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';

import router from './src/router';
import config from './src/config';

const { PORT } = config;
const app = express();

// setup DB
mongoose.connect('mongodb://localhost:auth/auth');

// setup App
// morgan is HTTP request logger middleware
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// setup server
const port = process.env.PORT || PORT;
app.listen(port, () =>
  console.log(`Server is now running on http://localhost:${port}`)
);
