describe('Todo Model', function() {
  var todo = new Todo();

  it('creates a Todo Model', function() {
    expect(todo instanceof Todo).toBe(true);
  });

  it('sets completed property to false by default', function() {
    expect(todo.get('completed')).toBe(false);
  });

  it('sets an id property', function() {
    expect(todo.get('id')).toBeDefined();
  });

  it('an existing id is preserved', function() {
    var attrs = { id: 2, completed: true };
    var existingTodo = new Todo(attrs);

    expect(existingTodo.get('id')).toBe(2);
    expect(existingTodo.get('completed')).toBe(true);
  });
});