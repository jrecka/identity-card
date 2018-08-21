'use strict';
module.exports = function(app) {
  var idForm = require('../controllers/idApplicationFormControllers');

  
  app.route('/tasks')
    .get(idForm.list_all_tasks)
    .post(idForm.create_a_task);


  app.route('/tasks/:taskId')
    .get(idForm.read_a_task)
    .put(idForm.update_a_task)
    .delete(idForm.delete_a_task);
};