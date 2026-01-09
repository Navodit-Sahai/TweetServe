const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const connect=require('./config/database');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
const apiRoutes=require('./routes/index');
app.use('/api',apiRoutes);
app.listen(3000, async () => {
  console.log('server started');
  await connect();
  console.log('Mongo db connected');
});
