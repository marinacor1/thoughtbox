function sortAlphabetically(selector){
  $(selector).click(function(){
  var $currentLinks = $('#link-table').children();
  $.ajax({
    type: "GET",
    url: "api/v1/sorted",
    success: renderLinks(selector)
  });
  });
}

  function renderLinks(selector){
    return function(response){
      $('#link-table').empty();
      $.each(response, function(index, link){
        $('#link-table').append(formatLink(link));
      });
  };

  function formatLink(link){
    return '<div id="link-table"><div id="link-subset"' + link.id +'<ul id="title-box"' + link.id + '>'+ link.title +
    '</ul><ul id="url-box" ' + link.id + '>' + link.url + '</ul>' +
    formatUnread(link) + '<button type="button" onclick="editLink()" class="edit-button">Edit</button>' +
    '</div></div>';
}

  function formatUnread(link){
    if (link.unread){
    return '<div id="unread-check">' +'<ul' + link.id + '> Mark as Read: <input type="checkbox" class="checkbox-unread"></ul></div>';
  }
    else {
    return '<div id="read-check">' + '<ul' + link.id + '>Mark as Unread: <input type="checkbox" class="checkbox-read"></ul>';
  }
}
}
