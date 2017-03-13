var Todo;

(function() {
  var id = 1;

  Todo = Backbone.Model.extend({
    defaults: {
      completed: false,
    },

    markCompleted: function() {
      this.set('completed', true);
    },

    initialize: function(options) {
      if (options.id === undefined) {
        this.set('id', id);
        id++;
      }
    }
  });
})();
