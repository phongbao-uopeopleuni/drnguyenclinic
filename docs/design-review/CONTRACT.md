# UI direction — current contract

Last updated: 01/11/2026. This contract supersedes the earlier preview-only form contract.

Surface: Vietnamese private clinic website. Preserve the existing routes, verified clinic data, real logo/photo and restrained clinical/editorial style.

Audience/job: visitors in Huế need to identify the doctor, understand the currently confirmed scope, call or submit a consultation request, find the clinic and understand that a submitted request is not a confirmed appointment.

Primary action: call `0774 534 766`. Secondary actions: submit the consultation form, open directions and view the doctor profile.

Hierarchy: specialty and doctor identity/photo; contact facts; proposed care areas; a quiet consultation prompt; appointment steps; practical FAQ; contact details and the consultation form.

Current form behavior:

- The form is displayed directly on `/lien-he#tu-van`; it is not collapsed and is not a preview-only form.
- A valid submission is sent to the configured form-processing service. Loading, success and error states are visible and announced to assistive technology.
- Required data is limited to name, phone number, preferred date, broad consultation category and consent.
- Area/ward and a short note are optional. The form explicitly tells visitors not to enter medical records, test results or detailed health information.
- Domain restriction and a hidden anti-spam field are active. Additional bot protection remains pending until the required credentials are supplied.
- A successful submission creates a contact request only. The clinic must contact the visitor before an appointment exists.

Content rules: retain `noindex` and draft labelling until the clinic verifies hours, biography, qualifications, licensed services, images, articles, official domain, legal entity name, operating licence, tax/registration number, privacy contact and the operational commitments stated in the legal policies. Never infer medical services, credentials, legal identity or prices.

Public-copy rule: do not name development tools, source-control services, hosting vendors, form vendors, font vendors or mapping vendors. Describe necessary third parties only by their function and keep implementation details in internal documentation or configuration.

Visual direction: warm ivory/linen surfaces, navy and dusty rose brand colors, generous whitespace, square physician portrait and numbered editorial lists. A restrained motif system uses static botanical linework and contour arcs at low opacity in the hero, interior-page headings, process band and contact CTA; motifs are decorative, sit behind content and become quieter on smaller screens. Avoid decorative clutter, repeated slogans and additional animated ornaments. The green hero accents remain an open design decision and must not be expanded without approval.

Viewports under review: `360x900`, `768x900`, `1440x1000`. Requirements: no horizontal overflow; one H1 per route; controls at least 44px; visible keyboard focus; readable text; no content hidden behind the sticky header or mobile contact bar; portrait retains the face/head; form controls remain single-column on phones and usable at all three widths.

Interaction states:

- Loading: disable the submit button, set `aria-busy` and show a sending message.
- Invalid: native validation blocks submission and identifies the missing/invalid control.
- Success: reset the form and state clearly that the request is not yet an appointment.
- Error: announce an actionable error and keep phone/Zalo available as alternatives.
- Empty: empty gallery remains hidden; FAQ no-match offers a clear message.
- Reduced motion: attention effects stop under `prefers-reduced-motion: reduce`.

QA evidence: use `evidence.json`, `render-360.json`, `render-768.json`, `render-1440.json` and `QA-2026-11-01.md`. Do not treat the historical Lighthouse/browser records as current evidence after form changes.
