const Hapi = require('hapi');
//const AuthBearer = require('hapi-auth-bearer-token');
const Routes = require('./Users/userRoutes');
 
const server=Hapi.server({
    host:'localhost',
    port:8000
});

 
// const start = async () => {
 
//     await server.register(AuthBearer)
 
//     server.auth.strategy('simple', 'bearer-access-token', {
//         allowMultipleHeaders: true,              // optional, false by default
//         validate: async (request, token, h) => {
 
//             // here is where you validate your token
//             // comparing with token from your database for example
//             const isValid = token === '123445';
 
//             const credentials = { token };
//             const artifacts = { test: 'info' };
 
//             return { isValid, credentials, artifacts };
//         }
//     });
 
//     server.auth.default('simple');
 
//     server.route({
//         method: 'POST',
//         path: '/user',
//         handler: async function (request, h) {
 
//             return { info: 'success!' };
//         }
//     });
 
//     await server.start();
 
//     return server;
// }
server.route(Routes)
 
const start =  async function() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();

const MongoClient = require('mongodb').MongoClient;
 //connection url
const url = 'mongodb://localhost:27017';
const dbName = 'demo';
let db;
MongoClient.connect(url,function(err,client){
  if(err) throw err;
  console.log("mongodb connected sucessfully!");

  db =client.db(dbName);

    client.close();
})
exports.db = db;


