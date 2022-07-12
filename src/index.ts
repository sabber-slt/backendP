import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import logger from './utils/logger';
import baseRouter from './routes/base.routes';
import projectRouter from './routes/project.routes';

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', baseRouter);
app.use('/api', projectRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  logger.info(`Server listening on port ${PORT}`);
});
