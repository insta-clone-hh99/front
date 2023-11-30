import React, { useState } from 'react'
import * as S from './style'
import { useMutation, useQueryClient } from 'react-query'
import { deletePost } from '../../API/api'
import { useParams } from 'react-router-dom'

const Lists = [
    { name: '신고', color: 'orangered' },
    { name: '삭제', color: 'orangered' },
    { name: '취소', border: '0' },
]

export default function SixPostModal({ post, setIsModalOpen }) {
    const params = useParams()
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('modal')) {
            setIsModalOpen((prev) => !prev)
        }
    }
    const queryClient = useQueryClient()

    const deletePostMutation = useMutation(deletePost, {
        onSuccess: () => {
            queryClient.invalidateQueries('post')
        },
    })

    const isCancel = (name) => () => {
        if (name === '취소') {
            setIsModalOpen((prev) => !prev)
        }

        if (name === '삭제') {
            deletePostMutation.mutate(post.postId)
        }
    }
    return (
        <>
            <S.Wrapper className="modal" onClick={handleOverlayClick}>
                <S.ModalContent>
                    {Lists.map((list) => (
                        <S.Box onClick={isCancel(list.name)} border={list.border}>
                            <S.Test color={list.color}>{list.name}</S.Test>
                        </S.Box>
                    ))}
                </S.ModalContent>
            </S.Wrapper>
        </>
    )
}
