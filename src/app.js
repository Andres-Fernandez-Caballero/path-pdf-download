const express = require('express');
const webRouter = require('./routes/web');
const apiV1Router = require('./routes/apiV1');

const app = express();

app.use(webRouter)
app.use(apiV1Router)

module.exports = app;