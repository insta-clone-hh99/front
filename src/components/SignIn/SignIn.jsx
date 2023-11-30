import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import axios from 'axios'
import Styled from './style'

import InstagramLogo from '../../assets/insta-rogo.png'

function SignIn({ onLogin, onClose }) {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassWord] = useState('')
    const [error, setError] = useState('')

    const loginMutation = useMutation(
        async ({ email, password }) => {
            try {
                const response = await axios.post(`${process.env.REACT_APP_SERVER_URL_2}/api/login`, {
                    email,
                    password,
                })
                const name = response.data.userName
                const nickname = response.data.nickname

                console.log('name', name)
                const data = response.data.accessToken
                const token = data.split(' ')[1]
                console.log(token)

                localStorage.setItem('accessToken', token)
                localStorage.setItem('name', name)
                localStorage.setItem('nickname', nickname)

                console.log('token', token)

                console.log('로그인 응답:', response)
                return token
            } catch (error) {
                console.log('로그인 에러:', error)
                throw error
            }
        },
        {
            onSuccess: (token) => {
                try {
                    if (typeof onLogin === 'function') {
                        onLogin(token)
                    }

                    console.log('로그인 성공:', token)

                    onClose()
                } catch (error) {
                    console.error('로그인 실패:', error)
                }
            },
            onError: (error) => {
                setError('로그인 중 예기치 않은 오류가 발생했습니다..')
            },
        },
    )

    const onLoginHandler = async () => {
        if (!email || !password) {
            setError('아이디 비밀번호 필수.')
            return
        }
        navigate('/')
        setError('')
        try {
            await loginMutation.mutateAsync({ email, password })
        } catch (error) {
            console.log(error)
        }
    }

    return (
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
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Styled.Input
                        type="password"
                        placeholder="비밀번호"
                        id="Password"
                        value={password || ''}
                        onChange={(e) => setPassWord(e.target.value)}
                    />
                    <Styled.Button type="button" onClick={onLoginHandler}>
                        로그인
                    </Styled.Button>
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
        </Styled.Content>
    )
}

export default SignIn
