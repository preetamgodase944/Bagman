const BROCHURE_PATH = '/assets/res/GSIA_BROCHURE.pdf';
const BROCHURE_FILENAME = 'GSIA_BROCHURE.pdf';

/** Trigger a download of the bundled GSIA brochure PDF. */
export const downloadBrochure = () => {
  const link = document.createElement('a');
  link.href = BROCHURE_PATH;
  link.download = BROCHURE_FILENAME;
  document.body.appendChild(link);
  link.click();
  link.remove();
};
