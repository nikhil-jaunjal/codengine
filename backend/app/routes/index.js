const express = require("express");
const kpi = require('./../module/kpi/kpi.routes');

const app = express();

app.use("/kpis",kpi);

module.exports = app;