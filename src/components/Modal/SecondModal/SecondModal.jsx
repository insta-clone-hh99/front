import React from 'react'
import * as S from './style'
// 스타일 파일 import

const SecondModal = ({ setIsChanged, setIsActive, isActive, isSecondModalAcitve, setIsSecondModalActive, onClose }) => {
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('modal')) {
            onClose()
        }
    }

    const onClickCancleBtn = () => {
        setIsSecondModalActive(false)
    }

    const onClickDeleteBtn = () => {
        setIsActive(false)
        setIsSecondModalActive(false)
        setIsChanged(false)
    }

    return (
        <S.Wrapper className="modal" onClick={handleOverlayClick}>
            <S.ModalContent>
                <S.ModalHeader>
                    <S.HeaderTitle>게시물을 삭제하시겠어요?</S.HeaderTitle>
                    <S.HeaderSubTitle>지금 나가면 수정 내용이 저장되지 않습니다.</S.HeaderSubTitle>
                </S.ModalHeader>
                <S.DeleteWrapper onClick={onClickDeleteBtn}>
                    <S.DeleteText>삭제</S.DeleteText>
                </S.DeleteWrapper>
                <S.CancelWrapper onClick={onClickCancleBtn}>
                    <S.CancelText>취소</S.CancelText>
                </S.CancelWrapper>
            </S.ModalContent>
        </S.Wrapper>
    )
}

export default SecondModal
