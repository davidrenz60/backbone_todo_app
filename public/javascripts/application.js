var App = {
  $el: $('main'),
  templates: JST,

  newTodo: function() {
    new NewTodoView();
  },

  editTodo: function(id) {
    new EditTodoView({ model: this.todos.get(id) });
  },

  updateViews: function() {
    this.todosView.renderAllTodos();
    this.sidebarView.render();
  },

  viewByDate: function(date) {
    this.todosView.renderByDate(date);
  },

  viewCompleted: function(date) {
    this.todosView.renderCompleted(date);
  },

  setStorage: function() {
    localStorage.setItem('todos', JSON.stringify(this.todos.toJSON()));
    localStorage.setItem('lastId', JSON.stringify(this.lastId));
  },

  getTodos: function() {
    return JSON.parse(localStorage.getItem('todos'));
  },

  getLastId: function() {
    return JSON.parse(localStorage.getItem('lastId')) || 1;
  },

  bindEvents: function() {
    _.extend(this, Backbone.Events);
    this.on('new_todo', this.newTodo);
    this.on('edit_todo', this.editTodo);
    this.on('view_by_date', this.viewByDate);
    this.on('view_completed', this.viewCompleted);
    this.on('model_change view_all', this.updateViews.bind(this));
    this.listenTo(this.todos, 'update', this.updateViews.bind(this));
    $(window).on('unload', this.setStorage.bind(this));
  },

  init: function() {
    this.lastId = this.getLastId();
    this.todos = new Todos(this.getTodos());
    this.todosView = new TodosView({ collection: this.todos });
    this.sidebarView = new SidebarView({ collection: this.todos });
    this.bindEvents();
  },
};

Handlebars.registerHelper('times', function(start, end, block) {
    var accum = '';
    for(var i = start; i <= end; i++)
        accum += block.fn(i);
    return accum;
});
