import { getUser, updateUsers } from "../../../api/user";
import headerAdmin from "../../../components/headerAdmin";
import { reRender } from "../../../utils/reRender";

const editUsers = {
    async render(id) {
        const { data } = await getUser(id)
        return /* html */ `
      <div class="min-h-full">
      ${headerAdmin.render()}
    
      <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <!-- This example requires Tailwind CSS v2.0+ -->
            <div class="lg:flex lg:items-center lg:justify-between">
              <div class="flex-1 min-w-0">
                <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                  Cập nhật tài khoản
                </h2>
              </div>
              <div class="mt-5 flex lg:mt-0 lg:ml-4">
                <a href="/admin/users" class="sm:ml-3">
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
                  id="username"
                  class="border border-black"
                  placeholder="Username"
                  value = "${data.username}"
            > <br />
            
            <input type="text"
                  id="password"
                  class="border border-black"
                  placeholder="Password"
                  value = "${data.password}"
            > <br />
            
            <input type="text"
                  id="email"
                  class="border border-black"
                  placeholder="Email"
                  value = "${data.email}"
            > <br />
            <select id ="permission">
            <option value = "0">Admin</option>
            <option value = "1">Khách hàng</option>
            </select> 
            <br>
            <button class="bg-blue-500 p-4 text-white">Cập nhật</button>
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
            updateUsers({
                    id: id,
                    username: document.querySelector("#username").value,
                    password: document.querySelector("#password").value,
                    email: document.querySelector("#email").value,
                    permission: document.querySelector("#permission").value
                })
                .then(() => reRender(editUsers, "#app"));
            alert("Bạn đã Cập nhật thành công");
        });
    },
};

export default editUsers;