function loadForm(selector){
  var $formTarget = $(selector)
  $formTarget.append(formatForm());
}

 function formatForm(){
  return '<div id="link-form">' +
        '<form>Title <br>' +
        '<input type="text" name="link-title" class="link-title"><br>' +
        'Url: <br>' + '<input type="text" name="link-url" class="link-url"><br>' +
        '<input type="submit" value="Submit">' +
        '</form>' +
        '</div>'
}
