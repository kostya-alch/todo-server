const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const authRouter = require('./routes/auth.routes');
const todoRouter = require('./routes/todo.routes');
const cors = require('cors');
const app = express();

const PORT = config.get('serverPort');
app.use(cors());
app.use(express.json({ extended: true }));
app.use('/api/auth', authRouter);
app.use('/api/todo', todoRouter);

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
