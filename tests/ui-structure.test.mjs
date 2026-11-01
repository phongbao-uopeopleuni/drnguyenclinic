import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const contact = readFileSync('src/pages/Contact.tsx', 'utf8');
const css = readFileSync('src/index.css', 'utf8');

function openingTag(element, id) {
  const match = contact.match(new RegExp(`<${element}\\b[^>]*\\bid="${id}"[^>]*>`, 's'));
  assert.ok(match, `Missing <${element}> with id="${id}"`);
  return match[0];
}

test('consultation form collects only the required minimum', () => {
  const area = openingTag('input', 'area');
  const consultationType = openingTag('select', 'consultation-type');
  const note = openingTag('textarea', 'note');

  assert.doesNotMatch(area, /\srequired(?:\s|=|>)/);
  assert.match(area, /name="area"/);
  assert.match(consultationType, /\srequired(?:\s|=|>)/);
  assert.doesNotMatch(note, /\srequired(?:\s|=|>)/);
  assert.match(note, /maxLength=\{500\}/);

  for (const value of ['Khám phụ khoa', 'Thai kỳ', 'Sức khỏe sinh sản', 'Hiếm muộn', 'Khác']) {
    assert.ok(contact.includes(`<option value="${value}">${value}</option>`), `Missing consultation option: ${value}`);
  }
  assert.match(contact, /Không nhập bệnh án, kết quả xét nghiệm hoặc thông tin sức khỏe chi tiết/);
  assert.match(contact, /privacyPolicyVersion/);
  assert.match(contact, /dữ liệu sức khỏe nhạy cảm/);
});

test('legal pages and the security route remain wired into the application', () => {
  const app = readFileSync('src/App.tsx', 'utf8');
  const footer = readFileSync('src/components/Footer.tsx', 'utf8');
  const privacy = readFileSync('src/pages/Privacy.tsx', 'utf8');
  const terms = readFileSync('src/pages/Terms.tsx', 'utf8');
  const security = readFileSync('src/pages/Security.tsx', 'utf8');

  for (const route of ['/chinh-sach-bao-mat', '/dieu-khoan', '/bao-mat']) {
    assert.ok(app.includes(`path="${route}"`), `Missing route ${route}`);
    assert.ok(footer.includes(`to="${route}"`), `Missing footer link ${route}`);
  }
  assert.match(privacy, /91\/2025\/QH15/);
  assert.match(privacy, /356\/2025\/NĐ-CP/);
  assert.match(terms, /Bảo vệ quyền lợi người tiêu dùng/);
  assert.match(security, /116\/2025\/QH15/);
});

test('public policy and contact copy stays vendor-neutral', () => {
  const files = [
    'src/pages/Privacy.tsx',
    'src/pages/Terms.tsx',
    'src/pages/Security.tsx',
    'src/pages/Contact.tsx',
    'src/components/ContactActions.tsx',
    'src/components/Header.tsx',
    'src/components/QuickContact.tsx',
  ];
  const vendorNames = /Vercel|GitHub|Google(?: Maps| Fonts)?|Formspree|Cloudflare|TypeScript|Vite/;
  for (const file of files) {
    assert.doesNotMatch(readFileSync(file, 'utf8'), vendorNames, `${file} exposes an implementation vendor in public copy`);
  }
});

test('every visible form control has a programmatic label', () => {
  const controls = [...contact.matchAll(/<(?:input|select|textarea)\b[^>]*\bid="([^"]+)"[^>]*>/g)]
    .map(match => match[1]);
  assert.ok(controls.length >= 7);
  for (const id of controls) {
    assert.match(contact, new RegExp(`<label\\b[^>]*htmlFor="${id}"`), `Missing label for #${id}`);
  }
});

test('submission states remain accessible and duplicate submissions are blocked', () => {
  assert.match(contact, /aria-busy=\{submitState === 'submitting'\}/);
  assert.match(contact, /disabled=\{submitState === 'submitting'\}/);
  assert.match(contact, /role=\{submitState === 'error' \? 'alert' : 'status'\}/);
  assert.match(contact, /aria-live=\{submitState === 'error' \? 'assertive' : 'polite'\}/);
  assert.match(contact, /submissionInProgress\.current/);
  assert.match(contact, /form\.reportValidity\(\)/);
});

test('responsive rules cover the review breakpoints without hiding the form', () => {
  for (const breakpoint of ['1180px', '1023px', '639px', '359px']) {
    assert.ok(css.includes(`max-width:${breakpoint}`), `Missing max-width breakpoint ${breakpoint}`);
  }
  assert.match(css, /@media \(min-width: 640px\) and \(max-width: 1000px\) \{ \.consultation-row \{ display: grid;/);
  assert.match(css, /@media \(max-width: 639px\) \{ \.consultation-form \{ padding: 24px 20px; \} \}/);
  assert.match(css, /\.contact-grid, \.about-grid \{ gap: 40px; \}/);
  assert.match(css, /\.about-grid, \.contact-grid \{ grid-template-columns: 1fr;/);
});
