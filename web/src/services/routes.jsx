import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Cliente } from '../views/Cliente'
import { User } from '../views/User'
import { Contas } from '../views/Contas'

export function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <User /> } />
                <Route path='/user' element={ <User /> } />
                <Route path='/contas' element={ <Contas /> } />
                <Route path='/cliente' element={ <Cliente /> } />
            </Routes>
        </BrowserRouter>
    )
}