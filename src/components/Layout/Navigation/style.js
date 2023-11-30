import styled from 'styled-components'

export const NavigationBar = styled.div`
    display: flex;
    flex-direction: column;
    border-right: 1px solid gray;
    justify-content: space-between;
    width: 330px;
    position: fixed;
    background-color: black;
    height: 100%;
`

export const LogoStyle = styled.img`
    width: 120px;
    height: 50px;
    margin: 20px;
`

export const NavCategoryWrapper = styled.div`
    margin-bottom: 250px;
`

export const NavCategoryStyle = styled.div`
    display: flex;
    margin: 0 12px;
    align-items: center;
    cursor: pointer;
    &:hover {
        border: 1px solid gray;
        border-radius: 20px;
    }
`

export const NavImageStyle = styled.img`
    width: 40px;
    height: 40px;
    cursor: pointer;
`

export const NavCategoryTitle = styled.p`
    color: white;
    margin-left: 15px;
`
