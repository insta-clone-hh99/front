import React, { useState } from 'react'
import * as S from './style'
import Navigation from '../../../Navigation/Navigation'
import { Portal } from 'react-portal'
import NewPostModal from '../../Modal/NewPostModal/NewPostModal'
import { useNavigate } from 'react-router-dom'

const nickname = localStorage.getItem('nickname')
const profileImage = localStorage.getItem('image')

const navigationBar = [
    { title: '홈', url: '/home.png' },
    { title: '검색', url: '/zoom.png' },
    { title: '탐색 탭', url: '/map2.png' },
    { title: '릴스', url: '/video.png' },
    { title: '메시지', url: '/message.png' },
    { title: '알림', url: '/heart.png' },
    { title: '만들기', url: '/plus.png' },
    { title: nickname, url: profileImage },
]

export default function LayoutNavigation() {
    const navigate = useNavigate()
    const [isOpenFirstModal, setIsOpenFirstModal] = useState(false)
    const firstModalToggle = () => {
        setIsOpenFirstModal((prev) => !prev)
    }

    const onClickLogo = () => {
        navigate('/')
    }

    return (
        <S.NavigationBar>
            <S.LogoStyle onClick={onClickLogo} src="/logo.png" alt="로고" />
            <S.NavCategoryWrapper>
                {navigationBar.map((data) => (
                    <Navigation firstModalToggle={firstModalToggle} data={data} />
                ))}
            </S.NavCategoryWrapper>
            <div>
                <S.NavCategoryStyle>
                    <S.NavImageStyle src="/threads.png" alt="threads" />
                    <S.NavCategoryTitle>Threads</S.NavCategoryTitle>
                </S.NavCategoryStyle>
                <S.NavCategoryStyle>
                    <S.NavImageStyle src="/more.png" alt="more" />
                    <S.NavCategoryTitle>더 보기</S.NavCategoryTitle>
                    {isOpenFirstModal && (
                        <Portal node={document && document.getElementById('modal-root')}>
                            <NewPostModal onClose={firstModalToggle} setIsOpenFirstModal={setIsOpenFirstModal} />
                        </Portal>
                    )}
                </S.NavCategoryStyle>
            </div>
        </S.NavigationBar>
    )
}
