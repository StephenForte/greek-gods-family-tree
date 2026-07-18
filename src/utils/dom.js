/**
 * Escape a string for safe insertion into HTML text/attribute contexts.
 * Prevents XSS when building markup from data or user-controlled strings.
 */
export function escapeHtml(value) {
  if (value == null) return '';
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Escape for use inside HTML attribute values (same rules as escapeHtml).
 */
export function escapeAttr(value) {
  return escapeHtml(value);
}

/**
 * Create an element with optional className, text, attributes, and children.
 * Prefer this over innerHTML for untrusted or dynamic text.
 */
export function el(tag, options = {}, children = []) {
  const node = document.createElement(tag);
  const { className, text, html, attrs = {}, dataset = {}, on = {} } = options;

  if (className) node.className = className;
  if (text != null) node.textContent = text;
  if (html != null) node.innerHTML = html;

  for (const [key, value] of Object.entries(attrs)) {
    if (value == null || value === false) continue;
    if (value === true) node.setAttribute(key, '');
    else node.setAttribute(key, String(value));
  }

  for (const [key, value] of Object.entries(dataset)) {
    node.dataset[key] = String(value);
  }

  for (const [event, handler] of Object.entries(on)) {
    node.addEventListener(event, handler);
  }

  for (const child of children) {
    if (child == null) continue;
    node.appendChild(typeof child === 'string' ? document.createTextNode(child) : child);
  }

  return node;
}

/**
 * Focus the first focusable element inside a container, if any.
 */
export function focusFirstFocusable(container) {
  if (!container) return null;
  const focusable = container.querySelector(
    'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
  );
  focusable?.focus();
  return focusable ?? null;
}

/**
 * Trap Tab focus within a container (returns cleanup).
 */
export function trapFocus(container, event) {
  if (event.key !== 'Tab') return;

  const focusable = [
    ...container.querySelectorAll(
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    ),
  ].filter((node) => node.offsetParent !== null || node === document.activeElement);

  if (focusable.length === 0) {
    event.preventDefault();
    return;
  }

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}
