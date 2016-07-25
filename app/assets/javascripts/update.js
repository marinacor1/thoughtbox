function updateReadStatus(selector){
  var unreadBox = document.getElementById('unread-check')
  unreadBox.addEventListener("click", function(){
    // not working
    target = this.innerHTML.split('div')[2].split(" ")[2][0];
    updateStatus(this, {id: target, unread: false});
  });

  var readBox = document.getElementById('read-check')
  readBox.addEventListener("click", function(){
// not working
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
