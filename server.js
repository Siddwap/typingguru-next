import path from 'path';

const express = require('express')

const app = express();



app.use(express.static(path.join(__dirname,"out")));



app.get('/healthy', (req, res) => {
  res.send("ok");
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
