import React from 'react'

function App() {
    const express = require('express')
    const cookieParser = require('cookie-parser')
    const cors = require('cors')
    const { v4: uuidv4 } = require('uuid')

    const app = express()
    const port = 4000

    app.use(express.json())
    app.use(cookieParser())

    // cors 주는 방법 credentials가 true
    const corsOptions = {
        origin: true,
        credentials: true,
    }
    app.use(cors(corsOptions))

    let sessions = {}

    // 로그인 API (토큰 인증)
    const SECRET_KEY = "mySecretKey"
    app.post('/login', (req, res) => {
        const { id, password } = req.body
        console.log('req.body', req.body)

        // DB에서 client에서 받아온 아이디, 비밀번호에 해당 정보 있는거 확인 가정
        const newSessionId = uuidv4()
        sessions[newSessionId] = { id }

        // 보안을 위해서 httpOnly 설정
        res.cookie('sessionId', newSessionId, { httpOnly: true })
        return res.status(200).send('로그인 성공')
    })

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })



    return <div>app</div>
}

export default App
