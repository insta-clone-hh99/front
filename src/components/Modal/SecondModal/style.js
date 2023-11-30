import styled from 'styled-components'

export const Wrapper = styled.div`
    display: block;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 1920px;
    height: 923px;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ModalContent = styled.div`
    background-color: #fefefe;
    border: 1px solid #888;
    width: 400px;
    height: 200px;
    border-radius: 10px;
    background-color: #262528;
    display: flex;
    flex-direction: column;
`

export const ModalHeader = styled.div`
    width: 100%;
    height: 110px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid gray;
`

export const HeaderTitle = styled.p`
    margin: 0px;
    color: white;
    font-size: 20px;
`

export const HeaderSubTitle = styled.p`
    margin-top: 10px;
    margin-bottom: 0px;
    color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const DeleteWrapper = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid gray;
    cursor: pointer;
`

export const CancelWrapper = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const DeleteText = styled.span`
    text-align: center;
    color: red;
    font-size: 13px;
`

export const CancelText = styled.span`
    text-align: center;
    color: white;
    font-size: 13px;
`
