import './Formulario.css'
import { useState } from "react"
import Inputs from "../Inputs"
import Lista from "../Lista"
import DadosBasicos from '../Dados/Basicos'
import DadosCalculos from '../Dados/Calculos'
import DadosAdicionais from '../Dados/Adicionais'

export default function Formulario(){

    const listaSexo = [
        "Masculino",
        "Feminino"
    ]

    const listaIntensidade = [
        "Leve",
        "Moderada",
        "Intensa"
    ]

    const listaFrequencia = [
        "1 a 2 vezes",
        "3 a 4 vezes",
        "5 a 7 vezes"
    ]

    const listaMeta = [
        "Emagrecer",
        "Manter o peso",
        "Ganhar massa"
    ]

    const [nome,setNome] = useState("")
    const [peso,setPeso] = useState("")
    const [altura,setAltura] = useState("")
    const [sexo,setSexo] = useState("")
    const [intensidade,setIntensidade] = useState("")
    const [frequencia,setFrequencia] = useState("")
    const [idade,setIdade] = useState("")
    const [meta,setMeta] = useState("")
    const [imc,setImc] = useState("")
    const [agua,setAgua] = useState("")
    const [gastoBasal,setGastoBasal] = useState("")
    const [gastoDiario,setGastoDiario] = useState("")
    const [caloria,setCaloria] = useState("")

    function Enviar(evento){
        evento.preventDefault()
        console.log(nome,idade,peso,altura,sexo,agua,imc,gastoBasal,gastoDiario);
        setImc((peso/(altura*altura)).toFixed(1))
        setAgua((peso*35).toFixed(2))

        if(idade > 0 && idade <= 3){

            if(sexo == "Feminino"){
                const CalcularGastoBasal = ((58.317 * peso) - 31.1).toFixed(2)
                setGastoBasal(CalcularGastoBasal)

                if(intensidade == "Leve"){
                    const CalcularGastoDiario = CalcularGastoBasal * 1.55
                    setGastoDiario(CalcularGastoDiario)

                        if(meta == "Emagrecer"){
                            const CalcularCaloria = CalcularGastoDiario - 500
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Manter o peso"){
                            const CalcularCaloria = CalcularGastoDiario * 1
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Ganhar massa"){
                            const CalcularCaloria = CalcularGastoDiario + 500
                            setCaloria(CalcularCaloria)
        
                        }

                }else if(intensidade == "Moderada"){
                    const CalcularGastoDiario = CalcularGastoBasal * 1.84
                    setGastoDiario(CalcularGastoDiario)

                        if(meta == "Emagrecer"){
                            const CalcularCaloria = CalcularGastoDiario - 500
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Manter o peso"){
                            const CalcularCaloria = CalcularGastoDiario * 1
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Ganhar massa"){
                            const CalcularCaloria = CalcularGastoDiario + 500
                            setCaloria(CalcularCaloria)
        
                        }

                }else if(intensidade == "Intensa"){
                    const CalcularGastoDiario = CalcularGastoBasal * 2.2
                    setGastoDiario(CalcularGastoDiario)

                        if(meta == "Emagrecer"){
                            const CalcularCaloria = CalcularGastoDiario - 500
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Manter o peso"){
                            const CalcularCaloria = CalcularGastoDiario * 1
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Ganhar massa"){
                            const CalcularCaloria = CalcularGastoDiario + 500
                            setCaloria(CalcularCaloria)
        
                        }

                }

            }else if(sexo == "Masculino"){
                const CalcularGastoBasal = ((59.512 * peso) - 30.4).toFixed(2)
                setGastoBasal(CalcularGastoBasal)

                if(intensidade == "Leve"){
                    const CalcularGastoDiario = CalcularGastoBasal * 1.55
                    setGastoDiario(CalcularGastoDiario)

                        if(meta == "Emagrecer"){
                            const CalcularCaloria = CalcularGastoDiario - 500
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Manter o peso"){
                            const CalcularCaloria = CalcularGastoDiario * 1
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Ganhar massa"){
                            const CalcularCaloria = CalcularGastoDiario + 500
                            setCaloria(CalcularCaloria)
        
                        }

                }else if(intensidade == "Moderada"){
                    const CalcularGastoDiario = CalcularGastoBasal * 1.84
                    setGastoDiario(CalcularGastoDiario)

                        if(meta == "Emagrecer"){
                            const CalcularCaloria = CalcularGastoDiario - 500
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Manter o peso"){
                            const CalcularCaloria = CalcularGastoDiario * 1
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Ganhar massa"){
                            const CalcularCaloria = CalcularGastoDiario + 500
                            setCaloria(CalcularCaloria)
        
                        }

                }else if(intensidade == "Intensa"){
                    const CalcularGastoDiario = CalcularGastoBasal * 2.2
                    setGastoDiario(CalcularGastoDiario)

                        if(meta == "Emagrecer"){
                            const CalcularCaloria = CalcularGastoDiario - 500
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Manter o peso"){
                            const CalcularCaloria = CalcularGastoDiario * 1
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Ganhar massa"){
                            const CalcularCaloria = CalcularGastoDiario + 500
                            setCaloria(CalcularCaloria)
        
                        }

                }
                
            }

        }else if(idade > 3 && idade <= 10){

            if(sexo == "Feminino"){
                const CalcularGastoBasal = ((20.315 * peso) + 485.9).toFixed(2)
                setGastoBasal(CalcularGastoBasal)

                if(intensidade == "Leve"){
                    const CalcularGastoDiario = CalcularGastoBasal * 1.55
                    setGastoDiario(CalcularGastoDiario)

                        if(meta == "Emagrecer"){
                            const CalcularCaloria = CalcularGastoDiario - 500
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Manter o peso"){
                            const CalcularCaloria = CalcularGastoDiario * 1
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Ganhar massa"){
                            const CalcularCaloria = CalcularGastoDiario + 500
                            setCaloria(CalcularCaloria)
        
                        }

                }else if(intensidade == "Moderada"){
                    const CalcularGastoDiario = CalcularGastoBasal * 1.84
                    setGastoDiario(CalcularGastoDiario)

                        if(meta == "Emagrecer"){
                            const CalcularCaloria = CalcularGastoDiario - 500
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Manter o peso"){
                            const CalcularCaloria = CalcularGastoDiario * 1
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Ganhar massa"){
                            const CalcularCaloria = CalcularGastoDiario + 500
                            setCaloria(CalcularCaloria)
        
                        }

                }else if(intensidade == "Intensa"){
                    const CalcularGastoDiario = CalcularGastoBasal * 2.2
                    setGastoDiario(CalcularGastoDiario)

                        if(meta == "Emagrecer"){
                            const CalcularCaloria = CalcularGastoDiario - 500
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Manter o peso"){
                            const CalcularCaloria = CalcularGastoDiario * 1
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Ganhar massa"){
                            const CalcularCaloria = CalcularGastoDiario + 500
                            setCaloria(CalcularCaloria)
        
                        }

                }

            }else if(sexo == "Masculino"){

                const CalcularGastoBasal = ((22.706 * peso) + 504.3).toFixed(2)
                setGastoBasal(CalcularGastoBasal)

                if(intensidade == "Leve"){
                    const CalcularGastoDiario = CalcularGastoBasal * 1.55
                    setGastoDiario(CalcularGastoDiario)

                        if(meta == "Emagrecer"){
                            const CalcularCaloria = CalcularGastoDiario - 500
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Manter o peso"){
                            const CalcularCaloria = CalcularGastoDiario * 1
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Ganhar massa"){
                            const CalcularCaloria = CalcularGastoDiario + 500
                            setCaloria(CalcularCaloria)
        
                        }

                }else if(intensidade == "Moderada"){
                    const CalcularGastoDiario = CalcularGastoBasal * 1.84
                    setGastoDiario(CalcularGastoDiario)

                        if(meta == "Emagrecer"){
                            const CalcularCaloria = CalcularGastoDiario - 500
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Manter o peso"){
                            const CalcularCaloria = CalcularGastoDiario * 1
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Ganhar massa"){
                            const CalcularCaloria = CalcularGastoDiario + 500
                            setCaloria(CalcularCaloria)
        
                        }

                }else if(intensidade == "Intensa"){
                    const CalcularGastoDiario = CalcularGastoBasal * 2.2
                    setGastoDiario(CalcularGastoDiario)

                        if(meta == "Emagrecer"){
                            const CalcularCaloria = CalcularGastoDiario - 500
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Manter o peso"){
                            const CalcularCaloria = CalcularGastoDiario * 1
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Ganhar massa"){
                            const CalcularCaloria = CalcularGastoDiario + 500
                            setCaloria(CalcularCaloria)
        
                        }

                }

            }

        }else if(idade > 10 && idade <= 18){

            if(sexo == "Feminino"){
                const CalcularGastoBasal = ((13.384 * peso) + 692.6).toFixed(2)
                setGastoBasal(CalcularGastoBasal)

                if(intensidade == "Leve"){
                    const CalcularGastoDiario = CalcularGastoBasal * 1.55
                    setGastoDiario(CalcularGastoDiario)

                        if(meta == "Emagrecer"){
                            const CalcularCaloria = CalcularGastoDiario - 500
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Manter o peso"){
                            const CalcularCaloria = CalcularGastoDiario * 1
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Ganhar massa"){
                            const CalcularCaloria = CalcularGastoDiario + 500
                            setCaloria(CalcularCaloria)
        
                        }

                }else if(intensidade == "Moderada"){
                    const CalcularGastoDiario = CalcularGastoBasal * 1.84
                    setGastoDiario(CalcularGastoDiario)

                        if(meta == "Emagrecer"){
                            const CalcularCaloria = CalcularGastoDiario - 500
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Manter o peso"){
                            const CalcularCaloria = CalcularGastoDiario * 1
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Ganhar massa"){
                            const CalcularCaloria = CalcularGastoDiario + 500
                            setCaloria(CalcularCaloria)
        
                        }

                }else if(intensidade == "Intensa"){
                    const CalcularGastoDiario = CalcularGastoBasal * 2.2
                    setGastoDiario(CalcularGastoDiario)

                        if(meta == "Emagrecer"){
                            const CalcularCaloria = CalcularGastoDiario - 500
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Manter o peso"){
                            const CalcularCaloria = CalcularGastoDiario * 1
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Ganhar massa"){
                            const CalcularCaloria = CalcularGastoDiario + 500
                            setCaloria(CalcularCaloria)
        
                        }

                }

            }else if(sexo == "Masculino"){
                const CalcularGastoBasal = ((17.686 * peso) + 658.2).toFixed(2)
                setGastoBasal(CalcularGastoBasal)

                if(intensidade == "Leve"){
                    const CalcularGastoDiario = CalcularGastoBasal * 1.55
                    setGastoDiario(CalcularGastoDiario)

                        if(meta == "Emagrecer"){
                            const CalcularCaloria = CalcularGastoDiario - 500
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Manter o peso"){
                            const CalcularCaloria = CalcularGastoDiario * 1
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Ganhar massa"){
                            const CalcularCaloria = CalcularGastoDiario + 500
                            setCaloria(CalcularCaloria)
        
                        }

                }else if(intensidade == "Moderada"){
                    const CalcularGastoDiario = CalcularGastoBasal * 1.84
                    setGastoDiario(CalcularGastoDiario)

                        if(meta == "Emagrecer"){
                            const CalcularCaloria = CalcularGastoDiario - 500
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Manter o peso"){
                            const CalcularCaloria = CalcularGastoDiario * 1
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Ganhar massa"){
                            const CalcularCaloria = CalcularGastoDiario + 500
                            setCaloria(CalcularCaloria)
        
                        }

                }else if(intensidade == "Intensa"){
                    const CalcularGastoDiario = CalcularGastoBasal * 2.2
                    setGastoDiario(CalcularGastoDiario)

                        if(meta == "Emagrecer"){
                            const CalcularCaloria = CalcularGastoDiario - 500
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Manter o peso"){
                            const CalcularCaloria = CalcularGastoDiario * 1
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Ganhar massa"){
                            const CalcularCaloria = CalcularGastoDiario + 500
                            setCaloria(CalcularCaloria)
        
                        }

                }

            }

        }else if(idade > 18 && idade <= 30){

            if(sexo == "Feminino"){
                const CalcularGastoBasal = ((14.818 * peso) + 486.6).toFixed(2)
                setGastoBasal(CalcularGastoBasal)

                if(intensidade == "Leve"){
                    const CalcularGastoDiario = CalcularGastoBasal * 1.55
                    setGastoDiario(CalcularGastoDiario)

                        if(meta == "Emagrecer"){
                            const CalcularCaloria = CalcularGastoDiario - 500
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Manter o peso"){
                            const CalcularCaloria = CalcularGastoDiario * 1
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Ganhar massa"){
                            const CalcularCaloria = CalcularGastoDiario + 500
                            setCaloria(CalcularCaloria)
        
                        }

                }else if(intensidade == "Moderada"){
                    const CalcularGastoDiario = CalcularGastoBasal * 1.84
                    setGastoDiario(CalcularGastoDiario)

                        if(meta == "Emagrecer"){
                            const CalcularCaloria = CalcularGastoDiario - 500
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Manter o peso"){
                            const CalcularCaloria = CalcularGastoDiario * 1
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Ganhar massa"){
                            const CalcularCaloria = CalcularGastoDiario + 500
                            setCaloria(CalcularCaloria)
        
                        }

                }else if(intensidade == "Intensa"){
                    const CalcularGastoDiario = CalcularGastoBasal * 2.2
                    setGastoDiario(CalcularGastoDiario)

                        if(meta == "Emagrecer"){
                            const CalcularCaloria = CalcularGastoDiario - 500
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Manter o peso"){
                            const CalcularCaloria = CalcularGastoDiario * 1
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Ganhar massa"){
                            const CalcularCaloria = CalcularGastoDiario + 500
                            setCaloria(CalcularCaloria)
        
                        }

                }

            }else if(sexo == "Masculino"){
                const CalcularGastoBasal = ((15.057 * peso) + 692.2).toFixed(2)
                setGastoBasal(CalcularGastoBasal)

                if(intensidade == "Leve"){
                    const CalcularGastoDiario = CalcularGastoBasal * 1.55
                    setGastoDiario(CalcularGastoDiario)

                        if(meta == "Emagrecer"){
                            const CalcularCaloria = CalcularGastoDiario - 500
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Manter o peso"){
                            const CalcularCaloria = CalcularGastoDiario * 1
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Ganhar massa"){
                            const CalcularCaloria = CalcularGastoDiario + 500
                            setCaloria(CalcularCaloria)
        
                        }

                }else if(intensidade == "Moderada"){
                    const CalcularGastoDiario = CalcularGastoBasal * 1.84
                    setGastoDiario(CalcularGastoDiario)

                        if(meta == "Emagrecer"){
                            const CalcularCaloria = CalcularGastoDiario - 500
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Manter o peso"){
                            const CalcularCaloria = CalcularGastoDiario * 1
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Ganhar massa"){
                            const CalcularCaloria = CalcularGastoDiario + 500
                            setCaloria(CalcularCaloria)
        
                        }

                }else if(intensidade == "Intensa"){
                    const CalcularGastoDiario = CalcularGastoBasal * 2.2
                    setGastoDiario(CalcularGastoDiario)

                        if(meta == "Emagrecer"){
                            const CalcularCaloria = CalcularGastoDiario - 500
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Manter o peso"){
                            const CalcularCaloria = CalcularGastoDiario * 1
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Ganhar massa"){
                            const CalcularCaloria = CalcularGastoDiario + 500
                            setCaloria(CalcularCaloria)
        
                        }

                }

            }

        }else if(idade > 30 && idade <= 60){

            if(sexo == "Feminino"){
                const CalcularGastoBasal = ((8.126 * peso) + 845.6).toFixed(2)
                setGastoBasal(CalcularGastoBasal)

                if(intensidade == "Leve"){
                    const CalcularGastoDiario = CalcularGastoBasal * 1.55
                    setGastoDiario(CalcularGastoDiario)

                        if(meta == "Emagrecer"){
                            const CalcularCaloria = CalcularGastoDiario - 500
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Manter o peso"){
                            const CalcularCaloria = CalcularGastoDiario * 1
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Ganhar massa"){
                            const CalcularCaloria = CalcularGastoDiario + 500
                            setCaloria(CalcularCaloria)
        
                        }

                }else if(intensidade == "Moderada"){
                    const CalcularGastoDiario = CalcularGastoBasal * 1.84
                    setGastoDiario(CalcularGastoDiario)

                        if(meta == "Emagrecer"){
                            const CalcularCaloria = CalcularGastoDiario - 500
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Manter o peso"){
                            const CalcularCaloria = CalcularGastoDiario * 1
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Ganhar massa"){
                            const CalcularCaloria = CalcularGastoDiario + 500
                            setCaloria(CalcularCaloria)
        
                        }

                }else if(intensidade == "Intensa"){
                    const CalcularGastoDiario = CalcularGastoBasal * 2.2
                    setGastoDiario(CalcularGastoDiario)

                        if(meta == "Emagrecer"){
                            const CalcularCaloria = CalcularGastoDiario - 500
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Manter o peso"){
                            const CalcularCaloria = CalcularGastoDiario * 1
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Ganhar massa"){
                            const CalcularCaloria = CalcularGastoDiario + 500
                            setCaloria(CalcularCaloria)
        
                        }

                }

            }else if(sexo == "Masculino"){
                const CalcularGastoBasal = ((11.472 * peso) + 873.1).toFixed(2)
                setGastoBasal(CalcularGastoBasal)

                if(intensidade == "Leve"){
                    const CalcularGastoDiario = CalcularGastoBasal * 1.55
                    setGastoDiario(CalcularGastoDiario)

                        if(meta == "Emagrecer"){
                            const CalcularCaloria = CalcularGastoDiario - 500
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Manter o peso"){
                            const CalcularCaloria = CalcularGastoDiario * 1
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Ganhar massa"){
                            const CalcularCaloria = CalcularGastoDiario + 500
                            setCaloria(CalcularCaloria)
        
                        }

                }else if(intensidade == "Moderada"){
                    const CalcularGastoDiario = CalcularGastoBasal * 1.84
                    setGastoDiario(CalcularGastoDiario)

                        if(meta == "Emagrecer"){
                            const CalcularCaloria = CalcularGastoDiario - 500
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Manter o peso"){
                            const CalcularCaloria = CalcularGastoDiario * 1
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Ganhar massa"){
                            const CalcularCaloria = CalcularGastoDiario + 500
                            setCaloria(CalcularCaloria)
        
                        }

                }else if(intensidade == "Intensa"){
                    const CalcularGastoDiario = CalcularGastoBasal * 2.2
                    setGastoDiario(CalcularGastoDiario)

                        if(meta == "Emagrecer"){
                            const CalcularCaloria = CalcularGastoDiario - 500
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Manter o peso"){
                            const CalcularCaloria = CalcularGastoDiario * 1
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Ganhar massa"){
                            const CalcularCaloria = CalcularGastoDiario + 500
                            setCaloria(CalcularCaloria)
        
                        }

                }

            }

        }else if(idade > 60){

            if(sexo == "Feminino"){
                const CalcularGastoBasal = ((9.082 * peso) + 658.5).toFixed(2)
                setGastoBasal(CalcularGastoBasal)

                if(intensidade == "Leve"){
                    const CalcularGastoDiario = CalcularGastoBasal * 1.55
                    setGastoDiario(CalcularGastoDiario)

                        if(meta == "Emagrecer"){
                            const CalcularCaloria = CalcularGastoDiario - 500
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Manter o peso"){
                            const CalcularCaloria = CalcularGastoDiario * 1
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Ganhar massa"){
                            const CalcularCaloria = CalcularGastoDiario + 500
                            setCaloria(CalcularCaloria)
        
                        }

                }else if(intensidade == "Moderada"){
                    const CalcularGastoDiario = CalcularGastoBasal * 1.84
                    setGastoDiario(CalcularGastoDiario)

                        if(meta == "Emagrecer"){
                            const CalcularCaloria = CalcularGastoDiario - 500
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Manter o peso"){
                            const CalcularCaloria = CalcularGastoDiario * 1
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Ganhar massa"){
                            const CalcularCaloria = CalcularGastoDiario + 500
                            setCaloria(CalcularCaloria)
        
                        }

                }else if(intensidade == "Intensa"){
                    const CalcularGastoDiario = CalcularGastoBasal * 2.2
                    setGastoDiario(CalcularGastoDiario)

                        if(meta == "Emagrecer"){
                            const CalcularCaloria = CalcularGastoDiario - 500
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Manter o peso"){
                            const CalcularCaloria = CalcularGastoDiario * 1
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Ganhar massa"){
                            const CalcularCaloria = CalcularGastoDiario + 500
                            setCaloria(CalcularCaloria)
        
                        }

                }

            }else if(sexo == "Masculino"){
                const CalcularGastoBasal = ((11.711 * peso) + 587.7).toFixed(2)
                setGastoBasal(CalcularGastoBasal)

                if(intensidade == "Leve"){
                    const CalcularGastoDiario = CalcularGastoBasal * 1.55
                    setGastoDiario(CalcularGastoDiario)

                        if(meta == "Emagrecer"){
                            const CalcularCaloria = CalcularGastoDiario - 500
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Manter o peso"){
                            const CalcularCaloria = CalcularGastoDiario * 1
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Ganhar massa"){
                            const CalcularCaloria = CalcularGastoDiario + 500
                            setCaloria(CalcularCaloria)
        
                        }

                }else if(intensidade == "Moderada"){
                    const CalcularGastoDiario = CalcularGastoBasal * 1.84
                    setGastoDiario(CalcularGastoDiario)

                        if(meta == "Emagrecer"){
                            const CalcularCaloria = CalcularGastoDiario - 500
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Manter o peso"){
                            const CalcularCaloria = CalcularGastoDiario * 1
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Ganhar massa"){
                            const CalcularCaloria = CalcularGastoDiario + 500
                            setCaloria(CalcularCaloria)
        
                        }

                }else if(intensidade == "Intensa"){
                    const CalcularGastoDiario = CalcularGastoBasal * 2.2
                    setGastoDiario(CalcularGastoDiario)

                        if(meta == "Emagrecer"){
                            const CalcularCaloria = CalcularGastoDiario - 500
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Manter o peso"){
                            const CalcularCaloria = CalcularGastoDiario * 1
                            setCaloria(CalcularCaloria)
        
                        }else if(meta == "Ganhar massa"){
                            const CalcularCaloria = CalcularGastoDiario + 500
                            setCaloria(CalcularCaloria)
        
                        }

                }

            }

        }

    }

    return(
        <div>
            <form className="formularioContent" onSubmit={Enviar}>

            <div className='caixasContent'>
                <Inputs
                    titulo="Nome"
                    escrito="ex: joao gabriel"
                    setEstado={nome => setNome(nome)}
                    valor={nome}
                />

                <Inputs
                    titulo="Idade"
                    escrito="ex: 18"
                    setEstado={idade => setIdade(idade)}
                    valor={idade}
                />

                <Inputs
                    titulo="Peso"
                    escrito="ex: 80"
                    setEstado={peso => setPeso(peso)}
                    valor={peso}
                />

                <Inputs
                    titulo="Altura"
                    escrito="ex: 1.75"
                    setEstado={altura => setAltura(altura)}
                    valor={altura}
                />
            </div>


            <div className='listasContent'>
                <Lista
                    titulo="Sexo"
                    alternativas={listaSexo}
                    valor={sexo}
                    setEstado={sexo => setSexo(sexo)}
                />

                <Lista
                    titulo="Nivel de atividade"
                    alternativas={listaIntensidade}
                    valor={intensidade}
                    setEstado={intensidade => setIntensidade(intensidade)}
                />

                {intensidade == "" ? '' : 
                    <Lista
                        titulo="Frequencia semanal"
                        alternativas={listaFrequencia}
                        valor={frequencia}
                        setEstado={frequencia => setFrequencia(frequencia)}
                    />}

                <Lista
                    titulo="Meta"
                    alternativas={listaMeta}
                    valor={meta}
                    setEstado={meta => setMeta(meta)}
                />
            </div>

            <div className='botaoContent'>
                <button type="submit">Enviar</button>
            </div>

            </form>

        {caloria > 1 ? <div className="dadosContent">
            <h2>{nome}</h2>

            <div className="dadosResultadoContent">
                
                <div className="dadosBasicosContentForm">
                    <DadosBasicos
                        nome={nome}
                        idade={idade}
                        altura={altura}
                        peso={peso}
                        sexo={sexo}
                    />
                </div>
                
                <div className="dadosCalculadosContentForm">
                    <DadosCalculos
                        calorias={caloria}
                        gastoDiario={gastoDiario}
                        gastoBasal={gastoBasal}
                    />
                </div>
                
                <div className="dadosAdicionaisContentForm">
                    <DadosAdicionais
                        imc={imc}
                        agua={agua}
                    />
                </div>
                
            </div>
        </div> : ''}
        
               

        </div>
        
    )
}
