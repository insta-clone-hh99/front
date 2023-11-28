
import React, { useState } from 'react'
import * as S from './style'
import Post from '../Post.jsx/Post'
import { useMutation, useQuery } from 'react-query'
/* eslint-disable */
import { AddPost, addPost, getPost } from '../API/api'
import FriendsList from '../FriendsList/FriendsList'

export default function Home() {
    const [contents, setContents] = useState('')

    const testFriends = [
        { id: 1, nickname: '철수' },
        { id: 2, nickname: '짱구' },
        { id: 3, nickname: '영희' },
        { id: 4, nickname: '훈이' },
        { id: 5, nickname: '맹구' },
        { id: 6, nickname: '짱아' },
    ]

    const { data } = useQuery('post', getPost)

    const postData = data?.data

    const onChangeInput = (event) => {
        setContents(event.target.value)
    }

    const addPostMutation = useMutation(addPost, {
        onSuccess: () => {},
    })

    const onClickSubmitBtn = () => {
        const newPost = {
            content: contents,
        }
        addPostMutation.mutate(newPost)
    }

    return (
        <S.Wrapper>
            <S.LeftWrapper>
                <S.InputWrapper>
                    <img src="/avatar.png" alt="엑박" />
                    <S.InputStyle
                        value={contents}
                        onChange={onChangeInput}
                        placeholder="오늘은 무슨 일이 있으셨나요 ?"
                    />
                    <button onClick={onClickSubmitBtn}>등록하기</button>
                </S.InputWrapper>
                <S.PostStyle>
                    <S.PostHeaderWrapper>
                        <S.TitleAndTimeWrapper>
                            {postData?.map((post) => (
                                <Post post={post} />
                            ))}
                        </S.TitleAndTimeWrapper>
                    </S.PostHeaderWrapper>
                </S.PostStyle>
            </S.LeftWrapper>
            <S.RightWrapper>
                <S.RightWrapperHeader>
                    <img src="/avatar.png" alt="이미지" />
                    <div>닉네임</div>
                </S.RightWrapperHeader>
                <h3>나의 친구</h3>
                <S.FriendsListWrapper>
                    {testFriends.map((name) => (
                        <FriendsList name ={name}/>
                    ))}
                </S.FriendsListWrapper>
            </S.RightWrapper>
        </S.Wrapper>
    )
}

