import React, { useRef, useState } from 'react'
import '../NewPostModal/style.css'
import * as S from './style'
import { Portal } from 'react-portal'
import SecondModal from '../SecondModal/SecondModal'
import { useMutation, useQueryClient } from 'react-query'
import { addPost } from '../../API/api'
import { v4 as uuidv4 } from 'uuid'
import EmojiPicker from 'emoji-picker-react'
import { checkValidationFile } from '../../../utils/ImageValidation'

export default function NewPostModal({ setIsOpenFirstModal, onClose }) {
    const [isActive, setIsActive] = useState(false)
    const [imageUrl, setImageUrl] = useState('')
    const [isSecondModalAcitve, setIsSecondModalActive] = useState(false)
    const [isChanged, setIsChanged] = useState(false)
    const [content, setConetn] = useState('')
    const [isEmoji, setIsEmoji] = useState('')
    const buttonRef = useRef()
    const [selectedImage, setSelectedImage] = useState('')

    const queryClient = useQueryClient()
    const addPostMutation = useMutation(addPost, {
        onSuccess: () => {
            queryClient.invalidateQueries('post')
        },
    })

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('modal')) {
            onClose()
        }
    }
    const onChangeImage = (event) => {
        setSelectedImage(event.target.files?.[0])
        const file = event.target.files?.[0]
        if (!checkValidationFile(file)) {
            return
        }
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.onload = (event) => {
            setImageUrl(fileReader.result)
        }
        setIsActive(true)
    }

    const submitNewPost = () => {
        const newPost = {
            content,
            images: selectedImage,
        }
        addPostMutation.mutate(newPost)
        setIsOpenFirstModal((prev) => !prev)
    }

    const onChangeConetens = (event) => {
        setConetn(event.target.value)
    }

    const onClickSecondModal = () => {
        setIsSecondModalActive((prev) => !prev)
    }

    const onClickChoosePic = () => {
        buttonRef.current.click()
    }

    const onClickNext = () => {
        setIsChanged(true)
    }

    const onClickSmile = (emojiData) => {
        // 이모지를 textarea에 추가
        setConetn((prevContents) => prevContents + emojiData.emoji)
        setIsEmoji((prev) => !prev)
        console.log(emojiData)
    }
    console.log('contents', content)

    return (
        <div className="modal" onClick={handleOverlayClick}>
            {isSecondModalAcitve && (
                <Portal node={document && document.getElementById('modal-root')}>
                    <SecondModal
                        isSecondModalAcitve={isSecondModalAcitve}
                        isActive={isActive}
                        setIsActive={setIsActive}
                        setIsSecondModalActive={setIsSecondModalActive}
                        onClose={onClickSecondModal}
                        setIsChanged={setIsChanged}
                    />
                </Portal>
            )}
            <S.XWrppaer>
                <span className="close" onClick={onClose}>
                    &times;
                </span>
            </S.XWrppaer>
            <div className="modal-content">
                {!isActive && (
                    <div>
                        <S.Header>
                            <S.HeaderTitle className="title">새 게시물 만들기</S.HeaderTitle>
                        </S.Header>
                        <S.ContentsWrapper>
                            <img src="newPostDeco.png" alt="데코" />
                            <S.ContentsStyle>사진과 동영상을 여기다 끌어다 놓으세요</S.ContentsStyle>
                            <S.Button onClick={onClickChoosePic}>컴퓨터에서 선택</S.Button>
                            <S.HiddenInput
                                onChange={onChangeImage}
                                style={{ display: 'none' }}
                                ref={buttonRef}
                                type="file"
                            />
                        </S.ContentsWrapper>
                    </div>
                )}
                {isActive && (
                    <div>
                        {!isChanged && (
                            <div>
                                <S.ImageHeader>
                                    <S.GoArrowLeftIcon onClick={onClickSecondModal} size={30} color="white" />
                                    <S.HeaderTitle className="title">자르기</S.HeaderTitle>
                                    <S.NextButton onClick={onClickNext}>다음</S.NextButton>
                                </S.ImageHeader>
                                <S.ImageStyle src={imageUrl} alt="이미지" />
                            </div>
                        )}
                        {isChanged && (
                            <S.ImageUploadWrapper>
                                <S.ImageHeader>
                                    <S.GoArrowLeftIcon onClick={onClickSecondModal} size={30} color="white" />
                                    <S.HeaderTitle className="title">새 게시물 만들기</S.HeaderTitle>
                                    <S.NextButton onClick={submitNewPost}>공유하기</S.NextButton>
                                </S.ImageHeader>
                                <S.ImageContentsWrapper>
                                    <S.ImageSize src={imageUrl} alt="엑박" />
                                    <div>
                                        <div>
                                            <S.HeaderWrapper>
                                                <S.ProfileImage src="/avatar.png" alt="이미지" />
                                                <S.Nickname>주철민</S.Nickname>
                                            </S.HeaderWrapper>
                                            <S.ContentsTextArea
                                                value={content}
                                                placeholder="문구를 입력하세요..."
                                                onChange={onChangeConetens}
                                            />
                                            <S.FooterWrapper>
                                                <S.SmileImage onClick={() => setIsEmoji((prev) => !prev)} size={25} />
                                                {isEmoji && (
                                                    <EmojiPicker
                                                        onEmojiClick={onClickSmile}
                                                        cleanOnEnter
                                                        placeholder="Type a message"
                                                    />
                                                )}
                                                <S.CheckTextLength>{content.length}/2200</S.CheckTextLength>
                                            </S.FooterWrapper>
                                        </div>
                                    </div>
                                </S.ImageContentsWrapper>
                            </S.ImageUploadWrapper>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}
