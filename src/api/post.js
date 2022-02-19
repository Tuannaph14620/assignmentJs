import instance from "./config";

export const getAllPost = () => {
    const url = `/posts`;
    return instance.get(url);
};
export const getPost = (id) => {
    const url = `/posts/${id}`;
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