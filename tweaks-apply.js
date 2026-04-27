/* tweaks-apply.js — reads saved tweaks from localStorage and applies CSS vars.
   Include in <head> on every page so colors/styles stay consistent site-wide. */
(function () {
  try {
    var stored = localStorage.getItem('uno-tweaks');
    if (!stored) return;
    var tweaks = JSON.parse(stored);
    var root = document.documentElement;
    if (tweaks.accentColor) root.style.setProperty('--red', tweaks.accentColor);
    if (tweaks.bgColor)     root.style.setProperty('--bg',  tweaks.bgColor);
  } catch (e) { /* silent */ }
})();
