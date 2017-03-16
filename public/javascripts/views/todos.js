var TodosView = Backbone.View.extend({
  el: '#todos',
  template: App.templates.todos,

  events: {
    'click a.new-todo': 'newTodo',
    'click p.delete': 'deleteTodo',
    'click li': 'toggleCompleted',
    'click p.todo': 'editTodo',
  },

  editTodo: function(e) {
    var id = $(e.currentTarget).closest('li').data('id');
    new EditTodoView({ model: this.collection.get(id) });
    return false;
  },

  toggleCompleted: function(e) {
    var $e = $(e.currentTarget);
    var model = this.collection.get($e.data('id'));
    var status = !model.get('completed');

    $e.find('.todo').toggleClass('completed', status);
    model.set('completed', status);
    return false;
  },

  newTodo: function(e) {
    e.preventDefault();
    new NewTodoView({ collection: this.collection });
  },

  deleteTodo: function(e) {
    e.preventDefault();
    var id = $(e.target).closest('li').data('id');
    this.collection.remove(id);
    return false;
  },

  renderAllTodos: function() {
    this.$el.html(this.template({
      title: "All Todos",
      total: this.collection.length,
      pending: _.where(this.collection.toJSON(), { completed: false }),
      completed: _.where(this.collection.toJSON(), { completed: true }),
    }));
  },

  renderByDate: function(date) {
    var todos = this.collection.getByDate(date);

    this.$el.html(this.template({
      title: date,
      total: todos.length,
      pending: _.where(todos, { completed: false }),
      completed: _.where(todos, { completed: true }),
    }));
  },

  renderCompleted: function(date) {
    var completed;
    if (date === 'Completed') {
      completed = _.where(this.collection.toJSON(), { completed: true });
    } else {
      completed = _.where(this.collection.getByDate(date), { completed: true });
    }

    this.$el.html(this.template({
      title: date,
      total: completed.length,
      completed: completed,
    }));
  },

  initialize: function() {
    this.renderAllTodos();
    this.listenTo(this.collection, 'update change', this.renderAllTodos.bind(this));
  },
});