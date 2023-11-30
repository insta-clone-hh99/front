import styled from 'styled-components'
import { BsThreeDots } from 'react-icons/bs'
import { IoChatbubbleOutline } from 'react-icons/io5'
import { GoHeart } from 'react-icons/go'
import { IoPaperPlaneOutline } from 'react-icons/io5'
import { BsSave } from 'react-icons/bs'
import { GoHeartFill } from 'react-icons/go'
import { BsFillSaveFill } from 'react-icons/bs'
import { FaRegFaceSmile } from 'react-icons/fa6'

export const Wrapper = styled.div`
    display: block;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 1920px;
    height: 923px;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`

export const ModalContent = styled.div`
    background-color: black;
    width: 1200px;
    height: 860px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: row;
    border: 2px gray solid;
    
`
export const ImageSize = styled.img`
    width: 750px;
    height: 860px;
`

export const RightHeader = styled.div`
    display: flex;
    flex-direction: row;
    width: 450px;
    height: 70px;
    border-bottom: 1px solid gray;
    align-items: center;
`

export const ProfileSize = styled.img`
    width: 40px;
    height: 40px;
    margin: 0 10px;
`

export const HeaderTitle = styled.span`
    color: white;
`

export const HeaderSubTitle = styled.span`
    color: white;
    font-size: 12px;
`

export const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 380px;
`

export const NicknameWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const MoreInfo = styled(BsThreeDots)`
    color: white;
    margin-right: 10px;
    cursor: pointer;
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
    margin-left: 10px;
`

export const Comment = styled(IoPaperPlaneOutline)`
    cursor: pointer;
`

export const Save = styled(BsSave)`
    cursor: pointer;
`

export const FullHeart = styled(GoHeartFill)`
    cursor: pointer;
    margin-left: 10px;
`

export const SaveStyle = styled(BsFillSaveFill)`
    cursor: pointer;
`

export const ContentsBodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 440px;
    height: 660px;
    border-top: 1px solid gray;
`

export const ImageBar = styled.div`
    margin: 6px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 440px;
`

export const HeartBar = styled.div``

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-top: 1px solid gray;
`

export const LikedCountAndDate = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid gray;
`

export const likedCount = styled.span`
    color: white;
    margin-left: 10px;
`

export const Date = styled.span`
    font-size: 15px;
    color: gray;
    margin-left: 10px;
`

export const CommentWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 50px;
`

export const CommentStyle = styled.input`
    background-color: black;
    margin-left: 15px;
    width: 330px;
    height: 30px;
    border: 0px;
    color: white;
`

export const SmileIcon = styled(FaRegFaceSmile)`
    margin-left: 10px;
    cursor: pointer;
`

export const SubmitText = styled.span`
    color: gray;
    margin-left: 10px;
`

export const ButtonStyle = styled.button`
    background-color: black;
    color: gray;
    border: 0;
    cursor: pointer;
    margin-left: 10px;
`

export const LightButton = styled.button`
    background-color: black;
    color: skyblue;
    border: 0;
    cursor: pointer;
    margin-left: 10px;
`
