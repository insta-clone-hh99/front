import axios from 'axios'

//게시글

export const addPost = async (target) => {
    try {
        const formData = new FormData()
        formData.append('images', target.images)
        formData.append('content', target.content)
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL_2}/api/posts`, formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                'Content-Type': 'multipart/form-data',
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
        const response = await axios.delete(`${process.env.REACT_APP_SERVER_URL_2}/api/posts/${postId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        })

        return response
    } catch (error) {
        if (error.response) {
            if (error.response.status === 404) {
                alert('해당 게시글 작성자가 아니면 삭제하실 수 없습니다.')
            }
        }
    }
}

export const getPost = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL_2}/api/posts`)
        return response.data
    } catch (error) {}
}

export const getOnePostInfo = async (postId) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL_2}/api/posts/${postId}`)
        console.log('response', response)
        return response
    } catch (error) {}
}

//댓글

export const getComments = async (postId) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL_2}/api/posts/${postId}/comments`)
        return response.data
    } catch (error) {}
}

export const deleteComment = async (target) => {
    try {
        const response = await axios.delete(
            `${process.env.REACT_APP_SERVER_URL_2}/api/posts/${target.postId}/comments/${target.commentId}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            },
        )
        return response
    } catch (error) {
        console.log('error', error)
        if (error.response) {
            if (error.response.status === 404) {
                alert('해당 댓글 작성자가 아니면 삭제하실 수 없습니다.')
            }
        }
    }
}

export const addComment = async (target) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_SERVER_URL_2}/api/posts/${target.id}/comments`,
            {
                comment: target.comment, // 'content'는 서버에서 요구하는 댓글의 텍스트 필드입니다.
            },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            },
        )

        return response.data // 서버 응답의 데이터 부분을 반환합니다.
    } catch (error) {
        console.error('Error adding comment:', error)
        throw error // 에러를 다시 throw하여 호출자에게 전파합니다.
    }
}

export const heartPlus = async (postId) => {
    const data = null
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_SERVER_URL_2}/api/posts/${postId}/likes`,
            data, // 두 번째 매개변수로 null을 전달하여 데이터를 제외하고 요청
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            },
        )
        return response
    } catch (error) {
        // 오류 처리 코드 추가
    }
}

export const cancelHeart = async (postId) => {
    const data = null
    try {
        const response = await axios.delete(`${process.env.REACT_APP_SERVER_URL_2}/api/posts/${postId}/likes`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        })
        return response
    } catch (error) {
        // 오류 처리 코드 추가
    }
}
