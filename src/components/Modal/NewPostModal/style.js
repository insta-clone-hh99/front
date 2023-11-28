import styled from 'styled-components'
import { GoArrowLeft } from 'react-icons/go'
import { CgSmile } from 'react-icons/cg'

export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    border-bottom: gray 1px solid;
    z-index: 1000;
`

export const ImageHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 40px;
    border-bottom: gray 1px solid;
    z-index: 1000;
`

export const HeaderTitle = styled.span`
    color: white;
    text-align: center;
    line-height: 20px;
`

export const XWrppaer = styled.span`
    display: flex;
`

export const ContentsWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 650px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const ContentsStyle = styled.span`
    color: white;
    font-size: 20px;
`
export const HiddenInput = styled.input`
    display: none;
`

export const Button = styled.button`
    margin-top: 10px;
    border-radius: 10px;
    height: 30px;
    width: 120px;
    background-color: #0095f6;
    color: white;
    cursor: pointer;
    transition: linear;
`

export const ImageStyle = styled.img`
    width: 700px;
    height: 710px;
    border-radius: 0 0 20px 20px;
`

export const NextButton = styled.span`
    color: #0095f6;
    margin-right: 15px;
    font-weight: bolder;
    cursor: pointer;
`

export const GoArrowLeftIcon = styled(GoArrowLeft)`
    margin-left: 10px;
    cursor: pointer;
`

export const ImageUploadWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const ImageContentsWrapper = styled.div`
    display: flex;
    flex-direction: row;
`
export const ImageSize = styled.img`
    width: 400px;
    height: 710px;
`

export const Nickname = styled.span`
    color: white;
    text-align: center;
`

export const HeaderWrapper = styled.div`
    width: 300px;
    height: 70px;
    display: flex;
    align-items: center;
`

export const ProfileImage = styled.img`
    width: 30px;
    height: 30px;
    margin: 10px;
`

export const ContentsTextArea = styled.textarea`
    background-color: #262528;
    border: 0;
    width: 280px;
    height: 200px;
    color: white;
    font-size: 13px;
`

export const CheckTextLength = styled.span`
    color: gray;
`
export const FooterWrapper = styled.div`
    display: flex;
    width: 300px;
    justify-content: space-between;
`

export const SmileImage = styled(CgSmile)`
    color: gray;
    margin-left: 10px;
    cursor: pointer;
`
