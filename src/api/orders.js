 import instance from "./config";
 export const getAllOrder = () => {
     const url = `/orders`;
     return instance.get(url);
 };
 export const getOrder = (id) => {
     const url = `/orders/${id}`;
     return instance.get(url);
 };
 export const addOrder = (post) => {
     const url = `/orders`;
     return instance.post(url, post);
 };