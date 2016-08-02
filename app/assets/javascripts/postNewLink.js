function postNewLink(selector){
  $('#submit-button').click(function(){
    var linkParams = {title: $('.link-title').val(), url: $('#link-url').val()};
    $.ajax({
      type: "POST",
      url: "/api/v1/links",
      data: linkParams,
      success: function(newLink){
        noReload(newLink);
        clearTextFields();
      }
    });
  });

  function noReload(link){
    $('#link-table').prepend(formatLink(link));
  }

  function clearTextFields(){
    $('#title-box').val('');
    $('#url-box').val('');
  }
}
