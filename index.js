import express from 'express';
import bodyParser from 'body-parser';
import routes from './src/routes/routes';
import path from 'path';
import cors from 'cors';
import config from './config';

const app = express();
const PORT = config.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors());

routes(app);

export const server = app.listen(PORT, () => 
  console.log(`Server is running on port ${PORT}`)
);

export default app;