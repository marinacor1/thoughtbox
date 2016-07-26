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
  console.log("current id is " + currentId);
  var newTitle = $('.new-title').val();
  var newUrl = $('.new-url').val();
  var newData = {title: newTitle, url: newUrl};
  $.ajax({
    type: "PATCH",
    url: "api/v1/links/" + currentId,
    data: newData,
    datType: 'json',
    success: noReloadLink(currentId)
  });
}

function noReloadLink(currentId){

}
