import React from 'react'
import * as S from './style'

export default function FriendsList({ name }) {
    return (
        <S.Wrapper>
            <S.TitleImage src="/avatar.png" alt="엑박" />
            <S.Nickname>{name.nickname}</S.Nickname>
        </S.Wrapper>
    )
}
