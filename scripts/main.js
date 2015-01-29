(function() {
  'use strict';


  // $.ajax({
  //     url: "https://api.github.com/users/janku1md/repos",
  //   })
  //   .done(function(data) {
  //     console.log(data);
  //   });


  // function renderTemplate(name, data) {
  //   var $template = $('[data-template-name=' + name + ']').text();
  //   $.each(data, function(prop, value) {
  //     $template = $template.replace('<% ' + prop + ' %>', value);
  //   });
  //   return $template;
  // }

  var baseUrl = "https://api.github.com/users/janku1md";

  $(document).ready(function(){
    var repoTemplate = _.template($('[data-template-name=repo]').text());
    var $repositoriesUl = $('.repositories');

    $.ajax(baseUrl + "/repos").done(function(repos){
      _.each(repos, function(repo) {
        $repositoriesUl.append(repoTemplate(repo));
      });
    });
  });


  $(document).ready(function(){
    var sideTemplate = _.template($('[data-template-name=side]').text());
    var $sidebar = $('.sides');

    $.ajax(baseUrl).done(function(sides){
        $sidebar.append(sideTemplate(sides));
      });
    });

})();

// var promise = {
//   done: function(doncCallback){},
//   fail: function(failureCallback){},
//   then: function(doneCallback, failureCallback){}
// };
