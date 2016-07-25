function updateReadStatus(selector){
  var box = document.getElementById('link-form');
  box.innerElementChild.addEventListener(function(event){
    updateStatus(this, {id: target, unread: false});
  });

  var box = document.getElementsByClassName('unread-check');
  box.addEventListener(function(){
    updateStatus(this, {unread: true});
  });


  function updateStatus(elementHTML, updatedContent){
    $.ajax({
      type: "PATCH",
      url: "/api/v1/links/" + updatedContent.id,
      data: {
        unread: updatedContent.unread
      },
      dataType: "json",
      success: function(){
        load('#link-table');
      }
    });
  }

}
