(function() {
  // UMD browser wrapper untuk georaster-layer-for-leaflet
  var module = { exports: {} };
  var exports = module.exports;
  var require = function(name) {
    if (name === 'leaflet') return window.L;
    if (name === 'georaster') return window.parseGeoraster ? { default: window.parseGeoraster } : {};
    return {};
  };
  var define = null; // disable AMD
  
/*! For license information please see georaster-layer-for-leaflet.lite.min.js.LICENSE.txt */

  // Export ke global
  if (module.exports && module.exports.default) {
    window.GeoRasterLayer = module.exports.default;
  } else if (module.exports) {
    window.GeoRasterLayer = module.exports;
  }
})();
