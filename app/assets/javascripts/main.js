$(document).ready(function(){


  load('#link-table');
  loadForm('#link-form');
  searchForm('#searchbox');
  postNewLink('#link-table');
  updateReadStatus('#link-table');
  editLink('#link-table');
  searchLinks('#searchbox');
  sortAlphabetically('#alpha');
  allRead('#by-read');
  allUnread('#by-unread');
});


    function formatLink(link){
      return '<div id="link-subset-' + link.id + '"'+  '><ul id="title-box-' + link.id + '">'+ link.title +
      '</ul><ul id="url-box-' + link.id+ '">' + link.url + '</ul>' + formatUnread(link) + '<button type="button" onclick="editLink()" class="edit-button">Edit</button>' +
      '</div>';
  }

    function formatUnread(link){
      if (link.unread){
      return '<div id="unread-check">' +'<ul' + link.id + '> Mark as Read: <input type="checkbox" class="checkbox-unread"></ul></div>';
    }
      else {
      return '<div id="read-check">' + '<ul' + link.id + '>Mark as Unread: <input type="checkbox" class="checkbox-read"></ul>';
    }
  }
