import styled from 'styled-components'
import { GoHeart } from 'react-icons/go'
import { GoHeartFill } from 'react-icons/go'
import { BsThreeDots } from 'react-icons/bs'

export const Heart = styled(GoHeart)`
    cursor: pointer;
    margin-left: 10px;
`
export const HiddenHeart = styled(GoHeart)`
    margin-left: 10px;
`

export const FullHeart = styled(GoHeartFill)`
    cursor: pointer;
    margin-left: 10px;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    justify-content: space-between;
`

export const ContentsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    justify-content: space-between;
    width: 400px;
`
export const Header = styled.div`
    display: flex;
    flex-direction: row;
    margin: 10px;
`

export const HeaderContentsWrapper = styled.div`
    width: 441px;
    display: flex;
`

export const LeftWrapper = styled.div`
    width: 400px;
    display: flex;
    flex-direction: row;
`

export const ImageStyle = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 10px;
`

export const CommentStyle = styled.span`
    color: white;
    margin-right: 10px;
    font-size: 12px;
`

export const AddComment = styled.span`
    color: white;
    margin-right: 10px;
    color: #a8a8a8;
    font-size: 12px;
    margin-left: 0px;
`

export const CommentFooterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 5px;
    align-items: start;
`
export const MoreInfo = styled(BsThreeDots)`
    color: white;
    margin-right: 10px;
    cursor: pointer;
`

export const HoverableBox = styled(CommentFooterWrapper)`
    &:hover ${MoreInfo} {
        display: block;
    }
`

export const CommentHeaderWrapper = styled.div`
    display: flex;
`

export const LeftWrap = styled.div`
    display: flex;
    flex-direction: column;
`

export const HeartWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
`
