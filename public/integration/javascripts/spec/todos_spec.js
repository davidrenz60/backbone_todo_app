describe('Todos Collection', function() {
  it('creates a Todos collection', function() {
    expect(todos instanceof Todos).toBe(true);
  });

  it('sets the model property to a Todo Model', function() {
    expect(todos.model).toBe(Todo);
  });

  it('sorts the collection by date', function() {
    todos.sort();
    expect(todos.first().get('name')).toBe('Homework');
  });

  describe('Todo Collection Methods', function() {
    it('getByDate returns an array of objects by date', function() {
      expect(todos.getByDate('02/17').length).toBe(2);
    });

    it('groupByDate returns an object with date counts', function() {
      var dates = todos.groupByDate();
      expect(dates[1].date).toBe('02/17');
      expect(dates[1].total).toBe(2);
    });

    it('groupByCompleted returns an object with date counts of completed todos', function() {
      var dates = todos.groupByCompleted();
      expect(dates[0].date).toBe('02/17');
      expect(dates[0].total).toBe(1);
    });
  });
});