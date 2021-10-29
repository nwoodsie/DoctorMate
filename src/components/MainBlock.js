import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

function MainBlock() {
    return (
        <Container>
            <Block>
                <h1>MEET THE TEAM</h1>
                <h3>Meet our team of talented specialists, commited to excellence and dedicated to prodividing an easy and comfortable experience.</h3>
                <Link to="/OurTeam" style={{textDecoration: 'none'}}>
                    <Newbutton style={{textDecoration: 'none', color:'black'}}>Visit</Newbutton>
                </Link>
                
            </Block>
            <Block>
                <img src="https://images.creativemarket.com/0.1.0/ps/7720634/3005/2000/m1/fpnw/wm0/hospital-medical-staff-team-01-.jpg?1581078216&s=50c4872929c90d1b2d9b0ceee6a66a0a" alt=""/>
            </Block>
        </Container>
    )
}

export default MainBlock

const Newbutton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    border: 2px black solid;
    border-radius: 50px;
    padding: 3px;
    transition: 0.35s;
    margin-top: 15px;
    width: 80px;
    :hover {
            background-color: rgb(255, 0, 0, 0.8);
            color: white;
        }
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f1f8f6;
    margin-top: 40px;
    box-shadow: 0 1px 1px rgb(0 0 0/ 10%), 0 0 2px rgb(0 0 0/ 7%);

`;


const Block = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;
    font-size: 19px;
    line-height: 1.75rem;
    
    > img {
        height: 380px;
    }
    > h1 {
        margin-top: 40px;
    }

    > h3 {
        margin-left: 4.5rem;
        margin-right: 4.5rem;
        color: #939384;
        font-size: 18px;
        line-height: 1.75rem;
        font-weight: 510;
    }
`;


