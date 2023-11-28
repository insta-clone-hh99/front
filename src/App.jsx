import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Detalie from './components/Detalie/Detalie'
import NewPost from './components/NewPost/NewPost'
import SignIn from './components/SignIn/SignIn'
import Signup from './components/Signup/Signup'
import Layout from './components/Layout/Layout'
import Login from './components/Login/Login' // 이 부분 나중에 빼기

function Router() {
    const isLoggedIn = true

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={isLoggedIn ? <Home /> : <Login />} />
                    <Route path="/posts" element={<Detalie />} />
                    <Route path="/posts/new" element={<NewPost />} />
                    <Route path="/login" element={<SignIn />} />
                    <Route path="/signup" element={<Signup />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
