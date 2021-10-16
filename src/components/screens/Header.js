import React, {useState} from 'react'
import styled from 'styled-components'
import Login from './Login';
import LoginPass from './LoginPass';
import SignUp from './SignUp';
import Home from './Home';
// import {next} from '../includes/ButtonClick';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';


function Header(props) {
    const [open,setOpen] = useState(false);
    const [signup,setSignup] = useState(false);
    const [login,setLogin]=useState(false)
    const toggle = ()=>{
            setOpen(!open);
    }
    const changeFun = (login,signup)=>{
       if(!login) {
           setSignup(!signup)
       }
       else if(!signup){
        setLogin(!login);
       }
    }
    console.log("signup  : ",signup);
    console.log("login  : ",login);
    return (
        <Router>
        <MainContainer>
            <Wrapper className="wrapper">
                <LeftContainer>
                    <ImageContainer>
                        <Logo src={require("../assets/steyp-logo.svg").default} alt="Logo" />
                    </ImageContainer>
                </LeftContainer>
                <RightContainer>
                    <Link to={`/login`}>
                    <LogInButton onClick={()=> (toggle(),setLogin(!login))}>
                        Log In
                    </LogInButton>
                    </Link>
                    <Link to={`/signup`}>
                    <SignUpButton onClick={()=> (toggle(),setSignup(!signup))}>
                        Sign Up
                    </SignUpButton>
                    </Link>
                </RightContainer>
                <SlideMenu open={open} signup={signup}>
                    <Link to={`/`}>
                    <CloseImageContainer onClick={()=> (toggle(),changeFun(login,signup))}  >
                        <CloseImage src = {require("../assets/Group 2938.svg").default} alt="Close Image" />
                    </CloseImageContainer>
                    </Link>
                    {/* {(login && !signup) &&  <Login />}
                    {(signup && !login) && <SignUp />} */}
                    {/* {(login && next) && <LoginPass />} */}
                    <ContentContainer>
                      
                        <Switch>
                            {/* <Route paath="/" exact component={Home} /> */}
                            <Route path="/login" exact component={Login} />
                            <Route path="/signup" exact component={SignUp} />
                            <Route path="/loginpass" exact component={LoginPass} />
                        </Switch>
                    
                    </ContentContainer>
                </SlideMenu>
            </Wrapper>
        </MainContainer>
        </Router>
    )
}
const ContentContainer = styled.div``;

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
