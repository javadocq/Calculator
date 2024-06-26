import { useState } from 'react';
import Screen from './Screen';
import '../Calculator.css';

export default function Calculator() {
    const [eleArray, setEleArray] = useState([]);
    const [operand, setOperand] = useState('');
    const [screen, setScreen] = useState('');
    const [result, setResult] = useState(null);
    const [clear, setClear] = useState(false);

    function Clickelement(event) {
        setClear(false);
        if (event.target.value === '+' || event.target.value === '-' || event.target.value === '*' || event.target.value === '/') {
            setEleArray((prev) => [...prev, operand, event.target.value]);
            setScreen((prev) => prev + event.target.value);
            setOperand('');
        } else {
            setOperand((prev) => prev + event.target.value);
            setScreen((prev) => prev + event.target.value);
        }
    }

    function ClickEnter() {
        setClear(false);
        if (operand !== '') {
            setEleArray((prev) => [...prev, operand]);
            setOperand('');
        }

        let newResult;
        let numArray = [];
        let opArray = [];
        let updatedEleArray = [...eleArray, operand];

        while (updatedEleArray.length >= 3) {
            numArray[0] = parseFloat(updatedEleArray[0]);
            numArray[1] = parseFloat(updatedEleArray[2]);
            opArray[0] = updatedEleArray[1];
            updatedEleArray.splice(0, 3);

            if (opArray[0] === "+") {
                newResult = numArray[0] + numArray[1];
            } else if (opArray[0] === "-") {
                newResult = numArray[0] - numArray[1];
            } else if (opArray[0] === "*") {
                newResult = numArray[0] * numArray[1];
            } else if (opArray[0] === "/") {
                newResult = numArray[0] / numArray[1];
            }
            updatedEleArray = [`${newResult}`, ...updatedEleArray];
        }
        setResult(newResult);
        setScreen(`${newResult}`);
        setEleArray(updatedEleArray);
    }

    function ElementClear() {
        setClear(true);
        setEleArray([]);
        setOperand('');
        setScreen('');
        setResult(null);
    }

    return (
        <div className='outline'>
            <div className='screen-row'>
                <Screen screen={screen} eleArray={eleArray} result={result} clear={clear} />
            </div>
            <div className='button-row'>
                <button onClick={Clickelement} value='1'>1</button>
                <button onClick={Clickelement} value='2'>2</button>
                <button onClick={Clickelement} value='3'>3</button>
                <button onClick={Clickelement} value='+'>+</button>
            </div>
            <div className='button-row'>
                <button onClick={Clickelement} value='4'>4</button>
                <button onClick={Clickelement} value='5'>5</button>
                <button onClick={Clickelement} value='6'>6</button>
                <button onClick={Clickelement} value='-'>-</button>
            </div>
            <div className='button-row'>
                <button onClick={Clickelement} value='7'>7</button>
                <button onClick={Clickelement} value='8'>8</button>
                <button onClick={Clickelement} value='9'>9</button>
                <button onClick={Clickelement} value='*'>*</button>
            </div>
            <div className='button-row'>
                <button onClick={ElementClear}>AC</button>
                <button onClick={Clickelement} value='0'>0</button>
                <button onClick={ClickEnter}>=</button>
                <button onClick={Clickelement} value='/'>/</button>
            </div>
        </div>
    );
}
