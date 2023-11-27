import styled from 'styled-components'
import { IoChatbubbleOutline } from 'react-icons/io5'
import { GoHeart } from 'react-icons/go'
import { IoPaperPlaneOutline } from 'react-icons/io5'
import { BsSave } from 'react-icons/bs'
import { GoHeartFill } from 'react-icons/go'
import { BsFillSaveFill } from 'react-icons/bs'

export const PostWrapper = styled.div`
    width: 470px;
    height: 841px;
    border: 1px black solid;
    margin: 50px 0px;
    background-color: black;
`

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const PostHeaerWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const ImageSize = styled.img`
    width: 470px;
    height: 570px;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContentStyle = styled.span`
    color: white;
`

export const ImgBar = styled.div`
    display: flex;
    justify-content: space-between;
    width: 470px;
    align-items: center;
    height: 30px;
`

export const ChatStyle = styled(IoChatbubbleOutline)`
    margin: 0px 10px;
    cursor: pointer;
`

export const TextStyle = styled.span`
    color: white;
    margin: 10px 0;
`

export const PostContentsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const PostInputStyle = styled.input`
    background-color: black;
    color: white;
    border: 0;
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


