import { useState } from 'react';
import Screen from './Screen';
import '../Calculator.css';

export default function Calculator() {
    const [eleArray, setEleArray] = useState([]);
    const [operand, setOperand] = useState('');
    const [screen, setScreen] = useState('');
    const [result, setResult] = useState(null);
    
    let clear = false;

    
    function Clickelement(event) {
        if(event.target.value === '+' || event.target.value === '-' || event.target.value === '*' || event.target.value === '/' 
        ) {
            setEleArray((prev) => [...prev, operand, event.target.value])
            setScreen((prev) => prev + event.target.value)
            setOperand('');
        } else {
            setOperand((prev) => prev + event.target.value)
            setScreen((prev) => prev + event.target.value)
            
        }
        
    }

    function ClickEnter() {
        if (operand !== '') {
            setEleArray((prev) => [...prev, operand]);
        }
            let newResult;
            if(eleArray[1] === "+") {
                newResult = parseInt(eleArray[0]) + parseInt(eleArray[2])
            } else if(eleArray[1] === "-") {
                newResult = parseInt(eleArray[0]) - parseInt(eleArray[2])
            } else if(eleArray[1] === "*") {
                newResult = parseInt(eleArray[0]) * parseInt(eleArray[2])
            } else if(eleArray[1] === "/") {
                newResult = parseInt(eleArray[0]) / parseInt(eleArray[2])
            }
            setResult(newResult);
    }

    function ElementClear() {
        setEleArray([]);
        setOperand('');
        setResult('');
    }

    return (
        <div className='outline'>
            <div className='screen-row'>
                <Screen screen = {screen} eleArray = {eleArray} result = {result} clear={clear}/>
            </div>
            <div className='button-row'>
                <button onClick={Clickelement} value = '1'>1</button>
                <button onClick={Clickelement} value = '2'>2</button>
                <button onClick={Clickelement} value = '3'>3</button>
                <button onClick={Clickelement} value = '+'>+</button>
            </div>
            <div className='button-row'>
                <button onClick={Clickelement} value = '4'>4</button>
                <button onClick={Clickelement} value = '5'>5</button>
                <button onClick={Clickelement} value = '6'>6</button>
                <button onClick={Clickelement} value = '-'>-</button>
            </div>
            <div className='button-row'>
                <button onClick={Clickelement} value = '7'>7</button>
                <button onClick={Clickelement} value = '8'>8</button>
                <button onClick={Clickelement} value = '9'>9</button>
                <button onClick={Clickelement} value = '*'>*</button>
            </div>
            <div className='button-row'>
                <button onClick={ElementClear}>AC</button>
                <button onClick={Clickelement}>0</button>
                <button onClick={ClickEnter}>=</button>
                <button onClick={Clickelement} value = '/'>/</button>
            </div>
        </div>
    );
}
