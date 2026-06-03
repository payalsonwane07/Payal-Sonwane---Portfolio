console.log("Portfolio loaded");

// These values are set in supabase-config.js.
// Replace them there after you copy the Project URL and anon key from Supabase.
// supabaseClient is created in supabase-config.js and used here by script.js.

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

function initTheme() {
  const toggle = document.querySelector(".theme-toggle");
  const root = document.documentElement;
  const stored = localStorage.getItem("portfolio-theme");

  const applyTheme = (theme) => {
    if (theme === "light") {
      root.setAttribute("data-theme", "light");
    } else {
      root.removeAttribute("data-theme");
    }
    localStorage.setItem("portfolio-theme", theme);
    if (toggle) {
      const isLight = theme === "light";
      toggle.setAttribute("aria-pressed", isLight ? "true" : "false");
      toggle.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
    }
  };

  applyTheme(stored === "light" ? "light" : "dark");
  if (toggle) {
    toggle.addEventListener("click", () => {
      applyTheme(root.getAttribute("data-theme") === "light" ? "dark" : "light");
    });
  }
}

function initCursor() {
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");
  if (!dot || !ring || prefersReducedMotion || isTouchDevice) {
    document.body.classList.add("no-custom-cursor");
    return;
  }
  let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });
  const animateRing = () => {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;
    requestAnimationFrame(animateRing);
  };
  animateRing();
  document.querySelectorAll("a, button, input, select, textarea, .project-card, .filter-btn, .theme-toggle").forEach((el) => {
    el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
    el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
  });
  document.addEventListener("mousedown", () => document.body.classList.add("cursor-click"));
  document.addEventListener("mouseup", () => document.body.classList.remove("cursor-click"));
}

function initNav() {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  let backdrop = document.querySelector(".nav-backdrop");
  if (!navToggle || !navLinks) return;
  if (!backdrop) {
    backdrop = document.createElement("div");
    backdrop.className = "nav-backdrop";
    document.body.appendChild(backdrop);
  }
  const closeMenu = () => {
    navLinks.classList.remove("open");
    backdrop.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  };
  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    backdrop.classList.toggle("open", open);
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  navLinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));
  backdrop.addEventListener("click", closeMenu);
}

function initTypewriter() {
  const el = document.querySelector("[data-typewriter]");
  if (!el) return;
  if (prefersReducedMotion) {
    el.textContent = el.getAttribute("data-typewriter") || el.textContent;
    return;
  }
  const text = el.getAttribute("data-typewriter") || "";
  el.textContent = "";
  let i = 0;
  const tick = () => {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i += 1;
      setTimeout(tick, 55);
    }
  };
  setTimeout(tick, 600);
}

function initParallax() {
  const layer = document.querySelector(".hero-parallax");
  if (!layer || prefersReducedMotion) return;
  window.addEventListener("scroll", () => {
    layer.style.transform = `translate3d(0, ${window.scrollY * 0.35}px, 0)`;
  }, { passive: true });
}

function initScrollTop() {
  const btn = document.querySelector(".scroll-top");
  if (!btn) return;
  window.addEventListener("scroll", () => btn.classList.toggle("visible", window.scrollY > 400), { passive: true });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" }));
}

function initCounters() {
  const counters = document.querySelectorAll("[data-count]");
  if (!counters.length) return;
  const animateCounter = (el) => {
    const target = Number(el.getAttribute("data-count"));
    const suffix = el.getAttribute("data-suffix") || "";
    const duration = prefersReducedMotion ? 0 : 1800;
    const start = performance.now();
    const step = (now) => {
      const progress = duration === 0 ? 1 : Math.min((now - start) / duration, 1);
      el.textContent = `${Math.floor(progress * target)}${suffix}`;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = `${target}${suffix}`;
    };
    requestAnimationFrame(step);
  };
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  counters.forEach((c) => observer.observe(c));
}

function initSkillBars() {
  const bars = document.querySelectorAll(".skill-fill");
  if (!bars.length) return;
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const width = entry.target.getAttribute("data-width") || "80";
        entry.target.style.width = `${width}%`;
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  bars.forEach((bar) => observer.observe(bar));
}

function initReveal() {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2, rootMargin: "0px 0px -20% 0px" });
  document.querySelectorAll(".reveal, .reveal-stagger").forEach((el) => observer.observe(el));
}

function initProjectFilter() {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".project-card[data-category]");
  if (!buttons.length || !cards.length) return;
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");
      cards.forEach((card) => {
        const cats = card.getAttribute("data-category").split(" ");
        const show = filter === "all" || cats.includes(filter);
        card.classList.toggle("hidden", !show);
      });
    });
  });
}

/* Supabase contact form: sends data directly to your Supabase table. */
function initContactForm() {
  const contactForm = document.querySelector("#contact-form");
  const formMessage = document.querySelector("#form-message");
  if (!contactForm) return;

  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const subjectInput = document.querySelector("#subject");
  const messageInput = document.querySelector("#message");
  const submitBtn = contactForm.querySelector(".submit-btn");

  const setMessage = (text, type) => {
    if (!formMessage) return;
    formMessage.textContent = text;
    formMessage.className = type ? `form-message ${type}` : "form-message";
  };

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const name = nameInput?.value.trim() || "";
    const email = emailInput?.value.trim() || "";
    const subject = subjectInput?.value.trim() || "";
    const message = messageInput?.value.trim() || "";

    if (typeof window.supabaseClient === "undefined") {
      setMessage("Please add your Supabase URL and anon key in supabase-config.js first.", "error");
      return;
    }
    if (name.length < 2) {
      setMessage("Please enter your full name.", "error");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Please enter a valid email address.", "error");
      return;
    }
    if (subject.length < 3) {
      setMessage("Please enter a subject for your message.", "error");
      return;
    }
    if (message.length < 10) {
      setMessage("Please enter a longer message.", "error");
      return;
    }

    setMessage("", "");
    if (submitBtn) {
      submitBtn.classList.add("loading");
      submitBtn.disabled = true;
    }

    // Debug logging: check that the Supabase client is loaded and the URL is set.
    console.log("Supabase client status:", {
      url: window.SUPABASE_URL,
      clientLoaded: typeof window.supabaseClient !== "undefined",
      clientType: typeof window.supabaseClient,
    });

    try {
      // Save the contact submission into the Supabase table called `form`.
      const { data, error } = await window.supabaseClient.from("form").insert([
        { full_name: name, email, subject, message },
      ]);

      // Log the full Supabase response for debugging.
      console.log({ data, error });

      if (error) {
        console.error("Supabase insert error:", error);

        // If the table does not exist, try an older fallback table name.
        if (error.message && /relation \"form\" does not exist/.test(error.message)) {
          const retry = await window.supabaseClient.from("contacts").insert([
            { name, email, subject, message },
          ]);
          console.log({ retry });
          if (!retry.error) {
            contactForm.style.display = "none";
            setMessage("Thank you! Your message was saved successfully.", "success");
            contactForm.reset();
            return;
          }
          setMessage(`Something went wrong: ${retry.error.message}`, "error");
          return;
        }

        // Show a specific error when RLS or permissions are the issue.
        if (error.message && /permission denied/i.test(error.message)) {
          setMessage("Permission denied. Check your Supabase table RLS policy and anon key.", "error");
          return;
        }

        const errorText = error.message || JSON.stringify(error);
        setMessage(`Something went wrong: ${errorText}`, "error");
      } else {
        // Hide the form and show the green success message.
        contactForm.style.display = "none";
        setMessage("Thank you! Your message was saved successfully.", "success");
        contactForm.reset();
      }
    } catch (err) {
      console.error("Supabase error:", err);
      const errorText = err?.message || String(err);
      setMessage(`Something went wrong: ${errorText}`, "error");
    } finally {
      if (submitBtn) {
        submitBtn.classList.remove("loading");
        submitBtn.disabled = false;
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initCursor();
  initNav();
  initTypewriter();
  initParallax();
  initScrollTop();
  initCounters();
  initSkillBars();
  initReveal();
  initProjectFilter();
  initContactForm();
});
