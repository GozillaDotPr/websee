var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//requier route
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var penRouter = require('./routes/penRawJal');
var pasienRouter = require('./routes/pasien');
var poliRouter = require('./routes/poli');
var dokterRouter = require('./routes/dokter');
var diagRouter = require('./routes/diagnosa');
var tinMedRouter = require('./routes/tinmed');
var transPerDetRouter = require('./routes/transperdet');
var transPerRouter = require('./routes/transper');
var transrawinRouter = require('./routes/transrawin');
var jenpenRouter = require('./routes/jenpen');
var transpendetRouter = require('./routes/transpendet');
var obatRouter = require('./routes/obat');
var transobatRouter = require('./routes/transobat');
var transobatdetRouter = require('./routes/transobatdet');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/pasien', pasienRouter);
app.use('/pendaftaran', penRouter);
app.use('/poli', poliRouter);
app.use('/dokter', dokterRouter);
app.use('/diagnosa', diagRouter);
app.use('/transper', transPerRouter);
app.use('/transperdet', transPerDetRouter);
app.use('/tindakan-medis', tinMedRouter);
app.use('/transrawin', transrawinRouter);
app.use('/jenpen', jenpenRouter);
app.use('/transpendet', transpendetRouter);
app.use('/obat', obatRouter);
app.use('/transobat', transobatRouter);
app.use('/transobatdet', transobatdetRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


//koneksi
const db= require('./koneksi'); 
db.authenticate().then(() => {
    db.sync();
    console.log('Berhasil konek');
}).catch(err => {
    console.log('Error: ' + err);
})


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
