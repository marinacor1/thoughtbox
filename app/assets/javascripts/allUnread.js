function allUnread(selector){
  $(selector).click(function(){
    var $currentLinks = $('#link-table').children();
    $.each($currentLinks, function(index, link){
      if (link.innerHTML.includes("unread-check") === false){
        $(link).addClass('invisible');
      }
      else
        $(link).removeClass('invisible');
    })
  });

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
