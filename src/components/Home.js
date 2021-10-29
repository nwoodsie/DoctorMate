import React from 'react'
import styled from 'styled-components'
import MainBlock from './MainBlock';
import BottomBlock from './BottomBlock'

function Home() {
    return (
        <Container>
            <Announcement>
                <span>Due to the current NSW regulations regarding the on-going Covid 19 Pandemic, a mask is required to be worn when visiting the clinic at all times. 
                    Thank you for your cooperation.  <a href="https://www.nsw.gov.au/covid-19/rules/changes/face-mask-rules" style={{color:'black'}} >Learn More.</a> </span>
            </Announcement>
            <MainBlock />
            <BottomBlock />
        </Container>
    )
}

export default Home

const Container = styled.main`
    padding-top: 101px;
    max-width: 1440px;
    margin: 0 auto;
`;

const Announcement = styled.div`
    display: flex;
    justify-content: center;
    background-color: #d8e8e3;

    > span {
        padding-top: 3.2rem;
        padding-bottom: 3.2rem;
        max-width: 50%;
        text-align: center;
        font-size: 19px;
        line-height: 1.75rem;
        font-weight: 510;
    }

`;



