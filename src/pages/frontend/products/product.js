/* eslint-disable indent */
/* eslint-disable arrow-spacing */
/* eslint-disable eol-last */
import { getAllCate } from "../../../api/category";
import { getAllProduct, getProductA_Z, getProductCate1, getProductCate2, getProductCate3, getProductNew, getProductSearch, getProductZ_A } from "../../../api/products";
import headerIndex from "../../../components/header";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import footerIndex from "../../../components/footer";

const allProduct = {
        async render() {
            const items = await getAllCate()
            console.log(items.data);
            const { data } = await getAllProduct();
            return /* html */ `
            <div id="header">${headerIndex.render()} </div>
            <main class = "px-10">
                <div class="box">
                    <div class="boxleft flex">
                        <section>
                            <div class="text1 mr-10" style="margin-top: 30px;">
                                <h2 class = "font-bold text-xl">Danh mục sản phẩm</h2>
                                <div>
                                <select class="form-select appearance-none w-50 px-3 py-1.5 font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out mt-3">
                                ${items.data.map((val)=>`<option value="${val.id}">${val.name}</option>
                                
                                `)}
                                </select>
                            </div>
                        </section>
                        <section>
                            <div class="text1" style="margin-top: 30px;">
                                <h2 class = "font-bold text-xl">Lọc</h2>
                                <div>
                                <select class="form-sort appearance-none w-50 px-3 py-1.5 font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out mt-3">
                                    <option value="0">Giá từ cao đến thấp</option>
                                    <option value="1">Giá từ thấp đến cao</option>
                                    <option value="2">Mới nhất</option>
                                    <option value="3">Phổ bi</option>
                                </select>
                            </div>
                        </section>
                        <section> 
                            <div style="margin-top: 65px; margin-left:600px">
                                    <input class = "searchProduct border-4 p-2 pr-32 rounded-xl" type="text" placeholder="Tìm kiếm">
                                    <button class = "btn_search p-3 rounded-xl text-gray bg-white hover:bg-blue-400 font-bold transition" type="submit" name="search">Tìm kiếm</i></button>
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
                            <div class="box_items flex flex-wrap gap-12 ">
                                ${data.map((product)=>/* html */`
                                <div class="w-1/6 mb-24">
                                <a href="/#//news/${product.id}"><img class = "w-full" src="${product.img}" alt=""></a>
                                <p style="font-weight: 700; padding-top:20px">${product.title}</p>
                                <p style="font-size: 15px; padding-top:10px;font-weight: 400">${Number(product.price).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</p>
                                </div>`).join("")}
                            </div>
                        </section>
                    </div>
                </div>
                
            </main>
            <div id="footer">${footerIndex.render()} </div>`;
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
        const form_sort = document.querySelector('.form-sort')
        form_sort.addEventListener('change', async () =>{
            if(form_sort.value == 0){
                const data4 = await getProductZ_A()
                handlerRender(data4.data.products)
            }else if(form_sort.value == 1){
                const data5 = await getProductA_Z()
                handlerRender(data5.data.products)
            }else if(form_sort.value == 2){
                const data6 = await getProductNew()
                handlerRender(data6.data.products)
            }else{
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

        const btnSearch = document.querySelector('.btn_search')
        btnSearch.addEventListener('click', async () =>{
            const valueSearch = document.querySelector('.searchProduct')
            if(valueSearch.value != ""){
                const data = await getProductSearch(valueSearch.value)
                if(data.data.length == 0){
                    toastr({ 
                        mess: "Không tìm thấy sản phẩm bạn tìm kiếm !",
                        type: 'warning',
                        duration: 2000
                    })
                }else{
                    valueSearch.value = ""
                    handlerRender(data.data)
                }
            }else{
                toast({
                    mess: "Không tìm thấy sản phẩm bạn tìm kiếm !",
                    type: 'warning',
                    duration: 2000
                })
            }
        })
    }
};

export default allProduct;