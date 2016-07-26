function editLink(selector){
  $(selector).delegate('.edit-button', 'click', function(event){
    var currentId = event.target.parentElement.outerHTML.split("=")[1].split(" ")[1];
    console.log('edit button is hit in div ' + currentId);
    $('#link-subset').append(newFormBox);
  });

  function newFormBox(){
    return '<br>New Title: <input type="text" name="inputform"</input>' +
    '<br>New Url: ' + '<input type="text" name="urlform"</input><br>' +
    '<button type="button" class="edit-submit-button">Submit</button>';
  }
}
