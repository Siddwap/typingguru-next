import express from 'express';

const app = express();
app.use(express.static(`${__dirname}/build`));

app.get('/healthy', (req, res) => {
  res.send(__dirname);
});

const port = 5876;

export const startApp = async () => {
  try {
    await app.listen(port);
    console.log('------Server Started------');
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};
