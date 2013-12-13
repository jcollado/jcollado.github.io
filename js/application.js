$(document).ready(function() {
  // Get question data from json file in server
  $.getJSON('data/projects.json', function(projects) {
    console.log('Projects metadata', projects);

    // Create application to display given projects
    app = new ApplicationModel(projects);
    ko.applyBindings(app);
  });
});

function ApplicationModel(projects) {
  this.projects = projects;
}
