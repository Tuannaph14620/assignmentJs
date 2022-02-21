/* eslint-disable indent */
/* eslint-disable eol-last */

import { getProductCate2 } from "../api/products";
import { getAllPost } from "../api/post";
import { getAll } from "../api/products";


const News = {
        async render() {
            const catePro1 = await getProductCate2()
            console.log(catePro1.data.products);
            const posts = await getAllPost()
            const { data } = await getAll()
            return /* html */ `
            <img class="w-full" src="https://res.cloudinary.com/dl8w6p4sf/image/upload/v1645431114/banner1_jk61q3.webp" alt=""> <br>
            <img class="w-10/12 m-auto" src="https://res.cloudinary.com/dl8w6p4sf/image/upload/v1645431709/a3_zu95pj.png" alt="">
            <div class = "px-32 mt-10">
            <h2 class="py-4 text-blue-900 font-bold text-2xl uppercase">Sản phẩm mới nhất</h2>
            <div class = "news">
                <div class="flex flex-wrap justify-between  gap-px ">
                ${data
        .map(
            (post) => `
                    <div class="col w-1/6 p-4">
                        <a href="/#/news/${post.id}"><img class="w-full" src="${post.img}" alt=""></a>
                        <a href="/news/${post.id}">
                            <h3 class="py-2 font-bold text-blue-900">${post.title}</h3>
                        </a>
                        <p>${Number(post.price).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</p>
                    </div>
                    `,
        )
        .join("")}
                    </div>
                    </div>
                    <div class="bg-white">
                    <div class="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
                      <div>
                        <h2 class="text-3xl font-extrabold tracking-tight text-blue-900 sm:text-4xl">Thông số kỹ thuật</h2>
                        <p class="mt-4 text-gray-500">Kỷ niệm 10 năm mùa giải 2011/12. Áo đấu Manchester City Home Replica là mẫu áo lý tưởng để thêm vào bất kỳ bộ sưu tập nào của ManCity. Với đặc điểm là áo đấu của bộ quần áo bóng đá mùa giải 2021-22, chiếc áo đấu này chắc chắn sẽ thể hiện niềm tự hào Man City của bạn ở bất cứ nơi đâu bạn đến.</p>
                  
                        <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                          <div class="border-t border-gray-200 pt-4">
                            <dt class="font-medium text-gray-900">Xuất xứ</dt>
                            <dd class="mt-2 text-sm text-gray-500">Designed by Puma, Manchester City.</dd>
                          </div>
                  
                          <div class="border-t border-gray-200 pt-4">
                            <dt class="font-medium text-gray-900">Vật liệu</dt>
                            <dd class="mt-2 text-sm text-gray-500">DryCELL - Các vật liệu có chức năng cao hút mồ hôi ra khỏi da của bạn và giúp bạn luôn khô ráo và thoải mái khi tập luyện
                            100% Polyester tái chế</dd>
                          </div>
                  
                          <div class="border-t border-gray-200 pt-4">
                            <dt class="font-medium text-gray-900">Logo</dt>
                            <dd class="mt-2 text-sm text-gray-500">Logo PUMA Cat trên ngực phải và cả hai tay áo <br>
                            Cổ chữ V với cấu trúc xương sườn ở phía sau và lớp vải vỏ ở phía trước</dd>
                          </div>
                  
                          <div class="border-t border-gray-200 pt-4">
                            <dt class="font-medium text-gray-900">Cấu trúc</dt>
                            <dd class="mt-2 text-sm text-gray-500">Kết cấu tay áo cố định <br>
                            Vòng bít ngoại quan tương phản trên cả hai tay áo<br>
                            Màu in trên vai trên<br>
                            Viền thẳng với kết thúc kim đôi</dd>
                          </div>
                        </dl>
                      </div>
                      <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                        <img src="https://res.cloudinary.com/dl8w6p4sf/image/upload/v1645431711/a5_dsqt0r.png" alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." class="bg-gray-100 rounded-lg">
                        <img src="https://res.cloudinary.com/dl8w6p4sf/image/upload/v1645431709/a2_cunjge.png" alt="Top down view of walnut card tray with embedded magnets and card groove." class="bg-gray-100 rounded-lg">
                        <img src="https://res.cloudinary.com/dl8w6p4sf/image/upload/v1645431709/a4_w8sgtj.png" alt="Side of walnut card tray with card groove and recessed card area." class="bg-gray-100 rounded-lg">
                        <img src="https://res.cloudinary.com/dl8w6p4sf/image/upload/v1645431708/a1_qfg8xr.png" alt="Walnut card tray filled with cards and card angled in dedicated groove." class="bg-gray-100 rounded-lg">
                      </div>
                    </div>
                  </div>
        <h2 class="py-4 mt-10 font-bold text-blue-900 text-2xl uppercase">Sản phẩm được quan tâm</h2>
        <div class = "news">
                <div class="flex flex-wrap justify-between  gap-px ">
                ${catePro1.data.products
        .map(
            (post) => `
                    <div class="col w-1/6 p-4">
                        <a href="/#/news/${post.id}"><img class="w-full" src="${post.img}" alt=""></a>
                        <a href="/news/${post.id}">
                            <h3 class="py-2 font-bold text-blue-900">${post.title}</h3>
                        </a>
                        <p>${Number(post.price).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</p>
                    </div>
                    `,
        )
        .join("")}
                    </div>
                    </div>

        <section>
        <div class="text">
            <div class="text1" style="margin-bottom: 20px;">
                <h2 class ="py-4 mt-10 font-bold text-2xl text-blue-900 uppercase">Khám Phá</h2>
            </div>
        </div>
        <div class="flex justify-between gap-4">
        ${posts.data.map((item)=> /*html*/`
        <div class="w-2/6">
                    <a href="index.php?act=cttt&id=<?= $tt['id'] ?>"><img style="width: 100%; height: 300px;" src="${item.img}" alt=""></a>
                    <p class = "font-bold text-blue-900" >${item.title}</p>
                    <p style="font-weight: 300;">${item.desc}</p>
                    <a style="font-size: 15px;" href="index.php?act=cttt&id=<?= $tt['id'] ?>">Xem thêm...</a>
                </div>`)}
                
        </div>
    </section>
        </div>
        
        `;
    },
};
export default News;