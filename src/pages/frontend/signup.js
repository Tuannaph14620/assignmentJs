/* eslint-disable no-console */
/* eslint-disable space-before-function-paren */
/* eslint-disable eol-last */
import { signup } from "../../api/user";
import headerIndex from "../../components/header";

const Signup = {
    async render() {
        return /* html */ `
        ${headerIndex.render()}
            <form id="formSignup">
                <input type="text" placeholder="Username" id="username"/>
                <input type="email"  placeholder="Email" id="email"/>
                <input type="password"  placeholder="Password" id="password"/>
                <button>Đăng ký</button>
            </form>
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