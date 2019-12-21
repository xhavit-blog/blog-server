const createError = require("http-errors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const express = require("./lib/express");

const indexRouter = require("./route/index");
const usersRouter = require("./route/users");
const apiRouter = require("./api");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "view"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api", apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  const isDev = req.app.get("env") === "development";
  const rApi = /^\/api\//;

  // api的错误以json格式返回
  if (rApi.test(req.originalUrl)) {
    res.status(err.status || 500);
    res.xJsonErr(err);
  }
  // 页面的错误以html的格式返回
  else {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = isDev ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
  }
});

module.exports = app;
