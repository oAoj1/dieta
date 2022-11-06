import './TabelaIMC.css'

export default function TabelaIMC(){
    return(
        <table className='tabelaIMCContent'>
            <thead>
                <tr>
                    <td>IMC</td>
                    <td>Classificação</td>
                </tr>
            </thead>

            <tbody>
                
                <tr className='roxo'>
                    <th>Menor que 18.5</th>
                    <th>Abaixo do peso</th>
                </tr>

                <tr className='azul'>
                    <th>18.5 - 24.9</th>
                    <th>Peso normal</th>
                </tr>

                <tr className='laranja'>
                    <th>25.0 - 29.9</th>
                    <th>Acima do peso</th>
                </tr>

                <tr className='vermelhoClaro'>
                    <th>30.0 - 34.9</th>
                    <th>Obesidade 1</th>
                </tr>

                <tr className='vermelho'>
                    <th>35.0 - 39.9</th>
                    <th>Obesidade 2</th>
                </tr>

                <tr className='vermelhoEscuro'>
                    <th>Maior que 40</th>
                    <th>Obesidade 3</th>
                </tr>

            </tbody>

        </table>
    )
}