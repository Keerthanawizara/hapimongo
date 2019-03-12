const controller = require('./userController.js');
module.exports = [
   {
       path: '/loginUser',
       method: 'POST',
       handler: controller
   }
];