localStorage.clear();
App.init();

var todos = new Todos([{
    name: 'Workout',
    date: new Date('01-01-2018'),
    formattedDate: '01/18',
  }, {
    name: 'Dishes',
    date: new Date('02-01-2017'),
    formattedDate: '02/17',
  }, {
    name: 'Homework',
    date: new Date('01-01-2017'),
    formattedDate: '01/17',
  }, {
    name: 'Shopping',
    date: new Date('02-01-2017'),
    formattedDate: '02/17',
    completed: true,
  }
]);
