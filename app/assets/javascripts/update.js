function updateReadStatus(selector){
  $(selector).delegate('#unread-check', 'click', function(event){
    console.log("unread check was selected");
    var currentId = event.target.parentElement.outerHTML.split(" ")[0].split('<ul').pop().split(">")[0];
    updateStatus( {unread: false}, {id: currentId });
  });

  $(selector).delegate('#read-check', 'click', function(){
    console.log("read check was selected");
    var currentId = event.target.parentElement.outerHTML.split(" ")[0].split('<ul').pop().split(">")[0];
    updateStatus( {unread: true}, {id: currentId});
  });

}

function updateStatus (newData, currentId) {
  $.ajax({
    type: "PATCH",
    url: "api/v1/links/" + currentId.id,
    data: newData,
    dataType: 'json',
    success: noReloadStatus(newData, currentId),
  });
}

function noReloadStatus(newData, currentId){
  $(".checkbox").prop("checked", false);
  $('#link-subset' + currentId.id).replaceWith(formatUnread(newData));
}

  function formatUnread(link){
    if (link.unread){
      console.log("link is now unread");
      return '<div id="unread-check">' +'<ul> Mark as Read: <input type="checkbox" class="checkbox-unread"></ul></div>';
  }
    else {
      console.log("link is now read");
    return '<div id="read-check">' + '<ul>Mark as Unread: <input type="checkbox" class="checkbox-read"></ul>';
  }
  }
