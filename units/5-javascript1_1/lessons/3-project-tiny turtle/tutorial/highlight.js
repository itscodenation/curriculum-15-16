(function() {
  highlight.DURATION = 1000;

  function highlight(el) {
    if (el.classList.contains('highlight')) return;
    el.classList.add('highlight');
    setTimeout(function() {
      el.classList.remove('highlight');
    }, highlight.DURATION);
  }

  function highlightLocationHash() {
    var el = document.querySelector(location.hash);

    if (el) highlight(el);
  }

  function highlightLinkTarget(e) {
    if (e.target.nodeName != 'A') return;

    var href = e.target.getAttribute('href');

    if (href && href[0] == '#') highlight(document.querySelector(href));
  }

  window.addEventListener('load', highlightLocationHash, false);
  window.addEventListener('hashchange', highlightLocationHash, false);
  document.addEventListener('click', highlightLinkTarget, false);
})();
