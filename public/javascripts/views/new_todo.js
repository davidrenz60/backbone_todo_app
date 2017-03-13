var NewTodoView = Backbone.View.extend({
  $modal_layer: $('#modal-layer'),
  $modal: $('#modal'),
  tagName: 'form',
  template: App.templates.form,
  duration: 300,

  attributes: {
    action: '#',
    method: 'post',
  },

  events: {
    'submit': 'create',
  },

  create: function(e) {
    e.preventDefault();
    var attrs = this.process($('form').serializeArray());
    this.close();

    App.todos.add(new Todo(attrs));
  },

  process: function(data) {
    var attrs = {};
    data.forEach(function(obj) {
      attrs[obj.name] = obj.value;
    });

    if (!attrs.day || !attrs.month || !attrs.year) {
      attrs.date = new Date(0);
      attrs.formattedDate = "No Due Date";
    } else {
      attrs.date = new Date(attrs.day + '-' + attrs.month + '-' + attrs.year);
      attrs.formattedDate = moment(attrs.date).format('MM/YY');
    }

    return attrs;
  },

  render: function() {
    this.$el.html(this.template());
    this.$modal.html(this.$el);
  },

  open: function() {
    this.$modal.add(this.$modal_layer).fadeIn(this.duration);
  },

  close: function() {
    this.$modal_layer.fadeOut(this.duration);
    this.$modal.fadeOut(this.duration, function() {
      this.remove();
    }.bind(this));
  },

  initialize: function() {
    this.render();
    this.open();
  },
});
