import React from 'react'
import * as S from './style'
import Post from '../Post.jsx/Post'
import { useQuery } from 'react-query'
import { getPost } from '../API/api'

export default function Home() {
    const { data: rrr } = useQuery('post', getPost)

    const postData = rrr?.data
    console.log("rrr",rrr)
    return (
        <S.Wrapper>
            <S.TitleAndTimeWrapper>
                {postData?.map((post) => (
                    <Post post={post} />
                ))}
            </S.TitleAndTimeWrapper>
        </S.Wrapper>
    )
}
