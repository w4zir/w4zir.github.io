(function () {
  function initNav() {
    var btn = document.querySelector(".nav-toggle");
    var panel = document.getElementById("nav-panel");
    if (!btn || !panel) return;

    btn.addEventListener("click", function () {
      var open = panel.hasAttribute("hidden");
      if (open) {
        panel.removeAttribute("hidden");
        btn.setAttribute("aria-expanded", "true");
        btn.setAttribute("aria-label", "Close menu");
      } else {
        panel.setAttribute("hidden", "");
        btn.setAttribute("aria-expanded", "false");
        btn.setAttribute("aria-label", "Open menu");
      }
    });

    panel.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        panel.setAttribute("hidden", "");
        btn.setAttribute("aria-expanded", "false");
        btn.setAttribute("aria-label", "Open menu");
      });
    });
  }

  function loadContent() {
    var mount = document.getElementById("site-content");
    if (!mount) return Promise.resolve();

    return fetch("content.html")
      .then(function (response) {
        if (!response.ok) throw new Error("Could not load content.html");
        return response.text();
      })
      .then(function (html) {
        mount.innerHTML = html;
      })
      .catch(function () {
        mount.innerHTML = '<main id="main"><section class="section"><div class="container"><p>Content failed to load.</p></div></section></main>';
      });
  }

  loadContent().finally(initNav);
})();
