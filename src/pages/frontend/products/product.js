/* eslint-disable indent */
/* eslint-disable arrow-spacing */
/* eslint-disable eol-last */
import { getAllCate } from "../../../api/category";
import { getAll, getAllProduct, getProductCate1, getProductCate2, getProductCate3 } from "../../../api/products";
import headerIndex from "../../../components/header";

const allProduct = {
        async render() {
            const items = await getAllCate()
            console.log(items.data);
            const { data } = await getAllProduct();
            return /* html */ `
            <div id="header">${headerIndex.render()} </div>
            <main class = "px-10">
                <div class="box">
                    <div class="boxleft">
                        <section>
                            <div class="text1" style="margin-top: 30px;">
                                <h2 class = "font-bold text-xl">Danh mục sản phẩm</h2>
                                <div>
                                <select class="form-select appearance-none w-50 px-3 py-1.5 font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out mt-3">
                                ${items.data.map((val)=>`<option value="${val.id}">${val.name}</option>
                                
                                `)}
                                </select>
                            </div>
                            </div>
                        </section>
                    </div>
                    <div class="mt-8">
                        <section>
                            <div class="">
                                <h2 class ="font-bold text-xl pb-10">Tất cả sản phẩm</h2>
                            </div>
                        </section>
                        <section>
                            <div class="box_items flex flex-wrap justify-between  gap-px ">
                                ${data.map((product)=>/* html */`
                                <div class="w-1/6">
                                <a href="/#//news/${product.id}"><img class = "w-full" src="${product.img}" alt=""></a>
                                <p style="font-weight: 600;">${product.title}</p>
                                <p style="font-size: 15px;">${Number(product.price).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</p>
                                </div>`).join("")}
                            </div>
                        </section>
                    </div>
                </div>
                
            </main>`;
    },
afterRender(){
        headerIndex.afterRender()
        const form_select = document.querySelector('.form-select')
        form_select.addEventListener('change', async () =>{
            if(form_select.value == 1){
                console.log(1);
                const data1 = await getProductCate1()
                handlerRender(data1.data.products)
            }else if(form_select.value == 2){
                console.log(2);
                const data2 = await getProductCate2()
                handlerRender(data2.data.products)
            }else if(form_select.value == 3){
                console.log(2);
                const data3 = await getProductCate3()
                handlerRender(data3.data.products)
            }else{
                console.log(3);
            }
        })
        function handlerRender(data){
            console.log(data);
            const element = document.querySelector('.box_items')
            const htmls = data.map((product) =>{
                return /*html*/ `
                <div class="w-1/6">
                                <a href="/news/${product.id}"><img class = "w-full" src="${product.img}" alt=""></a>
                                <p style="font-weight: 600;">${product.title}</p>
                                <p style="font-size: 15px;">${Number(product.price).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</p>
                                </div>
                `
            }).join('')
            element.innerHTML = htmls
        }
    }
};

export default allProduct;