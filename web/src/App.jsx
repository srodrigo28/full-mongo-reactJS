import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import {AppRoutes} from './services/routes'

export function App(){
    return(
        <>
            <ToastContainer autoClose={2000} />
            <AppRoutes />
        </>
    )
}