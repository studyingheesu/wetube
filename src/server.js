import express from 'express';

const app = express();
const PORT = 4000;

const logerMiddleware = (req, res, next) => {
  console.log(req.path);
  next();
};
app.use(logerMiddleware);

const globalRouter = express.Router();
const handleHome = (req, res) => res.send('home');
globalRouter.get('/', handleHome);

const userRouter = express.Router();
const handleEditUser = (req, res) => res.send('edit user');
userRouter.get('/edit', handleEditUser);

const videoRouter = express.Router();
const handlewWatchVideo = (req, res) => res.send('watch video');
videoRouter.get('/watch', handlewWatchVideo);

app.use('/', globalRouter);
app.use('/users', userRouter);
app.use('/videos', videoRouter);

app.get('/', () => console.log('Somebody is trying to go home.'));

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
