//= require searchLinks
//= require support/link_helpers

describe('removeSpace', function () {
  it('removes spaces from a string', function () {
    var links = createLinks();
    var link = createLink('New Link', 1);
    var link2 = createLink('zzz', 2);
    var link3 = createLink('rrr', 3);
    links.appendChild(link);
    links.appendChild(link2);
    links.appendChild(link3);
    loadSelectWords('zz', links);
    assert.equal(links.children[0].className, 'invisible');
    assert.equal(links.children[1].className, '');
    assert.equal(links.children[2].className, 'invisible');
  });
});
