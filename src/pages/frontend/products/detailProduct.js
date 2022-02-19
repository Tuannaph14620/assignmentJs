/* eslint-disable space-before-function-paren */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */

import toastr from "toastr";
import {get } from "../../../api/products";
import headerIndex from "../../../components/header";
import { addToCart } from "../../../utils/carts";
import { $ } from "../../../utils/selector";
import "toastr/build/toastr.min.css";
// import data from "../data";

const detailProducts = {
    async render(id) {
        const { data } = await get(id);
        return /* html */ `
        <div id="header">${headerIndex.render()} </div>
        <main class = " px-10">
        <section>
        <div> 
            <div class = "flex justify-between pt-10">
                <div class="pro1">
                    <img src="${data.img}" width="500px" height="500px" alt="" >
                </div>
                <div class="pro2">
                    <h3>${data.title}</h3>
                    <div class="price1">
                        Giá chỉ từ: ${data.price}đ
                    </div>
                    <div class="small">
                        <small>Giao hàng tiêu chuẩn Vương quốc Anh Giao hàng miễn phí cho tất cả các đơn đặt hàng trên 2 triệu đồng.
                            <br> Giao hàng trong vòng 3 - 5 ngày.</small>
                    </div>
                    <br>
                    <br>
                    <form action="">
                        <input type="hidden" name="image" value="<?= $sp['image'] ?>">
                        <input type="hidden" name="name" value="<?= $sp['name'] ?>">
                        <input type="hidden" name="price" value="<?= $sp['price'] ?>">
                        <input type="hidden" name="id" value="<?= $sp['id'] ?>">                         
                        <div class="bt1">
                        <input type="number" id="inputQty" class="border border-gray-400 p-3" value="1" />
                        <button id="btnAddToCart" class="inline-block px-4 py-3 text-white bg-indigo-500 rounded hover:bg-indigo-700">Add to cart</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        <section>
            <h2 class="text3">Sản Phẩm Liên Quan</h2>
            <div class="product1" style="margin-top: 50px;">
                <?php foreach ($add as $sp) : ?>
                    <div class="col1">
                        <a href="index.php?act=ctsp&id=<?= $sp['id'] ?>"><img style="width: 100%;" src="img/<?= $sp['image'] ?>" alt=""></a>
                        <p style="font-weight: 600;"><?= $sp['name'] ?></p>
                        <p><?= number_format($sp['price']) ?>đ</p>
                    </div>
                <?php endforeach ?>
            </div>
        </section>
        </main>
        `;
    },

    afterRender(id) {
        $("#btnAddToCart").addEventListener("click", async() => {
            const { data } = await get(id);
            addToCart({...data, quantity: +$("#inputQty").value }, () => {
                toastr.success("Thêm thành công");
            });
        });
    },
};
export default detailProducts;