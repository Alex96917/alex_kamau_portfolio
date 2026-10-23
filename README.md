# Alex Kamau — Software Project Portfolio

A responsive static portfolio built with plain HTML, CSS, and JavaScript, using the palette:
- Forest green `#00412E`
- Sage green `#96BF8A`
- Soft grey `#E8EAE5`
- White `#FFFFFF`

## Run locally

1. Extract the ZIP.
2. Open `index.html` in a browser, or use VS Code with the Live Server extension.
3. The gallery, filters, search, sort, mobile navigation, and project detail modals work without a backend.

## Customize projects

Project content lives in `script.js` in the `projects` array. Update each item’s:
- `description`, `details`, `technologies`, and `status`
- `demo` with a verified live URL
- `repository` with a verified public GitHub repository URL
- `screenshot` workflow (see below)

Only add links you have checked and have permission to share. The portfolio currently includes the known Alexis Digital Innovations link and your GitHub profile. Other repositories are intentionally not guessed.

## Project screenshot notes

The gallery now uses screenshot previews where available:
- SotePay, Student Portal, and Rentivara use screenshots supplied during the project conversation.
- Inventory Management System, ACK Church ERP, EventHub, AfyaLink Dashboard, and Drive Hub use prototype preview crops from a generated portfolio concept image.
- Alexis Digital Innovations links to its known live website. Other projects do not claim a live demo unless a verified URL is added.

Prototype images are visual concepts, not proof that the shown modules or sample figures are functional. Replace them with clean screenshots from the running application as each project is implemented. Project screenshot paths are set using the `screenshot` field in the `projects` array in `script.js`.

## Before publishing

- Verify the Alexis Digital Innovations deployment still works.
- Add each project's actual GitHub repository URL only after verifying it.
- Replace concept or planning statuses as projects progress.
- Add your professional email address and a working contact method.
- If you add a CV, place it in an appropriate folder and link to the real file.
- Test keyboard navigation, mobile layout, and external links.
- Use fictional data in screenshots for sensitive domains such as church, finance, or health systems.

## Deploy

This is a static website and can be hosted on GitHub Pages, Netlify, or Vercel. It does not need PHP or MySQL unless you later add dynamic features such as a contact-form backend or admin-managed project data.


## Contact form and social links

- The contact section includes email, phone, WhatsApp, Instagram, Facebook, LinkedIn, and GitHub links.
- The current contact form uses `mailto:` to open the visitor's email app with a prefilled message. It does not deliver messages by itself or store submissions.
- For a form that submits directly from the site, connect a backend (for example PHP mail with secure hosting) or a trusted form service, add server-side validation and spam protection, and test delivery before publishing.
- Review the phone and social URLs before deploying publicly.

## Services section

The services section describes website development, PHP/MySQL application work, UI implementation, and basic website maintenance. Keep the wording aligned with your current skills and the scope you can confidently deliver.


## Latest portfolio updates

- The layout includes responsive CSS breakpoints for desktop, tablet, and mobile widths, with a collapsible navigation menu on small screens and single-column project cards on mobile.
- Added the user-supplied Alexis Digital Innovations screenshot and linked its card to https://alexis-digital-innovation.vercel.app/#service.
- Replaced the generic Drive Hub preview with the user-supplied DriveHub screenshot and linked the project to https://drivehub-two.vercel.app/.
- Added a Jirani Mwema SACCO dashboard prototype screenshot. Figures and member records in the image are illustrative demo data, not real SACCO records.
- Prototype previews should remain clearly identified as concepts; the DriveHub and Alexis links open their deployed websites.


## Contact form setup

The contact form submits asynchronously to Formspree using the endpoint configured in `index.html`. Confirm that the endpoint belongs to your Formspree account and complete any email verification Formspree requests before publishing. The form uses client-side validation, a disabled/loading button, and success/error feedback. The site is static HTML/CSS/JavaScript and can be deployed to Vercel without a PHP backend.


## Recently added live projects

- **Safari Emerald Travel** — https://safariemeraldtravel.vercel.app/ — screenshot: `assets/projects/safari-emerald-travel-screenshot.png`
- **Azura Homes** — https://azura-homes.vercel.app/ — screenshot: `assets/projects/azura-homes-screenshot.png`

Both projects are included in the gallery data in `script.js`. Their detail modals link to the live deployments. The screenshots are supplied browser captures and are stored locally in the project, so the portfolio does not rely on external image URLs for these previews.
