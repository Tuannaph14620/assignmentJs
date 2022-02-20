/* eslint-disable eol-last */
import instance from "./config";

export const getAllCate = () => {
    const url = `/categorys`;
    return instance.get(url);
};
export const getCate = (id) => {
    const url = `/categorys/${id}`;
    return instance.get(url);
};
export const addCate = (category) => {
    const url = `/categorys`;
    return instance.category(url, category);
};
export const updateCate = (category) => {
    const url = `/categorys/${category.id}`;
    return instance.put(url, category);
};
export const removeCate = (id) => {
    const url = `/categorys/${id}`;
    return instance.delete(url);
};
export const getProductCate = (id) => {
    const url = `/categorys/${id}?_embed=products`;
    return instance.get(url);
}
export default instance;