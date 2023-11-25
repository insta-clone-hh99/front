import React, { useRef } from 'react'
import '../NewPostModal/style.css'
import * as S from './style'
import { useNavigate } from 'react-router-dom'

export default function NewPostModal({ onClose }) {
    const navigate = useNavigate()
    const buttonRef = useRef()

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('modal')) {
            onClose()
        }
    }

    const onClickChoosePic = () => {
        buttonRef.current.click()
    }
    return (
        <div className="modal" onClick={handleOverlayClick}>
            &times;
            <S.XWrppaer>
                <span className="close" onClick={onClose}>
                    &times;
                </span>
            </S.XWrppaer>
            <div className="modal-content">
                <S.Header>
                    <S.HeaderTitle className="title">새 게시물 만들기</S.HeaderTitle>
                </S.Header>
                <S.ContentsWrapper>
                    <img src="newPostDeco.png" alt="데코" />
                    <S.ContentsStyle>사진과 동영상을 여기다 끌어다 놓으세요</S.ContentsStyle>
                    <S.Button onClick={onClickChoosePic}>컴퓨터에서 선택</S.Button>
                    <S.HiddenInput style={{ display: 'none' }} ref={buttonRef} type="file" />
                </S.ContentsWrapper>
            </div>
        </div>
    )
}
