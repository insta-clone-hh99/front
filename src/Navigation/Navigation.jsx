import React from 'react'
import * as S from './style'

export default function Navigation({ firstModalToggle, data }) {
    const isOpen = () => {
        if (data.title === '만들기') {
            firstModalToggle()
        }
    }

    return (
        <S.Wrapper>
            <S.NavWrapper onClick={isOpen}>
                <S.ImgStyle src={data.url} alt="이미지" />
                <S.NavTitle>{data.title}</S.NavTitle>
            </S.NavWrapper>
        </S.Wrapper>
    )
}
