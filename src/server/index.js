import * as express from 'express';
import cors from 'cors';
import Loadable from 'react-loadable';
import bodyParser from 'body-parser';
import serverRenderer from './middleware/serverRenderer';
import paths from '../../config/paths';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static(paths.clientBuild));

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res) => serverRenderer(req, res));

Loadable.preloadAll()
  .then(() => {
    console.log(333);
    app.listen(PORT, () => {
      console.log(
        `[${new Date().toISOString()}]`,
        `App is running: http://localhost:${PORT}`
      );
    });
  })
  .catch(err => {
    console.log(err);
  });

export default app;
