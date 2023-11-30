import React from 'react'
import * as S from './style'
import { useNavigate } from 'react-router-dom'

const Title = [
    { title: '신고', color: 'orangered' },
    { title: '팔로우 취소', color: 'orangered' },
    { title: '즐겨찾기에 추가' },
    { title: '게시물로 이동' },
    { title: '공유 대상...' },
    { title: '링크 복사' },
    { title: '퍼가기' },
    { title: '이 계정 정보' },
    { title: '취소', border: '0' },
]

export default function FourthPostModal({ setIsActive }) {
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('modal')) {
            setIsActive((prev) => !prev)
        }
    }

    const onClickButton = (title) => () => {
        if (title === '취소') {
            setIsActive((prev) => !prev)
        }
    }

    return (
        <S.Wrapper className="modal" onClick={handleOverlayClick}>
            <S.ModalContent>
                {Title.map((title) => (
                    <S.TitleSWrapper onClick={onClickButton(title.title)} border={title.border}>
                        <S.TitleStyle color={title.color}>{title.title}</S.TitleStyle>
                    </S.TitleSWrapper>
                ))}
            </S.ModalContent>
        </S.Wrapper>
    )
}
