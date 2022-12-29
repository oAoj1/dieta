import './Header.css'
import { GiFruitBowl } from 'react-icons/gi'
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';

export default function Header(){
    return(
        <header>
            <Rotate top left>
                <div className="logo">
                    <GiFruitBowl/>
                </div>
            </Rotate>
            
            <Fade top>
                <div className="title">
                    <h2>Dieta</h2>
                    <h3>Calcule seu gasto calórico</h3>
                </div>
            </Fade>
            
            <Rotate bottom right>
                <div className="logo">
                    <GiFruitBowl/>
                </div>
            </Rotate>
            
        </header>
    )
}