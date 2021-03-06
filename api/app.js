require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var mangoose = require("mongoose");
const cors = require('cors');
var path = require('path');
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Indexrouter = require('./routes/index');
var usersRouter = require('./routes/users');
var storyRouter = require('./routes/storyline');

var app = express();

// allow cross-origin
app.use(cors());

//connect to Mangodb...
const dbURI = process.env.mongodb_URI;
mangoose.connect( dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("connected to db"))
  .catch((err) => console.log("there is an error", err));
 
//listing to LocalHost
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
//app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', Indexrouter);
app.use('/users', usersRouter);
app.use('/storyline', storyRouter);

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
  //res.status(err.status || 500);
  //res.render('error');
});

module.exports = app;
