import React from 'react'
import { Outlet } from 'react-router-dom'
import Headers from '../Headers/Headers'
import Footer from '../Footer/Footer'

export default function Layout() {
    return (
        <div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}
