import data from "../../../data";


const editNews = {
    render(id) {
        const result = data.find((post) => post.id === id);
        return `
        <img src="${result.img}" />
            <div>${result.desc}</div>
        `;
    },
};

export default editNews;