var Todos = Backbone.Collection.extend({
  model: Todo,
  comparator: 'date',

  getByDate: function(date) {
    return _.where(this.toJSON(), { formattedDate: date });
  },

  groupByDate: function() {
    var result = [];
    var dates = _.groupBy(this.toJSON(), 'formattedDate');
    _.each(dates, function(val, key) {
      result.push({ date: key, total: val.length });
    });

    return result;
  },

  groupByCompleted: function() {
    var result = [];
    var completed = _.where(this.toJSON(), { completed: true });
    var dates = _.groupBy(completed, 'formattedDate');
    _.each(dates, function(val, key) {
      result.push({ date: key, total: val.length });
    });

    return result;
  },
});