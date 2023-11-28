import React from 'react'
import { Outlet } from 'react-router-dom'
import LayoutNavigation from './Navigation/LayoutNavigation'
import * as S from './style'
import LayoutFriendsList from './FriednsList/LayoutFriendsList'

export default function Layout() {
    return (
        <S.Wrapper>
            <LayoutNavigation />
            <Outlet />
            <LayoutFriendsList />
        </S.Wrapper>
    )
}
