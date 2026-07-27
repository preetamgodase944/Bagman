const file = '/assets/res/GSIA_BROCHURE.pdf';

export const downloadBrochure = () => {

    const link = document.createElement('a');
    link.href = file;
    link.setAttribute('download', 'GSIA_BROCHURE.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};