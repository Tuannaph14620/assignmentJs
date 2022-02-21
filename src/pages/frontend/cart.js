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
import { addOrder } from "../../api/orders";
import footerIndex from "../../components/footer";

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
              <div class="flex justify-between px-14"> 
                <div class="boxleft1">
                  <div class="max-w-full flex">
                    <div class="w-screen max-w-md">
                      <div class="h-full flex flex-col bg-white">
                        <div class="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                          <div class="flex items-start justify-between">
                            <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Giỏ hàng của bạn</h2>
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
                            <a href="#" class="btn_checkout flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">Comfirm</a>
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

                <div class = "mt-6">
                  <div class="mt-10 sm:mt-0">
                    <div class="md:grid md:grid-cols-3 md:gap-6">
                      <div class="md:mt-0 md:col-span-3">
                        <div class="md:col-span-1">
                          <div class="px-4 sm:px-0">
                            <h3 class="text-lg font-medium leading-6 text-gray-900">Thông tin cá nhận</h3>
                            <p class="mt-1 text-sm text-gray-600">Điền thông tin cá nhân để nhận hàng</p>
                          </div>
                        </div>
                        <form action="#" method="POST">
                          <div class="shadow overflow-hidden sm:rounded-md mt-5">
                            <div class="px-4 py-5 bg-white sm:p-6">
                              <div class="grid grid-cols-6 gap-6">
                                <div class="col-span-6 sm:col-span-3">
                                  <label for="first-name" class="block text-sm font-medium text-gray-700">Tên</label>
                                  <input type="text" name="first-name" id="first-name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                </div>
                  
                                <div class="col-span-6 sm:col-span-3">
                                  <label for="last-name" class="block text-sm font-medium text-gray-700">Họ đệm</label>
                                  <input type="text" name="last-name" id="last-name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                </div>
                  
                                <div class="col-span-6 sm:col-span-3">
                                  <label for="email-address" class="block text-sm font-medium text-gray-700">Email </label>
                                  <input type="text" name="email-address" id="email" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                  <label for="email-address" class="block text-sm font-medium text-gray-700">Số điện thoại</label>
                                  <input type="text" name="phone" id="phone" autocomplete="phone" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                </div>
                                <div class="col-span-6">
                                  <label for="street-address" class="block text-sm font-medium text-gray-700">Địa chỉ</label>
                                  <input type="text" name="street-address" id="address" autocomplete="street-address" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                </div>
                  
                                <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                  <label for="city" class="block text-sm font-medium text-gray-700">Thành phố, tỉnh</label>
                                  <input type="text" name="city" id="city" autocomplete="address-level2" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                </div>
                  
                                <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                  <label for="region" class="block text-sm font-medium text-gray-700">Quận, huyện</label>
                                  <input type="text" name="region" id="region" autocomplete="address-level1" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                </div>
                  
                                <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                  <label for="postal-code" class="block text-sm font-medium text-gray-700">ZIP / Postal code</label>
                                  <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                <input type="radio"  id="ptgh" value="0">
                                  <label >Standard Express <br><span style="font-size: 13px; color: gray;">Nhận hàng trong vòng 5 ngày, đổi trả miễn phí</span></label> 
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                  <input type="radio" id="ptgh" value="1">
                                  <label >J&T Express <br><span style="font-size: 13px; color: gray;">Nhận hàng trong vòng 3 ngày,đổi trả miễn phí</span></label> 
                                </div>
                              </div>
                            </div>
                            
                            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                              <button type="button" class="btn_checkout inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>  
                </div>
              </div>
            </main>
            <div id="footer">${footerIndex.render()} </div>
            `;

    },

    afterRender(){
      headerIndex.afterRender()
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

      let cart = [];
      if (localStorage.getItem("cart")) {
          cart = JSON.parse(localStorage.getItem("cart"));
      }
      let user;
      if (localStorage.getItem("user")) {
        user = JSON.parse(localStorage.getItem("user")).id
      }
      const btn_checkout = document.querySelector(".btn_checkout")
      btn_checkout.addEventListener('click', (e)=>{
        e.preventDefault
        console.log(cart);
        addOrder({
          userId: user,
          product: cart ,
          status: 0,
          createdAt: new Date().getTime(),
          phone: document.querySelector("#phone").value,
          firstName: document.querySelector('#first-name').value,
          lastName: document.querySelector('#last-name').value,
          email: document.querySelector('#email').value,
          address: document.querySelector('#address').value,
          city: document.querySelector('#city').value,
          district:document.querySelector('#region').value,
          ptgh:document.querySelector('#ptgh').value,
        })
        localStorage.removeItem('cart')
        reRender(cartPage, "#app")
      })

  }
};
export default cartPage;