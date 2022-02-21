/* eslint-disable eqeqeq */
/* eslint-disable no-nested-ternary */
/* eslint-disable indent */
/* eslint-disable eol-last */
import { getAllProduct, remove } from "../../../api/products";
import headerAdmin from "../../../components/headerAdmin";
import { reRender } from "../../../utils/reRender";

const indexNews = {
        async render() {
            const { data } = await getAllProduct();
            return /* html */ `
        ${headerAdmin.render()}
        <div class="lg:flex lg:items-center lg:justify-between pt-10">
        <div class="flex-1 min-w-0">
            <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                Quản lý sản phẩm

            </h2>

        </div>
        <div class="mt-5 flex lg:mt-0 lg:ml-4">
            <span class="sm:ml-3">
            <a href="/admin/news/add">
            <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <!-- Heroicon name: solid/check -->
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
              Thêm mới
            </button>
            </a>
          </span>
        </div>
    </div>
        <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200 mt-10">
                        <thead class="bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    STT
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Category Name
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Name
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Price
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Image
                                </th>   
                                <th scope="col" class="relative px-6 py-3">
                                    <span class="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>

                        <tbody class="bg-white divide-y divide-gray-200">
                            ${data.map((post) => /* html */`
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    ${post.id}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                ${post.categoryId === 2 ? "Trang phục sân nhà" : post.categoryId == 1 ? "Trang phục sân khách" : "Trang phục sân tập"}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    ${post.title}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                ${Number(post.price).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                                </td>
                                <td class="px-6 py-4 ">
                                <img src="${post.img}" alt="" width="100px">
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <a href="/admin/news/${post.id}/edit" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                                    <button data-id=${post.id} class="btn btn-remove">Remove</button>
                                </td>
                            </tr>`).join("")}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
`;
    },

    afterRender() {
        const btns = document.querySelectorAll(".btn");

        btns.forEach((button) => {
            const { id } = button.dataset;
            button.addEventListener("click", () => {
                const confirm = window.confirm("Bạn có muốn xóa không");
                if (confirm) {
                    remove(id)
                        .then(() => console.log("xóa thành công"))
                        .then(() => reRender(indexNews, "#app"));
                }
            });
        });
    },

};

export default indexNews;