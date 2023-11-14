import reactLogo from "@assets/react.svg";

import Content from "@components/Content";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo-img" src={reactLogo} alt="logo" />
        <span className="App-logo-text">A Positioning</span>
      </header>
      <Content />
    </div>
  );
};

export default App;
