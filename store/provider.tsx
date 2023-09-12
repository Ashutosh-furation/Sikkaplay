'use client';


import { store } from "./store";
import { Provider } from "react-redux";
//  console.log(store)
export function ReduxProvider({children}:{children:React.ReactNode}){
    return <Provider store={store}>
        {children}
    </Provider>
}