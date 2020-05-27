define('key/Renderer', [], function() {

  function Renderer() {
  }

  Renderer.prototype = {
    start: function() {
      this.tocken = requestAnimationFrame(this._render.bind(this));
    },
    pause: function() {
      cancelAnimationFrame(this.tocken);
    },
    _render: function(ts) {

    }
  };

  var instance;
  if (!instance) {
    instance = new Renderer();
  }

  return instance;
});
