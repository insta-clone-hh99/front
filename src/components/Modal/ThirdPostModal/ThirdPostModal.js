import React, { useState } from 'react'
import * as S from './style'
import { FaRegFaceSmile } from 'react-icons/fa6'
import Comments from '../../Comments/Comments'
import { useQuery } from 'react-query'
import { getOnePostInfo } from '../../API/api'

// 스타일 파일 import

const ThirdModal = ({ post, onClose }) => {
    const [isHeart, setIsHeart] = useState(false)
    const [isSaved, setIsSaved] = useState(false)

    const { data } = useQuery('post', getOnePostInfo)
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
                    <S.ImageSize src={post?.imageUrl} alt="엑박" />
                </div>
                <S.RightWrapper>
                    <S.RightHeader>
                        <S.ProfileSize src="/avatar.png" alt="이미지" />
                        <S.ProfileWrapper>
                            <S.NicknameWrapper>
                                <S.HeaderTitle>hm_son7</S.HeaderTitle>
                                <S.HeaderSubTitle>런던</S.HeaderSubTitle>
                            </S.NicknameWrapper>
                            <S.MoreInfo size={20} />
                        </S.ProfileWrapper>
                    </S.RightHeader>
                    <S.RightFooter>
                        <S.ContentsBodyWrapper>
                            <Comments />
                        </S.ContentsBodyWrapper>
                        <S.FooterWrapper>
                            <S.ImageBar>
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
                            </S.ImageBar>
                            <S.LikedCountAndDate>
                                <S.likedCount>좋아요 7778개</S.likedCount>
                                <S.Date>11월 18일</S.Date>
                            </S.LikedCountAndDate>
                            <S.CommentWrapper>
                                <S.SmileIcon color="white" size={30} />
                                <S.CommentStyle placeholder="댓글 달기..." />
                                <S.SubmitText>게시</S.SubmitText>
                            </S.CommentWrapper>
                        </S.FooterWrapper>
                    </S.RightFooter>
                </S.RightWrapper>
            </S.ModalContent>
        </div>
    )
}

export default ThirdModal
