var EditTodoView = NewTodoView.extend({
  template: App.templates.form,
  events: {
    submit: 'edit',
    'click .mark-complete': 'markComplete',
  },

  markComplete: function(e) {
    e.preventDefault();
    this.model.markCompleted();
    this.close();
  },

  edit: function(e) {
    e.preventDefault();
    var attrs = this.process($('form').serializeArray());
    this.model.set(attrs);
    this.close();
  },

  fillDate: function() {
    ['day', 'month', 'year'].forEach(function(prop) {
      $('#' + prop).find('option[value="' + this.model.get(prop) + '"]').prop('selected', true);
    }, this);
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$modal.html(this.$el);
    this.fillDate();
  },
});