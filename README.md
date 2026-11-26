# CTRL-UP Recruitment — Website V1


## Run locally (Node.js 22 recommended)

```sh
npm install
npm run dev
```

Open the local URL printed by Vite (normally http://localhost:5173). Edit `src/content.js` for the services, specialisations and method; `src/config.js` for contact details and book availability; `src/main.jsx` for components and page content; `src/styles.css` for the design.

## Build and publish on Hostinger

```sh
npm run build
npm run preview
```

Upload the **contents** of `dist/` (not the folder itself) to the domain's public web directory, normally `public_html`. Back up the existing website first. The multi-page build produces independent HTML entry points, so a React Router rewrite is not needed. The project assumes deployment at the domain root. Remove old storefront links and payment integrations; retain access to historical customer/refund support as appropriate. Do not delete historical transaction records. No deployment has been performed here.

## Before going live

- Confirm the public company LinkedIn URL in `src/config.js`. No personal founder profiles are published in V1.
- Supply the original PDF and any translated editions. Put them into `public/resources/ebooks/`, then set each corresponding `available` value to `true` in `src/config.js`. The resource page will then offer direct free downloads without registration. All editions are currently marked unavailable; the cover is illustrative, not the actual ebook file.
- Confirm `contact@ctrl-up.ro` is monitored. By default, the contact form opens the visitor's email client with a prepared message; it does not pretend to send an enquiry automatically. For Formspree, copy `.env.example` to `.env`, enter a verified endpoint, then rebuild. The old website uses `https://formspree.io/f/xjgdpegq`; confirm it belongs to you and configure it for these new enquiries before enabling it. No form submission was sent in testing.
- Replace the preliminary privacy information page with a reviewed, complete privacy notice (legal entity, controller contact, purposes, legal bases, recipients, retention, rights and relevant transfers). Review any recruitment authorisation/accreditation and legal requirements before commencing services. No CV upload or applicant database is enabled in V1.
- Verify public service claims, company identity, and any future founder information before launch. No fictional client logos, testimonials, vacancies or results are included.
- Test navigation, responsive display, contact delivery, PDF downloads and accessibility on your own machine before publishing. The build could not be run in the authoring environment because npm registry DNS access was unavailable.

## Pages

Home, For Companies, For Candidates, Our Approach, About Us, Resources, Contact and Privacy information. All use shared React components and the same stylesheet. Vite bundles each HTML entry point into static hosting-compatible assets.
