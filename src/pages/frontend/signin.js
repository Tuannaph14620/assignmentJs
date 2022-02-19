/* eslint-disable space-before-function-paren */
/* eslint-disable eol-last */
import { signin } from "../../api/user";

const Signin = {
    render() {
        return /* html */ `
        <main class = "m-auto">
    <section class="bg-blue-500">
        
        <form class = "text-left" action="" id="formSignin">
            <h2>Đăng Nhập</h2> <br> <br>
            <label for="email">Email:</label> <br>
            <input type="email" class="bb" id="email"><br>
            <label for="pass">Password:</label> <br>
            <input class="bb" type="password" id="password"><br>
            <button>Đăng nhập</button>
            <br>
            <label>
                <input type="checkbox" checked="checked" name="remember"> Ghi nhớ tài khoản
            </label>
            <br>
            <h4><a href="index.php?act=qmk">Quên mật khẩu</a></h4>
            <h4>Tôi chưa đăng kí thành viên? <a href="/signup">Đăng Kí</a></h4>
        </form>    
    </section>
</main>
      `;
    },
    afterRender() {
        const formSignin = document.querySelector("#formSignin");
        formSignin.addEventListener("submit", async(e) => {
            e.preventDefault();
            try {
                const response = await signin({
                    email: document.querySelector("#email").value,
                    password: document.querySelector("#password").value,
                });
                localStorage.setItem("user", JSON.stringify(response.data.user));
                if (response.data.user.id === 1) {
                    document.location.href = "/admin/dashboard";
                } else {
                    document.location.href = "/";
                }
            } catch (error) {
                console.log(error.response.data);
            }
        });
    },
};
export default Signin;