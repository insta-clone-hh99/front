import React, { useEffect, useState } from 'react'
import * as S from './style'
import Comments from '../../Comments/Comments'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { addComment, getOnePostInfo, cancelHeart, heartPlus } from '../../API/api'
import { useNavigate, useParams } from 'react-router-dom'
import { Portal } from 'react-portal'
import FourthPostModal from '../FourthPostModal/FourthPostModal'
import { TimeAndDate } from '../../../utils/time'
import EmojiPicker from 'emoji-picker-react'

// 스타일 파일 import

const ThirdModal = ({ post }) => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const params = useParams()
    const [isHeart, setIsHeart] = useState(false)
    const [isSaved, setIsSaved] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const [isEmoji, setIsEmoji] = useState(false)
    const [comment, setComment] = useState('')
    console.log('postpost', post)

    const { data: posts, isLoading } = useQuery('posts', () => getOnePostInfo(params.postId))

    const detailedData = posts?.data

    const heartPlustMutation = useMutation(heartPlus, {
        onSuccess: () => {
            queryClient.invalidateQueries('posts')
        },
    })

    const heartMinusMutation = useMutation(cancelHeart, {
        onSuccess: () => {
            queryClient.invalidateQueries('posts')
        },
    })

    const addCommentMutation = useMutation(addComment, {
        onSuccess: () => {
            queryClient.invalidateQueries('comment')
        },
    })

    if (isLoading) {
        return <div>로딩중입니다.</div>
    }

    const onClickClose = () => {
        setIsOpen((prev) => !prev)
        navigate('/')
    }

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('modal')) {
            onClickClose()
        }
    }
    const onClickHeart = () => {
        heartPlustMutation.mutate(params.postId)
        setIsHeart((prev) => !prev)
    }

    const onClickCancelHeart = () => {
        heartMinusMutation.mutate(params.postId)
        setIsHeart((prev) => !prev)
    }

    const onClickSave = () => {
        setIsSaved((prev) => !prev)
    }

    const onClickMoreBtn = () => {
        setIsActive((prev) => !prev)
    }

    const onChangeComment = (event) => {
        setComment(event.target.value)
    }

    const onClickEmoj = (emojiData) => {
        setComment((prevComment) => prevComment + emojiData.emoji)
        setIsEmoji((prev) => !prev)
    }

    const onClickSmile = () => {
        setIsEmoji((prev) => !prev)
    }

    const onClickSubmit = () => {
        const id = detailedData?.postId
        addCommentMutation.mutate({ comment, id })
        setIsOpen(false)
    }

    return (
        <Portal node={document && document.getElementById('modal-root')}>
            {!isOpen && (
                <S.Wrapper className="modal" onClick={handleOverlayClick}>
                    {isActive && (
                        <Portal node={document && document.getElementById('modal-root')}>
                            <FourthPostModal setIsActive={setIsActive} onClickMoreBtn={onclose} />
                        </Portal>
                    )}
                    <S.ModalContent>
                        <div>
                            <S.ImageSize src={detailedData?.imageUrls[0]} alt="엑박" />
                        </div>
                        <S.RightWrapper>
                            <S.RightHeader>
                                <S.ProfileSize onClick={onClickClose} src="/avatar.png" alt="이미지" />
                                <S.ProfileWrapper>
                                    <S.NicknameWrapper>
                                        <S.HeaderTitle>{detailedData?.userName}</S.HeaderTitle>
                                        <S.HeaderSubTitle>런던</S.HeaderSubTitle>
                                    </S.NicknameWrapper>
                                    <S.MoreInfo onClick={onClickMoreBtn} size={20} />
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
                                            {isHeart && (
                                                <S.FullHeart onClick={onClickCancelHeart} size={25} color="red" />
                                            )}
                                            <S.ChatStyle size={25} color="white" />
                                            <S.Comment size={25} color="white" />
                                        </div>
                                        <div>
                                            {!isSaved && <S.Save onClick={onClickSave} size={25} color="white" />}
                                            {isSaved && <S.SaveStyle onClick={onClickSave} size={25} color="white" />}
                                        </div>
                                    </S.ImageBar>
                                    <S.LikedCountAndDate>
                                        <S.likedCount>좋아요 {detailedData?.likeCount}개</S.likedCount>
                                        <S.Date>{TimeAndDate(detailedData?.createdAt)}</S.Date>
                                    </S.LikedCountAndDate>

                                    <S.CommentWrapper>
                                        <S.SmileIcon onClick={onClickSmile} color="white" size={30} />
                                        {isEmoji && <EmojiPicker onEmojiClick={onClickEmoj} />}
                                        <S.CommentStyle
                                            value={comment}
                                            onChange={onChangeComment}
                                            placeholder="댓글 달기..."
                                        />
                                        {!comment && <S.ButtonStyle onClick={onClickSubmit}>게시</S.ButtonStyle>}
                                        {comment && <S.LightButton onClick={onClickSubmit}>게시</S.LightButton>}
                                    </S.CommentWrapper>
                                </S.FooterWrapper>
                            </S.RightFooter>
                        </S.RightWrapper>
                    </S.ModalContent>
                </S.Wrapper>
            )}
        </Portal>
    )
}

export default ThirdModal
