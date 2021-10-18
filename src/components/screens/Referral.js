import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom'

function Referral() {
    return (
        <MainContainer>
        <TopContainer>
            <ImageContainer>
                <Round src={require("../assets/Group 2608.svg").default} alt="Round Pic" />
            </ImageContainer>
            <Heading>Enter your Referral code</Heading>
        </TopContainer>
        <MiddleContainer>
            <InputField placeholder= "Enter your Referral code here" required/>
            <CouponImage src={require("../assets/coupon.svg").default} alt="Coupon" />
        </MiddleContainer>
        <BottomContainer>
            <Link >
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
    padding: 10px 40px;
    border-radius: 10px;
    outline: none;
    border:none;
    border: 1px solid #000;
    box-sizing: border-box;
`;
const CouponImage = styled.img`
    position: absolute;
    width: 15px;
    top: 13px;
    left: 40px;
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

export default Referral
