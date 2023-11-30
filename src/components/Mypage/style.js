import styled from 'styled-components'

export const Back = styled.div`
    background-color: #090303;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
`

export const Img = styled.img`
    width: 100%;
    height: auto;
    margin-top: 20px;
    transition:
        opacity 0.3s,
        filter 0.3s;

    &:hover {
        opacity: 0.5;
        filter: brightness(100%);
        cursor: pointer;
    }

    &:active {
        opacity: 0.6;
    }
`

export const Wrap = styled.div`
    margin-top: 35.5vh;
    width: 80%;
    max-width: 1200px;
`

export const UserProfileContainer = styled.div`
    position: fixed;
    top: 10vh;
    right: 1%;
    left: 450.99px;
    width: 70%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ProfilePicture = styled.img`
    justify-content: space-between;
    margin-right: 400px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
`

export const ChangePictureButton = styled.label`
    cursor: pointer;
    color: #ffffff;
    margin-top: 30px;
    margin-left: 3vh;
    display: inline-block;
    padding: 8px 16px;
    font-size: 14px;
    font-weight: bold;
    height: 15.9px;
    border: 1px solid #83858a;
    background-color: #83858a;
    border-radius: 8px;
    transition: background-color 0.3s;
    position: relative;
    display: flex;

    &:hover {
        background-color: #f5f5f5;
        color: white;
    }

    input {
        display: none;
    }
`

export const UserInfo = styled.div`
    position: fixed;
    top: 10vh;
    right: 10;
    display: flex;
    margin-right: 1px;
    text-align: center;
    color: #f5f5f5;
    margin-bottom: 20px;
    margin-left: 20vh;
`

export const UserStats = styled.div`
    position: fixed;
    top: 20vh;
    right: 10;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 20%;
    margin: 5px;
    margin-left: 100px;
    gap: 1px;
`

export const StatItem = styled.div`
    text-align: center;
    color: #f5f5f5;
    cursor: pointer;
    flex-direction: column;
    flex-grow: 1;
    margin: auto;
`

export const UserPosts = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, minmax(200px, 1fr));
    gap: 15px;
    margin: 5px;
`

export const PostContainer = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    aspect-ratio: 1/1;
    width: 250px;
    height: 250px;
`

export const PostImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`

export const Button = styled.div`
    cursor: pointer;
    color: #ffffff;
    margin-top: 30px;
    margin-left: 3vh;
    display: inline-block;
    padding: 8px 16px;
    font-size: 14px;
    font-weight: bold;
    height: 15.9px;
    border: 1px solid #83858a;
    background-color: #83858a;
    border-radius: 8px;
    transition: background-color 0.3s;
    position: relative;
    display: flex;

    &:hover {
        background-color: #f5f5f5;
        color: white;
    }

    input {
        display: none;
    }
`

