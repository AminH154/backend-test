const express = require("express");
const app = express();
const mongoose = require('mongoose');
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello World gays!");
});
mongoose.connect('mongodb+srv://aminbouallegui0:qMS27GuBCnfvLrAH@node.xqn764z.mongodb.net/node-API?retryWrites=true&w=majority&appName=node')
  .then(() => console.log('Connected!'))
  .catch(err => console.log(err));