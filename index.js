const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require('body-parser');
const userRoutes = require("./routes/user");
const userController = require("./controllers/userController");

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static("public"));

mongoose
  .connect("mongodb://mongo:27017/docker-node-mongo", { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB connected");
    mongoose.connection.db.dropCollection("users", (err, result) => {
      console.log("Collection dropped");
    });
    userController.createUser("Jose da Silva", "200", new Date("2020-11-2"));
    userController.createUser("Maria Ribeiro", "100", new Date("2020-1-12"));
    userController.createUser("Amaral Rocha", "1500", new Date("2020-3-2"));
  })
  .catch((err) => console.log(err));

app.use(userRoutes);

app.listen(3000, function () {
  console.log("Server running on port 3000");
});
