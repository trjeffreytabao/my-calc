import "./App.css";

function Button({ number }) {
  return <button>{number}</button>;
}

function App() {
  return (
    <div class="container">
      <div class="container-calc">
        <div class="container-screen-calc">
          <div class="output_screen"></div>
        </div>
        <div class="container-buttons-calc">
          <Button number={7} />
          <Button number={8} />
          <Button number={9} />
          <Button number={"/"} />
          <Button number={4} />
          <Button number={5} />
          <Button number={6} />
          <Button number={"x"} />
          <Button number={1} />
          <Button number={2} />
          <Button number={3} />
          <Button number={"-"} />
          <Button number={"CLR"} />
          <Button number={0} />
          <Button number={"="} />
          <Button number={"+"} />
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
