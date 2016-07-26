function editLink(selector){
  $(selector).delegate('.edit-button', 'click', function(event){
    var currentId = event.target.parentElement.outerHTML.split("=")[1].split(" ")[1];
    $('#link-subset').append(newFormBox(currentId));
  });

  function newFormBox(currentId){
    return '<br> New Title: <input type="text" class="new-title" name="inputform"</input>' +
    '<br>New Url: ' + '<input type="text" class="new-url" name="urlform"</input><br>' +
    '<button type="button" onclick="updateData(' + currentId + ')" class="edit-submit-button">Submit</button>';
  }
}

function updateData(currentId){
  console.log('update data called');
  var newTitle = $('.new-title').val();
  var newUrl = $('.new-url').val();
  var newData = {title: newTitle, url: newUrl};
  $.ajax({
    type: "PATCH",
    url: "api/v1/links/" + currentId,
    data: newData,
    dataType: 'json',
    success: function (response) {
      noReloadLink(currentId, response);
    }
  });
}

function noReloadLink(currentId, response){
  $('#link-subset' + currentId).replaceWith(formatLink(response));
}

  function formatLink(response){
    return '<div id="link-table"><div id="link-subset">'+ response.id + '<ul id="title-box"'+ response.id + '>' + response.title +
    '</ul><ul id="url-box" '+ response.id + '>' + response.url + '</ul>' + formatUnread(response) + '<button type="button" onclick="editLink()" class="edit-button">Edit</button>' +
    '</div></div>';
}

  function formatUnread(response){
    if (response.unread){
    return '<div id="unread-check">' +'<ul' + response.id + '> Mark as Read: <input type="checkbox" class="checkbox-unread"></ul></div>';
  }
    else {
    return '<div id="read-check">' + '<ul' + response.id + '>Mark as Unread: <input type="checkbox" class="checkbox-read"></ul>';
  }
  }
