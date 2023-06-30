import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Cliente } from '../views/Cliente'
import { ListaCliente } from '../views/Cliente/ListaCliente'
import { User } from '../views/User'
import { Contas } from '../views/Contas'
import { ListaConta } from '../views/Contas/ListaConta'
import { ItemDetalhe } from '../views/Contas/ListaConta/ItemDetalhe'

export function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <User /> } />
                <Route path='/user' element={ <User /> } />
                <Route path='/contas' element={ <Contas /> } />
                <Route path='/conta' element={ <ListaConta /> } />
                <Route path='/conta/:id' element={ <ItemDetalhe /> } />
                <Route path='/cliente' element={ <Cliente /> } />
                <Route path='/clientes' element={ <ListaCliente /> } />
            </Routes>
        </BrowserRouter>
    )
}