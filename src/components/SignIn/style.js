<<<<<<< HEAD
import styled from 'styled-components'

const Styled = {}
=======
import styled from "styled-components";

const Styled = {};
>>>>>>> b6bd13a4d1b19a5074e92cec92a25f6ac1d50d8c

Styled.Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    border: 1px solid #dbdbdb;
    margin: 0 0 10px 0;
    padding: 10px 0 10px 0;
<<<<<<< HEAD
`
=======
`;
>>>>>>> b6bd13a4d1b19a5074e92cec92a25f6ac1d50d8c

Styled.Lgtitle = styled.div`
    text-align: center;
    border: 1px solid #dbdbdb;
    margin: 0 0 10px 0;
    padding: 70px 0;
    line-height: 1.5;
<<<<<<< HEAD
`
=======
`;
>>>>>>> b6bd13a4d1b19a5074e92cec92a25f6ac1d50d8c

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
<<<<<<< HEAD
`
=======
`;
>>>>>>> b6bd13a4d1b19a5074e92cec92a25f6ac1d50d8c

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
<<<<<<< HEAD
`
=======
`;
>>>>>>> b6bd13a4d1b19a5074e92cec92a25f6ac1d50d8c

Styled.Input = styled.input`
    padding: 0.5rem;
    margin: 0.5rem;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    outline: none;
    width: 45vh;
<<<<<<< HEAD
=======
    height: 251.px;
>>>>>>> b6bd13a4d1b19a5074e92cec92a25f6ac1d50d8c
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
<<<<<<< HEAD
`
=======
`;
>>>>>>> b6bd13a4d1b19a5074e92cec92a25f6ac1d50d8c

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
<<<<<<< HEAD
`

Styled.LinkText = styled.div`
    border: 1px solid #dbdbdb;
    margin: 0 0 20px 0;
    padding: 10px 0 10px 0;
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 48vh;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
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

export default Styled
=======
`;

export default Styled;
>>>>>>> b6bd13a4d1b19a5074e92cec92a25f6ac1d50d8c
