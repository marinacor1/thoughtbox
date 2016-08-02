function allRead(selector){
  $(selector).click(function(){
    var $currentLinks = $('#link-table').children();
    $.each($currentLinks, function(index, link){
      if (link.innerHTML.includes("unread-check")){
        $(link).addClass('invisible');
      }
      else
        $(link).removeClass('invisible');
    })
  });
}
