import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userOne:{
        username: 'Ankit Singh',
        profileImage: 'https://avatar.iran.liara.run/public/8'
    },
    userTwo:{
        username: 'Rahul Singh',
        profileImage: 'https://avatar.iran.liara.run/public/18'
    }
}

const userSlice = createSlice({
    name: "Users",
    initialState,
    reducers:{}
})

export default userSlice