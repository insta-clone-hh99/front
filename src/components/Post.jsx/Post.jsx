import React, { useState } from 'react'
import * as S from './style'
import { Portal } from 'react-portal'
import { useNavigate } from 'react-router-dom'
import { getComments, getOnePostInfo } from '../API/api'
import { TimeAndDate, VideoCard } from '../../utils/time'
import FourthPostModal from '../Modal/FourthPostModal/FourthPostModal'
import EmojiPicker, { Emoji } from 'emoji-picker-react'
import Comments from '../Comments/Comments'
import ThirdModal from '../Modal/ThirdPostModal/ThirdPostModal'
import SixPostModal from '../Modal/SIxthPostModal/SixPostModal'

export default function Post({ post }) {
    const [isHeart, setIsHeart] = useState(false)
    const [isSaved, setIsSaved] = useState(false)
    const [isOpenThirdModal, setIsOpenThirdModal] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isEmoji, setIsEmoji] = useState('')
    const [contents, setContents] = useState('')

    console.log('post입니다', post)

    const navigate = useNavigate()

    const onChangeConetens = (event) => {
        setContents(event.target.value)
        //textArea에 적히는 것들
    }

    const onClickSmileImag = () => {
        setIsEmoji((prev) => !prev)
    }

    const onClickSmile = (emojiData) => {
        setContents((prevContents) => prevContents + emojiData.emoji)
        setIsEmoji((prev) => !prev)
        console.log(emojiData)
    }

    const onClickHeart = () => {
        setIsHeart((prev) => !prev)
    }

    const onClickSave = () => {
        setIsSaved((prev) => !prev)
    }

    const controlThirdModal = (id) => () => {
        getOnePostInfo(id)
        getComments(id)
        setIsOpenThirdModal((prev) => !prev)
        navigate(`/posts/${id}`)
    }

    const onClickMoreInfo = () => {
        setIsModalOpen((prev) => !prev)
    }

    const id = post
    console.log('id', id)

    return (
        <S.PostWrapper>
            {isOpenThirdModal && (
                <Portal node={document && document.getElementById('modal-root')}>
                    <ThirdModal post={id} />
                </Portal>
            )}
            <S.HeaderWrapper>
                {isModalOpen && (
                    <Portal node={document && document.getElementById('modal-root')}>
                        <SixPostModal post={post} setIsModalOpen={setIsModalOpen} />
                    </Portal>
                )}
                <S.ProfileImage src="/avatar.png" alt="엑박" />
                <S.PostHeaerWrapper>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <S.ContentStyle>{post.userName}</S.ContentStyle>
                        <S.TimeStyle>{TimeAndDate(post.createdAt)}</S.TimeStyle>
                    </div>
                    <div>
                        <S.MoreInfo onClick={onClickMoreInfo} />
                    </div>
                </S.PostHeaerWrapper>
            </S.HeaderWrapper>

            <S.ImageSize src={post.imageUrls[0]} alt="사진" />
            <div>
                <S.ImgBar>
                    <div>
                        {!isHeart && <S.Heart onClick={onClickHeart} size={25} color="white" />}
                        {isHeart && <S.FullHeart onClick={onClickHeart} size={25} color="red" />}
                        <S.ChatStyle onClick={controlThirdModal(post.postId)} size={25} color="white" />
                        <S.Comment onClick={controlThirdModal(post.postId)} size={25} color="white" />
                    </div>
                    <div>
                        {!isSaved && <S.Save onClick={onClickSave} size={25} color="white" />}
                        {isSaved && <S.SaveStyle onClick={onClickSave} size={25} color="white" />}
                    </div>
                </S.ImgBar>
                <S.PostContentsWrapper>
                    <S.TextStyle>좋아요 {post.likeCount}개</S.TextStyle>
                    <div>
                        <S.TextStyle>{post.userName}</S.TextStyle>
                        <S.TextStyle>{post.contents}</S.TextStyle>
                    </div>
                    <S.CommentText onClick={controlThirdModal(post.postId)}>
                        댓글 {post.commentCount}개 모두 보기
                    </S.CommentText>
                    <S.PostFooter>
                        <S.PostInputStyle onChange={onChangeConetens} value={contents} placeholder="댓글 달기..." />
                        <div>
                            <span>게시</span>
                            <S.SmileImage onClick={onClickSmileImag} size={20} />
                            {isEmoji && <S.Emoji onEmojiClick={onClickSmile} cleanOnEnter />}
                        </div>
                    </S.PostFooter>
                </S.PostContentsWrapper>
            </div>
        </S.PostWrapper>
    )
}
