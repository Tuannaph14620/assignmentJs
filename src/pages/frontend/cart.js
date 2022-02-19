/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */

import toastr from "toastr";
import { decreaseQty, increaseQty, removeItemInCart } from "../../utils/carts";
import { reRender } from "../../utils/reRender";
import { $ } from "../../utils/selector";
import "toastr/build/toastr.min.css";

/* eslint-disable eol-last */
const cartPage = {
        render() {
            let cart = [];
            if (localStorage.getItem("cart")) {
                cart = JSON.parse(localStorage.getItem("cart"));
            }
            return /* html */ `

        <main class="ml">
            <div class="box">
                <div class="boxleft1">
                    <div class="tittle">
                        <h2>Giỏ hàng của bạn</h2>
                    </div>
                    ${cart.lenght >= 0 ? cart.map((item) => /* html */`
                    <div class="content">
                        <div class="img">
                           <a href="index.php?act=ctsp&id=<?= $cart['id'] ?>"><img width="300px" height="300px" src="${item.img}" alt=""></a> 
                        </div>
                        <div class="detail">
                            <h3>${item.title}</h3>
                            <p>${item.price}</p>
                            Số lượng: <input type="number" value="${item.quantity}">
                            <button data-id="${item.id}" class="btn btn-increase inline-block p-3 bg-green-500 text-white">Tăng</button>
                            <button data-id="${item.id}" class="btn btn-decrease inline-block p-3 bg-orange-500 text-white">Giảm</button>
                            <button data-id="${item.id}" class="btn btn-remove inline-block p-3 bg-red-500 text-white">Xóa</button>
                        </div>
                    </div>`).join("") : /* html */`
                    <tr>
                        <td colspan="4">No record</td>
                    </tr>`}
                        <hr>
                </div>
            </div>
        </main>`;
    },

    afterRender() {
        $(".btn").forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEvenListener("click", () => {
                console.log(id);
                if (btn.classList.contains("btn-increase")) {
                    increaseQty(id, () => reRender(cartPage, "#app"));
                } else if (btn.classList.contains("btn-decrease")) {
                    decreaseQty(id, () => reRender(cartPage, "#app"));
                } else {
                    removeItemInCart(id, () => {
                    reRender(cartPage, "#app");
                    toastr.success("Bạn đã xóa thành công");
                    });
                }
            });
        });
    },
};
export default cartPage;