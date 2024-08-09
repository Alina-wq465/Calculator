// src/Calculator.js
import React, { useState } from 'react';
import './calculator.css';

function Calculator() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleButtonClick = (value) => {
        if (value === '=') {
            calculateResult();
        } else if (value === 'AC') {
            clearInput();
        } else if (value === 'C') {
            removeLastDigit();
        } else {
            setInput(input + value);
        }
    };

    const calculateResult = () => {
        try {
            const res = eval(input); // Use eval for simplicity here; avoid in real projects.
            setResult(res);
        } catch (error) {
            setResult('Error');
        }
    };

    const clearInput = () => {
        setInput('');
        setResult('');
    };

    const removeLastDigit = () => {
        setInput(input.slice(0, -1));
    };

    return (
        <div className="calculator">
            <div className="display">
                <div className="operation">
                    <span>{input}</span>
                </div>
                <div className="result">
                    {result && result.toLocaleString()}
                </div>
            </div>
            <div className="buttons">
                {['AC', 'C', '%', '/'].map((value) => (
                    <button key={value} className="btn btn--function" onClick={() => handleButtonClick(value)}>{value}</button>
                ))}
                {['7', '8', '9', '*'].map((value) => (
                    <button key={value} className="btn btn--number" onClick={() => handleButtonClick(value)}>{value}</button>
                ))}
                {['4', '5', '6', '-'].map((value) => (
                    <button key={value} className="btn btn--number" onClick={() => handleButtonClick(value)}>{value}</button>
                ))}
                {['1', '2', '3', '+'].map((value) => (
                    <button key={value} className="btn btn--number" onClick={() => handleButtonClick(value)}>{value}</button>
                ))}
                {['0', '.', '='].map((value) => (
                    <button
                        key={value}
                        className={`btn btn--number ${value === '0' ? 'zero' : ''} ${value === '=' ? 'equals' : ''}`}
                        onClick={() => handleButtonClick(value)}
                    >
                        {value}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Calculator;
