/* eslint-disable no-undef */
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as S from "./style";

import api from '../../services/api'
import { Header } from './../../components/Header'
import { Footer } from './../../components/Footer'

export function Cliente(){

    const [tel, setTel] = useState("")
    const [cpf, setCpf] = useState("")
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")

    const [valorCapital, setValorCapital] = useState("")
    const [percentual, setPercentual] = useState("")
    const navigate = useNavigate()

    let [valorReceber, setValorReceber] = useState("")

    valorReceber = (valorCapital * percentual) / 100
    
    const handleRedirect = () => navigate('/clientes');

    async function SaveCliente(){
        await api.post('/cliente', {
            tel,
            cpf,
            nome,
            email,
            valorCapital,
            percentual,
            valorReceber,
        })

        setTimeout(() => {
            handleRedirect()
            
        }, 3900)
        
        toast.success("Salvo com sucesso!")
 
         
     }
    return(
        <S.Container>
             <Header lateCount={1} />
             
            <S.Form>
            <h1>Cadastro de Cliente</h1>
              
                <S.Input> {/* 1 */}
                    <span>Seu nome</span>
                    <input
                        type="text"
                        value={nome}
                        onChange={ e => setNome(e.target.value) }
                        placeholder="Cliente ..." />
                </S.Input>

                 <S.InputGroup>
                    <S.Input> {/* 2 */}
                        <span>E-mail</span>
                        <input
                            type="text"
                            onChange={ e => setEmail(e.target.value) } value={email}
                            placeholder="email@email.com ..."
                        />
                    </S.Input>

                    <S.Input> {/* 3 */}
                        <span>CPF</span>
                        <input
                            type="text"
                            onChange={ e => setCpf(e.target.value) } value={cpf}
                            placeholder="*****************"
                        />
                    </S.Input>
                </S.InputGroup>

                <S.InputGroup>
                    <S.Input> {/* 4 */}
                        <span>Telefone</span>
                        <input
                            type="text"
                            onChange={ e => setTel(e.target.value) } value={tel}
                            placeholder="*****************"
                        />
                    </S.Input>

                    <S.Input> {/* 5 */}
                        <span>Capital</span>
                        <input
                            type="text"
                            onChange={ e => setValorCapital(e.target.value) } value={valorCapital}
                            placeholder="R$ 0,00"
                        />
                    </S.Input>
                </S.InputGroup>

                <S.InputGroup>
                    <S.Input> {/* 6 */}
                        <span>Percetual</span>
                        <input
                            type="text"
                            onChange={ e => setPercentual(e.target.value) } value={percentual}
                            placeholder="0%"
                        />
                    </S.Input>
                    <S.Input> {/* 7 */}
                        <span>Receber</span>
                        <input
                            type="text"
                            disabled
                            onChange={ e => setValorReceber(e.target.value) } value={valorReceber}
                            placeholder="R$ 0,00"
                        />
                    </S.Input>

                </S.InputGroup>

                 <S.Save>
                    <button type="button" onClick={SaveCliente}> Salvar </button>
                 </S.Save>

            </S.Form>

            <Footer />
        </S.Container>
    )
}