import styled from 'styled-components';

const ContainerMainLogin = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContainerSubLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    width: 350px;
    height: 380px;
    border: 1px solid #dbdbdb;
    box-sizing: border-box;
`;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SubLoginSpan = styled.span`
    font-family: 'Lobster', cursive;
    font-size: 42px;
    margin: 22px 88px 0px;
    width: 180px;
    height: 55px;
`;

const LoginIdInput = styled.input`
    width: 260px;
    height: 35px;
    margin: 24px 0px 5px;
    padding-left: 8px;
    background-color: #fafafa;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    font-size: 13px;

    &:focus {
        border: 1px solid #8a8a8a;
        outline: none;
    }
`;

const LoginPwInput = styled.input`
    width: 260px;
    height: 35px;
    margin-bottom: 15px;
    padding-left: 8px;
    background-color: #fafafa;
    border: 1px solid #dbdbdb;
    border-radius: 3px;

    &:focus {
        border: 1px solid #8a8a8a;
        outline: none;
    }
`;
