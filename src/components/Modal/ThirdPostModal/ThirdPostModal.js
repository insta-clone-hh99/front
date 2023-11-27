import React, { useState } from 'react'
import * as S from './style'

// 스타일 파일 import

const SecondModal = ({ post, onClose }) => {
    const [isHeart, setIsHeart] = useState(false)
    const [isSaved, setIsSaved] = useState(false)
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('modal')) {
            onClose()
        }
    }
    const onClickHeart = () => {
        setIsHeart((prev) => !prev)
    }

    const onClickSave = () => {
        setIsSaved((prev) => !prev)
    }

    return (
        <div className="modal" onClick={handleOverlayClick}>
            <S.ModalContent>
                <div>
                    <S.ImageSize src={post.imageUrl} alt="엑박" />
                </div>
                <S.RightWrapper>
                    <S.RightHeader>
                        <S.ProfileSize src="/avatar.png" alt="이미지" />
                        <S.ProfileWrapper>
                            <S.NicknameWrapper>
                                <span>hm_son7</span>
                                <span>런던</span>
                            </S.NicknameWrapper>
                            <S.MoreInfo />
                        </S.ProfileWrapper>
                    </S.RightHeader>
                    <S.RightFooter>
                        <div>
                            <div>
                                <div>
                                    {!isHeart && <S.Heart onClick={onClickHeart} size={25} color="white" />}
                                    {isHeart && <S.FullHeart onClick={onClickHeart} size={25} color="red" />}
                                    <S.ChatStyle size={25} color="white" />
                                    <S.Comment size={25} color="white" />
                                </div>
                                <div>
                                    {!isSaved && <S.Save onClick={onClickSave} size={25} color="white" />}
                                    {isSaved && <S.SaveStyle onClick={onClickSave} size={25} color="white" />}
                                </div>
                            </div>
                        </div>
                    </S.RightFooter>
                </S.RightWrapper>
            </S.ModalContent>
        </div>
    )
}

export default SecondModal
