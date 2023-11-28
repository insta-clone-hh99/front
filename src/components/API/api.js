import axios from 'axios'

//게시글

export const addPost = async (newPost) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL_2}/api/posts`, newPost, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        })
        console.log(response)
        return response.data
    } catch (error) {
        if (error.resonse) {
        }
    }
}

export const deletePost = async (postId) => {
    try {
        const response = await axios.delete(`${process.env.REACT_APP_SERVER_URL_2}/api/posts/${postId}`)

        return response``
    } catch (error) {}
}

export const getPost = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL_2}/api/posts`)
        console.log('response', response)
        return response.data
    } catch (error) {}
}

export const getOnePostInfo = async (postId) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL_2}/api/posts/${postId}`)

        return response.data
    } catch (error) {}
}

//댓글

export const getComments = async (postId) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL_2}/api/posts/1/comments`)
        return response.data
    } catch (error) {}
}

export const deleteComment = async (target) => {
    try {
        const response = await axios.delete(
            `${process.env.REACT_APP_SERVER_URL_2}/api/posts/${target.postId}/comments/${target.commentId}`,
        )
        return response
    } catch (error) {}
}

export const addComment = async (target) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_SERVER_URL_2}/api/posts/${target.postId}/comments/`,
            target.comment,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            },
        )

        return response
    } catch (error) {}
}

export const heartPlus = async (target) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL_2}/api/posts/${target.postId}/likes`, {
            headers: {
                Authorization: `Bearer ${target.userToken}`,
            },
        })
    } catch (error) {}
}

export const cancelHeart = async (target) => {
    try {
        const response = await axios.delete(`${process.env.REACT_APP_SERVER_URL_2}/api/posts/${target.postId}/likes`, {
            headers: {
                Authorization: `Bearer ${target.userToken}`,
            },
        })
    } catch (error) {}
}
