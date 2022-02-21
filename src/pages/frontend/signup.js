/* eslint-disable no-console */
/* eslint-disable space-before-function-paren */
/* eslint-disable eol-last */
import { signup } from "../../api/user";
import headerIndex from "../../components/header";

const Signup = {
    async render() {
        return /* html */ `
        <div id="header">${headerIndex.render()} </div>
        <main class = "m-auto">
    <section class="">
    <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <img class="mx-auto h-12 w-auto" src="https://res.cloudinary.com/dl8w6p4sf/image/upload/v1644822377/logo_ea3bvi.png" alt="Workflow">
        <h2 class="mt-6 text-center text-2xl font-extrabold text-blue-900">Đăng ký tài khoảng thành viên</h2>
        <p class="mt-2 text-center text-sm text-gray-600">
        </p>
      </div>
      <form class="mt-8 space-y-6" action="#" id="formSignup" >
        <input type="hidden" name="remember" value="true">
        <div class="rounded-md shadow-sm -space-y-px">
        <div>
            <label for="email-address" class="sr-only">Username</label>
            <input id="username" name="email" type="text" autocomplete="username" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username">
          </div>
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
          </div>
        </div>
  
        <div class="items-center">
        <div class="text-sm">
            <a href="/signin" class="font-medium text-blue-500 hover:text-indigo-500"> Bạn đã có tài khoản thành viên! </a>
          </div>
        </div>
  
        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <!-- Heroicon name: solid/lock-closed -->
              <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
              </svg>
            </span>
            Sign up
          </button>
        </div>
      </form>
    </div>
  </div>
    </section>
</main>
        `;
    },
    afterRender() {
        const formSignup = document.querySelector("#formSignup");
        formSignup.addEventListener("submit", async(e) => {
            e.preventDefault();
            // call api
            try {
                const response = await signup({
                    username: document.querySelector("#username").value,
                    email: document.querySelector("#email").value,
                    password: document.querySelector("#password").value,
                    permission: 1
                });
                console.log(response);
            } catch (error) {
                console.log(error.response.data);
            }
        });
    },
};
export default Signup;