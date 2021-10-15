import React from 'react'
import styled from 'styled-components';

function Spotlight() {
    return (
        <MainContainer>
            <Wrapper className="wrapper">
                <LeftContainer>
                    <ImageContainer>
                        <SpotlightImage src={require("../assets/Mask Group 46.png").default} alt="Spotlight Image" />
                    </ImageContainer>
                </LeftContainer>
                <RightContainer>
                    <Heading>A beginning of the Digital University for Industry <Color>4.0</Color></Heading>
                    <Description>Steyp is an EdTech company, a beginning of Digital University for industry 4.0, where one can find the relevant courses to upgrade skills from the top experts and gear up for the future advancements in technology, a company incubated and accelerated by Talrop.</Description>
                </RightContainer>
            </Wrapper>
        </MainContainer>
    )
}

const MainContainer = styled.div``;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const LeftContainer = styled.div`
    width: 45%;
`;
const ImageContainer = styled.div`
    width: 80%;
`;
const SpotlightImage = styled.img`
    width: 100%;
    display: block;
`;
const RightContainer = styled.div`
    width: 45%;
`;
const Heading = styled.h3`
    font-size: 40px;
    font-weight: 700;
`;
const Color = styled.span`
    font-size: 40px;
    font-weight: 700;
    color: #0fa76f;
`;
const Description = styled.p`
   
`;

export default Spotlight
