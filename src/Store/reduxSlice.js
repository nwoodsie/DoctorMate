import {createSlice} from "@reduxjs/toolkit"


export const userSlice = createSlice({
    name: "userr",
    initialState: {
        name: "",
        userID:"",
        doctor: "",
    },
    reducers: {
        setUser: (state, action) => {
            return{
                ...state,
                name: action.payload,
            };
        },
        setUserID: (state, action) => {
            return{
                ...state,
                userID: action.payload,
            };
        },
        setDoctor: (state, action) => {
            return{
                ...state,
                doctor: action.payload,
            };
        }
    }
});

export default userSlice.reducer;

export const {setUser, setDoctor, setUserID} = userSlice.actions;