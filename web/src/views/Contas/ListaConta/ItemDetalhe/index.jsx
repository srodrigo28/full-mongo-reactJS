import * as S from './styles'

import { Header } from './../../../../components/Header'
import { Footer } from './../../../../components/Footer'

export function ItemDetalhe(){

    return(
        <div>
            <Header lateCount={1} />

            <S.Content>
                <h1>Detalhe Conta</h1>
            </S.Content>

            <Footer />
        </div>
    )
}