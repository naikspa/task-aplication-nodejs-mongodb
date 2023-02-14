import mongoose from 'mongoose';
import { MDB_URI } from './config';

mongoose.set('strictQuery', true);

mongoose
  .connect(MDB_URI)
  .then((db) => console.log('DB is connected'))
  .catch((err) => console.log(err));
