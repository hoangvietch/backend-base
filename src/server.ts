process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import 'dotenv/config';
import App from '@/app';
import IndexRoute from '@routes/index.route';
import UserRoute from '@routes/user.route';
import StoreRoute from '@routes/store.route';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([new IndexRoute(), new UserRoute(), new StoreRoute()]);

app.listen();
