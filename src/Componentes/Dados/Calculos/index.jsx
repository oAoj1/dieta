import './Calculos.css'

export default function DadosCalculos(props){
    return(
        <ul className="dadosCalculosContent">
            <li>Consumir diariamente <strong>{props.calorias}</strong> KCAL</li>
            <li>Gasto KCAL diario <strong>{props.gastoDiario}</strong> </li>
            <li>Gasto KCAL basal <strong>{props.gastoBasal}</strong> </li>
        </ul>
    )
}