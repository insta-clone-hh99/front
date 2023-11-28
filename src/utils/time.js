import styled from 'styled-components'
import { format, register } from 'timeago.js' //임포트하기 register 한국어 선택
import koLocale from 'timeago.js/lib/lang/ko' //한국어 선택

register('ko', koLocale)

export const TimeAndDate = (publishedAt) => {
    return <TimeStyle className="text-sm opacity-80">{format(publishedAt, 'ko')}</TimeStyle>
}

export const TimeStyle = styled.p`
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 10px;
    color: gray;
    font-size: 13px;
`
