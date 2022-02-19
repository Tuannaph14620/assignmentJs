/* eslint-disable eol-last */
import instance from "./config";

export const getAll = () => {
    const url = `/products`;
    return instance.get(url);
};
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
        const url = `/products/1?_expand=categories`;
        return instance.get(url);
    }
    // export const getCateProduct = (id) => {
    //     const url = `/products/${id}?_embed=category`;
    //     return instance.get(url);
    // };