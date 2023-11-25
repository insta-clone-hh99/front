import React from 'react'
import * as S from './style'

export default function Post({ post }) {
    return (
        <S.PostWrapper>
            <S.HeaderWrapper>
                <img src="/avatar.png" alt="엑박" />
                <S.PostHeaerWrapper>
                    <span>{post.content}</span>
                    <span>2023-11-24</span>
                </S.PostHeaerWrapper>
            </S.HeaderWrapper>

            <span>{post.contents}</span>
            <div>
                <div>
                    <img src="" alt="좋아요" />
                    <span>좋아요 숫자</span>
                </div>
                <div>
                    <img src="" alt="댓글" />
                    <span>댓글 숫자</span>
                </div>
            </div>
        </S.PostWrapper>
    )
}
