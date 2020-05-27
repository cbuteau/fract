(function() {
  require(['key/Renderer', 'key/Layout'], function(Renderer, Layout) {
    Renderer.queue(new Context());
  });
  document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
  });
})();
