Lab.codeMirrorOptions = {
  lineNumbers: true,
  matchBrackets: true,
  theme: 'lab',
  mode: 'javascript'
};

Lab.creationHooks.push(function(lab) {
  var render = lab.render;
  var codeMirror;

  function initCodeMirror() {
    var options = {};

    Object.keys(Lab.codeMirrorOptions).forEach(function(option) {
      options[option] = Lab.codeMirrorOptions[option];
    });

    options.value = lab.code.value;
    codeMirror = CodeMirror(function(element) {
      element.classList.add("code");
      lab.code.parentNode.replaceChild(element, lab.code);
    }, options);
    codeMirror.on("change", function propagateChangeToUnderlyingCode() {
      var event = document.createEvent('HTMLEvents');
      event.initEvent('change', true, true);
      lab.code.value = codeMirror.getValue();
      lab.code.dispatchEvent(event);
    });
  }

  lab.render = function() {
    if (!codeMirror) initCodeMirror();

    // See if the underlying code has been programmatically changed.
    if (codeMirror.getValue() != lab.code.value)
      codeMirror.setValue(lab.code.value);

    render.call(lab);
  };
});
