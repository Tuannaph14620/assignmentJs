import data from "../data";

const News = {
        render() {
            return /* html */ `
            
            <h2 class="py-4 font-bold text-2xl uppercase">Tin tức học tập</h2>
            <div class = "news">
                <div class="flex justify-between gap-6">
                ${data
                  .map(
                    (post) => `
                    <div class="col basis-1/3 border-2 p-4">
                        <a href="/news/${post.id}"><img class="w-full " src="${post.img}" alt=""></a>
                        <a href="/news/${post.id}">
                            <h3 class="py-2 font-bold text-red-500">${post.title}</h3>
                        </a>
                        <p>${post.desc}</p>
                    </div>
                    `
                  )
                  .join("")}
                    </div>
                    </div>
        <h2 class="py-4 font-bold text-2xl uppercase">Hoạt động sinh viên</h2>
        <div class="active">
            <div class="flex justify-between gap-6">
        ${data
          .map(
            (post) => `
            <div class="col basis-1/3 border-2 p-4">
                <a href="/news/${post.id}"><img class="w-full " src="${post.img}" alt=""></a>
                <a href="/news/${post.id}">
                    <h3 class="py-2 font-bold text-red-500">${post.title}</h3>
                </a>
                <p>${post.desc}</p>
            </div>
            `
          )
          .join("")}
            </div>
            
        </div>
        
        `;
  },
};
export default News;