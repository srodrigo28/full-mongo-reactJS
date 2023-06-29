import'./home.css'

export function Home() {
    return (
        <div className='home-container'>
            <div className='home-titulo'>
                <h1>Capital Investimento Pessoal</h1> <span className='home-money'>Total Recebido R$ 1.000,00</span>
            </div>
            <div className="home-span">
                <h1>Danillo Wilian</h1>
            </div>

            <table>
                <thead>
                    <th>Mês</th>
                    <th>Capital</th>
                    <th>Rendimento</th>
                    <th>Status</th>
                </thead>

                <tbody>
                    <tr>
                        <td>Janeiro</td>
                        <td>R$ 10.000,00</td>
                        <td>R$ 500,00 </td>
                        <td>Pago</td>
                    </tr>
                    <tr>
                        <td>Fevereiro</td>
                        <td>R$ 10.000,00</td>
                        <td>R$ 0,00 </td>
                        <td>Acumulou</td>
                    </tr>
                    <tr>
                        <td>Março</td>
                        <td>R$ 10.500,00</td>
                        <td>R$ 550,00 </td>
                        <td>Pago</td>
                    </tr>
                    <tr>
                        <td>Abril</td>
                        <td>R$ 10.500,00</td>
                        <td>R$ 550,00 </td>
                        <td>Pago</td>
                    </tr>
                    <tr>
                        <td>Maio</td>
                        <td>R$ 11.050,00</td>
                        <td>R$ 552,00 </td>
                        <td>Pago</td>
                    </tr>
                    <tr>
                        <td>Junho</td>
                        <td>R$ 11.602,00</td>
                        <td>R$ 0,00 </td>
                        <td>Acumulou</td>
                    </tr>
                    <tr>
                        <td>Junho</td>
                        <td>R$ 11.602,00</td>
                        <td>R$ 580,10 </td>
                        <td>Pago</td>
                    </tr>
                    <tr>
                        <td>Julho</td>
                        <td>R$ 11.602,00</td>
                        <td>R$ 580,10 </td>
                        <td>Pago</td>
                    </tr>
                    <tr>
                        <td>Agosto</td>
                        <td>R$ 11.602,00</td>
                        <td>R$ 580,10 </td>
                        <td>Pago</td>
                    </tr>
                    <tr>
                        <td>Setembro</td>
                        <td>R$ 11.602,00</td>
                        <td>R$ 580,10 </td>
                        <td>Pago</td>
                    </tr>
                    <tr>
                        <td>Outubro</td>
                        <td>R$ 11.602,00</td>
                        <td>R$ 580,10 </td>
                        <td>Pago</td>
                    </tr>
                    <tr>
                        <td>Novembro</td>
                        <td>R$ 11.602,00</td>
                        <td>R$ 580,10 </td>
                        <td>Pago</td>
                    </tr>
                    <tr>
                        <td>Dezembro</td>
                        <td>R$ 11.602,00</td>
                        <td>R$ 580,10 </td>
                        <td>Pago</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}