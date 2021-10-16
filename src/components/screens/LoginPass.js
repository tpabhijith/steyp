import React, {useState} from 'react'
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

function LoginPass() {
    const [image,setImage] = useState(false);
    const toggle= ()=> {
        setImage(!image);
        console.log(image);
    }
    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
    });
      
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };      
    const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
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
                    <InputField placeholder= "Enter your password" required type={values.showPassword ? "text" : "password"}
                                onChange={handlePasswordChange("password")}
                                value={values.password}/>
                    <EyeImage src={require("../assets/hide.svg").default} alt="Eye Icon" onClick={()=>(toggle(),handleClickShowPassword())} image={image}  />
                    <EyeOpen src={require("../assets/eye.svg").default} alt="Open Eye" onClick={()=>(toggle(),handleClickShowPassword())} image={image}/>
                </MiddleContainer>
                <BottomContainer>
                    <Button>Continue</Button>
                </BottomContainer>
            </MainContainer>
    )
}

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
`;
const InputField = styled.input`
    width: 100%;
    padding: 10px 25px;
    border-radius: 10px;
    outline: none;
    border:none;
    border: 1px solid #000;
    box-sizing: border-box;
`;
const EyeImage = styled.img`
    position: absolute;
    width: 18px;
    top: 11px;
    right:46px;
    display: ${({image})=> (image ? 'block' : 'none')};
    cursor: pointer;
   
`;
const EyeOpen = styled.img`
    position: absolute;
    width: 18px;
    top: 13px;
    right:46px;
    display: ${({image})=> (image ? 'none' : 'block')};
    cursor: pointer;
   
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
`;
const Footer = styled.p`
    color: #929292;
`;

export default LoginPass
