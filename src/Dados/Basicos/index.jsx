import './Basicos.css'

export default function DadosBasicos(props){
    return(
        <ul className="dadosBasicosContent">
            <li> <strong>{props.idade}</strong> Anos</li>
            <li> <strong>{props.altura}</strong> M</li>
            <li> <strong>{props.peso}</strong> KG</li>
            <li>Sexo <strong>{props.sexo}</strong> </li>
        </ul>
    )
}