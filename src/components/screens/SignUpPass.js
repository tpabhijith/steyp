import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import tick from '../assets/Group 2645.svg';
import close from '../assets/Group 2938.svg';

function SignUpPass() {
    const [image,setImage] = useState(false);
    const [image2,setImage2] = useState(false);
    const toggle2 = () => {
        setImage2(!image2);
        console.log(image2)
    }
    const toggle= ()=> {
        setImage(!image);
    }
    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
    });
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    }; 
    const handleClickShowPassword2 = () => {
        setValues({ ...values, showPassword2: !values.showPassword2 });
    };      
    // const handlePasswordChange = (prop) => (event) => {
    //     setValues({ ...values, [prop]: event.target.value });
    // };
    // const handlePasswordChange2 = (prop) => (event1) => {
    //     setValues({ ...values, [prop]: event1.target.value });
    // };
    const [password, setPassword] = useState({
        firstPassword: "",
        secondPassword: "",
    });
    const setFirst = (event) => {
        setPassword({ ...password, firstPassword: event.target.value });
        };
        const setSecond = (event) => {
        setPassword({ ...password, secondPassword: event.target.value });
    };
    
    const usePasswordValidation = ({ firstPassword = "", secondPassword = "" }) => {
        const [validLength, setValidLength] = useState(null);
        const [hasNumber, setHasNumber] = useState(null);
        const [upperCase, setUpperCase] = useState(null);
        const [lowerCase, setLowerCase] = useState(null);
        const [specialChar, setSpecialChar] = useState(null);
        const [match, setMatch] = useState(null);   
        useEffect(() => {
            setValidLength(firstPassword.length >= 8 ? true : false);
            setUpperCase(firstPassword.toLowerCase() !== firstPassword);
            setLowerCase(firstPassword.toUpperCase() !== firstPassword);
            setHasNumber(/\d/.test(firstPassword));
            setSpecialChar(/[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(firstPassword));
            setMatch(firstPassword && firstPassword === secondPassword);

        }, [firstPassword, secondPassword]); 
        return [validLength, hasNumber, upperCase, lowerCase, match, specialChar];               
    }
    const [
        validLength,
        hasNumber,
        upperCase,
        lowerCase,
        match,
        specialChar,
        ] = usePasswordValidation({
        firstPassword: password.firstPassword,
        secondPassword: password.secondPassword,
    });
    return (
        <MainContainer>
            <TopContainer>
                <ImageContainer>
                    <Round src={require("../assets/Group 2608.svg").default} alt="Round Pic" />
                </ImageContainer>
                <Heading>Create a password for your account</Heading>
            </TopContainer>
            <MiddleContainer>
                <InputField placeholder= "Enter Password"  required type={values.showPassword ? "text" : "password"}
                                    onChange={setFirst}
                                    />
                <LockImage src={require("../assets/Layer 3.svg").default} alt="Lock Icon" />
                <EyeImage src={require("../assets/hide.svg").default} alt="Eye Icon" onClick={()=>(toggle(),handleClickShowPassword())} image={image}  />
                <EyeOpen src={require("../assets/eye.svg").default} alt="Open Eye" onClick={()=>(toggle(),handleClickShowPassword())} image={image}/>
                <InputField2 placeholder= "Re-enter Password"  required type={values.showPassword2 ? "text" : "password"}
                                    onChange={setSecond}
                                    />
                <LockImage2 src={require("../assets/Layer 3.svg").default} alt="Lock Icon" />
                <EyeImage2 src={require("../assets/hide.svg").default} alt="Eye Icon" onClick={()=>(toggle2(),handleClickShowPassword2())} image2={image2}  />
                <EyeOpen2 src={require("../assets/eye.svg").default} alt="Open Eye" onClick={()=>(toggle2(),handleClickShowPassword2())} image2={image2}/>
            </MiddleContainer>
            <Validation>
                <Span className="correct" match={match}>Enter password correctly</Span>
                <Span className="valid-length" validLength={validLength}>
                    <CheckImage src={validLength ? tick : close}/>Contains atleast 8 characters
                </Span>
                <Span className="lower-case" lowerCase={lowerCase}>
                    <CheckImage src={lowerCase ?  tick : close} />Contains atleast 1 lower case letter
                </Span>
                <Span className="upper-case" upperCase={upperCase}>
                    <CheckImage src={upperCase ?  tick : close} />Contains atleast 1 upper case character
                </Span>
                <Span className="has-number" hasNumber={hasNumber}>
                    <CheckImage src={hasNumber ?  tick : close} />Contains atleast 1 number
                </Span>
                <Span className="special-char" specialChar={specialChar}>
                    <CheckImage src={specialChar ? tick : close} />Contains atleast one symbol
                </Span>
            </Validation>
            <BottomContainer>
                <Link to={`/referral`}>
                    <Button>Continue</Button>
                </Link>
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
    width:20px;
`;
const Round = styled.img`
    display: block;
    width: 100%;
`;
const Heading = styled.h5`
    font-size: 24px;
    margin: 10px 0;
`;
const MiddleContainer = styled.div`
    padding: 0 30px;
    position: relative;
`;
const InputField = styled.input`
    width: 100%;
    padding: 10px 30px;
    border-radius: 10px;
    outline: none;
    border:none;
    border: 1px solid #000;
    box-sizing: border-box;
`;
const InputField2 = styled.input`
    width: 100%;
    padding: 10px 30px;
    border-radius: 10px;
    outline: none;
    border:none;
    border: 1px solid #000;
    box-sizing: border-box;
    margin-top: 30px;
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
const EyeImage2 = styled.img`
    position: absolute;
    width: 18px;
    top: 78px;
    right:46px;
    display: ${({image2})=> (image2 ? 'block' : 'none')};
    cursor: pointer;
`;
const EyeOpen2 = styled.img`
    position: absolute;
    width: 18px;
    top: 80px;
    right:46px;
    display: ${({image2})=> (image2 ? 'none' : 'block')};
    cursor: pointer;
`;
const LockImage = styled.img`
    position: absolute;
    width: 15px;
    top:8px;
    left: 40px;
`;
const LockImage2 = styled.img`
    position: absolute;
    width: 15px;
    top: 73px;
    left: 40px;
`;
const  Validation = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
    padding-bottom: 10px;
`;
const  Span = styled.span`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    font-size: 14px;
    &.correct {
        color:red;
        display: ${({match})=>(match ? 'none' : 'block')};
    }
    &.valid-length {
        color: ${({validLength})=>(validLength ? '#2bc871' : 'red')}
    }
    &.lower-case{
        color: ${({lowerCase})=>(lowerCase ? '#2bc871' : 'red')}
    }
    &.upper-case {
        color: ${({upperCase})=>(upperCase ? '#2bc871' : 'red')}
    }
    &.has-number {
        color: ${({hasNumber})=>(hasNumber ? '#2bc871' : 'red')}
    }
    &.special-char {
        color: ${({specialChar})=>(specialChar ? '#2bc871' : 'red')}
    }
`;
const  CheckImage = styled.img`
    display: inline-block;
    width: 20px;
    margin-right: 20px;
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
    cursor: pointer;

`;
const Footer = styled.p`
    color: #929292;
`;

export default SignUpPass
