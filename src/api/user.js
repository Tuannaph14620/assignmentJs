/* eslint-disable eol-last */
import instance from "./config";

export const signup = (user) => {
    const url = `/signup`;
    return instance.post(url, user);
};
export const signin = (user) => {
    const url = `/login`;
    return instance.post(url, user);
};

export const getAllUser = () => {
    const url = `/users`;
    return instance.get(url);
};
export const getUser = (id) => {
    const url = `/users/${id}`;
    return instance.get(url);
};
export const updateUsers = (post) => {
    const url = `/users/${post.id}`;
    return instance.put(url, post);
};
export const removeUser = (id) => {
    const url = `/users/${id}`;
    return instance.delete(url);
};