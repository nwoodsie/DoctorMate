import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

function Booking() {
    return (
        <Container>
            <Block>
                <img src="https://pebbledesign.com/wp-content/uploads/2021/03/booking-direct.png" alt=""/>
            </Block>
            <Block>
                <h1>MAKE AN APPOINTMENT NOW</h1>
                <h3>View our doctors availiabilities and make an appointment that suites your busy schedule. Click below for more information.</h3>
                <Link to="/BookNow" style={{textDecoration: 'none'}}>
                    <Newbutton style={{textDecoration: 'none', color:'black'}}>Book Now</Newbutton>
                </Link>
                
            </Block>
            
        </Container>
    )
}

export default Booking/*  */

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
    width: 120px;
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
    margin-bottom: 40px;
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


