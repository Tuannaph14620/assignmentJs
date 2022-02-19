/* eslint-disable object-shorthand */
/* eslint-disable no-alert */
/* eslint-disable indent */
/* eslint-disable space-before-function-paren */
/* eslint-disable eol-last */
import { getCate, updateCate } from "../../../api/category";
import headerAdmin from "../../../components/headerAdmin";
import { reRender } from "../../../utils/reRender";

const editCategory = {
    async render(id) {
        const { data } = await getCate(id);
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
                <a href="/admin/cate" class="sm:ml-3">
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
          <form action="" id="form-add">
            <input type="text"
                  id="name_cate"
                  class="border border-black"
                  placeholder="Name"
                value = "${data.name}"
            > <br />
            <button class="bg-blue-500 p-4 text-white">Thêm</button>
          </form>
          <!-- /End replace -->
        </div>
      </main>
    </div>
      
      `;
    },

    afterRender(id) {
        const formAdd = document.querySelector("#form-add");
        // eslint-disable-next-line no-shadow
        formAdd.addEventListener("submit", (e) => {
            e.preventDefault();
            updateCate({
                    id: id,
                    name: document.querySelector("#name_cate").value,
                })
                .then(() => reRender(editCategory, "#app"));
            alert("Bạn đã cập nhật thành công");
        });
    },
};

export default editCategory;