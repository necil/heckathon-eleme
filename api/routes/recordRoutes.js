'use strict';
module.exports = function(app) {
  var recordController = require('../controllers/recordController');
  // todoList Routes
  app.route('/getRecord')
    .post(recordController.getRecord);
};
