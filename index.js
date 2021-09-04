const express = require("express");
const mongoose = require("mongoose");

// setup express server

const app = express();

app.listen(7000, () => console.log("Server started on port 7000"));

// set up routers

app.use("/project", require("./routers/projectRouter"));

// middleware 