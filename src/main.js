import Navigo from "navigo";
import DetailNewsPage from "./pages/detailNews";
import HomePage from "./pages/home";

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
    "/gócinhvien": () => {
        print("Góc sinh viên");
    },
    "/tuyendung": () => {
        print("Tuyển dụng");
    },
    "/news/:id": (value) => {
        console.log(value.data.id);
        print(DetailNewsPage.render(value.data.id));
    },
});

router.notFound(() => print("Not Found Page"));

router.resolve();