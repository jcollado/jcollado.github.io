$(document).ready(function() {
    app = new ApplicationModel();
    ko.applyBindings(app);
});

function ApplicationModel() {
  this.projects = [
      {
        name: 'Hot or cold',
        description: 'Number guessing game',
        url: '/HotOrCold',
        img: 'img/HotOrCold.png',
        tags: ['html', 'css', 'javascript', 'jquery']
      },
      {
        name: 'Shopping list',
        description: 'Todo list application',
        url: '/ShoppingList',
        img: 'img/ShoppingList.png',
        tags: ['html', 'css', 'javascript', 'jquery']
      },
      {
        name: 'Quiz',
        description: 'Programming language quiz',
        url: '/QuizKnockout',
        img: 'img/Quiz.png',
        tags: ['html', 'css', 'less', 'javascript', 'jquery', 'knockout']
      },
      {
        name: 'Do it!',
        description: 'Todo list application using <a href="http://www.rememberthemilk.com">Remember The Milk</a> as a backend',
        url: '/DoIt',
        img: 'img/DoIt.png',
        tags: ['html', 'css', 'less', 'javascript', 'jquery', 'knockout']
      }
    ];
}
