const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const connect=require('./config/database');
const passport=require('passport');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
const passportAuth=require('./config/jwt');
app.use(passport.initialize());
passportAuth(passport);

const apiRoutes=require('./routes/index');
app.use('/api',apiRoutes);



app.listen(3000, async () => {
  console.log('server started');
  await connect();
  console.log('Mongo db connected');
});
