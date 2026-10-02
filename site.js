// style.gotham.rugby — click-to-copy, section highlighting, mobile menu.

(() => {
  // ---- click-to-copy on anything with data-copy ----
  const toast = document.getElementById("toast");
  let toastTimer;
  const showToast = (value) => {
    toast.innerHTML = "";
    toast.append("Copied ", Object.assign(document.createElement("code"), { textContent: value }));
    toast.classList.add("is-on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("is-on"), 1600);
  };
  const copy = async (value) => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // clipboard API needs a secure context; fall back for file:// and old browsers
      const ta = Object.assign(document.createElement("textarea"), { value });
      ta.style.cssText = "position:fixed;opacity:0";
      document.body.append(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    showToast(value);
  };
  document.addEventListener("click", (e) => {
    const el = e.target.closest("[data-copy]");
    if (el) copy(el.dataset.copy);
  });

  // ---- mobile menu ----
  const sidebar = document.getElementById("sidebar");
  const menuBtn = document.getElementById("menu-btn");
  const setOpen = (open) => {
    sidebar.classList.toggle("is-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
  };
  menuBtn.addEventListener("click", () => setOpen(!sidebar.classList.contains("is-open")));
  sidebar.addEventListener("click", (e) => {
    if (e.target.closest(".nav a")) setOpen(false);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });

  // ---- highlight the section being read ----
  const links = new Map(
    [...document.querySelectorAll(".nav a")].map((a) => [a.getAttribute("href").slice(1), a])
  );
  const setActive = (id) => {
    links.forEach((a, key) => {
      const on = key === id;
      a.classList.toggle("is-active", on);
      if (on) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
  };
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: "-15% 0px -75% 0px" }
  );
  links.forEach((_, id) => {
    const sec = document.getElementById(id);
    if (sec) observer.observe(sec);
  });
})();
