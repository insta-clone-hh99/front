import styled from 'styled-components'

const Styled = {}

Styled.Back = styled.div`
    background-color: #ffffff;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`

Styled.Wrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
`

Styled.Content = styled.div`
    background-color: #fff;
    border: 1px solid #dbdbdb;
    padding: 20px;
    text-align: center;
    flex-grow: 1;
    margin-left: 20px;
    width: 80vw;
`

Styled.Lgtitle = styled.div`
    margin-bottom: 20px;
`

Styled.Span = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;

    & img {
        width: 195px;
        height: 90px;
        margin-right: 10px;
    }
`

Styled.FlexCenter = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 1rem;

    & > ${Styled.Input} {
        margin-bottom: 0.2rem;
    }

    & > ${Styled.Button} {
        margin-bottom: 0.2rem;
    }
`

Styled.Input = styled.input`
    padding: 0.5rem;
    margin: 0.3rem;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    outline: none;
    padding: 9px 0 7px 8px;
    background-color: #fafafa;
    font-size: 12px;
    font-weight: bold;
    line-height: 18px;
    display: block;
    overflow: hidden;
    text-align: left;
    width: 33.55vh;
    cursor: default;

    &::placeholder {
        color: #999;
    }
`

Styled.Button = styled.button`
    background-color: #3898f3;
    color: #fff;
    padding: 0.5rem 1rem;
    margin: 0.3rem;
    border: none;
    border-radius: 7px;
    font-size: 1rem;
    cursor: pointer;
    outline: none;
    width: 34.88vh;
    height: 4vh;
    font-weight: bold;

    &:hover {
        background-color: #3f4b5b;
    }
`

Styled.LinkText = styled.div`
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

Styled.LinkText1 = styled.div`
    font-size: 14px;
    font-weight: bold;
    text-align: center;
`

Styled.ButtonAsText = styled.button`
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

Styled.ErrorContainer = styled.div`
    border: 1px solid #ffffff;
    padding: 8px;
`

Styled.ErrorText = styled.p`
    color: red;
    font-size: 14px;
`

Styled.Img = styled.img`
    width: 67%;
    height: auto;
    max-width: 100%;
    margin-bottom: 20px;
`

Styled.Img1 = styled.img`
    width: 130%;
    height: auto;
    max-width: 100%;
    margin-bottom: 20px;
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

export default Styled
