import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/Home/Home'
import DetaliedPage from '../components/Detalie/Detalie'
import NewPost from '../components/Detalie/Detalie'
import Login from '../components/Login/Login'
import SignIn from '../components/SignIn/SignIn'
import Signup from '../components/Signup/Signup'
import Layout from '../components/Layout/Layout'
import ThirdModal from '../components/Modal/ThirdPostModal/ThirdPostModal'

function Router() {
    const isLoggedIn = true // You need to define the isLoggedIn variable

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={isLoggedIn ? <Home /> : <Login />} />
                    <Route path="/posts/:postId" element={<DetaliedPage />} />
                    <Route path="/api/posts/new" element={<NewPost />} />
                    <Route path="/login" element={<SignIn />} />
                    <Route path="/signup" element={<Signup />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
