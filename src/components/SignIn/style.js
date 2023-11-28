import styled from 'styled-components'

const Styled = {}

Styled.Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 990px;
    border: 1px solid #dbdbdb;
    margin: 0 0 10px 0;
    padding: 10px 0 10px 0;
    width: 100vw;
    background-color: white;
`

Styled.Lgtitle = styled.div`
    text-align: center;
    border: 1px solid #dbdbdb;
    margin: 0 0 10px 0;
    padding: 70px 0;
    line-height: 1.5;
`

Styled.Span = styled.span`
    display: flex;
    align-items: center;
    margin: center;
    justify-content: center;

    & img {
        width: 175px;
        height: auto;
        margin-right: 10px;
    }
`

Styled.FlexCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 1rem;

    & > ${Styled.Input} {
        margin-bottom: 0.5rem;
    }

    & > ${Styled.Button} {
        margin-top: 0.5rem;
    }
`

Styled.Input = styled.input`
    padding: 0.5rem;
    margin: 0.5rem;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    outline: none;
    width: 45vh;
    height: 50px;
    padding: 9px 0 7px 8px;
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

Styled.Button = styled.button`
    background-color: #3898f3;
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 7px;
    font-size: 1rem;
    cursor: pointer;
    outline: none;
    width: 46.3vh;
    padding: 8px 40px 8px 40px;
    font-weight: bold;

    &:hover {
        background-color: #3f4b5b;
    }
`

export default Styled
