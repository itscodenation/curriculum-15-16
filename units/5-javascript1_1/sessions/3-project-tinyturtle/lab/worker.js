var evaluate = function(code) { eval(code); };

// The above code should always be the very first line of this file, as
// exceptions thrown from the code evaluated in it will be relative to
// the line the eval statement is on (in some browsers, at least).

importScripts('../tiny-turtle.js', 'lab.js');

function interceptProperties(obj) {
  Lab.Validation.properties.forEach(function(propName) {
    var value = obj[propName];
    Object.defineProperty(obj, propName, {
      get: function() { return value; },
      set: function(newValue) {
        value = newValue;
        postMessage({
          msg: 'turtle-propset',
          property: propName,
          value: value
        });
        return value;
      }
    });
  });
}

function interceptMethods(obj) {
  Lab.Validation.methods.forEach(function(methodName) {
    var method = obj[methodName];
    obj[methodName] = function() {
      var retval = method.apply(this, arguments);
      postMessage({
        msg: 'turtle-methodcall',
        method: methodName,
        args: [].slice.call(arguments)
      });
      return retval;
    };
  });
}

onmessage = function(e) {
  var noop = function() {} 
  var fakeCanvas = {
    width: e.data.width,
    height: e.data.height,
    getContext: function() { return this; },
    beginPath: noop,
    moveTo: noop,
    lineTo: noop,
    stroke: noop,
    save: noop,
    restore: noop,
    fill: noop,
    translate: noop,
    rotate: noop,
    closePath: noop
  };
  TinyTurtle.call(self, fakeCanvas);
  interceptMethods(self);
  interceptProperties(self);
  evaluate(e.data.source);
  postMessage({msg: 'done'});
};
