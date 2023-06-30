import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {v4 as uuidv4} from 'uuid';

import * as S from './styles'

import api from '../../../services/api'
import { Header } from './../../../components/Header'
import { Footer } from './../../../components/Footer'

export function ListaCliente(){
    const [lateCount, setLateCount] = useState()
    const [cliente, setCliente] = useState([]);

    async function lateVerify() {
        await api.get(`/cliente`)
        .then(response => {
            setLateCount(response.data.length);
        })
    }

    async function loadCliente() {
        await api.get(`/cliente`)
        .then(response => {
            setCliente(response.data);
        })
    }

    useEffect(() => {
        loadCliente(),
        lateVerify()
    }, [lateCount])

    return(
        <div>
            <Header lateCount={lateCount} />

            <S.Content>
                { cliente.map( (item) => (
                    <Link to={`/cliente/${item._id}`} key={ uuidv4()} >
                        <div> {item.nome} - {item.tel} - {item.valorCapital} - {item.valorReceber} </div>
                    </Link>   
                ))}
            </S.Content>

            <Footer />
        </div>
    )
}