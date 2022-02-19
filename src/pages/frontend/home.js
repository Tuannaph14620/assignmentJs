/* eslint-disable eol-last */
import headerIndex from "../../components/header";
import News from "../../components/news";

const HomePage = {
    async render() {
        return /* html */ `
        <div id="header">${headerIndex.render()} </div>
            
            <div class="news">
                ${await News.render()}
            </div>
        `;
    },
    afterRender() {
        headerIndex.afterRender();
    },
};
export default HomePage;