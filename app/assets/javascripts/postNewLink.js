function postNewLink(selector){
  $('#submit-button').click(function(){
    var linkParams = {title: $('.link-title').val(), url: $('#link-url').val()};
    $.ajax({
      type: "POST",
      url: "api/v1/links",
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

  function formatLink(link){
    return '<div id="link-table"><div id="link-subset"' + link.id + '><ul id="title-box">'+ link.title +
    '</ul><ul id="url-box">' + link.url + '</ul>' + formatUnread(link)+ '<button type="button" onclick="editLink()" class="edit-button">Edit</button>' +
    '</div></div>';
}


  function formatUnread(link){
    if (link.unread){
    return '<div id="read-check">' +'<ul> Mark as Read: <input type="checkbox" class="checkbox-unread"></ul></div>';
  }
    else {
    return '<div id="unread-check">' + '<ul>Mark as Unread: <input type="checkbox" class="checkbox-read"></ul>';
  }
  }
}
