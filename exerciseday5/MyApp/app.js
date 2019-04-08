const createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const axios=require('axios');
var port=3000;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('trust proxy',true)
app.set('strict routing',true)



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// const jasondata=async () => {
//   try{
//     return await axios.get('https://randomuser.me/api/?results=10')
//   }catch{
//     console.error(error)
//   }
// };



app.get('/users',async function(request,response){
 const data={"tomas":"mew"};
  response.status(200);
  response.set('Content-Type','application/json');
  response.setHeader('Last-Modified',new Date());
  response.setHeader('cache-Control','private, max-age=86400');
  response.setHeader('If-Modified-Since',new Date());
  response.setHeader('Link','<http://localhost:3000/users?p=1> rel="first"');
  const t= await axios.get('https://randomuser.me/api/?results=10')
  console.log("heeeeeeeee");
  console.log(t);
  response.send(t.data);
  response.end();
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port,function(){console.log("listening on port 3000")});

module.exports = app;
