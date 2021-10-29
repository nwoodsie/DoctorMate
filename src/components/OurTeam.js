import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Doctor from './Doctor'
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

function OurTeam() {

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore()
            const data = await db.collection("doctors").get()
            setDoctors(data.docs.map(doc => doc.data()))
        }
        fetchData()
    },[])

    return (
        <Container>
            {doctors.map(doctor => 
                <Doctor name={doctor.name} description={doctor.description} field={doctor.field}/>    
            )}
        </Container>
    )
}

export default OurTeam

const Container = styled.div`
    padding-top: 101px;
    max-width: 1440px;
    margin: 0 auto;
`;

