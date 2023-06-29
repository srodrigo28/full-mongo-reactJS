import styles from './styles.module.css'

export function Form() {
    return (
        <div className={styles['container']}>
            <form action="./../index.jsx" className={styles['form']}>
                <h1>Cadastro de Investidor</h1>
                <input type="text" placeholder="Nome Complemento" />

                <div className={styles['group']}>
                    <input type="date" placeholder="Data Cadastro" />
                    <input type="text" className={styles['tm25']} placeholder=" % " />
                    <input type="text" className={styles['tm25']} placeholder="dia" />
                </div>

                <div className={styles['group']}>
                    <input type="text" placeholder="Valor Investido R$"/>
                    <input type="text" placeholder="Valor Receber R$ "/>
                </div>

                <button>Cadastrar</button>
            </form>
        </div>
    )
}