import React from 'react'
import styled from 'styled-components'


function Login() {
    return (
       <MainContainer>
           <TopContainer>
               <ImageContainer>
                   <Round src={require("../assets/Group 2608.svg").default} alt="Round Pic" />
               </ImageContainer>
               <Heading>Let's root toghether and watch other grow</Heading>
               <Description>An inventive collaboration for a smart dawn inclining kids to match their vision.</Description>
           </TopContainer>
           <MiddleContainer>
               <InputFirld placeholder= "Enter your mobile no." />
               <Paragraph>Forget Passwor?</Paragraph>
           </MiddleContainer>
           <BottomContainer>
               <Button>Continue</Button>
               <Footer>New to Steyp?</Footer>
           </BottomContainer>
       </MainContainer>
    )
}

const MainContainer = styled.div`
    text-align: center
`;
const TopContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
`;
const ImageContainer = styled.div`
    width: 20px;
`;
const Round = styled.img`
    display: block;
    width: 100%;
`;
const Heading = styled.h5``;
const Description = styled.p``;
const MiddleContainer = styled.div``;
const Paragraph = styled.p``;
const InputFirld = styled.input``;
const BottomContainer = styled.div``;
const Button = styled.button``;
const Footer = styled.p``;

export default Login
