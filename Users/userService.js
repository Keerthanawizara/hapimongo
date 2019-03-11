var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/demo";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

const loginUser = async (username) => {
    return users.findOne({'username': username})
    .then((user) => {
        return user;
    })
    .catch((err) => {
        console.log(err)
       return err;
    })
}
module.exports = loginUser;
