import React, { useState } from 'react'
import * as S from './style'

export default function Comments() {
    const [isHeart, setIsHeart] = useState(false)

    const onClickHeart = () => {
        setIsHeart((prev) => !prev)
    }
    return (
        <S.Wrapper>
            <S.Header>
                <S.HeaderContentsWrapper>
                    <S.ImageStyle src="/avatar.png" alt="엑박" />
                    <S.CommentStyle>hm_son7</S.CommentStyle>
                    <S.CommentStyle>안녕하세요. EPL 최고의 윙어 손흥민입니다.</S.CommentStyle>
                    <S.HiddenHeart onClick={onClickHeart} color="#262528" size={20} />
                </S.HeaderContentsWrapper>
            </S.Header>
            <S.ContentsWrapper>
                <S.LeftWrapper>
                    <S.ImageStyle src="/avatar.png" alt="엑박" />
                    <S.CommentStyle>Ironmin_</S.CommentStyle>
                    <S.CommentStyle>안녕하세요. 흥민이형</S.CommentStyle>
                </S.LeftWrapper>
                {!isHeart && <S.Heart onClick={onClickHeart} size={20} />}
                {isHeart && <S.FullHeart color="red" onClick={onClickHeart} size={20} />}
            </S.ContentsWrapper>
        </S.Wrapper>
    )
}
