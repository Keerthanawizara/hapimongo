 const server = require('../server.js');
const loginUser = async (username) => {
    return server.db.users.findOne({'username': username})
    .then((user) => {
        console.log(user)
        return user;
    })
    .catch((err) => {
        console.log(err)
       return err;
    })
}
const loginUser = 
exports.loginUser = loginUser;
