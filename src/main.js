/* eslint-disable eol-last */
/* eslint-disable space-before-function-paren */
import Navigo from "navigo";
import editNews from "./pages/admin/news/editNews";
import dashBoard from "./pages/admin/dashboard";
import addNews from "./pages/admin/news/addNews";
import indexNews from "./pages/admin/news/indexNews";
import HomePage from "./pages/frontend/home";
import Signup from "./pages/frontend/signup";
import Signin from "./pages/frontend/signin";
import indexCategory from "./pages/admin/category/indexCate";
import addCategory from "./pages/admin/category/add";
import editCategory from "./pages/admin/category/edit";
import allProduct from "./pages/frontend/products/product";
import detailProducts from "./pages/frontend/products/detailProduct";
import cartPage from "./pages/frontend/cart";
import productCate from "./pages/frontend/products/productCate";
import indexUsers from "./pages/admin/users/listUser";
import addUsers from "./pages/admin/users/add";
import editUsers from "./pages/admin/users/edit";
import indexOrders from "./pages/admin/orders/listOrder";
import indexDetailOrders from "./pages/admin/orders/detailOrder";

const router = new Navigo("/", { linksSelector: "a", hash: true });
const print = async(content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
    if (content.afterRender) content.afterRender(id);
};
router.on("/admin/*", () => {}, {
    before(done) {
        if (localStorage.getItem("user")) {
            const userPermission = JSON.parse(localStorage.getItem("user")).permission;
            if (userPermission === 0) {
                done();
            } else {
                document.location.href = "/";
            }
        } else {
            document.location.href = "/";
        }
    },
});

router.on({
    "/": () => {
        print(HomePage);
    },
    "/product": () => {
        print(allProduct);
    },
    "/categorys/:id?_embed=products": ({ data }) => {
        print(productCate, data.id);
    },
    "/news/:id": ({ data }) => {
        print(detailProducts, data.id);
    },
    "/signin": () => {
        print(Signin);
    },
    "/signup": () => {
        print(Signup);
    },
    "/admin/dashboard": () => {
        print(dashBoard);
    },
    "/admin/news": () => {
        print(indexNews);
    },
    "/admin/news/add": () => {
        print(addNews);
    },
    "/admin/news/:id/edit": ({ data }) => {
        print(editNews, data.id);
    },
    "/admin/cate": () => {
        print(indexCategory);
    },
    "/admin/cate/add": () => {
        print(addCategory);
    },
    "/admin/cate/:id/edit": ({ data }) => {
        print(editCategory, data.id);
    },
    "/admin/users": () => {
        print(indexUsers);
    },
    "/admin/users/add": () => {
        print(addUsers);
    },
    "/admin/users/:id/edit": ({ data }) => {
        print(editUsers, data.id);
    },
    "/admin/orders": () => {
        print(indexOrders);
    },
    "/admin/orders/:id": ({ data }) => {
        print(indexDetailOrders, data.id);
    },
    "/cart": () => {
        print(cartPage);
    },
});

router.notFound(() => print("Not Found Page"));

router.resolve();