const controller = require('../Users/userController.js');
module.exports = [
   {
       path: '/loginUser',
       method: 'POST',
       handler: controller
   }
];