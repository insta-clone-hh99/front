import styled from 'styled-components'
import { BsThreeDots } from 'react-icons/bs'
import { IoChatbubbleOutline } from 'react-icons/io5'
import { GoHeart } from 'react-icons/go'
import { IoPaperPlaneOutline } from 'react-icons/io5'
import { BsSave } from 'react-icons/bs'
import { GoHeartFill } from 'react-icons/go'
import { BsFillSaveFill } from 'react-icons/bs'

export const Wrapper = styled.div`
    display: block;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 1920px;
    height: 900px;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ModalContent = styled.div`
    background-color: black;
    width: 1200px;
    height: 880px;
    background-color: #262528;
    display: flex;
    flex-direction: row;
`
export const ImageSize = styled.img`
    width: 750px;
    height: 880px;
`

export const RightHeader = styled.div`
    display: flex;
    flex-direction: row;
    width: 450px;
    height: 70px;
    border-bottom: 1px solid gray;
`

export const ProfileSize = styled.img`
    width: 50px;
    height: 50px;
`

export const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 380px;
`

export const NicknameWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const MoreInfo = styled(BsThreeDots)`
    color: white;
`
export const RightWrapper = styled.div`
    width: 450px;
    height: 880px;
    display: flex;
    flex-direction: column;
`
export const RightFooter = styled.div`
    display: flex;
    flex-direction: column;
`

export const ChatStyle = styled(IoChatbubbleOutline)`
    margin: 0px 10px;
    cursor: pointer;
`

export const Heart = styled(GoHeart)`
    cursor: pointer;
`

export const Comment = styled(IoPaperPlaneOutline)`
    cursor: pointer;
`

export const Save = styled(BsSave)`
    cursor: pointer;
`

export const FullHeart = styled(GoHeartFill)`
    cursor: pointer;
`

export const SaveStyle = styled(BsFillSaveFill)`
    cursor: pointer;
`