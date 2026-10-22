
/* =========================================================
   ALEX KAMAU — PORTFOLIO JAVASCRIPT
   Project gallery, filters, search, modal, navigation,
   and asynchronous Formspree contact form.
   ========================================================= */

/* 1. PROJECT DATA
   Screenshots are stored in the ROOT of the GitHub repository.
   Therefore, use /filename.png instead of assets/projects/filename.png.
*/

const projects = [
  {
    id: "adi",
    name: "Alexis Digital Innovations",
    category: "Business",
    status: "Live website",
    kind: "live",
    featured: true,
    description:
      "A digital services website introducing services and helping potential clients get in touch.",
    details:
      "A digital services brand website with information about services, company values, contact options, and a professional online presence.",
    technologies: ["HTML", "CSS", "JavaScript", "EmailJS"],
    art: "brand",
    screenshot: "/alexis-digital-innovations-screenshot.png",
    demo: "https://alexis-digital-innovation.vercel.app/#service",
    repository: "",
    note: "Visit the live website to review its current features."
  },
  {
    id: "sotepay",
    name: "SotePay",
    category: "Business",
    status: "In development",
    kind: "build",
    featured: true,
    description:
      "A chama and group-finance management concept for organizing members and contributions.",
    details:
      "A planned platform for member records, contribution tracking, transaction history, and financial summaries.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    art: "finance",
    screenshot: "/sotepay-screenshot.png",
    note: "Work in progress. Only advertise payment integrations after implementation and testing."
  },
  {
    id: "rentivara",
    name: "Rentivara",
    category: "Business",
    status: "Design / planning",
    kind: "plan",
    featured: true,
    description:
      "A rental management platform concept for organizing properties, tenants, and rent administration.",
    details:
      "The proposed system aims to organize property listings, tenant records, rent schedules, payment status, and management reports.",
    technologies: ["UI/UX", "HTML", "CSS", "JavaScript", "PHP"],
    art: "rent",
    screenshot: "/rentivara-screenshot.png",
    note: "Currently a concept and design direction."
  },
  {
    id: "inventory",
    name: "Inventory Management System",
    category: "Management",
    status: "Design / planning",
    kind: "plan",
    featured: true,
    description:
      "A school or TVET inventory solution planned around stock, assets, purchases, users, and reporting.",
    details:
      "The planned system focuses on stock control, item records, purchases, asset management, user access, and reports.",
    technologies: ["PHP", "MySQL", "CRUD", "Reporting"],
    art: "inventory",
    screenshot: "/inventory-prototype.png",
    note: "Prototype screenshot. The system is still being planned."
  },
  {
    id: "church",
    name: "ACK Diocese Church ERP",
    category: "Management",
    status: "Requirements / planning",
    kind: "plan",
    featured: true,
    description:
      "A multi-parish church management platform planned for the Anglican Church of Kenya, Diocese of Nairobi.",
    details:
      "The proposed system covers membership, finance, ministries, clergy and staff, services and events, inventory, communication, and reports.",
    technologies: ["PHP", "MySQL", "System Design", "Access Control"],
    art: "church",
    screenshot: "/ack-church-erp-prototype.png",
    note: "Prototype screenshot. Requirements, privacy, and permissions need careful planning."
  },
  {
    id: "student",
    name: "Student Portal",
    category: "Management",
    status: "In development",
    kind: "build",
    featured: true,
    description:
      "A portal concept for organizing student information and TVET departments.",
    details:
      "The planning includes structured departments and student records, including department codes and department names.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    art: "student",
    screenshot: "/student-portal-screenshot.png",
    note: "Only claim modules that have been implemented and tested."
  },
  {
    id: "jirani",
    name: "Jirani Mwema SACCO",
    category: "Management",
    status: "Learning project",
    kind: "build",
    featured: false,
    description:
      "A SACCO management learning project using PHP and MySQL.",
    details:
      "A practical project exploring member management, savings records, contributions, and transaction reporting.",
    technologies: ["PHP", "MySQL", "XAMPP"],
    art: "finance",
    screenshot: "/jirani-mwema-sacco-prototype.png",
    note: "Prototype screenshot. Use fictional records in public demonstrations."
  },
  {
    id: "eventhub",
    name: "EventHub",
    category: "Web App",
    status: "Learning project",
    kind: "build",
    featured: false,
    description:
      "An event application project exploring server-side routes, authentication, and data-driven features.",
    details:
      "The project explores API design, authentication flows, data modeling, and application logic using Node.js, Express, JWT, and MySQL.",
    technologies: ["Node.js", "Express", "JWT", "MySQL"],
    art: "event",
    screenshot: "/eventhub-prototype.png",
    note: "Prototype screenshot. Never expose private keys or production tokens."
  },
  {
    id: "afyalink",
    name: "AfyaLink Dashboard",
    category: "Web App",
    status: "UI / learning project",
    kind: "build",
    featured: false,
    description:
      "A healthcare-themed React dashboard concept focused on presenting information clearly.",
    details:
      "A dashboard concept exploring reusable components, data visualization patterns, and responsive layouts.",
    technologies: ["React", "JavaScript", "Dashboard UI"],
    art: "health",
    screenshot: "/afyalink-prototype.png",
    note: "Prototype screenshot. Use fictional data only."
  },
  {
    id: "drivehub",
    name: "Drive Hub",
    category: "Web App",
    status: "Live website",
    kind: "live",
    featured: false,
    description:
      "A car e-commerce website concept using a deep blue visual identity and structured product presentation.",
    details:
      "A vehicle website design exploring product presentation, vehicle cards, and consistent visual styling.",
    technologies: ["HTML", "CSS", "JavaScript", "UI Design"],
    art: "car",
    screenshot: "/drivehub-screenshot.png",
    demo: "https://drivehub-two.vercel.app/",
    note: "Visit the live website to review its current features."
  }
];

/* 2. PROJECT PLACEHOLDER ARTWORK */

const artStyles = {
  brand: {
    bg: "#e8f0e4",
    accent: "#00412e",
    label: "DIGITAL INNOVATION",
    title: "Build your online presence",
    bars: 3
  },
  finance: {
    bg: "#e3efe1",
    accent: "#246344",
    label: "FINANCE OVERVIEW",
    title: "Contributions & records",
    bars: 4
  },
  rent: {
    bg: "#edf0e9",
    accent: "#345d45",
    label: "PROPERTY MANAGER",
    title: "Rent. Track. Organize.",
    bars: 3
  },
  inventory: {
    bg: "#e8eae5",
    accent: "#00412e",
    label: "STOCK OVERVIEW",
    title: "Inventory dashboard",
    bars: 4
  },
  church: {
    bg: "#e8efe7",
    accent: "#285640",
    label: "DIOCESE MANAGEMENT",
    title: "One connected community",
    bars: 3
  },
  student: {
    bg: "#e7eee4",
    accent: "#416a4d",
    label: "STUDENT PORTAL",
    title: "Academic workspace",
    bars: 4
  },
  event: {
    bg: "#e8eae5",
    accent: "#00412e",
    label: "EVENTHUB",
    title: "Discover what's happening",
    bars: 3
  },
  health: {
    bg: "#e2eee4",
    accent: "#285640",
    label: "AFYALINK",
    title: "Your dashboard at a glance",
    bars: 4
  },
  car: {
    bg: "#e8eae5",
    accent: "#315840",
    label: "DRIVE HUB",
    title: "Find your next drive",
    bars: 3
  }
};

/* 3. GALLERY STATE AND HELPERS */

let activeFilter = "All";
let searchQuery = "";
let sortMode = "featured";

const grid = document.querySelector("#projectGrid");

const escapeHTML = (value) =>
  String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);

/* Create placeholder artwork when an image is unavailable. */

function projectArtwork(project) {
  const style = artStyles[project.art] || artStyles.brand;

  const fallback = `
    <div class="project-art artwork-fallback"
         style="background:${style.bg}">
      <div class="mock">
        <div style="font-size:9px;font-weight:800;letter-spacing:1px;color:${style.accent}">
          ${style.label}
        </div>
        <div style="font-size:15px;font-weight:800;margin-top:14px;color:#17382b">
          ${style.title}
        </div>
        <div style="display:flex;gap:7px;margin-top:15px">
          <div style="width:40%;height:48px;border-radius:6px;background:${style.accent}"></div>
          <div style="flex:1">
            <div class="mini-line"></div>
            <div class="mini-line"></div>
            <div class="mini-line"></div>
          </div>
        </div>
      </div>
    </div>`;

  if (!project.screenshot) return fallback;

  return `
    <div class="project-art screenshot-art">
      <img
        src="${project.screenshot}"
        alt="${escapeHTML(project.name)} interface preview"
        loading="lazy"
        onerror="this.onerror=null;this.parentElement.outerHTML=this.dataset.fallback"
        data-fallback="${escapeHTML(fallback)}"
      >
    </div>`;
}

/* 4. FILTER, SEARCH, AND SORT PROJECTS */

function renderProjects() {
  if (!grid) return;

  let list = projects.filter((project) => {
    const matchesFilter =
      activeFilter === "All" ||
      project.category === activeFilter ||
      (activeFilter === "Concept" &&
        (project.kind === "plan" ||
          project.status.toLowerCase().includes("design") ||
          project.status.toLowerCase().includes("planning")));

    const searchable = [
      project.name,
      project.description,
      project.category,
      project.status,
      ...project.technologies
    ].join(" ").toLowerCase();

    return matchesFilter &&
      searchable.includes(searchQuery.toLowerCase());
  });

  if (sortMode === "az") {
    list.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortMode === "status") {
    list.sort((a, b) => a.status.localeCompare(b.status));
  } else {
    list.sort((a, b) => Number(b.featured) - Number(a.featured));
  }

  grid.innerHTML = list.map((project) => `
    <article class="project-card">
      <div style="position:relative">
        ${projectArtwork(project)}
        <span class="status ${project.kind} status-label">
          ${escapeHTML(project.status)}
        </span>
      </div>

      <div class="project-body">
        <div class="project-category">
          ${escapeHTML(project.category)}
        </div>

        <h3 class="project-title">
          ${escapeHTML(project.name)}
        </h3>

        <p class="project-description">
          ${escapeHTML(project.description)}
        </p>

        <div class="project-tags">
          ${project.technologies.slice(0, 3).map((tag) =>
            `<span class="tag">${escapeHTML(tag)}</span>`
          ).join("")}

          ${project.technologies.length > 3
            ? `<span class="tag">+${project.technologies.length - 3}</span>`
            : ""}
        </div>

        <button class="project-open" data-project="${project.id}">
          Explore project <span aria-hidden="true">↗</span>
        </button>
      </div>
    </article>
  `).join("");

  const resultCount = document.querySelector("#resultCount");
  const noResults = document.querySelector("#noResults");

  if (resultCount) {
    resultCount.textContent =
      `${list.length} project${list.length === 1 ? "" : "s"}`;
  }

  if (noResults) noResults.classList.toggle("hidden", list.length !== 0);
  grid.classList.toggle("hidden", list.length === 0);
}

/* 5. PROJECT DETAILS MODAL */

function openProject(id) {
  const project = projects.find((item) => item.id === id);
  if (!project) return;

  document.querySelector("#modalCategory").textContent =
    `${project.category.toUpperCase()} / PROJECT OVERVIEW`;

  document.querySelector("#modalTitle").textContent = project.name;
  document.querySelector("#modalArt").innerHTML = projectArtwork(project);

  document.querySelector("#modalStatus").innerHTML = `
    <span class="status ${project.kind}">
      ${escapeHTML(project.status)}
    </span>`;

  document.querySelector("#modalDescription").textContent = project.details;

  document.querySelector("#modalTags").innerHTML =
    project.technologies.map((tag) =>
      `<span class="tag">${escapeHTML(tag)}</span>`
    ).join("");

  document.querySelector("#modalNote").textContent = project.note;

  const actions = document.querySelector("#modalActions");

  actions.innerHTML = `
    <button class="button button-primary" id="modalCloseBottom">
      Back to projects
    </button>`;

  if (project.demo) {
    actions.innerHTML += `
      <a href="${project.demo}" target="_blank"
         rel="noopener noreferrer">Open website ↗</a>`;
  }

  if (project.repository) {
    actions.innerHTML += `
      <a href="${project.repository}" target="_blank"
         rel="noopener noreferrer">Source code ↗</a>`;
  } else {
    actions.innerHTML += `
      <a href="https://github.com/Alex96917"
         target="_blank" rel="noopener noreferrer">GitHub profile ↗</a>`;
  }

  document.querySelector("#projectModal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
  document.querySelector("#closeModal").focus();
}

function closeModal() {
  const modal = document.querySelector("#projectModal");
  if (modal) modal.classList.add("hidden");
  document.body.style.overflow = "";
}

/* 6. CONNECT GALLERY CONTROLS */

const filters = document.querySelector("#projectFilters");

if (filters) {
  filters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;

    activeFilter = button.dataset.filter;

    filters.querySelectorAll("[data-filter]").forEach((item) => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });

    renderProjects();
  });
}

const projectSearch = document.querySelector("#projectSearch");

if (projectSearch) {
  projectSearch.addEventListener("input", (event) => {
    searchQuery = event.target.value;
    renderProjects();
  });
}

const sortProjects = document.querySelector("#sortProjects");

if (sortProjects) {
  sortProjects.addEventListener("change", (event) => {
    sortMode = event.target.value;
    renderProjects();
  });
}

if (grid) {
  grid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-project]");
    if (button) openProject(button.dataset.project);
  });
}

const resetFilters = document.querySelector("#resetFilters");

if (resetFilters) {
  resetFilters.addEventListener("click", () => {
    activeFilter = "All";
    searchQuery = "";
    sortMode = "featured";

    if (projectSearch) projectSearch.value = "";
    if (sortProjects) sortProjects.value = "featured";

    document.querySelectorAll("#projectFilters [data-filter]")
      .forEach((item) => {
        const active = item.dataset.filter === "All";
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });

    renderProjects();
  });
}

/* 7. MODAL CONTROLS */

const closeModalButton = document.querySelector("#closeModal");
if (closeModalButton) {
  closeModalButton.addEventListener("click", closeModal);
}

const modalActions = document.querySelector("#modalActions");

if (modalActions) {
  modalActions.addEventListener("click", (event) => {
    if (event.target.closest("#modalCloseBottom")) closeModal();
  });
}

const projectModal = document.querySelector("#projectModal");

if (projectModal) {
  projectModal.addEventListener("click", (event) => {
    if (event.target === projectModal) closeModal();
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});

/* 8. MOBILE NAVIGATION */

const menuToggle = document.querySelector("#menuToggle");
const nav = document.querySelector("#primaryNav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("open", !expanded);
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

/* 9. ACTIVE NAVIGATION SECTION */

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      document.querySelectorAll(".nav-link").forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${entry.target.id}`
        );
      });
    });
  }, { rootMargin: "-35% 0px -55% 0px" });

  document.querySelectorAll("main section[id]").forEach((section) => {
    sectionObserver.observe(section);
  });
}

/* 10. DYNAMIC COPYRIGHT YEAR AND PROJECT COUNT */

const copyrightYear = document.querySelector("#copyrightYear");
if (copyrightYear) copyrightYear.textContent = new Date().getFullYear();

const projectCount = document.querySelector("#projectCount");
if (projectCount) projectCount.textContent = projects.length;

/* Render the gallery when the script loads. */

renderProjects();

/* 11. CONTACT FORM — FORMSPREE */

const contactForm = document.querySelector("#contactForm");

if (contactForm) {
  const feedback = document.querySelector("#formFeedback");
  const submitButton = document.querySelector("#contactSubmit");

  const defaultButtonHTML = submitButton
    ? submitButton.innerHTML
    : "Send message";

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) return;

    if (!feedback || !submitButton) {
      contactForm.submit();
      return;
    }

    feedback.textContent = "Sending your message… Please wait.";
    feedback.className = "form-feedback";
    feedback.setAttribute("role", "status");

    submitButton.disabled = true;
    submitButton.setAttribute("aria-busy", "true");
    submitButton.innerHTML =
      '<span>Sending message…</span><span class="form-spinner" aria-hidden="true"></span>';

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: new FormData(contactForm),
        headers: { Accept: "application/json" }
      });

      let result = {};

      try {
        result = await response.json();
      } catch {
        result = {};
      }

      if (!response.ok) {
        const serviceMessage = Array.isArray(result.errors)
          ? result.errors.map((item) => item.message).filter(Boolean).join(" ")
          : "";

        if (response.status === 404) {
          throw new Error(
            "The contact form endpoint was not found. Check the Formspree form ID in index.html."
          );
        }

        if (response.status === 403) {
          throw new Error(
            "Formspree did not accept this submission. Check your Formspree account and verify your form if requested."
          );
        }

        throw new Error(
          serviceMessage ||
          `Your message was not sent (error ${response.status}). Please try again.`
        );
      }

      contactForm.reset();
      feedback.textContent =
        "Thank you! Your message was submitted successfully. I'll get back to you soon.";
      feedback.className = "form-feedback success";

    } catch (error) {
      feedback.textContent = error instanceof TypeError
        ? "We couldn't connect to the contact form service. Check your internet connection and try again, or email alexkamaukanini@gmail.com."
        : (error.message ||
          "Something went wrong. Please try again or email alexkamaukanini@gmail.com.");

      feedback.className = "form-feedback error";

    } finally {
      submitButton.disabled = false;
      submitButton.removeAttribute("aria-busy");
      submitButton.innerHTML = defaultButtonHTML;
    }
  });
}
