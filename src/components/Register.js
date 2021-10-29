import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { auth, registerWithEmailAndPassword, googleProvider} from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser, setUserID } from "../Store/reduxSlice";


function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading] = useAuthState(auth);
    const dispatch = useDispatch();
    
    const register = () => {
      if (!name) alert("Please enter name");
      registerWithEmailAndPassword(name, email, password);
    };
    useEffect(() => {
      if (loading) return;
      
    }, [user, loading]);

    const signIn = () => {
        auth
            .signInWithPopup(googleProvider)
            .then((result) => {
                const newUser = {
                    name: result.user.displayName,
                    userID: result.user.uid
                }
                localStorage.setItem('user', JSON.stringify(newUser));
                
                dispatch(setUserID(newUser.userID));
                dispatch(setUser(newUser.name));
                console.log(newUser);
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
                    className="register__textBox"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                />
                <input
                    type="text"
                    className="register__textBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                />
                <input
                    type="password"
                    className="register__textBox"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                
                <RegisterButton onClick={register}>
                    <Link to="/Login" style={{textDecoration: 'none',color:'white'}}>
                        <span>Register</span>
                    </Link>       
                </RegisterButton>

                <GoogleButton onClick={signIn}>
                    Sign In With Google
                </GoogleButton>
            </Block>
        </Container>
    )
}

export default Register

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

const RegisterButton = styled.button`
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