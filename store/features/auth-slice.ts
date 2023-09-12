import {createSlice,PayloadAction} from "@reduxjs/toolkit";
// import { type } from "os";

type IniatilState ={
    value:AuthState;
}

type AuthState = {
  isAuth: boolean;
  username: string;
  uid: string;
  ismoderator:boolean
};

const initialState = {
    valaue: {
        isAuth: false,
        username: "",
        uid: "",
        ismoderator: false,
    } as AuthState,
} as unknown as IniatilState;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn:(_state,action:PayloadAction<string>)=>{
        return {
          value: {
            isAuth: true,
            username: action.payload,
            uid:"ahusghjjg8yu68768iyi7",
            ismoderator:false
          },
        };
    },
    logOut:() =>{
   return initialState;
    }
  },
});

export const  {logIn,logOut} = auth.actions;
export default auth.reducer;