const user = require('./userService.js');
var jwt = require('jsonwebtoken');

const loginUser = async (req, h) => {
    
        console.log(req.payload);
        if(req.payload && req.payload.username && req.payload.password) {
            let username = req.payload.username;
            let password = req.payload.password;
    
            user.loginUser(username)
            .then((user)=>{
                if( !user ) {
                    return h.response({code : 1, message:"no such user found!"});
                } 
    
                if(user.password === req.payload.password) {
                    const user = {id: user.id};
                    const token = jwt.sign({user}, 'my_secrete_key');
                    return h.response({message: "ok", token: token});
                } else {
                    return h.response({message:"passwords did not match!"});
                }
            })
            .catch((err)=>{
                console.log(err)
                return h.response(err).code(500)
    
    
            }) 
        } else {
            return h.response({message: "Invalid Request!"});
        }
    
    }
 module. exports = loginUser;