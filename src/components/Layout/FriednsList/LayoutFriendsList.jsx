import React from 'react'
import * as S from './style'
import FriendsList from '../../FriendsList/FriendsList'

const friednsList = [
    { name: '신짱구', url: '/jjangu.jpeg' },
    { name: '전맹구', url: '/maengu.jpeg' },
    { name: '주훈이', url: '/hun.jpeg' },
    { name: '박유리', url: '/yuri.jpeg' },
    { name: '강철수', url: '/cheolsu.jpeg' },
    { name: '흰둥이', url: '/whitedog.jpeg' },
]

export default function LayoutFriendsList() {
    const userName = localStorage.getItem('name')
    const nickname = localStorage.getItem('nickname')
    return (
        <div style={{ display: 'block' }}>
            <S.RightWrapper>
                <S.RightWrapperHeader>
                    <S.ImageInfos>
                        <S.RightProfileImage src="/avatar.png" alt="이미지" />
                        <S.SubInfoWrapper>
                            <S.Myprofile>{nickname}</S.Myprofile>
                            <S.SubInfo>{userName}</S.SubInfo>
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
                        <FriendsList friednsList={friednsList} name={name} />
                    ))}
                </S.FriendsListWrapper>
                <S.Info>소개.도움말.홍보 센터.API 채용 정보.</S.Info>
                <S.Info>개인정보처리방침.약관.위치.언어.Meta Verified</S.Info>
                <br />
                <S.Info>© 2023 INSTAGRAM FROM META</S.Info>
            </S.RightWrapper>
        </div>
    )
}
