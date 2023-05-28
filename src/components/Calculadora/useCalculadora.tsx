import { useState } from "react";

export const numeros: any[] = [
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

export const useCalculadora = () => {
  const [displayValue, setDisplayValue] = useState(""); // Valor mostrado en pantalla
  const [storedValue, setStoredValue] = useState(""); // Valor almacenado para la operación
  const [operator, setOperator] = useState(""); // Operador seleccionado

  const handleClick = (elemento: any) => {
    if (typeof elemento === "number" || elemento === ".") {
      setDisplayValue(displayValue + elemento);
    } else if (elemento === "DEL") {
      setDisplayValue(displayValue.slice(0, -1));
    } else if (elemento === "RESET") {
      resetearCalculadora();
    } else if (typeof elemento === "string" && elemento !== "=") {
      setOperator(elemento);
      setStoredValue(displayValue);
      setDisplayValue("");
    } else if (elemento === "=") {
      calcularResultado();
    }
  };

  const resetearCalculadora = () => {
    setDisplayValue("");
    setStoredValue("");
    setOperator("");
  };

  const calcularResultado = () => {
    const number1 = parseFloat(storedValue);
    const number2 = parseFloat(displayValue);

    let result = "";

    switch (operator) {
      case "+":
        result = (number1 + number2).toString();
        break;
      case "-":
        result = (number1 - number2).toString();
        break;
      case "/":
        result = (number1 / number2).toString();
        break;
      case "X":
        result = (number1 * number2).toString();
        break;
      default:
        result = "";
    }

    setDisplayValue(result);
    setStoredValue("");
    setOperator("");
  };

  return { displayValue, handleClick };
};
