import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: black;
`
export const CenterWrapper = styled.div`
    display: flex;
    width: 70vw;
    margin: 0px 50px;
    flex-direction: column;
`

export const NavigationBar = styled.div`
    display: flex;
    flex-direction: column;
    border-right: 1px solid gray;
    justify-content: space-between;
    width: 330px;
`

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 50px;
    border: 1px black solid;
    margin: 50px 0px;
`

export const PostStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 200px;
    margin-bottom: 50px;
`

export const PostContentsWrapper = styled.div`
    display: flex;
`

export const PostHeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const TitleAndTimeWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const LikeAndCommentWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const RightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 270px;
    margin-top: 50px;
    height: 600px;
`

export const FriendsListWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const RightWrapperHeader = styled.div`
    display: flex;
    margin-left: 20px;
`

export const InputStyle = styled.input`
    border: 0px;
    width: 80%;
`

export const LogoStyle = styled.img`
    width: 120px;
    height: 50px;
    margin: 20px;
`

export const LogoWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const NavCategoryStyle = styled.div`
    display: flex;
    margin: 0 12px;
    align-items: center;
    &:hover {
        border: 1px solid gray;
        border-radius: 20px;
    }
`

export const NavCategoryTitle = styled.p`
    color: white;
    margin-left: 15px;
`

export const NavImageStyle = styled.img`
    width: 40px;
    height: 40px;
`

export const NavCategoryWrapper = styled.div`
    margin-bottom: 250px;
`
