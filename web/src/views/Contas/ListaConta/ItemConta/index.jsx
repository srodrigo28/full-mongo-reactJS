/* eslint-disable react/prop-types */
// import * as S from "./styles";
import { format } from 'date-fns'
import { useMemo } from "react";

export function ItemConta({descricao, valor, when}) {
    
    const date = useMemo(() => format(new Date(when), 'dd/MM/yyyy'));
    const hour = useMemo(() => format(new Date(when), 'HH:mm'));
    return (
        <div>
            <div>
                <strong>{descricao}</strong>
                ----
                <strong>R$ {valor}</strong>
                -----
                <strong>{date}</strong>
                <br />
                {/* <span>{hour}</span> */}
            </div>

        </div>
    )
}