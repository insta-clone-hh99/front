import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    margin-bottom: 20px;
    width: 280px;
    align-items: center;
    justify-content: space-between;
`

export const Left = styled.div`
    display: flex;
`

export const TitleAndSub = styled.div`
    display: flex;
    flex-direction: column;
`

export const Nickname = styled.p`
    width: 70px;
    text-align: center;
    color: white;
    margin: 0;
`

export const TitleImage = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 20px;
`

export const TextFollow = styled.span`
    color: #0095f6;
    font-size: 13px;
    &:hover {
        color: skyblue;
    }
    cursor: pointer;
`

export const SubInfo = styled.span`
    color: gray;
    margin-left: 10px;
    font-size: 13px;
`
