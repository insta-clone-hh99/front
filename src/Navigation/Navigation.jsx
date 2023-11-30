import React from 'react'
import * as S from './style'
import { useNavigate } from 'react-router-dom'

export default function Navigation({ firstModalToggle, data }) {
    const navigate = useNavigate()
    const isOpen = () => {
        if (data.title === '만들기') {
            firstModalToggle()
        }

        const nickname = localStorage.getItem('nickname')
        if (data.title === nickname) {
            navigate('/mypage')
        }

        if (data.title === '홈') {
            navigate('/')
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
