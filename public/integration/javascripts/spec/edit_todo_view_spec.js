jQuery.fx.off = true;

describe('Edit Todo View', function() {
  beforeEach(function() {
    this.editTodoView = new EditTodoView({ model: todos.first() });
  });

  afterEach(function() {
    this.editTodoView.remove();
    todos.reset(todos_scaffold);
  });

  it('opens the edit todo view', function() {
    expect($('#modal form').length).toBe(1);
  });

  it('fills in form fields with  model data', function() {
    expect($("input[name='name']").val()).toBe('Homework');
    expect($("select[name='month']").val()).toBe('January');
  });

  it('saves the new model data', function() {
    $("input[name='name']").val('new todo');
    $('form').trigger('submit');

    expect(this.editTodoView.model.get('name')).toBe('new todo');
  });

  it('marks a todo model complete', function() {
    $('.mark-complete').trigger('click');
    expect(this.editTodoView.model.get('completed')).toBe(true);
  });
});