import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Spotlight from './Spotlight'


function Home() {
    return (
        <>
        <Header/>
        <Spotlight />
        <RightDiv>
        </RightDiv>
        </>
    )
}
const RightDiv = styled.div`
    padding: 30px;
    background: rgb(248, 248, 248);
    width: 450px;
    position: fixed;
    top: 0px;
    right: -1000px;
    z-index: 500;
    transition: all 0.6s ease 0s;
    height: 100vh;
    overflow-y: scroll;
`;

export default Home
