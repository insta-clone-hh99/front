import styled from 'styled-components'

export const Wrapper = styled.div`
    display: block;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 1920px;
    height: 900px;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ModalContent = styled.div`
    width: 400px;
    height: 500px;
    background-color: #262528;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
`

export const TitleSWrapper = styled.div`
    width: 400px;
    height: 55px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: ${(props) => (props.border ? '0px' : '1px solid #606770')};
    cursor: pointer;
`

export const TitleStyle = styled.span`
    color: ${(props) => (props.color ? props.color : 'white')};
    font-size: 12px;
`
