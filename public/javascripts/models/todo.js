Todo = Backbone.Model.extend({
  defaults: {
    completed: false,
  },

  markCompleted: function() {
    this.set('completed', true);
  },

  initialize: function(options) {
    if (!options || options.id === undefined) {
      this.set('id', App.lastId);
      App.lastId++;
    }
  }
});

