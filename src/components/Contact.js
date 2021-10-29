import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import styled from "styled-components";
import firebase from "firebase/compat/app";
/* import db from "../firebase";
import { doc, deleteDoc } from "firebase/firestore"; */
import "firebase/compat/auth"
import "firebase/compat/firestore"

function Contact() {
    const userID = useSelector((state) => state.user.userID);
    const [bookingArray, setBookingArray] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore();
            const data = await db.collection("bookings").where('userID', '==', userID).get();
            setBookingArray(data.docs.map(doc => doc.data()))
        }
        fetchData()
    },[userID])

    return (
        <Container>
            {bookingArray.map(booking => 
            <Wrapper>  
                <h1>{booking.doctor}</h1>
                <h2>{String(booking.booking)}</h2>
                <button>Cancel Booking</button>
            </Wrapper>
            )}
        </Container>
    )
}

export default Contact

const Container = styled.main`
    padding-top: 101px;
    max-width: 1440px;
    margin: 0 auto;
`;

const Wrapper = styled.div`
    margin-top: 30px;
    margin-bottom: 20px;
    background-color: #f1f8f6;
    border: solid 1px black;
    > button {
        margin-bottom: 15px;
        font-size: 20px;
        background-color: orange;
        color: white;
        margin: 20px;
        padding-left: 20px;
        padding-right: 20px;
    }
    > h1 {
        color: black;
    }
    > h2 {
        color: #939384;
    }
`;