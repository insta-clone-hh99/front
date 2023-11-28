import React, { useState } from 'react'
import * as S from './style'
import { FaRegFaceSmile } from 'react-icons/fa6'
import Comments from '../../Comments/Comments'
import { useMutation, useQuery } from 'react-query'
import { addComment, getOnePostInfo, getPost } from '../../API/api'
import { Form, useNavigate, useParams } from 'react-router-dom'
import { Portal } from 'react-portal'
import FourthPostModal from '../FourthPostModal/FourthPostModal'
import { TimeAndDate } from '../../../utils/time'
import EmojiPicker from 'emoji-picker-react'
// 스타일 파일 import

const ThirdModal = ({ post }) => {
    const navigate = useNavigate()
    const params = useParams()
    const [isHeart, setIsHeart] = useState(false)
    const [isSaved, setIsSaved] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const { data } = useQuery('post', getPost)
    const [isActive, setIsActive] = useState(false)
    const [isEmoji, setIsEmoji] = useState(false)
    const [comment, setComment] = useState('')

    console.log('datadata', data.data)

    const detailedInfo = data?.data.find((post) => post.postId === parseInt(params.postId))

    const addCommentMutation = useMutation(addComment, {
        onSuccess: () => {},
    })

    const onClickClose = () => {
        setIsOpen((prev) => !prev)
        navigate('/')
    }

    const onClickEmoji = () => {
        setIsEmoji(true)
    }

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('modal')) {
            onClickClose()
        }
    }
    const onClickHeart = () => {
        setIsHeart((prev) => !prev)
    }

    const onClickSave = () => {
        setIsSaved((prev) => !prev)
    }

    const onClickMoreBtn = () => {
        setIsActive((prev) => !prev)
    }
    console.log(detailedInfo)

    const onChangeComment = (event) => {
        setComment(event.target.value)
    }

    const onClickEmoj = (emojiData) => {
        setComment((prevComment) => prevComment + emojiData.emoji)
        setIsEmoji((prev) => !prev)
    }

    const onClickSubmit = () => {}

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
                            <S.ImageSize src={detailedInfo?.imageUrls[0]} alt="엑박" />
                        </div>
                        <S.RightWrapper>
                            <S.RightHeader>
                                <S.ProfileSize onClick={onClickClose} src="/avatar.png" alt="이미지" />
                                <S.ProfileWrapper>
                                    <S.NicknameWrapper>
                                        <S.HeaderTitle>{detailedInfo.userName}</S.HeaderTitle>
                                        <S.HeaderSubTitle>런던</S.HeaderSubTitle>
                                    </S.NicknameWrapper>
                                    <S.MoreInfo onClick={onClickMoreBtn} size={20} />
                                </S.ProfileWrapper>
                            </S.RightHeader>
                            <S.RightFooter>
                                <S.ContentsBodyWrapper>
                                    <Comments detailedInfo={detailedInfo} />
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
                                        <S.likedCount>좋아요 {detailedInfo.likeCount}개</S.likedCount>
                                        <S.Date>{TimeAndDate(detailedInfo.createdAt)}</S.Date>
                                    </S.LikedCountAndDate>
                                    <form>
                                        <S.CommentWrapper>
                                            <S.SmileIcon onClick={onClickEmoji} color="white" size={30} />
                                            {isEmoji && <EmojiPicker onEmojiClick={onClickEmoj} />}
                                            <S.CommentStyle
                                                value={comment}
                                                onChange={onChangeComment}
                                                placeholder="댓글 달기..."
                                            />
                                            <button onClick={onClickSubmit}>게시</button>
                                        </S.CommentWrapper>
                                    </form>
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
