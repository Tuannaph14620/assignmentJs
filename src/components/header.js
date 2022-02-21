/* eslint-disable indent */
/* eslint-disable no-alert */
import cartPage from "../pages/frontend/cart";
import { reRender } from "../utils/reRender";

const headerIndex = {
    render() {
        return /* html */ `
            <header>
        <div class=" flex justify-between px-10 items-center p-5 bg-blue-500">
            <div class="logo w-44 ">
                <a href="index.php"><img src="https://res.cloudinary.com/dl8w6p4sf/image/upload/v1644822377/logo_ea3bvi.png" alt=""></a>
                <p class= "pl-5 font-bold text-xl text-white">ManCity Shop</p>
            </div>
            
            <div class="account">
            <div>
            <span id="account" class="text-white"></span>
            ${localStorage.getItem("user") ? "<button id=\"logout\">Logout</button>" : ""}
          </div>
            <a href="/signin">Sign in</a>
            </div>
        </div>
        <div class="row2 ">
            <nav class = "flex bg-blue-400 py-5 justify-between ">
                <ul class= "flex mx-auto ">
                    <li class = "pr-10 text-lg "><a class = "hover:text-blue-600 p-5 text-white  font-bold" href="/">Trang chủ</a></li>
                    <li class = "pr-10 text-lg"><a class = "hover:text-blue-600 p-5 text-white  font-bold" href="/product">Sản phẩm</a></li>
                    <li class = "pr-10 text-lg"><a class = "hover:text-blue-600 p-5 text-white  font-bold" href="index.php?act=dstt">Tin tức</a></li>
                    <li class = "pr-10 text-lg"><a class = "hover:text-blue-600 p-5 text-white  font-bold" href="index.php?act=contactx">Liên hệ</a></li>
                    <li class = "pr-10 text-lg"><a class = "hover:text-blue-600 p-5 text-white  font-bold" href="/cart">Giỏ hàng</a></li>
                </ul>
            </nav>
        </div>
        
    </header>`;
    },
    async afterRender() {
        const account = document.querySelector("#account");
        const btnLogout = document.querySelector("#logout");
        account.innerHTML = JSON.parse(localStorage.getItem("user")).email;

        btnLogout.addEventListener("click", () => {
            localStorage.removeItem("user");
            localStorage.removeItem('cart')
            alert("Ban da logout thanh cong");
            reRender(cartPage, "#app")
            reRender(headerIndex, "#header");
        });
    },
};

// eslint-disable-next-line eol-last
export default headerIndex;