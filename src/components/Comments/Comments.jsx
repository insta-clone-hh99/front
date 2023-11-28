import React, { useState } from 'react'
import * as S from './style'
import { useQuery } from 'react-query'
import { getComments } from '../API/api'

export default function Comments({ detailedInfo }) {
    const [isHeart, setIsHeart] = useState(false)

    const { data } = useQuery('comment', getComments)

    console.log(data)

    const onClickHeart = () => {
        setIsHeart((prev) => !prev)
    }
    return (
        <S.Wrapper>
            <S.Header>
                <S.HeaderContentsWrapper>
                    <S.ImageStyle src="/avatar.png" alt="엑박" />
                    <S.CommentStyle>{detailedInfo.userName}</S.CommentStyle>
                    <S.CommentStyle>{detailedInfo.contents}</S.CommentStyle>
                    <S.HiddenHeart onClick={onClickHeart} color="#262528" size={20} />
                </S.HeaderContentsWrapper>
            </S.Header>
            <S.ContentsWrapper>
                <S.LeftWrapper>
                    <S.ImageStyle src="/avatar.png" alt="엑박" />
                    <S.CommentStyle>Ironmin_</S.CommentStyle>
                    <S.CommentStyle>안녕하세요. 흥민이형</S.CommentStyle>
                </S.LeftWrapper>
                {!isHeart && <S.Heart color="white" onClick={onClickHeart} size={20} />}
                {isHeart && <S.FullHeart color="red" onClick={onClickHeart} size={20} />}
            </S.ContentsWrapper>
        </S.Wrapper>
    )
}
