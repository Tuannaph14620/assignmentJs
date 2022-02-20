/* eslint-disable eol-last */
import footerIndex from "../../components/footer";
import headerIndex from "../../components/header";
import News from "../../components/news";

const HomePage = {
    async render() {
        return /* html */ `
            <div id="header">${headerIndex.render()} </div>
            
            <div class="news">
                ${await News.render()}
            </div>

            <div id="footer">${footerIndex.render()} </div>
        `;
    },
    afterRender() {
        headerIndex.afterRender();
    },
};
export default HomePage;