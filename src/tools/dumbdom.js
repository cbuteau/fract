define('tools/DumbDom', [], function() {
  var exports = {
    qs: function(selector) {
      return document.querySelector(selector);
    },
    qsa: function(selector) {
      return document.querySelectorAll(selector);
    },
    ce: function(type, options) {
      var dom = document.createElement(type);
      //applyOptions
      return dom;
    }

  };

  return exports;
});
