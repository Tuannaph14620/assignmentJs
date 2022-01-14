const headerIndex = {
    render() {
        return /*html*/ `<header>
        <div class="bg-blue-900 py-4">
            <a href="">
                <img src="LAP1/image/logo.png" alt="" class="mx-auto">
            </a>
        </div>
        <div class="flex justify-between p-3 bg-orange-400 items-center">
            <ul class="flex">
                <li><a href="/" class=" mr-10 hover:text-blue-800 underline">Trang chủ</a></li>
                <li>
                    <a href="/tuyensinh" class="mr-10 hover:text-blue-800">Tuyển sinh </a>
                </li>
                <li>
                    <a href="/chuongtrinhdaotao" class="mr-10 hover:text-blue-800">Chương trình đào tạo </a>
                </li>
                <li>
                    <a href="/gocsinhvien" class="mr-10 hover:text-blue-800">Góc sinh viên </a>
                </li>
                <li>
                    <a href="/tuyendung" class="mr-10 hover:text-blue-800">Tuyển dụng </a>
                </li>
                <li>
                    <a href="/signin" class="mr-10 hover:text-blue-800 font-bold ">Đăng nhập </a>
                </li>
            </ul>
            <div class="search">
                <input type="text" class="p-1" />
                <input type="submit" value="Tìm kiếm" class="border-2 p-1 bg-blue-800 text-sm text-white" />
            </div>

        </div>
        <div class="banner">
            <img class="w-full pt-2" src="LAP1/image/banner.jpg" alt="">
        </div>

    </header>`;
    },
};

export default headerIndex;