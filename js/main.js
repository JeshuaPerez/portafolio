(function () {
  "use strict";

  var cfg = window.PORTFOLIO_CONFIG;
  var UI = window.UI_STRINGS;
  var root = document.documentElement;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia("(pointer: fine)").matches;

  var lang = detectLang();
  var typeTimer = null;
  var clockTimer = null;
  var storyObserver = null;
  var revealObserver = null;
  var termHistory = [];
  var termIndex = 0;

  // ---------- Utilidades ----------

  function $(id) {
    return document.getElementById(id);
  }

  function t(key) {
    return (UI[lang] && UI[lang][key]) || UI.es[key] || key;
  }

  // Devuelve el valor en el idioma actual si el valor es { es, en }.
  function pick(value) {
    if (value && typeof value === "object" && !Array.isArray(value)) {
      return value[lang] || value.es;
    }
    return value;
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null) node.textContent = text;
    return node;
  }

  function storageGet(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }

  function storageSet(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* almacenamiento bloqueado */ }
  }

  function detectLang() {
    var param = new URLSearchParams(window.location.search).get("lang");
    if (param === "es" || param === "en") return param;
    var saved = storageGet("lang");
    if (saved === "es" || saved === "en") return saved;
    return (navigator.language || "es").indexOf("en") === 0 ? "en" : "es";
  }

  function allTech() {
    var seen = {};
    var list = [];
    cfg.projects.forEach(function (project) {
      project.stack.forEach(function (tech) {
        if (!seen[tech]) {
          seen[tech] = true;
          list.push(tech);
        }
      });
    });
    return list;
  }

  // ---------- Idioma y tema ----------

  function applyStaticText() {
    root.lang = lang;
    document.title = pick(cfg.profile.title);

    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      node.textContent = t(node.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (node) {
      node.setAttribute("placeholder", t(node.getAttribute("data-i18n-placeholder")));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (node) {
      node.setAttribute("aria-label", t(node.getAttribute("data-i18n-aria")));
    });

    $("brandName").textContent = cfg.profile.name;
    $("heroName").textContent = cfg.profile.name;
    $("footerName").textContent = cfg.profile.name;
    $("nowLocation").textContent = pick(cfg.profile.location);
    $("aboutPhoto").src = cfg.profile.photo;
    $("aboutPhoto").alt = cfg.profile.name;
    $("linkCv").href = cfg.profile.cv;
    $("linkGithub").href = cfg.profile.github;
    $("linkLinkedin").href = cfg.profile.linkedin;
    $("linkMail").href = "mailto:" + cfg.profile.email;
    $("linkMail").textContent = cfg.profile.email;

    var langBtn = $("langToggle");
    langBtn.textContent = lang === "es" ? "EN" : "ES";
    langBtn.setAttribute("aria-label", lang === "es" ? "Switch to English" : "Cambiar a español");

    $("year").textContent = String(new Date().getFullYear());
    updateThemeButton();
  }

  function currentTheme() {
    return root.getAttribute("data-theme") === "light" ? "light" : "dark";
  }

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    storageSet("theme", theme);
    updateThemeButton();
  }

  function toggleTheme() {
    setTheme(currentTheme() === "dark" ? "light" : "dark");
  }

  function updateThemeButton() {
    var btn = $("themeToggle");
    var isDark = currentTheme() === "dark";
    btn.textContent = isDark ? "☀" : "☾";
    btn.setAttribute("aria-label", t(isDark ? "theme.toLight" : "theme.toDark"));
  }

  function setLang(next) {
    lang = next;
    storageSet("lang", next);
    applyStaticText();
    renderAll();
    startTypewriter();
    updateClock();
  }

  // ---------- Renderizado ----------

  function renderAll() {
    renderBio();
    renderStats();
    renderStory();
    renderEnvironment();
    renderProjects();
    renderServices();
    observeReveals();
  }

  function renderBio() {
    var box = $("bio");
    box.innerHTML = "";
    pick(cfg.bio).forEach(function (text) {
      box.appendChild(el("p", "bio-text", text));
    });
  }

  function renderStats() {
    var box = $("stats");
    box.innerHTML = "";
    cfg.stats.forEach(function (stat) {
      var item = el("div", "stat");
      var value = el("span", "stat-value counter", "0");
      value.setAttribute("data-target", String(stat.value));
      item.appendChild(value);
      item.appendChild(el("span", "stat-label", pick(stat.label)));
      box.appendChild(item);
    });
  }

  function renderStory() {
    var list = $("timeline");
    list.innerHTML = "";
    cfg.storyDay.forEach(function (item, i) {
      var li = el("li", "story-item reveal");
      li.style.setProperty("--d", (i * 90) + "ms");
      li.dataset.index = String(i);

      li.appendChild(el("time", "story-time", item.time));

      var body = el("div", "story-body");
      body.appendChild(el("h3", "story-title", pick(item.title)));
      body.appendChild(el("p", "story-text", pick(item.text)));
      li.appendChild(body);

      list.appendChild(li);
    });
    watchStory();
  }

  function renderEnvironment() {
    var info = $("neofetch");
    info.innerHTML = "";
    cfg.environment.info.forEach(function (row) {
      var line = el("div", "nf-line");
      line.appendChild(el("span", "nf-key", row.key));
      line.appendChild(el("span", "nf-val", pick(row.value)));
      info.appendChild(line);
    });

    var grid = $("toolGrid");
    grid.innerHTML = "";
    cfg.environment.tools.forEach(function (tool, i) {
      var card = el("article", "card tool reveal");
      card.style.setProperty("--d", (i * 80) + "ms");
      card.appendChild(el("span", "kicker", pick(tool.category)));
      card.appendChild(el("h3", null, tool.name));
      card.appendChild(el("p", null, pick(tool.note)));
      grid.appendChild(card);
    });
  }

  function renderProjects() {
    var grid = $("projectGrid");
    grid.innerHTML = "";
    cfg.projects.forEach(function (project, i) {
      var card = el("article", "card project reveal");
      card.style.setProperty("--d", (i * 90) + "ms");

      card.appendChild(el("span", "project-index", "0" + (i + 1)));
      card.appendChild(el("h3", null, project.title));
      card.appendChild(el("p", null, pick(project.description)));

      var tags = el("ul", "tags");
      project.stack.forEach(function (tech) {
        tags.appendChild(el("li", "tag", tech));
      });
      card.appendChild(tags);

      var links = el("div", "project-links");
      if (project.demo) links.appendChild(makeLink(project.demo, t("projects.demo")));
      if (project.repo) links.appendChild(makeLink(project.repo, t("projects.code")));
      card.appendChild(links);

      grid.appendChild(card);
    });
  }

  function makeLink(href, label) {
    var a = el("a", "text-link", label);
    a.href = href;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    return a;
  }

  function renderServices() {
    var grid = $("serviceGrid");
    grid.innerHTML = "";
    cfg.services.forEach(function (service, i) {
      var card = el("article", "card service reveal");
      card.style.setProperty("--d", (i * 90) + "ms");

      card.appendChild(el("h3", null, pick(service.title)));
      card.appendChild(el("p", null, pick(service.desc)));

      var list = el("ul", "service-list");
      pick(service.items).forEach(function (item) {
        list.appendChild(el("li", null, item));
      });
      card.appendChild(list);

      grid.appendChild(card);
    });
  }

  // ---------- Animaciones ----------

  function animateCounter(node) {
    if (node.dataset.counted) return;
    node.dataset.counted = "1";
    var target = Number(node.getAttribute("data-target")) || 0;
    if (reduceMotion) {
      node.textContent = String(target);
      return;
    }
    var start = null;
    var duration = 1200;
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      node.textContent = String(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function observeReveals() {
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var node = entry.target;
          if (node.classList.contains("counter")) animateCounter(node);
          node.classList.add("is-visible");
          revealObserver.unobserve(node);
        });
      }, { threshold: 0.15 });
    }

    document.querySelectorAll(".reveal, .counter").forEach(function (node) {
      if (node.dataset.watching) return;
      node.dataset.watching = "1";
      if (reduceMotion) {
        node.classList.add("is-visible");
        if (node.classList.contains("counter")) animateCounter(node);
        return;
      }
      revealObserver.observe(node);
    });
  }

  function startTypewriter() {
    var el2 = $("typewriter");
    var words = pick(cfg.profile.roles);
    clearTimeout(typeTimer);

    if (reduceMotion) {
      el2.textContent = words[0];
      return;
    }

    var wordIndex = 0;
    var charCount = 0;
    var deleting = false;

    function tick() {
      var word = words[wordIndex];
      if (!deleting) {
        charCount++;
        el2.textContent = word.slice(0, charCount);
        if (charCount === word.length) {
          deleting = true;
          typeTimer = setTimeout(tick, 1600);
          return;
        }
        typeTimer = setTimeout(tick, 90);
      } else {
        charCount--;
        el2.textContent = word.slice(0, charCount);
        if (charCount === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          typeTimer = setTimeout(tick, 400);
          return;
        }
        typeTimer = setTimeout(tick, 45);
      }
    }
    tick();
  }

  // ---------- Story day: línea de tiempo activa y reloj ----------

  function watchStory() {
    if (storyObserver) storyObserver.disconnect();

    var items = document.querySelectorAll(".story-item");
    var total = items.length;
    $("dayProgress").style.width = "0%";
    $("storyNow").textContent = total ? pick(cfg.storyDay[0].title) : "";

    storyObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        items.forEach(function (node) { node.classList.remove("is-active"); });

        var node = entry.target;
        var idx = Number(node.dataset.index);
        node.classList.add("is-active");

        var ratio = total > 1 ? idx / (total - 1) : 1;
        $("dayProgress").style.width = (ratio * 100) + "%";
        $("storyNow").textContent = pick(cfg.storyDay[idx].title);
      });
    }, { rootMargin: "-45% 0px -45% 0px" });

    items.forEach(function (node) { storyObserver.observe(node); });
  }

  function formatTime(date) {
    return new Intl.DateTimeFormat(lang === "en" ? "en-US" : "es-GT", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: lang === "en",
      timeZone: cfg.profile.timezone
    }).format(date);
  }

  function updateClock() {
    var now = new Date();
    $("nowTime").textContent = formatTime(now);
    $("footerTime").textContent = formatTime(now);
  }

  // ---------- Scroll, cursor y menú ----------

  function onScroll() {
    $("siteHeader").classList.toggle("is-scrolled", window.scrollY > 10);
  }

  function bindCursorGlow() {
    if (!finePointer || reduceMotion) return;
    var glow = $("cursorGlow");
    window.addEventListener("pointermove", function (e) {
      glow.style.transform = "translate(" + e.clientX + "px, " + e.clientY + "px)";
    }, { passive: true });
  }

  function bindMenu() {
    var toggle = $("menuToggle");
    var nav = $("nav");
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  function bindCopyEmail() {
    var btn = $("copyEmail");
    var fallback = function () {
      window.location.href = "mailto:" + cfg.profile.email;
    };
    btn.addEventListener("click", function () {
      if (!(navigator.clipboard && navigator.clipboard.writeText)) {
        fallback();
        return;
      }
      navigator.clipboard.writeText(cfg.profile.email).then(function () {
        btn.textContent = t("contact.copied");
        setTimeout(function () { btn.textContent = t("contact.copy"); }, 2000);
      }, fallback);
    });
  }

  // ---------- Terminal interactiva ----------

  var termOut = $("termOutput");
  var termInput = $("termInput");

  function termPrint(text, cls) {
    var line = el("div", "term-line" + (cls ? " " + cls : ""), text);
    termOut.appendChild(line);
    termOut.scrollTop = termOut.scrollHeight;
  }

  function termCat(arg) {
    if (!arg) {
      termPrint(t("term.catUsage"));
      return;
    }
    if (arg === "stack.txt") {
      termPrint(allTech().join("\n"));
      return;
    }
    var project = cfg.projects.filter(function (p) { return p.slug === arg; })[0];
    if (!project) {
      termPrint(t("term.notFound") + " " + arg);
      return;
    }
    termPrint(
      project.title + "\n" +
      pick(project.description) + "\n" +
      t("term.stack") + ": " + project.stack.join(", ")
    );
  }

  function termRun(raw) {
    var input = raw.trim();
    termPrint("$ " + raw, "term-cmd");
    if (!input) return;

    termHistory.push(input);
    termIndex = termHistory.length;

    var parts = input.split(/\s+/);
    var cmd = parts[0].toLowerCase();
    var arg = parts.slice(1).join(" ");

    switch (cmd) {
      case "help":
        termPrint(t("term.help"));
        break;
      case "whoami":
        termPrint(cfg.profile.name + " — " + pick(cfg.profile.role));
        break;
      case "ls":
        termPrint(cfg.projects.map(function (p) { return p.slug; }).concat(["stack.txt"]).join("  "));
        break;
      case "cat":
        termCat(arg);
        break;
      case "contact":
        termPrint(cfg.profile.email + "\n" + cfg.profile.github);
        break;
      case "date":
        termPrint(formatTime(new Date()));
        break;
      case "theme":
        toggleTheme();
        termPrint(t("term.theme"));
        break;
      case "lang":
        setLang(lang === "es" ? "en" : "es");
        termPrint(t("term.lang"));
        break;
      case "clear":
        termOut.innerHTML = "";
        break;
      case "sudo":
        termPrint(t("term.sudo"));
        break;
      default:
        termPrint(t("term.unknown") + " " + cmd);
    }
  }

  function bindTerminal() {
    $("termForm").addEventListener("submit", function (e) {
      e.preventDefault();
      var value = termInput.value;
      termInput.value = "";
      termRun(value);
    });

    termInput.addEventListener("keydown", function (e) {
      if (e.key === "ArrowUp") {
        if (termIndex > 0) {
          termIndex--;
          termInput.value = termHistory[termIndex];
        }
        e.preventDefault();
      } else if (e.key === "ArrowDown") {
        if (termIndex < termHistory.length - 1) {
          termIndex++;
          termInput.value = termHistory[termIndex];
        } else {
          termIndex = termHistory.length;
          termInput.value = "";
        }
        e.preventDefault();
      }
    });
  }

  // ---------- Arranque ----------

  function init() {
    applyStaticText();
    renderAll();
    startTypewriter();
    updateClock();
    clockTimer = setInterval(updateClock, 30000);

    $("langToggle").addEventListener("click", function () {
      setLang(lang === "es" ? "en" : "es");
    });
    $("themeToggle").addEventListener("click", toggleTheme);

    bindMenu();
    bindCopyEmail();
    bindTerminal();
    bindCursorGlow();

    termPrint(t("term.intro"), "term-muted");

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  init();
})();
