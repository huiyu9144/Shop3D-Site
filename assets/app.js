// 语言切换：默认英文，可切中文，选择记住在本地
(function () {
  var KEY = "shop3d-site-lang";
  var root = document.documentElement;

  function apply(lang) {
    root.setAttribute("lang", lang);
    var buttons = document.querySelectorAll("[data-lang]");
    for (var i = 0; i < buttons.length; i++) {
      var btn = buttons[i];
      var on = btn.getAttribute("data-lang") === lang;
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    }
  }

  var saved = null;
  try {
    saved = window.localStorage.getItem(KEY);
  } catch (e) {
    saved = null;
  }

  apply(saved === "zh" ? "zh" : "en");

  document.addEventListener("click", function (event) {
    var btn = event.target.closest ? event.target.closest("[data-lang]") : null;
    if (!btn) return;
    var lang = btn.getAttribute("data-lang") === "zh" ? "zh" : "en";
    try {
      window.localStorage.setItem(KEY, lang);
    } catch (e) {}
    apply(lang);
  });
})();
