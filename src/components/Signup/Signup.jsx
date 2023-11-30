import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { Link } from 'react-router-dom'
import axios from 'axios'
import * as Styled from './style'
import InstagramLogo from '../../assets/insta-rogo-text.jpeg'
import Iphone from '../../assets/iphone1.jpeg'
import Down from '../../assets/down.jpeg'
import Face from '../../assets/facebook.jpeg'

function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassWord] = useState('')
    const [userName, setUserName] = useState('')
    const [nickname, setNickname] = useState('')
    const [errorMessages, setErrorMessages] = useState([])

    const registerMutation = useMutation(
        async ({ email, password, userName, nickname }) => {
            try {
                const response = await axios.post(
                    `${process.env.REACT_APP_SERVER_URL_2}/api/signup`,
                    {
                        email,
                        password,
                        userName,
                        nickname,
                    },
                    {},
                )

                console.log('등록 후 응답:', response)

                if (response.status === 200) {
                    alert('회원가입이 완료되었습니다.');
                    console.log('회원가입 완료:', response.data)
                }
                console.log('서버의 응답:', response.data)
                return response.data
            } catch (error) {
                console.log('서버 오류:', error)

                if (error.response && error.response.data && error.response.data.messages) {
                    setErrorMessages(error.response.data.messages)
                }

                throw error
            }
        },
        {
            onSuccess: (data) => {
                console.log('응답 성공', data)
            },
        },
    )

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    const isValidPassword = (password) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,12}$/
        return passwordRegex.test(password)
    }

    const onJoinHandler = async () => {
        setErrorMessages([])

        if (!isValidEmail(email)) {
            setErrorMessages(['유효한 이메일 주소를 입력하세요.'])
            return
        }

        if (!isValidPassword(password)) {
            setErrorMessages(['비밀번호는 4~12자리의 영문 대소문자와 숫자의 조합이어야 합니다.'])
            return
        }

        if (!userName) {
            setErrorMessages(['사용자 이름을 입력하세요.'])
            return
        }

        if (!nickname) {
            setErrorMessages(['닉네임을 입력하세요.'])
            return
        }

        if (!nickname || nickname.length < 1 || nickname.length > 5) {
            setErrorMessages(['닉네임은 1~5자리로 입력해주세요.']);
            alert('닉네임은 1~5자리로 입력해주세요.');
            return;
        }

        try {
            const response = await registerMutation.mutateAsync({
                email,
                password,
                userName,
                nickname,
            })

            console.log('등록 후 응답:', response)

            if (response.status === 200) {
                console.log('회원가입이 완료되었습니다.', response.data)
                alert('회원가입이 완료되었습니다.', response.data)
            }
        } catch (error) {
            console.log('회원가입 오류 다시 작성해주세요.', error)

            if (error.response && error.response.status === 401) {
                setErrorMessages(['중복된 이메일 주소입니다. 다른 이메일 주소를 사용하세요.'])
            } else if (error.response && error.response.status === 401) {
                setErrorMessages(['비밀번호는 4~12자리의 영문 대소문자와 숫자의 조합이어야 합니다.'])
            }
        }
    }

    return (
        <Styled.Back>
            <Styled.Wrap>
                <Styled.Img src={Iphone} alt="iPhone" />
                <Styled.Content>
                    <Styled.Lgtitle>
                        <Styled.Span>
                            <img src={InstagramLogo} alt="Instagram Logo" />
                        </Styled.Span>
                        <Styled.LinkText2>친구들의 사진과 동영상을 보려면 가입하세요.</Styled.LinkText2>
                        <Styled.Spani>
                            <img src={Face} alt="face" />
                        </Styled.Spani>
                        {/* <Styled.Button to="/api/login">로그인</Styled.Button> */}
                        <Styled.FlexCenter>
                            <Styled.Input
                                htmlFor="email"
                                type="text"
                                placeholder="이메일"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Styled.Input
                                htmlFor="userPw"
                                type="password"
                                placeholder="비밀번호"
                                value={password}
                                onChange={(e) => setPassWord(e.target.value)}
                            />
                            <Styled.Input
                                htmlFor="userName"
                                type="text"
                                placeholder="사용자이름"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                            <Styled.Input
                                htmlFor="nickname"
                                type="text"
                                placeholder="닉네임"
                                value={nickname}
                                onChange={(e) => setNickname(e.target.value)}
                            />
                            {errorMessages.length > 0 && (
                                <Styled.ErrorContainer>
                                    {errorMessages.map((message, index) => (
                                        <Styled.ErrorText key={index}>{message}</Styled.ErrorText>
                                    ))}
                                </Styled.ErrorContainer>
                            )}
                            <Styled.LinkText2>
                                저희 서비스를 이용하는 사람이 회원님의 연락처 정보를
                                <br />
                                Instagram에 업로드했을 수도 있습니다.
                                <Link to="/signin">더 알아보기</Link>
                            </Styled.LinkText2>
                            <Styled.Button type="button" onClick={onJoinHandler} disabled={registerMutation.isLoading}>
                                {'가입'}
                            </Styled.Button>
                        </Styled.FlexCenter>
                    </Styled.Lgtitle>

                    <Styled.LinkText>
                        <Styled.LinkText1>
                            계정이 있으신가요?
                            <Styled.ButtonAsText>
                                <Link to="/login">로그인</Link>
                            </Styled.ButtonAsText>
                        </Styled.LinkText1>
                    </Styled.LinkText>
                    <Styled.Img1 src={Down} alt="Down"></Styled.Img1>
                </Styled.Content>
            </Styled.Wrap>
        </Styled.Back>
    )
}

export default Signup
