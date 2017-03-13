var SidebarView = Backbone.View.extend({
  el: '#sidebar',
  template: App.templates.sidebar,

  events: {
    'click #all-todos li': 'viewByDate',
    'click #completed-todos li': 'viewByCompleted',
  },

  viewByDate: function(e) {
    var $el = $(e.currentTarget);
    this.toggleClass($el);
    var date = $el.find(':first-child').text();

    if (date === "All Todos") {
      App.trigger('view_all');
    } else {
      App.trigger('view_by_date', date);
    }
  },

  viewByCompleted: function(e) {
    var $el = $(e.currentTarget);
    this.toggleClass($el);
    var date = $el.find(':first-child').text();

    App.trigger('view_completed', date);
  },

  toggleClass: function($el) {
    App.$el.find('li.active').removeClass('active');
    $el.addClass('active');
  },

  render: function() {
    this.$el.html(this.template({
      all_total: this.collection.length,
      all_dates: this.collection.groupByDate(),
      completed_total: _.where(this.collection.toJSON(), { completed: true }).length,
      completed_dates: this.collection.groupByCompleted(),
    }));
  },

  initialize: function() {
    this.render();
  }
});