/* eslint-disable space-before-function-paren */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */

import toastr from "toastr";
import {get } from "../../../api/products";
import headerIndex from "../../../components/header";
import { addToCart } from "../../../utils/carts";
import { $ } from "../../../utils/selector";
import "toastr/build/toastr.min.css";
import footerIndex from "../../../components/footer";
// import data from "../data";

const detailProducts = {
    async render(id) {
        const { data } = await get(id);
        return /* html */ `
        <div id="header">${headerIndex.render()} </div>
        <main class = " px-10">
        <section>
        <div> 
            <div class = "flex justify-between px-20 pt-10">
                <div class="pro1">
                    <img src="${data.img}" width="500px" height="500px" alt="" >
                </div>
                <div class="mt-4 lg:mt-0 lg:row-span-4">
      <h2 class="sr-only">Product information</h2>
      <p class="text-3xl text-gray-900">${Number(data.price).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</p>

      <!-- Reviews -->
      <div class="mt-6">
        <h3 class="sr-only">Reviews</h3>
        <div class="flex items-center">
          <div class="flex items-center">
            <!--
              Heroicon name: solid/star

              Active: "text-gray-900", Default: "text-gray-200"
            -->
            <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>

            <!-- Heroicon name: solid/star -->
            <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>

            <!-- Heroicon name: solid/star -->
            <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>

            <!-- Heroicon name: solid/star -->
            <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>

            <!-- Heroicon name: solid/star -->
            <svg class="text-gray-200 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <p class="sr-only">4 out of 5 stars</p>
          <a href="#" class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a> 
        </div>
      </div>
     
      <form class="mt-10">
        <!-- quantity -->
        <div class ="mt-10"><input type="number" id="inputQty" class="border border-gray-400 p-3" value="1" /> </div>
        <!-- Sizes -->
        <div class="mt-10">
          <div class="flex items-center justify-between">
            <h3 class="text-sm text-gray-900 font-medium">Size</h3>
            <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
          </div>

          <fieldset class="mt-4">
            <legend class="sr-only">Choose a size</legend>
            <div class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
              
              <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-gray-50 text-gray-200 cursor-not-allowed">
                <input type="radio" name="size-choice" value="XXS" disabled class="sr-only" aria-labelledby="size-choice-0-label">
                <p id="size-choice-0-label">XXS</p>

                <div aria-hidden="true" class="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none">
                  <svg class="absolute inset-0 w-full h-full text-gray-200 stroke-2" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                    <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
                  </svg>
                </div>
              </label>
              <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                <input type="radio" name="size-choice" value="XS" class="sr-only" aria-labelledby="size-choice-1-label">
                <p id="size-choice-1-label">XS</p>
                <div class="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
              </label>

              <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                <input type="radio" name="size-choice" value="S" class="sr-only" aria-labelledby="size-choice-2-label">
                <p id="size-choice-2-label">S</p>
                <div class="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
              </label>

              <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                <input type="radio" name="size-choice" value="M" class="sr-only" aria-labelledby="size-choice-3-label">
                <p id="size-choice-3-label">M</p>

                <div class="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
              </label>
              <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                <input type="radio" name="size-choice" value="L" class="sr-only" aria-labelledby="size-choice-4-label">
                <p id="size-choice-4-label">L</p>
                <div class="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
              </label>

              <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                <input type="radio" name="size-choice" value="XL" class="sr-only" aria-labelledby="size-choice-5-label">
                <p id="size-choice-5-label">XL</p>
                <div class="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
              </label>
              <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                <input type="radio" name="size-choice" value="2XL" class="sr-only" aria-labelledby="size-choice-6-label">
                <p id="size-choice-6-label">2XL</p>
                <div class="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
              </label>
              <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                <input type="radio" name="size-choice" value="3XL" class="sr-only" aria-labelledby="size-choice-7-label">
                <p id="size-choice-7-label">3XL</p>
                <div class="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
              </label>
            </div>
          </fieldset>
        </div>

        <button id="btnAddToCart" class="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add to bag</button>
      </form>
    </div>
            </div>
        </section>
        </main>
        <div id="footer">${footerIndex.render()} </div>
        `;
    },

    afterRender(id) {

        headerIndex.afterRender()
        $("#btnAddToCart").addEventListener("click", async() => {
            const { data } = await get(id);
            addToCart({...data, quantity: +$("#inputQty").value }, () => {
                toastr.success("Thêm thành công");
            });
        });
    },
};
export default detailProducts;