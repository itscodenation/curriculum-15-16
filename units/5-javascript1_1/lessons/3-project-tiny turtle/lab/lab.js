var Lab = typeof(window) == 'undefined'
? {}                                         // We're in a web worker.
: (function(TinyTurtle) {                    // We're in a web page.
  var DEFAULT_CANVAS_SIZE = 250;
  var TURTLE_WIDTH = 10;
  var TURTLE_HEIGHT = 10;
  var RENDER_DELAY_MS = 100;
  var WORKER_TIMEOUT_MS = 2000;

  var baseURL = Lab.baseURL = (function() {
    // http://stackoverflow.com/a/3326554/2422398
    var scripts = document.getElementsByTagName('script');
    var myURL = scripts[scripts.length - 1].src;
    return myURL.split('/').slice(0, -1).join('/') + '/';
  })();

  function Lab(parent) {
    if (!parent) parent = document.createElement('div');
    if (parent.render) return parent;

    var $ = parent.querySelector.bind(parent);
    var turtle;
    var worker;
    var source;
    var renderDelayTimeout;
    var workerTimeout;
    var workerURL = baseURL + 'worker.js';
    var code = $(".code");
    var canvasImg = $(".canvas");
    var canvas = document.createElement('canvas');
    var error = $(".error");
    var script = $("script");

    function queueRendering() {
      clearTimeout(renderDelayTimeout);
      renderDelayTimeout = setTimeout(render, RENDER_DELAY_MS);
    }

    function killWorker() {
      if (!worker) return;
      clearTimeout(workerTimeout);
      worker.terminate();
      worker = null;
    }

    function drawCmds(cmds) {
      canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
      cmds.forEach(function(cmd) {
        if (cmd.msg == 'turtle-propset')
          Lab.Validation.setProperty(turtle, cmd.property, cmd.value);
        else if (cmd.msg == 'turtle-methodcall')
          Lab.Validation.callMethod(turtle, cmd.method, cmd.args);
      });
    }

    function finishWorker(cmds, err) {
      killWorker();
      if (err) {
        error.classList.add("shown");
        error.textContent = (err.lineno ? "Line " + err.lineno + ": " : '') +
                            err.message;
        // If nothing was displayed, don't draw an empty canvas, b/c we don't
        // want to unnecessarily distract the user if they're in the middle
        // of typing.
        if (!cmds.length) return;
        // Otherwise, show what was drawn before the error as a debugging
        // aid.
      } else {
        // Note that we would just use classList.toggle() with !!err as
        // the second arg, but it appears to be broken in IE10.
        error.classList.remove("shown");
      }
      drawCmds(cmds);
      var event = document.createEvent('CustomEvent');
      event.initCustomEvent('render', true, true, {canvas: canvas});
      var wasDefaultPrevented = !parent.dispatchEvent(event);
      if (!wasDefaultPrevented) canvasImg.src = canvas.toDataURL();
    }

    function render() {
      var cmds = [];

      if (code.value == source) return;
      source = code.value;
      killWorker();
      turtle = new TinyTurtle(canvas);
      worker = new Worker(workerURL);
      worker.onmessage = function(e) {
        if (e.data.msg == 'done')
          finishWorker(cmds, null);
        else
          cmds.push(e.data);
      };
      worker.onerror = finishWorker.bind(null, cmds);
      worker.postMessage({
        source: code.value,
        height: canvas.height,
        width: canvas.width
      });
      workerTimeout = setTimeout(function() {
        finishWorker(cmds, new Error(Lab.Strings.WORKER_TIMEOUT_MSG));
      }, WORKER_TIMEOUT_MS);
    }

    parent.setAttribute('contextmenu', Lab.contextMenu.id);
    parent.setAttribute('data-role', 'lab');
    parent.classList.add('lab');
    if (!canvasImg) {
      canvasImg = document.createElement('img');
      canvasImg.classList.add('canvas');
      canvasImg.setAttribute('width', DEFAULT_CANVAS_SIZE);
      canvasImg.setAttribute('height', DEFAULT_CANVAS_SIZE);
      parent.appendChild(canvasImg);
    }
    if (!code) {
      code = document.createElement('textarea');
      code.classList.add('code');
      code.setAttribute('spellcheck', 'false');
      parent.appendChild(code);
    }
    if (script) code.value = script.textContent.trim();
    if (!error) {
      error = document.createElement('div');
      error.classList.add('error');
      parent.appendChild(error);
    }

    canvas.width = canvasImg.getAttribute('width');
    canvas.height = canvasImg.getAttribute('height');
    code.addEventListener('keyup', queueRendering, false);
    code.addEventListener('change', queueRendering, false);

    parent.render = render;
    parent.code = code;
    parent.canvasImage = canvasImg;

    Lab.creationHooks.forEach(function(hook) { hook(parent); });

    return parent;
  }

  return Lab;
})(TinyTurtle);

Lab.creationHooks = [];

Lab.Strings = {
  EXPORT_TO_HTML: "Export to HTML",
  WORKER_TIMEOUT_MSG: "Your code has taken too long to execute. " +
                      "Perhaps it contains an infinite loop?"
};

Lab.Validation = {
  properties: ['penStyle', 'penWidth'],
  methods: ['penUp', 'penDown', 'forward', 'fd', 'left', 'lt',
            'right', 'rt', 'stamp'],
  isValidType: function(value) {
    return ~['string', 'number'].indexOf(typeof(value));
  },
  setProperty: function(obj, property, val) {
    if (!~this.properties.indexOf(property)) return;
    if (!this.isValidType(val)) return;
    obj[property] = val;
  },
  callMethod: function(obj, method, args) {
    if (!~this.methods.indexOf(method)) return;
    for (var i = 0; i < args.length; i++)
      if (!this.isValidType(args[i])) return;
    obj[method].apply(obj, args);
  }
};

if (typeof(document) != 'undefined') {
  document.addEventListener("DOMContentLoaded", function activateLabs() {
    var i;
    var scriptLabs = document.querySelectorAll('script[data-role="lab"]');
    var labs = document.querySelectorAll('div[data-role="lab"]');

    for (i = 0; i < scriptLabs.length; i++) {
      var scriptLab = scriptLabs[i];
      var lab = document.createElement('div');
      scriptLab.parentNode.replaceChild(lab, scriptLab);
      lab.appendChild(scriptLab);
      Lab(lab);
      lab.code.value = scriptLab.textContent.trim();
      lab.render();
    }
    for (i = 0; i < labs.length; i++)
      Lab(labs[i]).render();
  }, false);

  Lab.contextMenu = (function() {
    var menu = document.getElementById('tiny-turtle-context-menu');

    if (!menu) {
      menu = document.createElement('menu');
      menu.setAttribute('type', 'context');
      menu.id = 'tiny-turtle-context-menu';
      document.body.appendChild(menu);
    }

    // The associated DOM element that a context menu item is activated
    // with doesn't seem to be communicated with the menu item's
    // click event, so we'll keep track of it ourselves here.
    menu.relatedLab = null;

    Lab.creationHooks.push(function(lab) {
      lab.addEventListener("contextmenu", function() {
        menu.relatedLab = this;
      }, false);
    });

    return menu;
  })();

  (function AddExportToHTML() {
    var exportItem = document.createElement('menuitem');

    exportItem.label = Lab.Strings.EXPORT_TO_HTML;
    exportItem.onclick = function() {
      var code = this.parentNode.relatedLab.code.value;
      var url = Lab.baseURL + 'export-to-html.html?code=' +
                encodeURIComponent(code);
      window.open(url);
    };

    Lab.contextMenu.appendChild(exportItem);
  })();
}
