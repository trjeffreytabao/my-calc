import "./App.css";
import { useState } from "react";

function Button({ number = "?", onClick }) {
  return <button onClick={onClick}>{number}</button>;
}

function Display({ value }) {
  return (
    <div class="container-input_answer">
      <input value={value}></input>
    </div>
  );
}

function App() {
  const [num1, setNum1] = useState(" ");
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
    const value = e.target.innerHTML;
    setDisplay(value);
    let old = display;
    setDisplay(old + e.target.innerHTML);
  };

  const equal = (e) => {
    e.preventDefault();
    if (operator === "+") {
      let equal = parseInt(num1) + parseInt(display);
      setDisplay(equal);
      setIsClick(false);
    } else if (operator === "*") {
      let equal = parseInt(num1) * parseInt(display);
      setDisplay(equal);
      setIsClick(false);
    } else if (operator === "/") {
      let equal = parseInt(num1) / parseInt(display);
      setDisplay(equal);
      setIsClick(false);
    } else if (operator === "-") {
      let equal = parseInt(num1) - parseInt(display);
      setDisplay(equal);
      setIsClick(false);
    }
  };

  const ClickOperator = (e) => {
    if (!IsClick) {
      e.preventDefault();
      const value = e.target.innerHTML;
      setOperator(value);
      setNum1(display);
      setDisplay(" ");
      setIsClick(true);
    }
  };

  return (
    <div class="container">
      <div class="container-calc">
        <div class="container-screen-calc">
          <div class="output_screen">
            <Display value={display} />
            {/* <Display value={num1} />
            <Display value={operator} /> */}
          </div>
        </div>
        <div class="container-buttons-calc">
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
          <Button number={"CLR"} onClick={ClearValue} />
          <Button number={0} onClick={numberClickHandler} />
          <Button number={"="} onClick={equal} />
          <Button number={"+"} onClick={ClickOperator} />
        </div>
      </div>
    </div>
  );
}
export default App;

/*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */
