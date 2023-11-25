import React, { useState } from 'react'
import * as S from './style'
import Post from '../Post.jsx/Post'
import { useMutation, useQuery } from 'react-query'
import { AddPost, addPost, getPost } from '../API/api'
import FriendsList from '../FriendsList/FriendsList'
import Navigation from '../../Navigation/Navigation'
import { Portal } from 'react-portal'
import NewPostModal from '../Modal/NewPostModal/NewPostModal'

export default function Home() {
    const [isOpenFirstModal, setIsOpenFirstModal] = useState(false)
    const [contents, setContents] = useState('')

    const testFriends = [
        { title: '홈', url: '/home.png' },
        { title: '검색', url: '/zoom.png' },
        { title: '탐색 탭', url: '/map2.png' },
        { title: '릴스', url: '/video.png' },
        { title: '메시지', url: '/message.png' },
        { title: '알림', url: '/heart.png' },
        { title: '만들기', url: '/plus.png' },
        { title: '프로필', url: '/profile.png' },
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

    const firstModalToggle = () => {
        setIsOpenFirstModal((prev) => !prev)
    }

    return (
        <S.Wrapper>
            <S.NavigationBar>
                <S.LogoStyle src="/logo.png" alt="로고" />
                <S.NavCategoryWrapper>
                    {testFriends.map((data) => (
                        <Navigation firstModalToggle={firstModalToggle} data={data} />
                    ))}
                </S.NavCategoryWrapper>
                <div>
                    <S.NavCategoryStyle>
                        <S.NavImageStyle src="/threads.png" alt="threads" />
                        <S.NavCategoryTitle>Threads</S.NavCategoryTitle>
                    </S.NavCategoryStyle>
                    <S.NavCategoryStyle>
                        <S.NavImageStyle src="/more.png" alt="more" />
                        <S.NavCategoryTitle>더 보기</S.NavCategoryTitle>
                        {isOpenFirstModal && (
                            <Portal node={document && document.getElementById('modal-root')}>
                                <NewPostModal onClose={firstModalToggle} />
                            </Portal>
                        )}
                    </S.NavCategoryStyle>
                </div>
            </S.NavigationBar>
            <S.CenterWrapper>
                <S.PostStyle>
                    <S.PostHeaderWrapper>
                        <S.TitleAndTimeWrapper>
                            {postData?.map((post) => (
                                <Post post={post} />
                            ))}
                        </S.TitleAndTimeWrapper>
                    </S.PostHeaderWrapper>
                </S.PostStyle>
            </S.CenterWrapper>
            <S.RightWrapper>
                <S.RightWrapperHeader>
                    <img src="/avatar.png" alt="이미지" />
                    <div>닉네임</div>
                </S.RightWrapperHeader>
                <h3>나의 친구</h3>
                <S.FriendsListWrapper>
                    {testFriends.map((name) => (
                        <FriendsList name={name} />
                    ))}
                </S.FriendsListWrapper>
            </S.RightWrapper>
        </S.Wrapper>
    )
}
