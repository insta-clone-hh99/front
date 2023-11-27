import React, { useState } from 'react'
import * as S from './style'
import ThirdPostModal from '../Modal/ThirdPostModal/ThirdPostModal'
import { Portal } from 'react-portal'

export default function Post({ post }) {
    const [isHeart, setIsHeart] = useState(false)
    const [isSaved, setIsSaved] = useState(false)
    const [isOpenThirdModal, setIsOpenThirdModal] = useState(false)

    const onClickHeart = () => {
        setIsHeart((prev) => !prev)
    }

    const onClickSave = () => {
        setIsSaved((prev) => !prev)
    }

    const controlThirdModal = () => {
        setIsOpenThirdModal((prev) => !prev)
    }

    return (
        <S.PostWrapper>
            {isOpenThirdModal && (
                <Portal node={document && document.getElementById('modal-root')}>
                    <ThirdPostModal post={post} onClose={controlThirdModal} />
                </Portal>
            )}
            <S.HeaderWrapper>
                <img src="/avatar.png" alt="엑박" />
                <S.PostHeaerWrapper>
                    <S.ContentStyle>{post.contents}</S.ContentStyle>
                    <S.ContentStyle>2023-11-24</S.ContentStyle>
                </S.PostHeaerWrapper>
            </S.HeaderWrapper>

            <span>{post.contents}</span>
            <S.ImageSize src={post.imageUrl} alt="사진" />
            <div>
                <S.ImgBar>
                    <div>
                        {!isHeart && <S.Heart onClick={onClickHeart} size={25} color="white" />}
                        {isHeart && <S.FullHeart onClick={onClickHeart} size={25} color="red" />}
                        <S.ChatStyle onClick={controlThirdModal} size={25} color="white" />
                        <S.Comment onClick={controlThirdModal} size={25} color="white" />
                    </div>
                    <div>
                        {!isSaved && <S.Save onClick={onClickSave} size={25} color="white" />}
                        {isSaved && <S.SaveStyle onClick={onClickSave} size={25} color="white" />}
                    </div>
                </S.ImgBar>
                <S.PostContentsWrapper>
                    <S.TextStyle>hm_son7님 여러 명이 좋아합니다</S.TextStyle>
                    <div>
                        <S.TextStyle>ironmin_</S.TextStyle>
                        <S.TextStyle>메리크리스마스</S.TextStyle>
                    </div>
                    <S.TextStyle onClick={controlThirdModal}>댓글 1320개 모두 보기</S.TextStyle>
                    <S.PostInputStyle placeholder="댓글 달기..." />
                </S.PostContentsWrapper>
            </div>
        </S.PostWrapper>
    )
}
