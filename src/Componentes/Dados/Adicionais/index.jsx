import TabelaIMC from '../../Tabela'
import './Adicionais.css'

export default function DadosAdicionais(props){
    return(
        <ul className="dadosAdicionaisContent">
            <li>IMC <strong>{props.imc}</strong> </li>
            <li>Consumir <strong>{props.agua}</strong> ML</li>
        </ul>
    )
}