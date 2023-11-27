import axios from 'axios'

export const addPost = async (newPost) => {
    try {
        const resonse = axios.post(`${process.env.REACT_APP_SERVER_URL_1}/posts`, newPost)
        return resonse
    } catch (error) {
        if (error.resonse) {
        }
    }
}

export const getPost = () => {
    try {
        const response = axios.get(`${process.env.REACT_APP_SERVER_URL_1}/posts`)
        return response
    } catch (error) {}
}

export const getOnePostInfo = (postId) => {
    try {
        const response = axios.get(`${process.env.REACT_APP_SERVER_URL_1}/posts/${postId}`)
        
        return response
    } catch (error) {}
}
