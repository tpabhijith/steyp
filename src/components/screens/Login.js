import React,{useState} from 'react'
import styled from 'styled-components'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

function Login() {
    const [next,setNext] = useState(false);
    const toggle = ()=>{
            setNext(true);
            console.log( "next",next);
        }
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
               <InputContainer>
                    <PhoneImage src={require("../assets/9180212681582004495.svg").default} alt="Phone Icon" />
                    <p>+91</p>
                    <InputField placeholder= "Enter your mobile no." type="tel" required/>
               </InputContainer>
              
               
               <Paragraph>Forget Password?</Paragraph>
               
           </MiddleContainer>
           <BottomContainer>
               <Link to={`/loginpass`}>
                    <Button onclick={toggle}>Continue</Button>
               </Link>
               <Footer>New to Steyp ? <SignLink to={`/signup`}>Sign Up</SignLink></Footer>
           </BottomContainer>
       </MainContainer>
    )
}
const SignLink = styled(Link)`
    text-decoration: none;
    margin-left: 8px;
    color: #29b3ef;
    cursor: pointer;
`;
const MainContainer = styled.div`
    text-align: left;
`;
const TopContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    padding: 30px;
`;
const ImageContainer = styled.div`
    width: 20px;
`;
const Round = styled.img`
    display: block;
    width: 100%;
`;
const Heading = styled.h5`
    font-size: 24px;
    margin: 10px 0;
`;
const Description = styled.p`
    margin: 0;
    color: #929292;
    font-size: 14px;
`;
const MiddleContainer = styled.div`
    padding: 0 30px;
    position: relative;
`;
const Paragraph = styled.p`
    margin: 0;
    font-size: 12px;
    color: #29b3ef;
    text-align: right;
    cursor: pointer;
`;
const InputContainer = styled.div`
    width: 100%;
    border-radius: 10px;
    border: 1px solid #000;
    box-sizing: border-box;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-space-between;
    padding-left: 25px;
    font-size: 16px;
    p {
        font-size: 13px;
        font-weight: 400;
    }
`;
const InputField = styled.input`
    outline: none;
    border:none;
    padding-top: 5px;
    padding-left: 5px;    
`;
const PhoneImage = styled.img`
    width: 10px;
    margin-right: 10px;
`;
const BottomContainer = styled.div`
    padding: 0 30px;
    text-align: center;
    font-size: 12px;
`;
const Button = styled.button`
    padding: 10px;
    border-radius: 10px;
    width: 100%;
    border: none;
    background: #2bc871;
    color: #fff;
    margin-top: 30px;
    cursor: pointer;
    z-index: 1000;
`;
const Footer = styled.p`
    color: #929292;
`;

export default Login;