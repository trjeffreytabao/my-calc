import "./App.css";
import { useState } from "react";

function Button({ number = "?", onClick }) {
  return (
    <button className={"calcbtn"} onClick={onClick}>
      {number}
    </button>
  );
}
function RedButton({ number = "?", onClick }) {
  return (
    <button className={"clearbtn"} onClick={onClick}>
      {number}
    </button>
  );
}

function Display({ value }) {
  return (
    <div className="container-input_answer">
      <input value={value}></input>
    </div>
  );
}

function App() {
  const [num1, setNum1] = useState(null);
  const [operator, setOperator] = useState(" ");
  const [display, setDisplay] = useState(" ");
  const [IsClick, setIsClick] = useState(false);

  function ClearValue() {
    setDisplay(" ");
    setNum1(" ");
    setOperator(" ");
  }

  const numberClickHandler = (e) => {
    e.preventDefault();
    if (IsClick === true) {
      setIsClick(false);
      setDisplay(" ");
      const value = e.target.innerHTML;
      setDisplay(value);
    } else {
      if (display === " ") {
        const value = e.target.innerHTML;
        setDisplay(value);
      } else {
        if (
          display === "+" ||
          display === "/" ||
          display === "*" ||
          display === "-" ||
          display === "0"
        ) {
          const value = e.target.innerHTML;
          setDisplay(value);
        } else {
          let old = display;
          setDisplay(old + e.target.innerHTML);
        }
      }
    }
  };

  const equal = (e) => {
    e.preventDefault();
    let number1 = parseFloat(num1);
    let number2 = parseFloat(display);
    if (
      display === "+" ||
      display === "/" ||
      display === "*" ||
      display === "-"
    ) {
    } else {
      let equal;
      if (operator === "+") {
        equal = number1 + number2;
      } else if (operator === "*") {
        equal = parseFloat(num1) * parseFloat(display);
      } else if (operator === "/") {
        equal = parseFloat(num1) / parseFloat(display);
      } else if (operator === "-") {
        equal = parseFloat(num1) - parseFloat(display);
      }
      setDisplay(equal);
      setNum1(" ");
      setOperator(" ");
      setIsClick(true);
    }
  };

  const ClickOperator = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setOperator(value);
    setDisplay(value);
    if (
      display === "+" ||
      display === "/" ||
      display === "*" ||
      display === "-"
    ) {
    } else {
      setNum1(display);
    }
  };

  return (
    <div className="container">
      <div className="container-calc">
        <div className="container-screen-calc">
          <div className="output_screen">
            <Display value={display} />
            {/* <Display value={num1} />
            <Display value={operator} /> */}
          </div>
        </div>
        <div className="container-buttons-calc">
          <Button number={7} onClick={numberClickHandler} />
          <Button number={8} onClick={numberClickHandler} />
          <Button number={9} onClick={numberClickHandler} />
          <Button number={"/"} onClick={ClickOperator} />
          <Button number={4} onClick={numberClickHandler} />
          <Button number={5} onClick={numberClickHandler} />
          <Button number={6} onClick={numberClickHandler} />
          <Button number={"*"} onClick={ClickOperator} />
          <Button number={1} onClick={numberClickHandler} />
          <Button number={2} onClick={numberClickHandler} />
          <Button number={3} onClick={numberClickHandler} />
          <Button number={"-"} onClick={ClickOperator} />
          <RedButton number={"CLR"} onClick={ClearValue} />
          <Button number={"0"} onClick={numberClickHandler} />
          <Button number={"="} onClick={equal} />
          <Button number={"+"} onClick={ClickOperator} />
        </div>
      </div>
    </div>
  );
}
export default App;
