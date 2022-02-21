/* eslint-disable eol-last */
import instance from "./config";

export const getAll = () => {
    const url = `/products/?_sort=createdAt&_order=asc&_limit=5`;
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
export const getProductA_Z = () => {
    const url = `/categorys/?_sort=price&_order=asc`;
    return instance.get(url);
}
export const getProductZ_A = () => {
    const url = `/categorys/?_sort=price&_order=desc`;
    return instance.get(url);
}
export const getProductNew = () => {
    const url = `/categorys/?_sort=createdAt&_order=asc`;
    return instance.get(url);
}
export const getProductSearch = (post) => {
    const url = `/products/?title_like=${post}`;
    return instance.get(url);
}