/* eslint-disable eol-last */
/* eslint-disable import/prefer-default-export */
export const $ = (element) => {
    const selectors = document.querySelectorAll(element);
    return selectors.length === 1 ? selectors[0] : selectors;
};