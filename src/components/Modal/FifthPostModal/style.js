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
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`

export const ModalContent = styled.div`
    width: 400px;
    height: 150px;
    background-color: #262528;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
`

export const Test = styled.span`
    color: ${(props) => (props.color ? props.color : 'white')};
`

export const Box = styled.div`
    border-bottom: ${(props) => (props.border ? '0px' : '1px solid #606770')};
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
