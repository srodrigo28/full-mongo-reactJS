import './styles.css'

export function Investidor() {
    return (
        <div className='container'>
            <h1>Lista de Investidores</h1>

            <table>
                <thead>
                    <th>Código</th>
                    <th>Nome</th>
                    <th>%</th>
                    <th>Data</th>
                    <th>Dia Recebimento</th>
                    <th>Valor Investido</th>
                    <th>Valor Receber</th>
                </thead>
                <tbody>
                    <tr>
                        <td>01</td>
                        <td>Danillo Willian</td>
                        <td>10</td>
                        <td>20-02-2018</td>
                        <td>10</td>
                        <td>R$ 15.000,00</td>
                        <td>R$ 1.500,00</td>
                    </tr>
                    <tr>
                        <td>02</td>
                        <td>Ana Oliveira</td>
                        <td>5</td>
                        <td>20-02-2018</td>
                        <td>10</td>
                        <td>R$ 30.000,00</td>
                        <td>R$ 1.500,00</td>
                    </tr>
                    <tr>
                        <td>03</td>
                        <td>Bruno Freire</td>
                        <td>10</td>
                        <td>15-10-2022</td>
                        <td>10</td>
                        <td>R$ 5.000,00</td>
                        <td>R$ 500,00</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}