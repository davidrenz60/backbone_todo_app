describe('Todos View', function() {
  var todosView = new TodosView({ collection: todos });

  it('renders all todos on initialize', function() {
    expect($('#todos li').length).toBe(todos.length);
  });

  it('renders todos by date', function() {
    todosView.renderByDate('02/17');
    expect($('#todos li').length).toBe(2);
  });

  it('renders completed todos by date', function() {
    todosView.renderCompleted('02/17');
    expect($('#todos li').length).toBe(1);
  });

  it('deltes a todo from the view and the collection', function() {
    $('p.delete').first().trigger('click');

    expect($("#todos li").length).toBe(3);
    expect(todosView.collection.length).toBe(3);
  });

  it('toggles the completed status of a todo', function() {
    $('#todos li').first().trigger('click');

    expect(todosView.collection.first().get('completed')).toBe(true);
    expect($('li p.todo').last().hasClass('completed')).toBe(true);
  });

  describe('open edit todo view', function() {
    beforeEach(function() {
      this.editView = new EditTodoView({ model: todos.get(1) });
    });

    afterEach(function() {
      this.editView.remove();
    });

    it('opens a new edit view', function() {
      expect($('#modal form').length).toBe(1);
    });

    it('fills in the form with model data', function() {
      expect($("input[name='name']").val()).toBe('Workout');
    });
  });

  describe('open new todo view', function() {

    beforeEach(function() {
      this.newTodoView = new NewTodoView();
    });

    afterEach(function() {
      this.newTodoView.remove();
    });

    it('opens a new todo view', function() {
      expect($('#modal form').length).toBe(1);
    });
  });
});