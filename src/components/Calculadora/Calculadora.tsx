import { numeros, useCalculadora } from "./useCalculadora";

import styles from "./Calculadora.module.css";

const Calculadora: React.FC = () => {
  const { displayValue, handleClick } = useCalculadora();

  return (
    <div className={styles.container_calculadora}>
      <div className={styles.container_calculadora_mostrar}>
        <h4>{displayValue}</h4>
      </div>

      <div className={styles.container_calculadora_numeros}>
        {numeros.map((numero) => (
          <div
            className={styles.numero}
            key={numero}
            onClick={() => handleClick(numero)}>
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
          onClick={() => handleClick("=")}>
          =
        </div>
        <div
          className={styles.numero_resultado}
          onClick={() => handleClick("RESET")}>
          RESET
        </div>
      </div>
    </div>
  );
};

export default Calculadora;
