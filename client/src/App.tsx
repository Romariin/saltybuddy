import React from 'react'
import Routes from './Routes'
import {ToastContainer} from 'react-toastify';

interface IProps {

}
interface IState {

}
export default function App() {
    return (
        <div className='flex min-h-screen bg-[#061019]'>
            <Routes />
            <ToastContainer/>
        </div>
    )
}