/**
 * pixel-trail.js — canvas pixel trail with original GooeyFilter
 * Call: initPixelTrail(options)
 */
(function () {
  function initPixelTrail(opts) {
    var o = Object.assign({
      pixelSize:      8,
      fadeDuration:   1200,
      fadeInDuration: 60,
      color:          '#0f0f0f',
      opacity:        0.85,
      gooStrength:    10
    }, opts || {});

    var FILTER_ID = 'pixel-trail-goo';

    /* ── Exact original GooeyFilter ── */
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('aria-hidden', 'true');
    svg.style.cssText = 'position:fixed;width:0;height:0;overflow:hidden;pointer-events:none;';
    svg.innerHTML =
      '<defs>' +
        '<filter id="' + FILTER_ID + '">' +
          '<feGaussianBlur in="SourceGraphic" stdDeviation="' + o.gooStrength + '" result="blur"/>' +
          '<feColorMatrix in="blur" type="matrix" ' +
            'values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo"/>' +
          '<feComposite in="SourceGraphic" in2="goo" operator="atop"/>' +
        '</filter>' +
      '</defs>';
    document.body.appendChild(svg);

    /* ── Canvas ── */
    var canvas = document.createElement('canvas');
    canvas.setAttribute('aria-hidden', 'true');
    canvas.style.cssText =
      'position:fixed;top:0;left:0;pointer-events:none;z-index:9998;' +
      'filter:url(#' + FILTER_ID + ');';
    document.body.appendChild(canvas);

    var ctx = canvas.getContext('2d');
    var pixels = new Map();

    function resize() {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function onMouseMove(e) {
      var ps  = o.pixelSize;
      var col = Math.floor(e.clientX / ps);
      var row = Math.floor(e.clientY / ps);
      var key = col + ',' + row;
      var existing = pixels.get(key);
      if (!existing || (Date.now() - existing.start) / o.fadeDuration > 0.35) {
        pixels.set(key, { x: col * ps, y: row * ps, start: Date.now() });
      }
    }

    var raf;
    function loop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      var now = Date.now();
      ctx.fillStyle = o.color;

      pixels.forEach(function (px, key) {
        var elapsed = now - px.start;
        if (elapsed >= o.fadeDuration) { pixels.delete(key); return; }

        var t;
        if (elapsed < o.fadeInDuration) {
          t = elapsed / o.fadeInDuration;
          t = Math.sin(t * Math.PI / 2); /* ease-in */
        } else {
          var tOut = (elapsed - o.fadeInDuration) / (o.fadeDuration - o.fadeInDuration);
          t = 1 - tOut * tOut * (3 - 2 * tOut); /* smoothstep out */
        }

        ctx.globalAlpha = o.opacity * t;
        ctx.fillRect(px.x, px.y, o.pixelSize, o.pixelSize);
      });

      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(loop);
    }

    resize();
    window.addEventListener('resize', resize);
    document.addEventListener('mousemove', onMouseMove);
    raf = requestAnimationFrame(loop);

    return function destroy() {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      document.removeEventListener('mousemove', onMouseMove);
      canvas.remove();
      svg.remove();
    };
  }

  window.initPixelTrail = initPixelTrail;
})();
