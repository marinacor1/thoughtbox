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
}
