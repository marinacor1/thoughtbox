function loadForm(selector){
  $(selector).prepend(formatForm());
}

 function formatForm(){
  return '<div id="link-form">' +
        '<form>Title <br>' +
        '<input type="text" name="link-title" class="link-title"><br>' +
        'Url: <br>' + '<input type="text" name="link-url" id="link-url"><br>' +
        '' +
        '</form>' +
        '</div>';
}
