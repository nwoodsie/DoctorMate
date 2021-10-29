import React from 'react'
import styled from 'styled-components'
import RoomIcon from '@mui/icons-material/Room';
import {Link} from 'react-router-dom'
/* import { actions } from '../Store/reduxSlice'; */
import { auth } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../Store/reduxSlice';



function Header() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.name);
    const signOut = () => {
        auth.signOut().then(()=>{
        dispatch(setUser(null));
        })
    }


    return (
        <Nav>
            <NavLeft>
                <img src="data:image/png;base64,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" alt=""/>
                <NavBlock>
                    <Link to="/" style={{textDecoration: 'none', color:'black'}}>
                        <span>HOME</span>
                    </Link>

                </NavBlock>
                <NavBlock>
                    <Link to="/OurTeam" style={{textDecoration: 'none', color:'black'}}>
                        <span>OUR TEAM</span>
                    </Link>

                </NavBlock>
                <NavBlock>
                    <Link to="/BookNow" style={{textDecoration: 'none', color:'black'}}>
                        <span>BOOK NOW</span>
                    </Link>
                </NavBlock>
                <NavBlock>
                    <Link to="/Contact" style={{textDecoration: 'none', color:'black'}}>
                        <span>VIEW BOOKINGS</span>
                    </Link>
                </NavBlock>
            </NavLeft>
            
            <NavMenu>
                <FindClinic>
                    <RoomIcon/>
                    <span>Find a Clinic</span>
                </FindClinic>
                {!user ?
                <> 
                    <SignIn>
                        <Link to="/Login" style={{textDecoration: 'none', color:'black'}}>
                            <span>Sign In</span>
                        </Link>   
                    
                    </SignIn>

                    <JoinNow>
                        <Link to="/Register" style={{textDecoration: 'none',color:'white'}}>
                            <span>Join Now</span>
                        </Link>       
                    </JoinNow>
                </>
                :
                <>
                    <SignIn>
                            <Link to="/Profile" style={{textDecoration: 'none', color:'black'}}>
                                <span>View Profile</span>
                            </Link>   
                    </SignIn>
                    <JoinNow onClick={signOut}>
                        <Link to="/Login" style={{textDecoration: 'none',color:'white'}}>
                            <span>Sign Out</span>
                        </Link>       
                    </JoinNow>
                </>
                }
            </NavMenu>
        </Nav>


    )
}

export default Header

const Nav = styled.nav`
    height: 101px;
    display: flex;
    box-shadow: 0 2px 3px rgb(0 0 0/ 10%), 0 0 2px rgb(0 0 0/ 7%);
    align-items: center;
    justify-content: space-between;
    padding: 10px 30px;
    font-family: 'Helvatica', 'Arial', 'sans-serif';
    font-weight: 400;
    position: fixed;
    width: 100%;
    background-color: white;
`

const NavLeft = styled.div`
    display: flex;
    align-items: center;
    text-decoration: none;
    > span {
        font-size: 25px;
       letter-spacing: 0.42px;

    }
    > img {
        height: 60px;
        padding: 20px;
        border-radius: 32px;
    }
    > Link {
        text-decoration: none;
    }
`


const NavMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 12px;
  
`
const NavBlock = styled.div`
    display: flex;
    align-items: center;
    margin: 15px;
    font-weight: 1000;
    > a {
        letter-spacing: 1.02px;
        transition: 0.35s;

        :hover {
            color: #008248 !important;
        }
    }
`;

const FindClinic = styled.div`
    display: flex;
    justify-content: flex-flex-start;
    align-items: center;
    border-bottom: 2px transparent solid;
    transition: 0.35s;
    margin-top: 2px;
    font-size: 15px;
    font-weight: 800;
    margin-right: 15px;

    > .MuiSvgIcon-root {
        padding-right: 5px;
        font-size: 22px;
        color: black;
    }
    :hover {
            color: #008248;
        }
`;

const SignIn = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 800;
    border: 2px black solid;
    border-radius: 50px;
    padding: 5px;
    padding-left: 15px;
    padding-right: 15px;
    margin-right: 15px;
    transition: 0.35s;

    :hover {
            background-color: rgb(255, 0, 0, 0.6) !important;
        }
`;

const JoinNow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    font-weight: 800;
    color: white;
    border: 2px black solid;
    border-radius: 50px;
    padding: 5px;
    padding-left: 15px;
    padding-right: 15px;
    transition: 0.35s;
    margin-right: 40px;


:hover {
        background-color: rgb(255,0,0, 0.6);
    }
`;
