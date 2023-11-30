import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMutation } from 'react-query'
import axios from 'axios'
import Styled from './style'
import InstagramLogo from '../../assets/insta-rogo-text.jpeg'
import iPhoneImg from '../../assets/iphone.jpeg'
import Down from '../../assets/down.jpeg'
import tto from '../../assets/tto.jpeg'
import { useNavigate } from 'react-router-dom'

function SignIn({ onLogin, onClose }) {
    const [email, setemail] = useState('')
    const [password, setpassWord] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const loginMutation = useMutation(
        async ({ email, password }) => {
            try {
                const response = await axios.post(`${process.env.REACT_APP_SERVER_URL_2}/api/login`, {
                    email,
                    password,
                })
                const token = response.data.accessToken

                console.log('로그인 응답:', response.data)
                return token
            } catch (error) {
                throw error
            }
        },
        {
            onSuccess: (token) => {
                try {
                    sessionStorage.setItem('accessToken', token)

                    if (typeof onLogin === 'function') {
                        onLogin(token)
                    }

                    console.log('로그인 성공:', token)

                    onClose()
                    navigate('/')
                } catch (error) {}
            },
            onError: (error) => {
                if (error.response) {
                    const statusCode = error.response.status
                    if (statusCode === 401) {
                        setError('이메일 또는 비밀번호가 틀립니다.')
                        alert('이메일 또는 비밀번호가 틀립니다.')
                    } else if (statusCode === 400) {
                        setError('비밀번호는 4~12자리의 영문 대소문자와 숫자의 조합이어야 합니다.')
                        alert('비밀번호는 4~12자리의 영문 대소문자와 숫자의 조합이어야 합니다.')
                    }
                } else {
                    setError('로그인 중 오류가 발생했습니다.')
                    alert('로그인 중 오류가 발생했습니다.')
                }
            },
        },
    )

    const onLoginHandler = async () => {
        setError('')

        if (!email || !password) {
            setError('이메일 또는 비밀번호를 입력해주세요.')
            alert('이메일 또는 비밀번호를 입력해주세요.')
            return
        }

        try {
            await loginMutation.mutateAsync({ email, password })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Styled.Back>
            <Styled.Wrap>
                <Styled.Img src={iPhoneImg} alt="iPhone"></Styled.Img>
                <Styled.Content>
                    <Styled.Lgtitle>
                        <Styled.Span>
                            <img src={InstagramLogo} alt="Instagram Logo" />
                        </Styled.Span>
                        <Styled.FlexCenter>
                            <Styled.Input
                                type="text"
                                placeholder="전화번호, 사용자 이름 또는 이메일"
                                id="email"
                                value={email || ''}
                                onChange={(e) => setemail(e.target.value)}
                            />
                            <Styled.Input
                                type="password"
                                placeholder="비밀번호"
                                id="password"
                                value={password || ''}
                                onChange={(e) => setpassWord(e.target.value)}
                            />
                            <Styled.Button type="button" onClick={onLoginHandler}>
                                로그인
                            </Styled.Button>
                            <Styled.Img1 src={tto} alt="iPhone"></Styled.Img1>
                        </Styled.FlexCenter>
                        {error && (
                            <Styled.ErrorContainer>
                                <Styled.ErrorText>{error}</Styled.ErrorText>
                            </Styled.ErrorContainer>
                        )}
                    </Styled.Lgtitle>

                    <Styled.LinkText>
                        <Styled.LinkText1>
                            계정이 없으신가요?
                            <Styled.ButtonAsText>
                                <Link to="/signup">가입하기</Link>
                            </Styled.ButtonAsText>
                        </Styled.LinkText1>
                    </Styled.LinkText>
                    <Styled.Img1 src={Down} alt="Down"></Styled.Img1>
                </Styled.Content>
            </Styled.Wrap>
        </Styled.Back>
    )
}

export default SignIn
