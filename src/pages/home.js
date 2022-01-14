import headerIndex from "../components/header";
import News from "../components/news";


const HomePage = {
    render() {
        return /* html */ `
            ${headerIndex.render()}
            <div class="news">
                ${News.render()}
            </div>
        `;
    },
};
export default HomePage;