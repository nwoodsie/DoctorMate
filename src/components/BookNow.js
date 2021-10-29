import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import db from "../firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { useDispatch, useSelector } from 'react-redux';
import DateTimePicker from 'react-datetime-picker'
import { setDoctor } from '../Store/reduxSlice';


function BookNow() {
    const [value, onChange] = useState(new Date());
    const doctor = useSelector((state) => state.user.doctor);
    const dispatch = useDispatch();
    
    const user = useSelector((state) => state.user.name);
    const userID = useSelector((state) => state.user.userID);
    

    const setBooking = (e) => {
        e.preventDefault();
        if (!userID){
            alert("Please Sign In")
            return;
        }
    

        db.collection("bookings").add({name: user, userID: userID, doctor: doctor, booking: String(value)});

    };

        const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore()
            const data = await db.collection("doctors").get()
            setDoctors(data.docs.map(doc => doc.data()))
        }
        fetchData();
    },[])

    return (
        <Container>
            <h3>Booking an appointment for</h3>
            
            <h1>{doctor}</h1>
            {doctors.map(doctor => 
                <button onClick={()=>dispatch(setDoctor(doctor.name))}>{doctor.name}</button>
            )}
            {/* {user.uid} */}
            <form>
                <DateTimePicker
                value={value}
                onChange={onChange}
                />
                <button type="submit" onClick={setBooking}>
                    BOOK
                </button>
            </form>
        </Container>
    )
}

export default BookNow

const Container = styled.div`
    padding-top: 201px;
    max-width: 1440px;
    margin: 0 auto;
    text-align: center;
    > button {
        font-size: 20px;
        background-color: orange;
        color: white;
        margin: 20px;
        padding-left: 20px;
        padding-right: 20px;
    }

    > form {
        > button {
        font-size: 20px;
        background-color: orange;
        color: white;
        margin: 20px;
        padding-left: 20px;
        padding-right: 20px;
        border-radius: 20px;
    }
    } 
`;

/* 
{doctors.map(doctor => 
    <button onClick={handleClick(doctor.name)}>{doctor.name}</button>   
)} */