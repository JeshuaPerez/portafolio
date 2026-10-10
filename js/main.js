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
  var revealObserver = null;
  var pendingReveals = [];
  var lastSweep = 0;

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

    $("brandName").textContent = cfg.profile.brand || cfg.profile.name;
    $("heroName").textContent = cfg.profile.name;
    $("footerName").textContent = cfg.profile.name;
    $("nowLocation").textContent = pick(cfg.profile.location);
    $("personalText").textContent = pick(cfg.personal);

    $("aboutPhoto").src = cfg.profile.photo;
    $("aboutPhoto").alt = cfg.profile.name;
    $("heroPhoto").src = cfg.profile.photoHero || cfg.profile.photo;
    $("heroPhoto").alt = cfg.profile.name;
    $("heroCardName").textContent = cfg.profile.name;
    $("heroCardRole").textContent = pick(cfg.profile.role) + " · " + pick(cfg.profile.location);

    $("heroCv").href = cfg.profile.cv;
    $("heroGithub").href = cfg.profile.github;
    $("heroLinkedin").href = cfg.profile.linkedin;
    $("allRepos").href = cfg.profile.github;
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

  // Cada bloque se dibuja por separado: si a config.js le falta una clave,
  // solo se pierde esa sección y el resto de la página sigue funcionando.
  function renderAll() {
    [
      ["heroFacts", renderHeroFacts],
      ["projects", renderProjects],
      ["bio", renderBio],
      ["stats", renderStats],
      ["differentiators", renderDifferentiators],
      ["skills", renderSkills],
      ["environment", renderEnvironment],
      ["services", renderServices],
      ["lifestyle", renderLifestyle],
      ["storyDay", renderRoutine]
    ].forEach(function (block) {
      try {
        block[1]();
      } catch (e) {
        if (window.console) console.warn("No se pudo dibujar '" + block[0] + "':", e);
      }
    });
    observeReveals();
  }

  function renderHeroFacts() {
    var box = $("heroFacts");
    box.innerHTML = "";
    pick(cfg.heroFacts).forEach(function (fact) {
      box.appendChild(el("li", null, fact));
    });
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

  function renderDifferentiators() {
    var box = $("diffGrid");
    box.innerHTML = "";
    pick(cfg.differentiators).forEach(function (item, i) {
      var card = el("article", "diff reveal");
      card.style.setProperty("--d", (i * 70) + "ms");
      card.appendChild(el("span", "diff-index", "0" + (i + 1)));
      card.appendChild(el("h4", "diff-title", item.title));
      card.appendChild(el("p", null, item.text));
      box.appendChild(card);
    });
  }

  // ---------- Proyectos ----------

  function projectCover(project) {
    var figure = el("figure", "project-cover");

    if (project.cover) {
      var img = document.createElement("img");
      img.src = project.cover;
      img.alt = project.title + " — " + t("projects.coverAlt");
      img.loading = "lazy";
      figure.appendChild(img);
      return figure;
    }

    // Sin captura: portada generada con el nombre y el stack principal.
    figure.className = "project-cover is-generated";
    var inner = el("div", "cover-inner");
    inner.appendChild(el("span", "cover-prompt", "~/" + project.slug));
    inner.appendChild(el("strong", "cover-title", project.title));
    inner.appendChild(el("span", "cover-stack", project.stack.slice(0, 3).join(" · ")));
    figure.appendChild(inner);
    return figure;
  }

  function renderProjects() {
    var grid = $("projectGrid");
    grid.innerHTML = "";
    cfg.projects.forEach(function (project, i) {
      var card = el("article", "card project reveal");
      card.style.setProperty("--d", (i * 90) + "ms");

      card.appendChild(projectCover(project));

      var body = el("div", "project-body");
      var head = el("div", "project-head");
      head.appendChild(el("span", "project-kind", pick(project.kind)));
      head.appendChild(el("span", "project-index", "0" + (i + 1)));
      body.appendChild(head);

      body.appendChild(el("h3", null, project.title));
      body.appendChild(el("p", "project-desc", pick(project.description)));

      if (project.highlight) {
        body.appendChild(el("p", "project-highlight", pick(project.highlight)));
      }

      var tags = el("ul", "tags");
      project.stack.forEach(function (tech) {
        tags.appendChild(el("li", "tag", tech));
      });
      body.appendChild(tags);

      var links = el("div", "project-links");
      if (project.demo) links.appendChild(makeLink(project.demo, t("projects.demo")));
      if (project.repo) links.appendChild(makeLink(project.repo, t("projects.code")));
      body.appendChild(links);

      card.appendChild(body);
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

  // ---------- Habilidades, entorno y servicios ----------

  function renderSkills() {
    var grid = $("skillGrid");
    grid.innerHTML = "";
    cfg.skills.groups.forEach(function (group, i) {
      var card = el("article", "card skill reveal" + (group.main ? " is-main" : ""));
      card.style.setProperty("--d", (i * 80) + "ms");

      card.appendChild(el("h3", null, pick(group.title)));
      if (group.note) card.appendChild(el("p", "skill-note", pick(group.note)));

      var list = el("ul", "tags skill-tags");
      group.items.forEach(function (item) {
        list.appendChild(el("li", "tag" + (group.main ? " is-strong" : ""), item));
      });
      card.appendChild(list);

      grid.appendChild(card);
    });

    var practices = $("practiceList");
    practices.innerHTML = "";
    pick(cfg.skills.practices).forEach(function (item, i) {
      var li = el("li", "practice reveal", item);
      li.style.setProperty("--d", (i * 50) + "ms");
      practices.appendChild(li);
    });
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
      card.style.setProperty("--d", (i * 60) + "ms");
      card.appendChild(el("span", "kicker", pick(tool.category)));
      card.appendChild(el("h3", null, tool.name));
      card.appendChild(el("p", null, pick(tool.note)));
      grid.appendChild(card);
    });
  }

  function renderServices() {
    var grid = $("serviceGrid");
    grid.innerHTML = "";
    cfg.services.forEach(function (service, i) {
      var card = el("article", "card service reveal");
      card.style.setProperty("--d", (i * 90) + "ms");

      card.appendChild(el("h3", null, pick(service.title)));

      if (service.pain) {
        var pain = el("div", "service-pain");
        pain.appendChild(el("span", "pain-label", t("services.pain")));
        pain.appendChild(el("p", null, pick(service.pain)));
        card.appendChild(pain);
      }

      card.appendChild(el("span", "service-label", t("services.solution")));
      card.appendChild(el("p", "service-desc", pick(service.desc)));

      var list = el("ul", "service-list");
      pick(service.items).forEach(function (item) {
        list.appendChild(el("li", null, item));
      });
      card.appendChild(list);

      grid.appendChild(card);
    });
  }

  // ---------- Fuera del código ----------

  function renderLifestyle() {
    var box = $("lifestyle");
    box.innerHTML = "";
    cfg.lifestyle.forEach(function (item, i) {
      var fig = el("figure", "lifestyle-item reveal");
      fig.style.setProperty("--d", (i * 90) + "ms");

      var img = document.createElement("img");
      img.src = item.photo;
      img.alt = pick(item.caption);
      img.loading = "lazy";
      fig.appendChild(img);
      fig.appendChild(el("figcaption", "lifestyle-caption", pick(item.caption)));

      box.appendChild(fig);
    });
  }

  function renderRoutine() {
    var list = $("routine");
    list.innerHTML = "";
    cfg.storyDay.forEach(function (item, i) {
      var li = el("li", "routine-item reveal");
      li.style.setProperty("--d", (i * 60) + "ms");
      li.dataset.index = String(i);

      li.appendChild(el("time", "routine-time", item.time));
      li.appendChild(el("h4", "routine-title", pick(item.title)));
      li.appendChild(el("p", "routine-text", pick(item.text)));

      list.appendChild(li);
    });
    markRoutineProgress();
  }

  // Marca el bloque de la rutina según la hora real en Guatemala.
  function markRoutineProgress() {
    var items = document.querySelectorAll(".routine-item");
    if (!items.length) return;

    var minutesNow = localMinutes();
    var first = toMinutes(cfg.storyDay[0].time);
    var last = toMinutes(cfg.storyDay[cfg.storyDay.length - 1].time);
    var activeIndex = -1;

    cfg.storyDay.forEach(function (item, i) {
      if (minutesNow >= toMinutes(item.time)) activeIndex = i;
    });

    items.forEach(function (node, i) {
      node.classList.toggle("is-active", i === activeIndex);
      node.classList.toggle("is-past", activeIndex > -1 && i < activeIndex);
    });

    var span = last - first;
    var ratio = span > 0 ? (minutesNow - first) / span : 0;
    ratio = Math.max(0, Math.min(1, ratio));
    $("dayProgress").style.width = (ratio * 100) + "%";
  }

  function toMinutes(hhmm) {
    var parts = String(hhmm).split(":");
    return (Number(parts[0]) || 0) * 60 + (Number(parts[1]) || 0);
  }

  function localMinutes() {
    var parts = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: cfg.profile.timezone
    }).format(new Date());
    return toMinutes(parts);
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

  function showNode(node) {
    if (node.classList.contains("counter")) animateCounter(node);
    node.classList.add("is-visible");
    var at = pendingReveals.indexOf(node);
    if (at > -1) pendingReveals.splice(at, 1);
  }

  function observeReveals() {
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          showNode(entry.target);
          revealObserver.unobserve(entry.target);
        });
      }, { threshold: 0.15 });
    }

    document.querySelectorAll(".reveal, .counter").forEach(function (node) {
      if (node.dataset.watching) return;
      node.dataset.watching = "1";
      if (reduceMotion) {
        showNode(node);
        return;
      }
      pendingReveals.push(node);
      revealObserver.observe(node);
    });
  }

  // Red de seguridad: un scroll muy rápido o un salto por ancla puede dejar
  // elementos sin revelar, porque el observador no alcanza a verlos pasar.
  function sweepReveals() {
    if (!pendingReveals.length) return;
    // El 0.85 deja que el observador siga siendo quien dispara primero
    // en un scroll normal; esto solo atrapa lo que se le escapó.
    var limit = window.innerHeight * 0.85;
    pendingReveals.slice().forEach(function (node) {
      var box = node.getBoundingClientRect();
      if (box.top < limit && box.bottom > 0) {
        showNode(node);
        revealObserver.unobserve(node);
      }
    });
  }

  function startTypewriter() {
    var target = $("typewriter");
    var words = pick(cfg.profile.roles);
    clearTimeout(typeTimer);

    if (reduceMotion) {
      target.textContent = words[0];
      return;
    }

    var wordIndex = 0;
    var charCount = 0;
    var deleting = false;

    function tick() {
      var word = words[wordIndex];
      if (!deleting) {
        charCount++;
        target.textContent = word.slice(0, charCount);
        if (charCount === word.length) {
          deleting = true;
          typeTimer = setTimeout(tick, 1600);
          return;
        }
        typeTimer = setTimeout(tick, 90);
      } else {
        charCount--;
        target.textContent = word.slice(0, charCount);
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

  // ---------- Reloj ----------

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
    markRoutineProgress();
  }

  // ---------- Scroll, cursor y menú ----------

  function onScroll() {
    $("siteHeader").classList.toggle("is-scrolled", window.scrollY > 10);

    // Acelerador por tiempo (no requestAnimationFrame: se detiene si la
    // pestaña está en segundo plano y dejaría elementos sin revelar).
    var now = Date.now();
    if (now - lastSweep < 120) return;
    lastSweep = now;
    sweepReveals();
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

    function close() {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }

    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") close();
    });

    // Cerrar el menú al tocar fuera o con Escape (importante en celular).
    document.addEventListener("click", function (e) {
      if (!nav.classList.contains("open")) return;
      if (nav.contains(e.target) || toggle.contains(e.target)) return;
      close();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
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
    bindCursorGlow();

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  init();
})();
