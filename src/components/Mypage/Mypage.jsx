import React, { useState, useEffect } from 'react'
import View from '../../assets/mypageimg.jpeg'
import * as Styled from './style'
import * as Api from '../API/api'

const user = {
    fullName: 'hyunjiyam',
    profilePicture: 'url_to_profile_picture.jpg',
    posts: [
        { imageUrl: 'url_to_post_image_1.jpg' },
        { imageUrl: 'url_to_post_image_2.jpg' },
        { imageUrl: 'url_to_post_image_3.jpg' },
        { imageUrl: 'url_to_post_image_3.jpg' },
        { imageUrl: 'url_to_post_image_1.jpg' },
        { imageUrl: 'url_to_post_image_2.jpg' },
    ],
    followers: 7321,
    following: 4321,
}

const Mypage = () => {
    const [selectedPicture, setSelectedPicture] = useState(null)
    /* eslint-disable */
    const [posts, setPosts] = useState([])
    const [editing, setEditing] = useState(false)
    const [editedName, setEditedName] = useState(user.fullName)

    useEffect(() => {
        const getPost = async () => {
            try {
                const postsData = await Api.getPosts()
                setPosts(postsData)
            } catch (error) {
                console.error('에러 posts:', error)
                throw error
            }
        }

        getPost()
    }, [])

    const handlePictureChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setSelectedPicture(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleEdit = () => {
        setEditing(true)
    }

    const handleSave = () => {
        user.fullName = editedName
        user.profilePicture = selectedPicture || user.profilePicture
        setEditing(false)
    }

    const handleCancel = () => {
        setEditing(false)
        setEditedName(user.fullName)
    }

    return (
        <Styled.Back>
            <Styled.Wrap>
                <Styled.UserProfileContainer>
                    <Styled.ProfilePicture
                        src={selectedPicture || user.profilePicture}
                        alt={`${user.fullName}'s profile`}
                    />
                    <Styled.UserInfo>
                        {editing ? (
                            <input type="text" value={editedName} onChange={(e) => setEditedName(e.target.value)} />
                        ) : (
                            <h2>{user.fullName}</h2>
                        )}
                        <Styled.ChangePictureButton>
                            프로필 사진 변경
                            <input type="file" style={{ display: 'none' }} onChange={handlePictureChange} />
                        </Styled.ChangePictureButton>
                        {editing && (
                            <>
                                <Styled.Button onClick={handleSave}>저장</Styled.Button>
                                <Styled.Button onClick={handleCancel}>취소</Styled.Button>
                            </>
                        )}
                        {!editing && <Styled.Button onClick={handleEdit}>프로필 이름 수정</Styled.Button>}
                    </Styled.UserInfo>
                    <Styled.Img src={View} alt="Mypage Image" />
                    <Styled.UserStats>
                        <Styled.StatItem>
                            게시물 <strong>{user.posts.length}</strong>
                        </Styled.StatItem>
                        <Styled.StatItem>
                            팔로워 <strong>{user.followers}</strong>
                        </Styled.StatItem>
                        <Styled.StatItem>
                            팔로잉 <strong>{user.following}</strong>
                        </Styled.StatItem>
                    </Styled.UserStats>
                    <Styled.UserPosts>
                        {user.posts.map((posts, index) => (
                            <Styled.PostContainer key={index}>
                                <Styled.PostImage src={posts.imageUrl} alt={`Post ${index + 1}`} />
                            </Styled.PostContainer>
                        ))}
                    </Styled.UserPosts>
                </Styled.UserProfileContainer>
            </Styled.Wrap>
        </Styled.Back>
    )
}

export default Mypage