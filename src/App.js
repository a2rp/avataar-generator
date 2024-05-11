import React from "react";
import Avataar from "./avataar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <div>
            <Avataar />
            <ToastContainer />
        </div>
    )
}

export default App


