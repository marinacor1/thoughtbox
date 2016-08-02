function createLinks(){
  var links = document.createElement('div');
  links.id = 'link-table';
  return links;
}

function createLink(title, id){
  var link = document.createElement('div');
  link.id = 'link-subset-' + id;
  var firstUL = document.createElement('ul');
  firstUL.id = 'title-box-' + id;
  var titleText = document.createTextNode(title);
  firstUL.appendChild(titleText);
  var secondUL = document.createElement('ul');
  secondUL.id = 'url-box-' + id;
  var urlText = document.createTextNode('http://www.example.com');
  secondUL.appendChild(urlText);
  link.appendChild(firstUL);
  link.appendChild(secondUL);
  return link;
}
