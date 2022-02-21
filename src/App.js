//dependenices 
import { useState } from 'react';

function App() {

    //functionality of the calculator 
    const [calc, setCalc] = useState("")
    const [result, setResult] = useState("")

    //string array of operators for functionality in later function
    const ops = ['/', '*', '+', "-", '.'];

    //adjusting the value in the results div
    const updateCalc = value => {
        
        //operators troubleshooting
        if (
            ops.includes(value) && calc === '' ||
            ops.includes(value) && ops.includes(calc.slice(-1))
        
        )
         {
            return;
        }
        setCalc(calc + value);

        if (!ops.includes(value)) {
                setResult(eval(calc + value).toString());
        }
        

    }


    //creating digits function 

    const digitArray = () => {
        const digits = [];

        for (let i = 1; i < 10; i++) {
            digits.push(
                <button 
                onClick={() => updateCalc(i.toString())}
                key={i}>
                    {i}
                     
                     </button>
            )

        }
        return digits;
    }
        //equals '=' functionality
        const calculate = () => {
            setCalc(eval(calc).toString());

        }

        //DEL button functionality to delete last string in the display caluculation
        const deleteLast = () => {
           
            if(calc == '') {
                return;
            }
            
           
            const value = calc.slice(0, -1);

            setCalc(value);
        }
  
    return (
        <div className="App">
            <div className='calculator'>
                <div className='display'>
                    
                    { result ? <span>({result})</span>  : ''}&nbsp;
                    { calc || "0"}
                </div>

                <div className='operators'>
                    <button onClick={() => updateCalc('/')}>/</button>
                    <button onClick={() => updateCalc('*')}>*</button>
                    <button onClick={() => updateCalc('+')}>+</button>
                    <button onClick={() => updateCalc('-')}>-</button>
                   

                   <button onClick={deleteLast}>DEL</button>
                  
                </div>

                <div className="digits">
                    { digitArray() }
                    <button onClick={() => updateCalc('0')}>0</button>
                    <button onClick={() => updateCalc('.')}>.</button>

                    
                    <button onClick={calculate}>=</button>
                </div>
            </div>
        </div>
    );
}

export default App; 