import React from 'react'
import * as S from './style'

export default function FriendsList({ friednsList, name }) {
    const onClickFollowBtn = () => {}
    return (
        <S.Wrapper>
            <S.Left>
                <S.TitleImage src={name.url} alt="엑박" />
                <S.TitleAndSub>
                    <S.Nickname>{name.name}</S.Nickname>
                    <S.SubInfo>회원님을 위한 추천</S.SubInfo>
                </S.TitleAndSub>
            </S.Left>
            <S.TextFollow onClick={onClickFollowBtn}>팔로우</S.TextFollow>
        </S.Wrapper>
    )
}
