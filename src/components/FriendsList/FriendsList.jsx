import React from 'react'
import * as S from './style'

export default function FriendsList({ name }) {
    return (
        <S.Wrapper>
            <S.Left>
                <S.TitleImage src={name.url} alt="엑박" />
                <S.TitleAndSub>
                    <S.Nickname>{name.name}</S.Nickname>
                    <S.SubInfo>회원님을 위한 추천</S.SubInfo>
                </S.TitleAndSub>
            </S.Left>
            <S.TextFollow>팔로우</S.TextFollow>
        </S.Wrapper>
    )
}
