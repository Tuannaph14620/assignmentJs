/* eslint-disable eol-last */
/* eslint-disable space-before-function-paren */
// eslint-disable-next-line import/prefer-default-export
export const reRender = async(component, domElement) => {
    if (component) {
        document.querySelector(domElement).innerHTML = await component.render();
    }
    if (component.afterRender) {
        await component.afterRender();
    }
};