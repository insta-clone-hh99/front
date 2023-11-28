import axios from 'axios'

export const addPost = async (newPost) => {
    try {
        const resonse = axios.api1.post(`${process.env.REACT_APP_SERVER_URL_1}/posts`, newPost)
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

// 로그인
export const loginUser = async ({ userEmail, userPw }) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL_1}/login`, {
            id: null,
            userEmail,
            userPw,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};