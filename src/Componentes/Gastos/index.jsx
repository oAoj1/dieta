import './Gastos.css'

export default function Gastos(){
    return(
        <div className="gastosContent">

                <div className="gastoBasalContent">
                    <h3>Gasto basal: </h3>
                    <p>O gasto basal é nada menos do que a quantidade necessária de calorias que seu corpo consome para manter as funções vitais ativas</p>
                    <span>
                        Exemplo:
                        <ul>
                            <li>Respiração</li>
                            <li>Circulação do sangue</li>
                            <li>Funcionamento do cérebro</li>
                        </ul>
                    </span>
                </div>

                <div className="gastoDiarioContent">
                    <h3>Gasto diário: </h3>
                    <p>O gasto diário se resume na soma do gasto basal + a intensidade da atividade diáriamente</p>
                    <span>
                        Exemplo:
                        <ul>
                            <li>Academia</li>
                            <li>Corrida</li>
                            <li>Caminhada</li>
                        </ul>
                    </span>
                </div>
            
        </div>
    )
}