import { useState } from 'react'
import styles from './styles.module.css'

export function Form() {
    const [ percent, setPercent ] = useState(5)
    const [ capital, setCapital] = useState(500)
    let [ rendimento, setRendimento] = useState(25)

    function cadastrar() {
        alert('Cadastrado com sucesso!')
    }

    rendimento = (capital * percent) / 100
    
    return (
        <div className={styles['container']}>
            
            <form className={styles['form']}>
                <h1>Cadastro de Investidor</h1>

                <div className={styles['row']}>
                    <div className={styles['row-1']}>
                        <span className={styles['slote-icon']}>Cliente</span>
                        <input
                            type="text"
                            className={styles['input-nome']}
                            placeholder="Nome Complemento"
                        />
                    </div>
                </div>

                <div className={styles['row']}>
                    <div className={styles['row-1']}>
                        <span className={styles['slote-icon']}>Mês</span>
                        <input type="date" placeholder="Data Cadastro" />
                    </div>

                    <div className={styles['row-1']}>
                        <span className={styles['slote-icon']}>%</span>
                        <input
                            type="text"
                            value={percent}
                            placeholder=" % " 
                            onChange={e => setPercent(e.target.value)}
                            className={styles['row-center']}
                        />
                    </div>

                </div>

                <div className={styles['row']}>
                    <div className={styles['row-1']}>
                        <span className={styles['slote-icon']}>R$</span>
                        <input
                            type="text"
                            value={capital}
                            onChange={ e => setCapital(e.target.value)}
                            className={styles['tm35']}
                            placeholder="Valor Investido R$"
                        />
                    </div>

                    <div className={styles['row-1']}>
                        <span className={styles['slote-icon']}>R$</span>
                        <input
                            type="text"
                            value={rendimento}
                            onChange={e => setRendimento(e.target.value)}
                            className={styles['tm36']}
                            placeholder="Valor Receber R$ "
                        />
                    </div>
                </div>
                
                <div className={styles['row']}>
                    <div className={styles['row-1']}>
                        <span className={styles['slote-icon']}>Dia</span>
                        <input
                            type="text"
                            className={styles['tm25']}
                            placeholder="Recebimento"
                        />
                    </div>
                </div>

                <button>Cadastrar</button>
            </form>
        </div>
    )
}