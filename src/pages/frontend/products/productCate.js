import { getAllCate, getProductCate } from "../../../api/category"
import headerIndex from "../../../components/header"

const productCate = {
        async render(id) {
            const items = await getAllCate()
            const { data } = await getProductCate(id)
            console.log(data);
            return /*html*/ `
        <div id="header">${headerIndex.render()} </div>
            <main class = "px-10">
                <div class="box">
                    <div class="boxleft">
                        <section>
                            <div class="text1" style="margin-top: 30px;">
                                <h2>Danh mục sản phẩm</h2>
                                <ul class = "flex">
                               ${items.data.map((cate)=> `
                               <li><a class = "pr-10" href="/categorys/${cate.id}?_embed=products">${cate.name}</a></li>
                                
                               `).join("")}
                               </ul>
                            </div>
                        </section>
                    </div>
                    <div class="boxright">
                        <section>
                            <div class="">
                                <h2>Sản phẩm theo danh mục</h2>
                            </div>
                        </section>
                        <section>
                            <div class="flex flex-wrap justify-between  gap-px ">
                                ${data.product.map((product)=>/* html */`
                                <div class="w-1/6">
                                <a href="/news/${product.id}"><img class = "w-full" src="${data.img}" alt=""></a>
                                <p style="font-weight: 600;">${product.title}</p>
                                <p style="font-size: 15px;">${product.price}đ</p>
                                </div>`).join("")}
                            </div>
                        </section>
                    </div>
                </div>
                
            </main>
        `
    }
}
export default productCate