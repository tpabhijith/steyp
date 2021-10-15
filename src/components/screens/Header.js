import React, {useState} from 'react'
import styled from 'styled-components'
import Login from './Login';

function Header(props) {
    const [open,setOpen] = useState(false);
    const toggle = ()=>{
        setOpen(!open);
        console.log(open);
    }
    return (
        <MainContainer>
            <Wrapper className="wrapper">
                <LeftContainer>
                    <ImageContainer>
                        <Logo src={require("../assets/steyp-logo.svg").default} alt="Logo" />
                    </ImageContainer>
                </LeftContainer>
                <RightContainer>
                    <LogInButton onClick={toggle}>
                        Log In
                    </LogInButton>
                    <SignUpButton onClick={toggle}>
                        Sign Up
                    </SignUpButton>
                </RightContainer>
                <SlideMenu open={open}>
                    <CloseImageContainer onClick={toggle}>
                        <CloseImage src = {require("../assets/Group 2938.svg").default} alt="Close Image" />
                    </CloseImageContainer>
                    <Login />
                </SlideMenu>
            </Wrapper>
        </MainContainer>
    )
}

const MainContainer = styled.div`
    padding-top: 30px;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const LeftContainer = styled.div`
    width: 50%;
`;
const ImageContainer = styled.div`
    width: 100px;
    cursor: pointer;
`;
const Logo = styled.img`
    width: 100%;
    display: block;
`;
const RightContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: end;
`;
const LogInButton = styled.span`
    padding:8px 24px;
    border-radius: 10px;
    display: inline-block;
    background: #e6f9f1;
    border: 1px solid #0fa76f;
    margin-right: 20px; 
    cursor: pointer; 
    font-size: 14px;
    font-weight: 500;
    color: #0fa76f;
`;
const SignUpButton = styled.span`
    padding:8px 24px;
    border-radius: 10px;
    display: inline-block;
    background: #0fa76f;
    border: 1px solid #0fa76f;
    margin-right: 20px; 
    cursor: pointer; 
    color: #fff;
    font-size: 14px;
    font-weight: 500;
`;
const SlideMenu = styled.div`
    padding: 30px;
    background: rgb(248, 248, 248);
    width: 450px;
    position: fixed;
    top: 0px;
    right: ${({open})=> (open ? '0px' : '-1000px')};
    z-index: 500;
    transition: all 0.6s ease 0s;
    height: 100vh;
    overflow-y: scroll;
`;
const CloseImageContainer = styled.div`
    width: 20px;
    cursor: pointer;
`;
const CloseImage = styled.img`
    display: block;
    width: 100%;
`;


export default Header