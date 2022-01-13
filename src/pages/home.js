import News from "../components/news";

const HomePage = {
    render() {
        return /* html */ `
            <div class="news">
                ${News.render()}
            </div>
        `;
    },
};
export default HomePage;