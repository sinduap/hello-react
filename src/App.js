import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import ChildComponent from "./components/ChildComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./components/Form";
import ParentComp from "./components/ParentComp";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div className="App">
      {/*<h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline />
      <Stylesheet primary={true} />
      <Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet>  
      <Greet name="Clark" heroName="Superman">
        <button>Click</button>
      </Greet>
      <Greet name="Diana" heroName="Wonder Woman" />
      <Welcome name="Bruce" heroName="Batman">
        <button>Click</button>
      </Welcome>
      <Welcome name="Clark" heroName="Superman" />
      <Welcome name="Diana" heroName="Wonder Woman" />
      <Hello />
      <Message /> 
      <Counter />
      <FunctionClick />
      <ClassClick />
      <EventBind />
      <ParentComponent />
      <UserGreeting />
      <NameList />
      <Form />
      <ParentComp />*/}
      <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary>
    </div>
  );
}

export default App;
