import express from 'express';

const videoRouter = express.Router();
const handlewWatchVideo = (req, res) => res.send('watch video');
videoRouter.get('/watch', handlewWatchVideo);

export default videoRouter;
