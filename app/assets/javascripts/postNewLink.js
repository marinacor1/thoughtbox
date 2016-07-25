function postNewLink(selector){
  $('#submit-button').click(function(){
    var linkParams = {title: $('.link-title').val(), url: $('#link-url').val()};
    $.ajax({
      type: "POST",
      url: "api/v1/ideas/",
      data: linkParams,
      success: function(newLink){
        noReload(newLink);
        clearTextFields();
      }
    });
  });
}
