/** Smoothly scroll the window back to the top. */
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

/**
 * Smoothly scroll a section into view by id.
 *
 * @param {string} id       Target element id.
 * @param {number} [delay]  Wait before scrolling — use when the section lives on
 *                          another route and the page must render first.
 */
export const scrollToElement = (id, delay = 0) => {
  const scroll = () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  if (delay > 0) {
    setTimeout(scroll, delay);
  } else {
    scroll();
  }
};
