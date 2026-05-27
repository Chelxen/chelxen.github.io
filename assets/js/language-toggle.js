(function () {
  var supportedLanguages = { en: true, zh: true };
  var storageKey = "site-language";

  function readStoredLanguage() {
    try {
      return window.localStorage.getItem(storageKey);
    } catch (error) {
      return null;
    }
  }

  function saveLanguage(language) {
    try {
      window.localStorage.setItem(storageKey, language);
    } catch (error) {
      // Ignore storage failures; the visible page should still switch.
    }
  }

  function readUrlLanguage() {
    var match = window.location.search.match(/[?&]lang=(en|zh)(?:&|$)/);
    return match ? match[1] : null;
  }

  function getInitialLanguage() {
    var language = readUrlLanguage() || readStoredLanguage() || "en";
    return supportedLanguages[language] ? language : "en";
  }

  function updateTranslatedText(language) {
    var translatedElements = document.querySelectorAll("[data-i18n-en][data-i18n-zh]");
    for (var i = 0; i < translatedElements.length; i += 1) {
      var element = translatedElements[i];
      var value = element.getAttribute("data-i18n-" + language);
      if (value) {
        element.textContent = value;
      }
    }
  }

  function updateContentVisibility(language) {
    var blocks = document.querySelectorAll(".lang-content[data-lang]");
    for (var i = 0; i < blocks.length; i += 1) {
      var block = blocks[i];
      var isActive = block.getAttribute("data-lang") === language;
      block.hidden = !isActive;
    }
  }

  function updateSwitchState(language) {
    var switches = document.querySelectorAll("[data-lang-switch]");
    for (var i = 0; i < switches.length; i += 1) {
      var option = switches[i];
      var isActive = option.getAttribute("data-lang-switch") === language;
      option.classList.toggle("is-active", isActive);
      option.setAttribute("aria-pressed", isActive ? "true" : "false");
    }
  }

  function updateUrlLanguage(language) {
    if (!window.history || !window.history.replaceState) {
      return;
    }

    try {
      var url = new URL(window.location.href);
      url.searchParams.set("lang", language);
      window.history.replaceState({}, "", url.pathname + url.search + url.hash);
    } catch (error) {
      // The switch still works when URL rewriting is unavailable.
    }
  }

  function applyLanguage(language, persist, updateUrl) {
    if (!supportedLanguages[language]) {
      language = "en";
    }

    var root = document.documentElement;
    root.lang = language === "zh" ? "zh-CN" : "en";
    root.classList.toggle("lang-en", language === "en");
    root.classList.toggle("lang-zh", language === "zh");

    updateContentVisibility(language);
    updateTranslatedText(language);
    updateSwitchState(language);

    if (persist) {
      saveLanguage(language);
    }

    if (updateUrl) {
      updateUrlLanguage(language);
    }

    window.setTimeout(function () {
      window.dispatchEvent(new Event("resize"));
    }, 0);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var initialLanguage = getInitialLanguage();
    var switches = document.querySelectorAll("[data-lang-switch]");

    for (var i = 0; i < switches.length; i += 1) {
      switches[i].addEventListener("click", function (event) {
        event.preventDefault();
        applyLanguage(this.getAttribute("data-lang-switch"), true, true);
      });
    }

    applyLanguage(initialLanguage, Boolean(readUrlLanguage()), false);
  });
}());
