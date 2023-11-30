import styled from 'styled-components'

const Back = styled.div`
    background-color: #ffffff;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Wrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
`

const Input = styled.input`
    padding: 0.5rem;
    margin: 0.1rem;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    outline: none;
    width: 32.55vh;
    background-color: #fafafa;
    font-size: 12px;
    font-weight: bold;
    line-height: 18px;
    display: block;
    overflow: hidden;
    text-align: left;
    cursor: default;

    &::placeholder {
        color: #999;
    }
`

const Button = styled.button`
    margin: 0.1rem;
    background-color: #3898f3;
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 7px;
    font-size: 1rem;
    width: 34.55vh;
    height: 4vh;
    cursor: pointer;
    outline: none;
    font-weight: bold;

    &:hover {
        background-color: #3f4b5b;
    }
`

const Content = styled.div`
    text-align: center;
    padding: 20px;
    border: 1px solid #dbdbdb;
    background-color: white;
`

const Lgtitle = styled.div`
    margin-bottom: 20px;
`

const Span = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;

    & img {
        width: 195px;
        height: 85px;
        margin-right: 10px;
    }
`

const Spani = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.1rem;
    transition:
        opacity 0.3s,
        filter 0.3s;

    &:hover {
        opacity: opacity 0.5s linear;
        filter: brightness(100%);
        cursor: pointer;
    }

    &:active {
        opacity: 0.6;
    }

    & img {
        width: 35.55vh;
        height: 5.55vh;
        margin-right: 10px;
    }

`

const FlexCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 2rem;
    width: 40vh;
    text-align: center;

    & > ${Input}, & > ${Button} {
        margin-bottom: 0.4rem;
    }
`

const LinkText = styled.div`
    margin-top: 20px;
    font-size: 14px;
    color: #737373;
    transition:
        opacity 0.3s,
        filter 0.3s;

    &:hover {
        opacity: opacity 0.5s linear;
        filter: brightness(100%);
        cursor: pointer;
    }

    &:active {
        opacity: 0.6;
    }
`

const LinkText1 = styled.div`
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    margin-top: 20px;
`

const LinkText2 = styled.div`
    font-size: 13px;
    font-weight: bold;
    text-align: center;
    color: #737373;
    margin-top: 10px;
    transition:
        opacity 0.3s,
        filter 0.3s;

    &:hover {
        opacity: opacity 0.5s linear;
        filter: brightness(100%);
        cursor: pointer;
    }

    &:active {
        opacity: 0.6;
    }
`

const ButtonAsText = styled.button`
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    color: #3898f3;
    cursor: pointer;
    text-decoration: underline;

    & > a {
        color: inherit;
        text-decoration: inherit;
    }
`

export const Img1 = styled.img`
    width: 117%;
    height: auto;
    max-width: 100%;
    margin-bottom: 20px;
    max-width: 100%;
    transition:
        opacity 0.3s,
        filter 0.3s;

    &:hover {
        opacity: opacity 0.5s linear;
        filter: brightness(100%);
        cursor: pointer;
    }

    &:active {
        opacity: 0.6;
    }
`

export const ErrorContainer = styled.div`
    border: 1px solid #ffffff;
    padding: 8px;
    margin-top: 20px;
`

export const ErrorText = styled.p`
    color: red;
    font-size: 14px;
`

const Img = styled.img`
    width: 67%;
    height: auto;
    max-width: 100%;
    margin-bottom: 20px;
    margin-right: 20px;
`

export {
    Content,
    Lgtitle,
    Span,
    Spani,
    FlexCenter,
    Input,
    Button,
    LinkText,
    LinkText1,
    LinkText2,
    ButtonAsText,
    Back,
    Wrap,
    Img,
}

