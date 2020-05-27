define('key/Layout', [
  'tools/DumbDom'
], function(DumbDom) {



  var rootDiv = DumbDom.qs('.container');

  var fracts = ['Mandelbrot', 'foxybot', 'Plasma'];

  var pulldown = DumbDom.ce('select');
  for (var i = 0; i < fracts.length; i++) {
    var fractid = fracts[i];
    var opt = DumbDom.ce('option');
    opt.textContent = fractid;
    opt.value = fractid;
    pulldown.appendChild(opt);
  }

  rootDiv.appendChild(pulldown);

  return rootDiv;
});
