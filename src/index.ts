import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import logger from './utils/logger';
import baseRouter from './routes/base.routes';
import projectRouter from './routes/project.routes';
import eduRouter from './routes/edu.routes';
import articleRouter from './routes/article.routes';

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', baseRouter);
app.use('/api', projectRouter);
app.use('/api', eduRouter);
app.use('/api', articleRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.info(`Server listening on port ${PORT}`);
});
