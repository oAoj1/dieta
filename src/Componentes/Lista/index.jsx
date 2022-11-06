import './Lista.css'

export default function Lista(props){
    return(
        <div className='listaContent'>
            <label htmlFor="">
                {props.titulo}
            </label>

            <select 
                required
                value={props.valor}
                onChange={variavel => props.setEstado(variavel.target.value)}>
                {props.alternativas.map((itens,index)=>(
                    <option key={index}>
                        {itens}
                    </option>
                ))}
                <option value=""></option>
            </select>
        </div>
    )
}