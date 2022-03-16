const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const authRouter = require('./routes/auth.routes');

const app = express();

const PORT = config.get('serverPort');

app.use(express.json({ extended: true }));
app.use('/api/auth', authRouter);

const start = async () => {
   try {
      await mongoose.connect(config.get('dbUrl'));

      app.listen(PORT, () => {
         console.log(`server ready on ${PORT}`);
      });
   } catch (error) {
      console.log(error);
   }
};

start();
