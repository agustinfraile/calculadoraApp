import { useState } from 'react';

import styles from "./Calculadora.module.css";


const Calculadora: React.FC = () => {
  const numeros: any[] = [
    7,
    8,
    9,
    "DEL",
    4,
    5,
    6,
    "+",
    1,
    2,
    3,
    "-",
    ".",
    0,
    "/",
    "X",
  ];

  // Valor mostrado en pantalla
  const [displayValue, setDisplayValue] = useState(''); 
  // Valor almacenado para la operación
  const [storedValue, setStoredValue] = useState(''); 
  // Operador seleccionado
  const [operator, setOperator] = useState('');

  const calculateResult = () => {
    const number1 = parseFloat(storedValue);
    const number2 = parseFloat(displayValue);

    switch (operator) {
      case '+':
        return number1 + number2;
      case '-':
        return number1 - number2;
      case '/':
        return number1 / number2;
      case 'X':
        return number1 * number2;
      default:
        return '';
    }
  };

  const handleClick = (elemento: any) => {
    if (typeof elemento === 'number' || elemento === '.') {
      // Si es un número o el punto decimal, agrega el valor al display
      setDisplayValue(displayValue + elemento);
    } else if (elemento === 'DEL') {
      // Si es el botón 'DEL', elimina el último dígito del display
      setDisplayValue(displayValue.slice(0, -1));
    } else if (elemento === 'RESET') {
      // Si es el botón 'RESET', reinicia los valores
      setDisplayValue('');
      setStoredValue('');
      setOperator('');
    } else if (typeof elemento === 'string' && elemento !== '=') {
      // Si es un operador (+, -, /, *)
      setOperator(elemento);
      setStoredValue(displayValue);
      setDisplayValue('');
    } else if (elemento === '=') {
      // Si es el botón '=', realiza la operación y muestra el resultado
      const result = calculateResult();
      console.log(result);
      setDisplayValue(result.toString());
      setStoredValue('');
      setOperator('');
    }
  };



  return (
    <div className={styles.container_calculadora}>
      <div className={styles.container_calculadora_mostrar}>
        {displayValue}
      </div>

      <div className={styles.container_calculadora_numeros}>
        {numeros.map((numero) => (
          <div 
            className={styles.numero} key={numero}
            onClick={()=>handleClick(numero)}    
        >
            {numero}
          </div>
        ))}
      </div>
      <div className={styles.container_calculadora_resultados}>
        <div
          className={`
                        ${styles.numero_resultado} 
                        ${styles.resultado_red}
                    `}
            onClick={()=>handleClick('=')}    
            
        >
          =
        </div>
        <div 
            className={styles.numero_resultado}
            onClick={()=>handleClick('RESET')}    
            
        >
            RESET
        </div>
      </div>
    </div>
  );
};

export default Calculadora;
