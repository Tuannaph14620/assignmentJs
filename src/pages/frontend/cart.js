/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */

import toastr from "toastr";
import { decreaseQty, increaseQty, removeItemInCart } from "../../utils/carts";
import { reRender } from "../../utils/reRender";
import { $ } from "../../utils/selector";
import "toastr/build/toastr.min.css";
import headerIndex from "../../components/header";

/* eslint-disable eol-last */
const cartPage = {
        render() {
            let cart = [];
            if (localStorage.getItem("cart")) {
                cart = JSON.parse(localStorage.getItem("cart"));
            }
            let totalProducts = 0
            cart.forEach(item => {
                totalProducts += Number(item.price) * Number(item.quantity)
            })
            return /* html */ `
            <div id="header">${headerIndex.render()} </div>
        <main class="ml">
            <div class="box"> 
                <div class="boxleft1">
                  <div class=" inset-y-0 right-0 pl-10 max-w-full flex">
                    <div class="w-screen max-w-md">
                      <div class="h-full flex flex-col bg-white">
                        <div class="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                          <div class="flex items-start justify-between">
                            <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Giỏ hàng của bạn</h2>
                            <div class="ml-3 h-7 flex items-center">
                            </div>
                            </div>
                            <div class="mt-8">
                            <div class="flow-root">
                              <ul role="list" class="-my-6 divide-y divide-gray-200">
                              ${cart.map((item) => /* html */`
                                <li class="py-6 flex">
                                  <div class="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                    <img src="${item.img}" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." class="w-full h-full object-center object-cover">
                                  </div>

                                  <div class="ml-4 flex-1 flex flex-col">
                                    <div>
                                      <div class="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          <a href="#"> ${item.title} </a>
                                        </h3>
                                        <p class="ml-4">${(Number(item.price)*Number(item.quantity)).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</p>
                                      </div>
                                    </div>
                                    <div class="flex-1 flex items-end justify-between text-sm">
                                      <p class="text-gray-500">Quantity ${item.quantity}</p>
                                      <button data-id="${item.id}" class="btn btn-increase border-2 p-1  text-black">+</button>
                                      <button data-id="${item.id}" class="btn btn-decrease border-2 p-1  text-black">-</button>
                                      <div class="flex">
                                        <button data-id="${item.id}" type="button" class="btn font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                `).join("")}
                              </ul>
                            </div>
                          </div>
                        </div>
                      
                        <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
                          <div class="flex justify-between text-base font-medium text-gray-900">
                            <p>Subtotal</p>
                            <p>${totalProducts.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</p>
                          </div>
                          <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                          <div class="mt-6">
                            <a href="#" class="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">Checkout</a>
                          </div>
                          <div class="mt-6 flex justify-center text-sm text-center text-gray-500">\
                          <a href = "/product"> 
                            <p>
                              or <button type="button" class="text-indigo-600 font-medium hover:text-indigo-500">Continue Shopping<span aria-hidden="true"> &rarr;</span></button>
                            </p>
                            <a/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <div class = ""> </div>
           </div>
        </main>`;
    },

    afterRender(){
      const btns = document.querySelectorAll('.btn')
      btns.forEach(btn =>{
          const id =  btn.dataset.id
          btn.addEventListener('click', () =>{
              if(btn.classList.contains('btn-increase')){
                  increaseQty(id, () => reRender(cartPage, '#app'))
              }else if(btn.classList.contains('btn-decrease')){
                  decreaseQty(id, () => reRender(cartPage, '#app'))
              }else{
                  removeItemInCart(id, () =>{
                      reRender(cartPage, '#app')
                      toastr.success("Bạn đã xóa thành công")
                  })
              }
          })
      })

  }
};
export default cartPage;