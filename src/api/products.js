/* eslint-disable eol-last */
import instance from "./config";

export const getAll = () => {
    const url = `/products/?_limit=5`;
    return instance.get(url);
};
export const getAllProduct = () => {
    const url = `/products`;
    return instance.get(url);
}
export const get = (id) => {
    const url = `/products/${id}`;
    return instance.get(url);
};
export const add = (post) => {
    const url = `/products`;
    return instance.post(url, post);
};
export const update = (post) => {
    const url = `/products/${post.id}`;
    return instance.put(url, post);
};
export const remove = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url);
};
export const getProductCate1 = () => {
    const url = `/categorys/1?_embed=products`;
    return instance.get(url);
}
export const getProductCate2 = () => {
    const url = `/categorys/2?_embed=products`;
    return instance.get(url);
}
export const getProductCate3 = () => {
    const url = `/categorys/3?_embed=products`;
    return instance.get(url);
}
export const getProductSearch = () => {
        const url = `/products/?p_embed=products`;
        return instance.get(url);
    }
    // export const getCateProduct = (id) => {
    //     const url = `/products/${id}?_embed=category`;
    //     return instance.get(url);
    // };