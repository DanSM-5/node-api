// Import controllers and add them to the routes
import {
  pingAPI
} from '../controllers/apiController';

const routes = (app) => {

  app.route('/api/')
    .get(pingAPI);
}

export default routes;