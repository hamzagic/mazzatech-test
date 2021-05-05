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
  const offset = req.body.offset;
  const limit = req.body.limit;
  const param = req.body.param;

  if (param == 'amount') {
    user
      .sortByAmount(offset, limit)
      .then((resp) => {
        const data = resp;
        res.json({
          "data": data[0],
          "total": data[1]
        })
      })
      .catch((err) => console.log(err));
  } else if (param == 'date') {
    user
      .sortByDate(offset, limit)
      .then((resp) => {
        const data = resp;
        res.json({
          "data": data[0],
          "total": data[1]
        })
      })
      .catch((err) => console.log(err));
  } else if (param == 'name') {
    user
      .sortByName(offset, limit)
      .then((resp) => {
        const data = resp;
        res.json({
          "data": data[0],
          "total": data[1]
        })
      })
      .catch((err) => console.log(err));
  } else {
    user
      .getAllUsers(offset, limit)
      .then((resp) => {
        const data = resp;
        res.json({
          "data": data[0],
          "total": data[1]
        });
      })
      .catch((err) => {
        res.status(422).json({ Error: err.message });
      });
  }
};

exports.searchByName = (req, res) => {
  const offset = req.body.offset;
  const limit = req.body.limit;
    user
      .getByName(req.body.fname, offset, limit)
      .then((resp) => {
        const data = resp;
        res.json({
          "data": data[0],
          "total": data[1]
        })
      })
      .catch((err) => console.log(err));
};