import axios from "axios";

const base=axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
})

const users= axios.create({
    baseURL:`${base}/users`,
});

const posts=axios.create({
    baseURL: `${base}/posts`,
});

const comments=axios.create({
    baseURL: `${base}/comments`,
});

export const getPosts = async ()=>{
    try {
        const response = await posts.get();
        return response.data;
    } catch (error) {
        throw new Error("Error obteniendo posts:",error);
    }
}
export const getPostsById = async (postId) =>{
    try {
        const response = await posts.get(`/${postId}`);
        return response.data;
    } catch (error) {
        throw new Error(`Error obteniendo el post con el ID ${postId}`,error);
    }
}
export const getUsers = async ()=>{
    try {
        const response = await users.get();
        return response.data;
    } catch (error) {
        throw new Error("Error obteniendo usuarios:",error);
    }
}
export const getCommentsForPost = async (postId)=>{
    try {
        const response = await comments.get(`?postId=${postId}`);
        return response.data;
    } catch (error) {
        throw new Error(`Error obteniendo comentarios del post ${postId}`,error);
    }
}

export const createPost = async (postData) =>{
    try {
        const response = await posts.post('',postData);
        return response.data;
    } catch (error) {
        throw new Error(`Error creando post:`,error);
    }
}