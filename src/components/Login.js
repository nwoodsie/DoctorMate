import React from "react";
import styled from "styled-components";
import { auth, googleProvider, signInWithEmailAndPassword } from "../firebase";
import { useState } from "react";
import { setUser, setUserID } from "../Store/reduxSlice"
import { useDispatch } from "react-redux";



function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const signIn = () => {
        auth
            .signInWithPopup(googleProvider)
            .then((result) => {
                const newUser = {
                    name: result.user.displayName,
                    userID: result.user.uid,
                    bookings:[]
                }
                /* const userRef = db.collection("users").doc(userID);
                const doc = userRef.get(); */
                localStorage.setItem('user', JSON.stringify(newUser));
                dispatch(setUserID(newUser.userID));
                dispatch(setUser(newUser.name));
                /* const ref = async () => db.collection('users').doc(result.user.uid).set(newUser);
                if (!doc.exists){
                   ref();
                } */
            })
            .catch((error) => {
                alert(error.message);
            });
    };
     
    return (
        <Container>
            <Block>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <LoginButton onClick={() => signInWithEmailAndPassword(email, password)}>
                    Login
                </LoginButton>
                <GoogleButton onClick={signIn}>
                    Sign In With Google
                </GoogleButton>
            </Block>
        </Container>
    )
}

export default Login

const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    width: 100vw;
`;

const Block = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #e3e3e340;
    padding: 80px;
    border-radius: 20px;

    > input {
    padding: 10px;
    font-size: 18px;
    margin-bottom: 10px;
    width: 100%;
    }

`;

const LoginButton = styled.button`
    padding: 10px;
    font-size: 18px;
    margin-bottom: 10px;
    border: none;
    color: whitesmoke;
    background-color: black;
    width: 108%;
`;

const GoogleButton = styled.button`
    padding: 10px;
    font-size: 18px;
    margin-bottom: 10px;
    border: none;
    color: white;
    background-color: #4C8BF5;
    width: 108%;
`;