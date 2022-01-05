import express from 'express';

const app = express();
const PORT = 4000;

const testMiddleware = (req, res, next) => {
  console.log(`hello, ${req.url}`);
  if (req.url === '/') {
    res.send('<h1>Welcome</h1>');
  }
  next();
};
const welcomeMiddleware = (req, res) => {
  console.log('you should not be here');
  res.send('Hoho');
};
app.use(testMiddleware, welcomeMiddleware);
app.get('/', () => console.log('Somebody is trying to go home.'));

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
