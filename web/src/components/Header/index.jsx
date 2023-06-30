import * as S from './styles'
import logo from './../../assets/logo.png'
import bell from './../../assets/bell.png'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export function Header( {lateCount, clickNotification})  {
    return (
        <S.Container>
            <S.LeftSide>
                <img src={logo} alt="logo-app" />
            </S.LeftSide>

            <S.RightSide>
                <Link to="/cliente">Cliente</Link>
                <span className="dividir" />
                <Link to="/clientes">Cliente Lista</Link>
                <span className="dividir" />
                <Link to="/user">User</Link>
                <span className="dividir" />
                <Link to="/conta">Contas</Link>
                <Link to="/contas">Conta</Link>
                <span className="dividir" />
                <button type='button'  onClick={clickNotification} id='notification'>
                    <img src={bell} alt="sinalização" />
                    <span>{lateCount}</span>
                </button>
            </S.RightSide>
        </S.Container>
    )
}