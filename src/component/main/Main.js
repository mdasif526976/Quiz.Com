import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
export const ErrorContext = createContext();
const Main = () => {
    const [error, Seterror] = useState(0);

    return (
        <ErrorContext.Provider value={[error, Seterror]}>
            <div>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
        </ErrorContext.Provider>
            

    );
};

export default Main;