const User = require("../repository/userRepository");
const user = new User();

exports.createUser = (name, amount, date) => {
  var name = name;
  var amount = amount;
  var date = date;

  user
    .createUser(name, amount, date)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
};

exports.getUsers = (req, res) => {
  user
    .getAllUsers()
    .then((resp) => {
      const data = resp;
      res.render("users", {
        users: data,
        pageTitle: "Clientes",
        path: "/",
      });
    })
    .catch((err) => {
      res.status(422).json({ Error: err.message });
    });
};

exports.searchByNameOrSort = (req, res) => {
  const amount = req.body.amount;
  const date = req.body.date;
  const name = req.body.name;

  if (amount) {
    user
      .sortByAmount()
      .then((resp) => {
        const data = resp;
        res.render("users", {
          users: data,
          pageTitle: "Clientes",
        });
      })
      .catch((err) => console.log(err));
  } else if (date) {
    user
      .sortByDate()
      .then((resp) => {
        const data = resp;
        res.render("users", {
          users: data,
          pageTitle: "Clientes",
        });
      })
      .catch((err) => console.log(err));
  } else if (name) {
    user
      .sortByName()
      .then((resp) => {
        const data = resp;
        res.render("users", {
          users: data,
          pageTitle: "Clientes",
        });
      })
      .catch((err) => console.log(err));
  } else {
    user
      .getByName(req.body.fname)
      .then((resp) => {
        const data = resp;
        res.render("users", {
          users: data,
          pageTitle: "Clientes",
        });
      })
      .catch((err) => console.log(err));
  }
};
