import './Inputs.css'

export default function Inputs(props){
    return(
        <div className='inputContent'>
            <label htmlFor="">{props.titulo}</label>

            <input
                placeholder={props.escrito}
                value={props.valor}
                onChange={variavel => props.setEstado(variavel.target.value)}
            />
        </div>
    )
}