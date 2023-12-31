import { useEffect, useState } from "react"
import * as S from "./style";
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import api from '../../services/api'

import { Header } from './../../components/Header'
import { Footer } from './../../components/Footer'

export function Contas(){
    const [lateCount, setLateCount] = useState()
    
    const navigate = useNavigate()
    const handleRedirect = () => navigate('/conta');
    
    const [descricao, setDescricao] = useState("")
    const [valor, setValor] = useState("")
    const [status, setStatus] = useState("")
    
    const [date, setDate] = useState("")
    const [hour, setHour] = useState("")

    async function lateVerify() {
        await api.get(`/conta`)
        .then(response => {
            setLateCount(response.data.length);
        })
    }

    async function Save() {
        await api.post('/conta', {
            descricao,
            valor,
            vencimento: `${date}T${hour}:00.000`
        })
        setTimeout(() => {
            handleRedirect()
            
        }, 3900)
        toast.success("Salvo com sucesso!")
    }

    useEffect(() => {
        lateVerify()
    }, [])

    return(
        <S.Container>
            <Header lateCount={lateCount} />
            
            <S.Form>
                <h1>Contas a Pagar</h1>
                <S.Input>
                    <span>Descrição</span>
                    <input
                        type="text"
                        value={descricao}
                        onChange={ e => setDescricao(e.target.value) }
                        placeholder="Descrição da conta ..." />
                </S.Input>

                <S.Input>
                    <span>Valor</span>
                    <input
                        type="text"
                        onChange={ e => setValor(e.target.value) } value={valor}
                        placeholder="R$ 1.00,00"
                    />
                </S.Input>
                <S.Input>
                    <span>Status</span>
                    <input
                        type="text"
                        onChange={ e => setStatus(e.target.value) } value={status}
                        placeholder="Pago???"
                    />
                </S.Input>
                <S.Input>
                    <span>Hora</span>
                    <input
                        type="time"
                        onChange={ e => setHour(e.target.value) } value={hour}
                    />
                </S.Input>

                <S.Input>
                    <span>Vencimento</span>
                    <input
                        type="date"
                        onChange={ e => setDate(e.target.value) } value={date}
                    />
                </S.Input>

                 <S.Save>
                    <button type="button" onClick={Save}> Salvar </button>
                 </S.Save>

            </S.Form>

            <Footer />
        </S.Container>
    )
}