import React from 'react'
import * as S from './style'
import { useMutation, useQueryClient } from 'react-query'
import { deleteComment } from '../../API/api'
import { useParams } from 'react-router-dom'

const Lists = [
    { name: '신고', color: 'orangered' },
    { name: '삭제', color: 'orangered' },
    { name: '취소', border: '0' },
]

export default function FifthPostModal({ comment, setIsActive }) {
    const queryClient = useQueryClient()
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('modal')) {
            setIsActive((prev) => !prev)
        }
    }

    const deleteMutation = useMutation(deleteComment, {
        onSuccess: () => {
            queryClient.invalidateQueries('comment')
        },
        onError: () => {
            alert('댓글 삭제 권한이 없습니다.')
        },
    })
    const params = useParams()
    const postId = params?.postId
    const commentId = comment?.commentId

    const Target = Lists.find((el) => el.name === '취소')
    const TargetDelete = Lists.find((target) => target.name === '삭제')
    const isCancel = () => {
        if (Target) {
            setIsActive((prev) => !prev)
        }
        if (TargetDelete) {
            deleteMutation.mutate({ postId, commentId })
        }
    }

    return (
        <>
            <S.Wrapper className="modal" onClick={handleOverlayClick}>
                <S.ModalContent>
                    {Lists.map((list) => (
                        <S.Box border={list.border}>
                            <S.Test onClick={isCancel} color={list.color}>
                                {list.name}
                            </S.Test>
                        </S.Box>
                    ))}
                </S.ModalContent>
            </S.Wrapper>
        </>
    )
}
