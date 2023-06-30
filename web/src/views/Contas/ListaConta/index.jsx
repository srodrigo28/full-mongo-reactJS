import { useEffect, useState, useMemo } from "react"
import { Link } from "react-router-dom"
import {v4 as uuidv4} from 'uuid';

import * as S from './styles'

import api from '../../../services/api'
import { ItemConta } from './ItemConta'
import { Header } from './../../../components/Header'
import { Footer } from './../../../components/Footer'

export function ListaConta(){
    const [lateCount, setLateCount] = useState()
    const [conta, setConta] = useState([]);

    // const date = useMemo(() => format(new Date(when), 'dd/MM/yyyy'));
    // const hour = useMemo(() => format(new Date(when), 'HH:mm'));

    async function lateVerify() {
        await api.get(`/conta`)
        .then(response => {
            setLateCount(response.data.length);
        })
    }

    async function loadConta() {
        await api.get(`/conta`)
        .then(response => {
            setConta(response.data);
        })
    }

    useEffect(() => {
        loadConta(),
        lateVerify()
    }, [lateCount])

    return(
        <div>
            <Header lateCount={lateCount} />

            <S.Content>
                { conta.map( item => (
                    <Link to={`/conta/${item._id}`} key={ uuidv4()} >
                        <ItemConta descricao={item.descricao} valor={item.valor}  when={item.vencimento} />
                    </Link>
                ))}
            </S.Content>

            <Footer />
        </div>
    )
}