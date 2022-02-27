import React from "react";
import logo from './logo.svg';
import './App.css';
import { ThemeContext, themes } from "./theme-context";
import ThemedButton from "./themed-button";

// An intermediate component that uses the ThemedButton
function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  );
}

function App() {
  const [state, setState] = React.useState({
    theme: themes.light,
  });
  const toggleTheme= () =>{
    setState({
      theme: state.theme === themes.dark ? themes.light : themes.dark,
    });
  }
  console.log(state.theme);
  return (
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
      <ThemeContext.Provider value={themes.light}>
        <Toolbar changeTheme={toggleTheme} />
      </ThemeContext.Provider>
      <section>
        <ThemedButton >Dark Button</ThemedButton>
      </section>
    </div>
  );
}

export default App;
