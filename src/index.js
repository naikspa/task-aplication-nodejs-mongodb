import app from './app';
import './database';
import { PORT } from './config';

app.listen(3000);
console.log('Server on port', Number(PORT));
