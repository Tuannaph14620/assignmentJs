import Navigo from "navigo";
import editNews from "./pages/admin/news/editNews";
import dashBoard from "./pages/admin/dashboard";
import addNews from "./pages/admin/news/addNews";
import indexNews from "./pages/admin/news/indexNews";
import DetailNewsPage from "./pages/detailNews";
import HomePage from "./pages/home";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";

const router = new Navigo("/", { linksSelector: "a" });
const print = (content) => {
    document.getElementById("app").innerHTML = content;
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/tuyensinh": () => {
        print("Tuyển sinh");
    },
    "/chuongtrinhdaotao": () => {
        print("Chương trình đào tạo");
    },
    "/gocsinhvien": () => {
        print("Góc sinh viên");
    },
    "/tuyendung": () => {
        print("Tuyển dụng");
    },
    "/news/:id": (value) => {
        console.log(value.data.id);
        print(DetailNewsPage.render(value.data.id));
    },
    "/signin": () => {
        print(SignIn.render());
    },
    "/signup": () => {
        print(SignUp.render());
    },
    "/admin/dashboard": () => {
        print(dashBoard.render());
    },
    "/admin/news": () => {
        print(indexNews.render());
    },
    "/admin/news/add": () => {
        print(addNews.render());
    },
    "/admin/news/:id/edit": (value) => {
        print(editNews.render(value.data.id));
    },
});

router.notFound(() => print("Not Found Page"));

router.resolve();