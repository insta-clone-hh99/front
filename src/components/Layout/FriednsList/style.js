import styled from 'styled-components'

export const RightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: black;
    width: 270px;
    margin-top: 50px;
    height: 600px;
    position: fixed;
    margin-left: 300px;
`

export const RightWrapperHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const ImageInfos = styled.div`
    display: flex;
    flex-direction: row;
`

export const RightProfileImage = styled.img`
    margin-right: 15px;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    cursor: pointer;
`

export const SubInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const Myprofile = styled.span`
    color: white;
`

export const SubInfo = styled.span`
    color: gray;
    font-size: 12px;
`
export const ChangeText = styled.span`
    color: #0095f6;
    font-size: 12px;
    cursor: pointer;
    &:hover {
        color: skyblue;
    }
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
    cursor: pointer;
`

export const FriendsListWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const Info = styled.span`
    color: #737373;
    font-size: 12px;
`
