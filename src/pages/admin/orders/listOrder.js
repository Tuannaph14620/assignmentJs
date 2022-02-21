/* eslint-disable eqeqeq */
/* eslint-disable no-nested-ternary */
/* eslint-disable indent */
/* eslint-disable eol-last */
import { getAllOrder } from "../../../api/orders";
import headerAdmin from "../../../components/headerAdmin";
import { reRender } from "../../../utils/reRender";

const indexOrders = {
        async render() {
            const items = await getAllOrder();
            return /* html */ `
        ${headerAdmin.render()}
        <div class="lg:flex lg:items-center lg:justify-between pt-10">
        <div class="flex-1 min-w-0">
            <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate mb-10">
                Quản lý đơn hàng

            </h2>

        </div>
        <div class="mt-5 flex lg:mt-0 lg:ml-4">
            <span class="sm:ml-3">
          </span>
        </div>
    </div>
        <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    STT
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Name 
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Phone
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Address
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Method Shipping
                            </th>
                                <th scope="col" class="relative px-6 py-3">
                                    <span class="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>

                        <tbody class="bg-white divide-y divide-gray-200">
                            ${items.data.map((post) => /* html */`
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    ${post.id}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                ${post.firstName} ${post.lastName}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    ${post.phone}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                ${post.address} - ${post.district} - ${post.city}
                                </td>
                                <td class="px-6 py-4 ">
                                ${post.status == 0 ? "Chưa xác nhận" : post.status == 1 ? "Đang giao hàng" : "Đơn hoàn tất"}
                                </td>
                                <td class="px-6 py-4 ">
                                ${post.ptgh == 0 ? "Standard" : "Express"}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <a href="/admin/orders/${post.id}" class="text-indigo-600 hover:text-indigo-900">Xem chi tiết</a>
                                    <button data-id=${post.id} class="btn btn-remove text-red-500 hover:text-indigo-900 font-bold">Remove</button>
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

export default indexOrders;