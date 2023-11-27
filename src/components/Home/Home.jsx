import React, { useState } from 'react'
import * as S from './style'
import Post from '../Post.jsx/Post'
import { useQuery } from 'react-query'
import { getPost } from '../API/api'
import FriendsList from '../FriendsList/FriendsList'
import Navigation from '../../Navigation/Navigation'
import { Portal } from 'react-portal'
import NewPostModal from '../Modal/NewPostModal/NewPostModal'

export default function Home() {
    const [isOpenFirstModal, setIsOpenFirstModal] = useState(false)

    const navigationBar = [
        { title: '홈', url: '/home.png' },
        { title: '검색', url: '/zoom.png' },
        { title: '탐색 탭', url: '/map2.png' },
        { title: '릴스', url: '/video.png' },
        { title: '메시지', url: '/message.png' },
        { title: '알림', url: '/heart.png' },
        { title: '만들기', url: '/plus.png' },
        { title: '프로필', url: '/profile.png' },
    ]

    const friednsList = [
        { name: '신짱구', url: '/jjangu.jpeg' },
        { name: '전맹구', url: '/maengu.jpeg' },
        { name: '주훈이', url: '/hun.jpeg' },
        { name: '박유리', url: '/yuri.jpeg' },
        { name: '강철수', url: '/cheolsu.jpeg' },
        { name: '흰둥이', url: '/whitedog.jpeg' },
    ]

    const { data } = useQuery('post', getPost)

    const postData = data?.data

    const firstModalToggle = () => {
        setIsOpenFirstModal((prev) => !prev)
    }

    return (
        <S.Wrapper>
            <S.NavigationBar>
                <S.LogoStyle src="/logo.png" alt="로고" />
                <S.NavCategoryWrapper>
                    {navigationBar.map((data) => (
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
                                <NewPostModal onClose={firstModalToggle} setIsOpenFirstModal={setIsOpenFirstModal} />
                            </Portal>
                        )}
                    </S.NavCategoryStyle>
                </div>
            </S.NavigationBar>
            <S.ContentsWrapper>
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
                    <S.RightWrapper>
                        <S.RightWrapperHeader>
                            <S.ImageInfos>
                                <S.RightProfileImage src="/avatar.png" alt="이미지" />
                                <S.SubInfoWrapper>
                                    <S.Myprofile>Ironmin_</S.Myprofile>
                                    <S.SubInfo>주철민</S.SubInfo>
                                </S.SubInfoWrapper>
                            </S.ImageInfos>
                            <S.ChangeText> 전환 </S.ChangeText>
                        </S.RightWrapperHeader>
                        <S.BodyWrapper>
                            <S.RecommentText> 회원님을 위한 추천</S.RecommentText>
                            <S.AllInfo>모두 보기</S.AllInfo>
                        </S.BodyWrapper>
                        <S.FriendsListWrapper>
                            {friednsList.map((name) => (
                                <FriendsList name={name} />
                            ))}
                        </S.FriendsListWrapper>
                        <S.Info>소개.도움말.홍보 센터.API 채용 정보.</S.Info>
                        <S.Info>개인정보처리방침.약관.위치.언어.Meta Verified</S.Info>
                        <br />
                        <S.Info>© 2023 INSTAGRAM FROM META</S.Info>
                    </S.RightWrapper>
                </S.CenterWrapper>
            </S.ContentsWrapper>
        </S.Wrapper>
    )
}
