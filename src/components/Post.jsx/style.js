import styled from 'styled-components'
import { IoChatbubbleOutline } from 'react-icons/io5'
import { GoHeart } from 'react-icons/go'
import { IoPaperPlaneOutline } from 'react-icons/io5'
import { BsSave } from 'react-icons/bs'
import { GoHeartFill } from 'react-icons/go'
import { BsFillSaveFill } from 'react-icons/bs'
import { BsThreeDots } from 'react-icons/bs'
import { CgSmile } from 'react-icons/cg'
import EmojiPicker from 'emoji-picker-react'

export const PostWrapper = styled.div`
    width: 470px;
    height: 841px;
    border: 1px black solid;
    margin: 50px 0px;
    background-color: black;
    margin-left: 300px;
`

export const ProfileImage = styled.img`
    width: 40px;
    height: 40px;
`

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
`

export const PostHeaerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 500px;
    align-items: center;
    justify-content: space-between;
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
    margin-top: 0px;
    margin-left: 10px;
    font-size: 13px;
`

export const TimeStyle = styled.span`
    color: gray;
    margin-left: 10px;
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
    width: 410px;
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

export const MoreInfo = styled(BsThreeDots)`
    color: white;
    margin-right: 10px;
    cursor: pointer;
`

export const SmileImage = styled(CgSmile)`
    color: white;
    cursor: pointer;
`

export const PostFooter = styled.div`
    display: flex;
    flex-direction: row;
    width: 470px;
`

export const Emoji = styled(EmojiPicker)`
    width: 100px;
    height: 600px;
`

export const CommentText = styled.span`
    color: #a8a8a8;
    margin: 10px 0;
    font-size: 14px;
    cursor: pointer;
`
