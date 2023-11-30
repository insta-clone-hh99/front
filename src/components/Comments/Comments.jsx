import React, { useState } from 'react'
import * as S from './style'
import { useQuery } from 'react-query'
import { getComments, getOnePostInfo } from '../API/api'
import { TimeAndDate } from '../../utils/time'
import FifthPostModal from '../Modal/FifthPostModal/FifthPostModal'
import { Portal } from 'react-portal'
import { useParams } from 'react-router-dom'

export default function Comments() {
    const params = useParams()
    const [isHeart, setIsHeart] = useState(false)
    const [isActive, setIsActive] = useState(false)

    const { data: posts } = useQuery('posts', () => getOnePostInfo(params.postId))
    const { data } = useQuery('comment', () => getComments(params.postId))

    console.log('data입니다', data)

    console.log('posts입니다', posts.data)

    const onClickMoreInfo = () => {
        setIsActive(true)
    }

    const onClickHeart = () => {
        setIsHeart((prev) => !prev)
    }
    return (
        <S.Wrapper>
            <S.ContentsWrapper>
                <S.ContentWrapper>
                    <S.ImageStyle src="/avatar.png" alt="엑박" />
                    <S.CommentStyle>{posts.data.userName}</S.CommentStyle>
                    <S.CommentStyle>{posts.data.contents}</S.CommentStyle>
                </S.ContentWrapper>
                {data?.map((el) => (
                    <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '20px' }}>
                        <S.LeftWrapper>
                            <S.ImageStyle src="/avatar.png" alt="엑박" />
                            <S.LeftWrap>
                                <S.CommentHeaderWrapper>
                                    <S.CommentStyle>{el?.userName}</S.CommentStyle>
                                    <S.CommentStyle>{el?.comment}</S.CommentStyle>
                                </S.CommentHeaderWrapper>
                                <S.CommentFooterWrapper>
                                    <S.AddComment>{TimeAndDate(el?.createdAt)}</S.AddComment>
                                    <S.AddComment>좋아요 {el?.likedCount}</S.AddComment>
                                    <S.AddComment>답글 달기</S.AddComment>
                                    <S.MoreInfo onClick={onClickMoreInfo} />
                                    <Portal node={document && document.getElementById('modal-root')}>
                                        {isActive && <FifthPostModal comment={el} setIsActive={setIsActive} />}
                                    </Portal>
                                </S.CommentFooterWrapper>
                            </S.LeftWrap>
                        </S.LeftWrapper>
                        <S.HeartWrapper>
                            {!isHeart && <S.Heart color="white" onClick={onClickHeart} size={20} />}
                            {isHeart && <S.FullHeart color="red" onClick={onClickHeart} size={20} />}
                        </S.HeartWrapper>
                    </div>
                ))}
            </S.ContentsWrapper>
        </S.Wrapper>
    )
}
