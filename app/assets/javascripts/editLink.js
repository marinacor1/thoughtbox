function editLink(){
  $('.edit-button').click(function(){
    $(newFormBox()).alert(newFormBox());
  });

  function newFormBox(){
    return '<form id="edit-input" type="text">' +
    'New Title: <br> ' + '<input type="text" name="inputform"</input>' +
    'New Url: <br>' + '<input type="text" name="urlform"</input>' +
    '</form>';
  }
}
