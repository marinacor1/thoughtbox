function updateReadStatus(selector){
  $('#idea-table').click(function(){
    target = this.innerHTML.split('div')[2].split(" ")[2][0];
    updateStatus(this, {id: target, unread: false});
  });


  $('#idea-table').click(function(){
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
        load('#idea-table');
      }
    });
  }

}