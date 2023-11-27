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
    flex-direction: row;
    justify-content: center;
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
    width: 500px;
    height: 200px;
    margin-bottom: 50px;
    margin-right: 130px;
`

export const PostContentsWrapper = styled.div`
    display: flex;
`

export const PostHeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const TitleAndTimeWrapper = styled.div`
    width: 630px;
    height: 100vh;
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
    background-color: black;
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
    justify-content: space-between;
    align-items: center;
`

export const InputStyle = styled.input`
    border: 0px;
    width: 80%;
`

export const Myprofile = styled.span`
    color: white;
`

export const ImageInfos = styled.div`
    display: flex;
    flex-direction: row;
`

export const LogoStyle = styled.img`
    width: 120px;
    height: 50px;
    margin: 20px;
`

export const ChangeText = styled.span`
    color: #0095f6;
    font-size: 12px;
`

export const LogoWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const SubInfo = styled.span`
    color: gray;
    font-size: 12px;
`

export const SubInfoWrapper = styled.div`
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

export const ContentsWrapper = styled.div`
    display: flex;
    justify-content: center;
`
export const BodyWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 50px;
    align-items: center;
`

export const RecommentText = styled.span`
    color: gray;
    font-size: 15px;
    font-weight: bolder;
`

export const AllInfo = styled.span`
    color: white;
    font-size: 12px;
`

export const RightProfileImage = styled.img`
    margin-right: 15px;
`

export const Info = styled.span`
    color: #737373;
    font-size: 12px;
`
