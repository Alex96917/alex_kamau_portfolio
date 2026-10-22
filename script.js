/* Alex Kamau portfolio: project data and interactive gallery.
   Update each project's status, screenshot, repository and demo after verifying them. */
const projects = [
  {id:"adi",name:"Alexis Digital Innovations",category:"Business",status:"Live website",kind:"live",featured:true,description:"A digital services brand website introducing services, sharing company information, and helping potential clients get in touch.",details:"The website concept includes a service-focused homepage, about content, contact options, a WhatsApp link, and a professional online presence.",technologies:["HTML","CSS","JavaScript","EmailJS"],art:"brand",screenshot:"assets/projects/alexis-digital-innovations-screenshot.png",demo:"https://alexis-digital-innovation.vercel.app/#service",repository:"",note:"Known website link. Verify the latest deployed features before presenting it as a finished project."},
  {id:"sotepay",name:"SotePay",category:"Business",status:"In development",kind:"build",featured:true,description:"A chama and group-finance management concept for organizing members, contributions, and financial activity.",details:"The planned product can support member records, contribution tracking, transaction history, and readable summaries. M-Pesa integration should only be advertised after implementation and testing.",technologies:["HTML","CSS","JavaScript","PHP","MySQL"],art:"finance",screenshot:"assets/projects/sotepay-screenshot.png",note:"Work in progress. Confirm core features, database operations, and payment integration before describing them as operational."},
  {id:"rentivara",name:"Rentivara",category:"Business",status:"Design / planning",kind:"plan",featured:true,description:"A rental management platform concept for making property, tenant, and rent administration clearer.",details:"The proposed system can organize property listings, tenant records, rent schedules, payment status, and management reports. A public landing page can introduce the product before login and registration.",technologies:["UI/UX","HTML","CSS","JavaScript","PHP"],art:"rent",screenshot:"assets/projects/rentivara-screenshot.png",note:"Currently a concept and design direction. Do not describe tenant or payment management as operational until implemented."},
  {id:"inventory",name:"Inventory Management System",category:"Management",status:"Design / planning",kind:"plan",featured:true,description:"A school or TVET inventory solution planned around stock, assets, purchases, users, and reporting.",details:"The planned system focuses on stock control: recording items, monitoring quantities, managing purchases and assets, controlling access by role, and generating reports.",technologies:["PHP","MySQL","CRUD","Reporting"],art:"inventory",screenshot:"assets/projects/inventory-prototype.png",note:"Prototype screenshot only. Planned for a single organization or location; a live demonstration needs working database operations and sample data."},
  {id:"church",name:"ACK Diocese Church ERP",category:"Management",status:"Requirements / planning",kind:"plan",featured:true,description:"A multi-parish church management platform planned for the Anglican Church of Kenya, Diocese of Nairobi.",details:"The proposed architecture brings parish and diocesan workflows together. Priority modules include membership, finance, ministries, clergy and staff, services and events, inventory, communication, and reports.",technologies:["PHP","MySQL","System Design","Access Control"],art:"church",screenshot:"assets/projects/ack-church-erp-prototype.png",note:"Prototype screenshot only. Finance, membership records, permissions, and privacy need careful requirements and testing before deployment."},
  {id:"student",name:"Student Portal",category:"Management",status:"In development",kind:"build",featured:true,description:"A portal concept for organizing student information and TVET departments.",details:"The planning includes structured departments and student records. The department form includes a department code and department name.",technologies:["PHP","MySQL","HTML","CSS","JavaScript"],art:"student",screenshot:"assets/projects/student-portal-screenshot.png",note:"Screenshot of the current interface. Only claim modules that are implemented; test validation, permissions, and database relationships as development progresses."},
  {id:"jirani",name:"Jirani Mwema SACCO",category:"Management",status:"Learning project",kind:"build",featured:false,description:"A SACCO management learning project using PHP and MySQL, focused on organized records and financial workflows.",details:"A practical domain for exploring member management, savings records, contributions, and transaction reporting. Financial calculations and transaction history need accuracy and auditability.",technologies:["PHP","MySQL","XAMPP"],art:"finance",screenshot:"assets/projects/jirani-mwema-sacco-prototype.png",note:"Prototype screenshot uses illustrative demo figures and fictional member records. Describe only the features actually implemented, and use fictional sample data in any public demo."},
  {id:"eventhub",name:"EventHub",category:"Web App",status:"Learning project",kind:"build",featured:false,description:"An event application project exploring server-side routes, authentication, and data-driven features.",details:"The discussed stack includes Node.js, Express, JWT, and MySQL. It can demonstrate API design, authentication flows, data modeling, and application logic.",technologies:["Node.js","Express","JWT","MySQL"],art:"event",screenshot:"assets/projects/eventhub-prototype.png",note:"Prototype screenshot only. Keep secrets and production tokens out of the repository. Document setup and environment variables safely."},
  {id:"afyalink",name:"AfyaLink Dashboard",category:"Web App",status:"UI / learning project",kind:"build",featured:false,description:"A healthcare-themed React dashboard concept focused on presenting information in a clear interface.",details:"A dashboard can demonstrate component design, reusable UI, data visualization patterns, and responsive layouts. Use fictional data for portfolio screenshots.",technologies:["React","JavaScript","Dashboard UI"],art:"health",screenshot:"assets/projects/afyalink-prototype.png",note:"Prototype screenshot only. Use fictional data only and avoid implying clinical functionality or real patient-data handling unless implemented."},
  {id:"drivehub",name:"Drive Hub",category:"Web App",status:"Live website",kind:"live",featured:false,description:"A car e-commerce website concept using a deep blue visual identity and structured product presentation.",details:"The design exploration includes vehicle cards, clear product details, and a consistent palette. It can grow into searchable inventory, filters, and a vehicle enquiry flow.",technologies:["HTML","CSS","JavaScript","UI Design"],art:"car",screenshot:"assets/projects/drivehub-screenshot.png",demo:"https://drivehub-two.vercel.app/",note:"Screenshot supplied from the deployed DriveHub website. Open the live site to review the current version; only describe features that are working there."}
];

const artStyles = {
  brand:{bg:"#e8f0e4",accent:"#00412e",label:"DIGITAL INNOVATION",title:"Build your online presence",bars:3},
  finance:{bg:"#e3efe1",accent:"#246344",label:"FINANCE OVERVIEW",title:"Contributions & records",bars:4},
  rent:{bg:"#edf0e9",accent:"#345d45",label:"PROPERTY MANAGER",title:"Rent. Track. Organize.",bars:3},
  inventory:{bg:"#e8eae5",accent:"#00412e",label:"STOCK OVERVIEW",title:"Inventory dashboard",bars:4},
  church:{bg:"#e8efe7",accent:"#285640",label:"DIOCESE MANAGEMENT",title:"One connected community",bars:3},
  student:{bg:"#e7eee4",accent:"#416a4d",label:"STUDENT PORTAL",title:"Academic workspace",bars:4},
  event:{bg:"#e8eae5",accent:"#00412e",label:"EVENTHUB",title:"Discover what's happening",bars:3},
  health:{bg:"#e2eee4",accent:"#285640",label:"AFYALINK",title:"Your dashboard at a glance",bars:4},
  car:{bg:"#e8eae5",accent:"#315840",label:"DRIVE HUB",title:"Find your next drive",bars:3}
};
let activeFilter="All",searchQuery="",sortMode="featured";
const grid=document.querySelector("#projectGrid");
const escapeHTML=value=>String(value).replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
function projectArtwork(project){
  const style=artStyles[project.art]||artStyles.brand;
  if(project.screenshot){
    return `<div class="project-art screenshot-art"><img src="${project.screenshot}" alt="${escapeHTML(project.name)} ${project.kind==="plan"?"prototype preview":"interface preview"}" loading="lazy"></div>`;
  }
  return `<div class="project-art" style="background:${style.bg}"><div style="position:absolute;right:-26px;top:-45px;width:145px;height:145px;border-radius:50%;border:1px solid ${style.accent}16"></div><div class="mock"><div style="display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #e9eee7;padding-bottom:8px"><span style="font-size:8px;font-weight:800;letter-spacing:1px;color:${style.accent}">${style.label}</span><span style="font-size:8px;color:#9ba79b">•••</span></div><div style="font-size:13px;font-weight:800;margin-top:12px;color:#17382b;max-width:220px">${style.title}</div><div style="display:flex;gap:7px;margin-top:11px"><div style="width:43%;height:47px;border-radius:5px;background:${style.accent};opacity:.95"></div><div style="flex:1;display:flex;flex-direction:column;justify-content:space-around"><div class="mini-line" style="width:90%;margin:0"></div><div class="mini-line" style="width:68%;margin:0"></div><div class="mini-line" style="width:78%;margin:0"></div></div></div><div style="display:flex;gap:5px;margin-top:9px">${Array.from({length:style.bars},(_,i)=>`<div style="height:4px;flex:1;background:${i===0?style.accent:"#e5ebe2"};border-radius:4px"></div>`).join("")}</div></div></div>`;
}
function renderProjects(){
  let list=projects.filter(project=>{
    const matchesFilter=activeFilter==="All"||project.category===activeFilter||(activeFilter==="Concept"&&(project.kind==="plan"||project.status.toLowerCase().includes("design")||project.status.toLowerCase().includes("planning")));
    const searchable=[project.name,project.description,project.category,project.status,...project.technologies].join(" ").toLowerCase();
    return matchesFilter&&searchable.includes(searchQuery.toLowerCase());
  });
  if(sortMode==="az")list.sort((a,b)=>a.name.localeCompare(b.name));
  if(sortMode==="status")list.sort((a,b)=>a.status.localeCompare(b.status));
  if(sortMode==="featured")list.sort((a,b)=>Number(b.featured)-Number(a.featured));
  grid.innerHTML=list.map(project=>`<article class="project-card"><div style="position:relative">${projectArtwork(project)}<span class="status ${project.kind} status-label">${escapeHTML(project.status)}</span></div><div class="project-body"><div class="project-category">${escapeHTML(project.category)}</div><h3 class="project-title">${escapeHTML(project.name)}</h3><p class="project-description">${escapeHTML(project.description)}</p><div class="project-tags">${project.technologies.slice(0,3).map(tag=>`<span class="tag">${escapeHTML(tag)}</span>`).join("")}${project.technologies.length>3?`<span class="tag">+${project.technologies.length-3}</span>`:""}</div><button class="project-open" data-project="${project.id}">Explore project <span aria-hidden="true">↗</span></button></div></article>`).join("");
  document.querySelector("#resultCount").textContent=`${list.length} project${list.length===1?"":"s"}`;
  document.querySelector("#noResults").classList.toggle("hidden",list.length!==0);
  grid.classList.toggle("hidden",list.length===0);
}
function openProject(id){
  const project=projects.find(item=>item.id===id);if(!project)return;
  document.querySelector("#modalCategory").textContent=`${project.category.toUpperCase()} / PROJECT OVERVIEW`;
  document.querySelector("#modalTitle").textContent=project.name;
  document.querySelector("#modalArt").innerHTML=projectArtwork(project);
  document.querySelector("#modalStatus").innerHTML=`<span class="status ${project.kind}">${escapeHTML(project.status)}</span>`;
  document.querySelector("#modalDescription").textContent=project.details;
  document.querySelector("#modalTags").innerHTML=project.technologies.map(tag=>`<span class="tag">${escapeHTML(tag)}</span>`).join("");
  document.querySelector("#modalNote").textContent=project.note;
  const actions=document.querySelector("#modalActions");
  actions.innerHTML=`<button class="button button-primary" id="modalCloseBottom">Back to projects</button>`;
  if(project.demo)actions.innerHTML+=`<a href="${project.demo}" target="_blank" rel="noopener noreferrer">Open website ↗</a>`;
  if(project.repository)actions.innerHTML+=`<a href="${project.repository}" target="_blank" rel="noopener noreferrer">Source code ↗</a>`;
  else actions.innerHTML+=`<a href="https://github.com/alex96917" target="_blank" rel="noopener noreferrer">GitHub profile ↗</a>`;
  document.querySelector("#projectModal").classList.remove("hidden");
  document.body.style.overflow="hidden";
  document.querySelector("#closeModal").focus();
}
function closeModal(){document.querySelector("#projectModal").classList.add("hidden");document.body.style.overflow="";}
document.querySelector("#projectFilters").addEventListener("click",event=>{
  const button=event.target.closest("[data-filter]");if(!button)return;
  activeFilter=button.dataset.filter;
  document.querySelectorAll("#projectFilters [data-filter]").forEach(item=>{const active=item===button;item.classList.toggle("active",active);item.setAttribute("aria-pressed",String(active));});
  renderProjects();
});
document.querySelector("#projectSearch").addEventListener("input",event=>{searchQuery=event.target.value;renderProjects();});
document.querySelector("#sortProjects").addEventListener("change",event=>{sortMode=event.target.value;renderProjects();});
grid.addEventListener("click",event=>{const button=event.target.closest("[data-project]");if(button)openProject(button.dataset.project);});
document.querySelector("#resetFilters").addEventListener("click",()=>{
  activeFilter="All";searchQuery="";sortMode="featured";
  document.querySelector("#projectSearch").value="";document.querySelector("#sortProjects").value="featured";
  document.querySelectorAll("#projectFilters [data-filter]").forEach(item=>{const active=item.dataset.filter==="All";item.classList.toggle("active",active);item.setAttribute("aria-pressed",String(active));});
  renderProjects();
});
document.querySelector("#closeModal").addEventListener("click",closeModal);
document.querySelector("#modalActions").addEventListener("click",event=>{if(event.target.closest("#modalCloseBottom"))closeModal();});
document.querySelector("#projectModal").addEventListener("click",event=>{if(event.target.id==="projectModal")closeModal();});
document.addEventListener("keydown",event=>{if(event.key==="Escape")closeModal();});
const menuToggle=document.querySelector("#menuToggle"),nav=document.querySelector("#primaryNav");
menuToggle.addEventListener("click",()=>{
  const expanded=menuToggle.getAttribute("aria-expanded")==="true";
  menuToggle.setAttribute("aria-expanded",String(!expanded));nav.classList.toggle("open",!expanded);
});
nav.addEventListener("click",event=>{if(event.target.closest("a")){nav.classList.remove("open");menuToggle.setAttribute("aria-expanded","false");}});
const sectionObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){document.querySelectorAll(".nav-link").forEach(link=>link.classList.toggle("active",link.getAttribute("href")===`#${entry.target.id}`));}});
},{rootMargin:"-35% 0px -55% 0px"});
document.querySelectorAll("main section[id]").forEach(section=>sectionObserver.observe(section));
document.querySelector("#copyrightYear").textContent=new Date().getFullYear();
document.querySelector("#projectCount").textContent=projects.length;
renderProjects();


// Contact form: send asynchronously through Formspree and show clear feedback.
const contactForm = document.querySelector("#contactForm");

if (contactForm) {
  const feedback = document.querySelector("#formFeedback");
  const submitButton = document.querySelector("#contactSubmit");
  const defaultButtonHTML = submitButton.innerHTML;

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) return;

    feedback.textContent = "Sending your message… Please wait.";
    feedback.className = "form-feedback";
    feedback.setAttribute("role", "status");
    submitButton.disabled = true;
    submitButton.setAttribute("aria-busy", "true");
    submitButton.innerHTML = '<span>Sending message…</span><span class="form-spinner" aria-hidden="true"></span>';

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: new FormData(contactForm),
        headers: { Accept: "application/json" }
      });

      let result = {};
      const responseText = await response.text();
      try {
        result = responseText ? JSON.parse(responseText) : {};
      } catch (_) {
        result = {};
      }

      if (!response.ok) {
        const serviceMessage = Array.isArray(result.errors)
          ? result.errors.map((item) => item.message).filter(Boolean).join(" ")
          : "";
        if (response.status === 404) {
          throw new Error("The contact form endpoint was not found. Please check the Formspree form ID in index.html.");
        }
        if (response.status === 403) {
          throw new Error("The contact form service has not accepted this submission. Check your Formspree account and verify the form if requested.");
        }
        throw new Error(serviceMessage || `Your message was not sent (error ${response.status}). Please try again or email alexkamaukanini@gmail.com.`);
      }

      contactForm.reset();
      feedback.textContent = "Thank you! Your message was submitted successfully. I’ll get back to you soon.";
      feedback.className = "form-feedback success";
    } catch (error) {
      feedback.textContent = error instanceof TypeError
        ? "We couldn't connect to the contact form service. Check your internet connection and try again, or email alexkamaukanini@gmail.com."
        : (error.message || "Something went wrong. Please try again or email alexkamaukanini@gmail.com.");
      feedback.className = "form-feedback error";
    } finally {
      submitButton.disabled = false;
      submitButton.removeAttribute("aria-busy");
      submitButton.innerHTML = defaultButtonHTML;
    }
  });
}
