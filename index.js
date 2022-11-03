const express = require("express");

const app = express();

app.use("/",(req,res) => {res.send("HELLO ANSUHREE HOW ARE YOU?")})

app.listen(process.env.port || 3000)