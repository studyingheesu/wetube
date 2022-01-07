import express from 'express';

import globalRouter from './routers/globalRouter';
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';

const app = express();
const PORT = 4000;

const logerMiddleware = (req, res, next) => {
  console.log(req.path);
  next();
};

app.set('view engine', 'pug');
app.set('views', process.cwd() + '/src/views');

app.use(logerMiddleware);

app.use('/', globalRouter);
app.use('/users', userRouter);
app.use('/videos', videoRouter);

app.get('/', () => console.log('Somebody is trying to go home.'));

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
