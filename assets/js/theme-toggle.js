(function() {
  const key = "site-theme";
  const btn = document.getElementById("theme-toggle");
  const apply = mode => {
    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(mode + "-mode");
    localStorage.setItem(key, mode);
    btn.textContent = mode === "dark" ? "☀️" : "🌙";
  };
  const saved = localStorage.getItem(key);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  let mode = saved || (prefersDark ? "dark" : "light");
  document.addEventListener("DOMContentLoaded", () => {
    apply(mode);
    btn.addEventListener("click", () => {
      mode = mode === "dark" ? "light" : "dark";
      apply(mode);
    });
  });
})();