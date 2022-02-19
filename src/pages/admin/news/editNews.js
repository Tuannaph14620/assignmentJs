/* eslint-disable indent */
/* eslint-disable object-shorthand */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable eol-last */
/* eslint-disable object-curly-spacing */
/* eslint-disable no-shadow */
/* eslint-disable space-before-function-paren */
import axios from "axios";
import { getAllCate } from "../../../api/category";
import {get, update } from "../../../api/products";
import headerAdmin from "../../../components/headerAdmin";
import { reRender } from "../../../utils/reRender";

const editNews = {
        async render(id) {
            const item = await getAllCate()
            const { data } = await get(id);
            return /* html */ `
      <div class="min-h-full">
      ${headerAdmin.render()}
    
      <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <!-- This example requires Tailwind CSS v2.0+ -->
            <div class="lg:flex lg:items-center lg:justify-between">
              <div class="flex-1 min-w-0">
                <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                  Thêm mới bài viết
                </h2>
              </div>
              <div class="mt-5 flex lg:mt-0 lg:ml-4">
                <a href="/admin/news" class="sm:ml-3">
                  <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Quay lại
                  </button>
                </a>
              </div>
            </div>
    
        </div>
      </header>
      <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <!-- Replace with your content -->
          <form action="" id="form-edit">
          <label>CategoryName:</label>
          <select id= "cate-post" >
            ${item.data.map((val) => /*html*/`
                <option value="${val.id}">${val.name}</option>
              `).join("")}

            </select>
            <br>
            <label>Name:</label>
            <input type="text"
                  id="title-post"
                  class="border border-black"
                  placeholder="Title"
                  value = "${data.title}"
            > <br />
            <label>Image:</label>
            <input type="file"
                  id="img-post"
                  class="border border-black"
                  placeholder="Image"
            > <br />
            <img src="${data.img}" alt="" width="100px">
            <br>
            <label>Price:</label>
            <input type="text"
                  id="price-post"
                  class="border border-black"
                  placeholder="Price"
                  value = "${data.price}"
            > <br />
            <textarea name="" id="desc-post" cols="30" rows="10" class="border border-black">${data.desc}</textarea><br />
            <button class="bg-blue-500 p-4 text-white">Cập nhật</button>
          </form>
          <!-- /End replace -->
        </div>
      </main>
    </div>
      
      `;
    },

    afterRender(id) {
        const img = document.querySelector("#img-post");
        img.addEventListener("change", async(e) => {
            const file = e.target.files[0];
            const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dl8w6p4sf/image/upload";
            const formData = new FormData();

            formData.append("file", file);
            formData.append("upload_preset", "jovx8mjh");

            // call api cloudinary

            const response = await axios.post(CLOUDINARY_API, formData, {
                headers: {
                    "Content-Type": "application/form-data",
                },
            });
            console.log(response.data.url);
            const formEdit = document.querySelector("#form-edit");
            formEdit.addEventListener("submit", (e) => {
                e.preventDefault();
                update({
                        id: id,
                        categoryId: document.querySelector("#cate-post"),
                        title: document.querySelector("#title-post").value,
                        img: response.data.url,
                        price: document.querySelector("#price-post").value,
                        desc: document.querySelector("#desc-post").value,
                    })
                    .then(() => reRender(editNews, "#app"));
                alert("Bạn đã cập nhật thành công");
            });
        });
    },
};

export default editNews;