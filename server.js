import express from 'express';
import cors from 'cors';
import {
  graphqlExpress,
  graphiqlExpress,
} from 'graphql-server-express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';

import router from './src/router';
import { schema } from './src/schema';
import { channels } from './src/resolvers';

const app = express();

// setup DB
mongoose.connect('mongodb://localhost:auth/auth');

// setup App
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}));
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));
router(app);

// setup server
const port = process.env.PORT || 3090;
app.listen(port, () =>
  console.log(`GraphQL Server is now running on http://localhost:${port}`)
);
