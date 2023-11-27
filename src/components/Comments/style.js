import styled from 'styled-components'
import { GoHeart } from 'react-icons/go'
import { GoHeartFill } from 'react-icons/go'

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
    flex-direction: row;
    margin: 10px;
    justify-content: space-between;
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
    width: 441px;
    display: flex;
`

export const ImageStyle = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 10px;
`

export const CommentStyle = styled.span`
    color: white;
    margin-right: 10px;
`
