var Todo = (function() {
  var lastId = 1;

  return Backbone.Model.extend({
    defaults: {
      completed: false,
    },

    markCompleted: function() {
      this.set('completed', true);
    },

    initialize: function() {
      this.set('id', lastId);
      lastId++;
    }
  });
})();


