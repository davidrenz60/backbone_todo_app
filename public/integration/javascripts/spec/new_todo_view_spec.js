jQuery.fx.off = true;

describe('New Todo View', function() {
  beforeEach(function() {
    this.newTodoView = new NewTodoView({ collection: todos });
  });

  afterEach(function() {
    this.newTodoView.remove();
    todos.reset(todos_scaffold);
  });

  it('renders a new todo view', function() {
    expect($('#modal form').length).toBe(1);
  });

  it('it sets a formatted date', function() {
    $("input[name='name']").val('walk dog');
    $("input[name='description']").val('walk dog');
    $("#day option[value='4']").prop('selected', true);
    $("#month option[value='January']").prop('selected', true);
    $("#year option[value='2017']").prop('selected', true);
    $('form').trigger('submit');

    expect(this.newTodoView.collection.at(1).get('name')).toBe('walk dog');
  });

  it('it sets No Due Date when a date field is left blank', function() {
    $("input[name='name']").val('walk dog');
    $("input[name='description']").val('walk dog');

    $('form').trigger('submit');

    expect(this.newTodoView.collection.first().get('name')).toBe('walk dog');
    expect(this.newTodoView.collection.first().get('formattedDate')).toBe('No Due Date');
  });
});