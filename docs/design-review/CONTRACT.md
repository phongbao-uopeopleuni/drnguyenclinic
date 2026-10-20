# UI direction — refinement

Surface: Vietnamese private clinic website; keep existing React/Vite routes, real logo/photo and brand colors.
Audience/job: visitors in Hue need to identify the doctor, understand the scope, call for a confirmed appointment and find the address.
Primary action: call 0774534766. Secondary: Google Maps directions and doctor profile.
Hierarchy: specialty + doctor identity/photo, contact facts, proposed care areas, appointment steps, practical FAQ, contact block.
Tone: restrained clinical/editorial. Signature detail: square portrait paired with a typographic doctor name and numbered care index.
Local reference observations: existing Home repeats abstract reassurance slogans, heart/icons, arched portrait, boxed service grid and illustrated draft articles. Address is only in the footer. Current contact form preview competes with the actual phone route.
Changes: factual hero, address immediately visible, remove slogan strip/duplicated doctor marketing block; replace equal cards with numbered rows; remove article illustrations and show concise draft list; retain noindex/draft status without a dominant top banner; keep preview form in an explicit expandable section after real contact information.
Viewports: 360x900, 768x900, 1440x1000. No horizontal overflow; 44px controls, readable text, visible keyboard focus, no decorative movement; image must retain face/head.
States: no async booking/backend; existing preview only. Empty gallery hidden. FAQ no-match offers clear result; image errors retain fallback; partial service/doctor information labelled; preview validation explicitly does not send. Permission state not applicable because no protected actions or geolocation accessed by the site.
