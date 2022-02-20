/* eslint-disable indent */
/* eslint-disable eol-last */

import { getProductCate2 } from "../api/products";
import { getAllPost } from "../api/post";
import { getAll } from "../api/products";


const News = {
        async render() {
            const catePro1 = await getProductCate2()
            console.log(catePro1.data.products);
            const posts = await getAllPost()
            const { data } = await getAll()
            return /* html */ `
            <div class = "px-10">
            <h2 class="py-4 font-bold text-2xl uppercase">Sản Phẩm được quan tâm</h2>
            <div class = "news">
                <div class="flex flex-wrap justify-between  gap-px ">
                ${data
        .map(
            (post) => `
                    <div class="col w-1/6 p-4">
                        <a href="/#/news/${post.id}"><img class="w-full" src="${post.img}" alt=""></a>
                        <a href="/news/${post.id}">
                            <h3 class="py-2 font-bold text-red-500">${post.title}</h3>
                        </a>
                        <p>${Number(post.price).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</p>
                    </div>
                    `,
        )
        .join("")}
                    </div>
                    </div>

        <h2 class="py-4 font-bold text-2xl uppercase">Hoạt động sinh viên</h2>
        <div class = "news">
                <div class="flex flex-wrap justify-between  gap-px ">
                ${catePro1.data.products
        .map(
            (post) => `
                    <div class="col w-1/6 p-4">
                        <a href="/#/news/${post.id}"><img class="w-full" src="${post.img}" alt=""></a>
                        <a href="/news/${post.id}">
                            <h3 class="py-2 font-bold text-red-500">${post.title}</h3>
                        </a>
                        <p>${post.price} vnd</p>
                    </div>
                    `,
        )
        .join("")}
                    </div>
                    </div>

        <section>
        <div class="text">
            <div class="text1" style="margin-bottom: 20px;">
                <h2 class ="py-4 font-bold text-2xl uppercase">Khám Phá</h2>
            </div>
        </div>
        <div class="flex justify-between gap-4">
        ${posts.data.map((item)=> /*html*/`
        <div class="w-2/6">
                    <a href="index.php?act=cttt&id=<?= $tt['id'] ?>"><img style="width: 100%; height: 300px;" src="${item.img}" alt=""></a>
                    <p class = "font-bold" >${item.title}</p>
                    <p style="font-weight: 300;">${item.desc}</p>
                    <a style="font-size: 15px;" href="index.php?act=cttt&id=<?= $tt['id'] ?>">Xem thêm...</a>
                </div>`)}
                
        </div>
    </section>
        </div>
        
        `;
    },
};
export default News;