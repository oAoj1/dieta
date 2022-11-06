import './Informacoes.css'
import Gastos from '../../Gastos'
import TabelaIMC from '../../Tabela'

export default function DadosInfo(){
    return(
        <div className='infoContent'>
            <TabelaIMC></TabelaIMC>
            <Gastos></Gastos>
        </div>
    )
}