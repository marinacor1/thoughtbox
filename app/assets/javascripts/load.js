function load(selector){
  $.ajax({
    type: "GET",
    url: "api/v1/links",
    success: renderLinks(selector)
  });

  function renderLinks(selector){
    return function(response){
      var $target = $(selector);
      $.each(response, function(index, link){
        $target.prepend(formatLink(link));
      });
    };
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
