const express = require("express");
const dotenv = require('dotenv');
const mongoose = require("mongoose");
var bodyParser = require('body-parser');
const userRoutes = require("./routes/user");
const userController = require("./controllers/userController");

const app = express();
dotenv.config();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
	next();
});

app.use(userRoutes);

mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB connected");
    mongoose.connection.db.dropCollection("users", (err, result) => {
      console.log("Collection dropped");
    });
    userController.createUser("Jose da Silva", "200", new Date("2020-11-2"));
    userController.createUser("Maria Ribeiro", "100", new Date("2020-1-12"));
    userController.createUser("Amaral Rocha", "1500", new Date("2020-3-2"));
    userController.createUser("Ana Mendes", "1500", new Date("2020-3-2"));
    userController.createUser("Bruno Azevedo", "15000", new Date("2020-3-2"));
    userController.createUser("Beatriz Cunha", "2700", new Date("2020-3-2"));
    userController.createUser("Marcelo Silva", "8800", new Date("2020-3-2"));
    userController.createUser("Daniel Rubens", "3300", new Date("2020-3-2"));
  })
  .catch((err) => console.log(err));


app.listen(3000, function () {
  console.log("Server running on port 3000");
});
