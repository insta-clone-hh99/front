import styled from 'styled-components'

export const NavWrapper = styled.div`
    display: flex;
    width: 315px;
    height: 56px;
    align-items: center;
    &:hover {
        border-radius: 20px;
        border: gray 1px solid;
    }
    margin-left: 15px;
`

export const Wrapper = styled.div`
    display: flex;
    width: 330px;
    height: 56px;
    align-items: center;
`

export const ImgStyle = styled.img`
    width: 35px;
    height: 30px;
    margin: 0 10px;
    &:hover {
        width: 38px;
        height: 38px;
    }
`

export const NavTitle = styled.p`
    color: white;
`
