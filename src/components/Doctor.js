import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'


function Doctor({name, description, field}) {
    return (
        <Container>
            <BlockImage>
                <img src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" alt=""/>
            </BlockImage>
               
            <Block >
                <h1>{name} - {field}</h1>
                <h3>{description}</h3>
                <Link to="BookNow" style={{textDecoration: 'none', color:'black'}}>
                    <Newbutton >
                        <span>Book Appointment</span>
                    </Newbutton>
                </Link>
            </Block>
        </Container>
    )
}

export default Doctor


const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    background-color: #d8e8e3;
    margin-top: 40px;
    border-radius: 40px;
`;

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
    margin-left: 4.5rem;
    background-color: white;
    width: 90%;
    :hover {
            background-color: rgb(255, 0, 0, 0.5);
            color: white;
        }
`;

const BlockImage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    > img {
        height: 280px;
        border-radius: 40px;
    }
`;

const Block = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    text-align: left;
    font-size: 19px;
    line-height: 1.75rem;
    width: 100%;

    > h1 {
        margin-top: 40px;
        margin-left: 4.5rem;
        margin-right: 4.5rem;
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



    