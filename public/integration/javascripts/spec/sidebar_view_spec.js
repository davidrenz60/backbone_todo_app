describe('Sidebar View', function() {
  localStorage.clear();
  App.todos = todos;
  App.setStorage();
  App.init();

  it('renders the sidebar when the app is initialized', function() {
    expect($('#all-todos').length).toBe(1);
    expect($('#completed-todos').length).toBe(1);
  });

  it('counts all todos', function() {
    expect($('#view-all p').text()).toBe('4');
  });

  it('counts all completed todos', function() {
    expect($('#view-completed p').text()).toBe('1');
  });

  it('counts all todos by date', function() {
     expect($('#all-todos li').eq(2).find('p').last().text()).toBe('2');
   });

  it('it counts complted todos by date', function() {
    expect($('#completed-todos li').last().find('p').last().text()).toBe('1');
  });

  it('updates the counts when a todo is added', function() {
    var todo = { name: 'Testing', completed: true, formattedDate: '06/16' };
    App.todos.add(todo);
    expect($('#all-todos li').length).toBe(5);
    expect($('#completed-todos li').length).toBe(3);
  });
});