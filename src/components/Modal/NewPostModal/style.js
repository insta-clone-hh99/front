import styled from 'styled-components'

export const Header = styled.div`
    display: flex;
    justify-content: center;
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
`
