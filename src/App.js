import React,{Fragment} from 'react';
import './App.css';
import ToDo from "./containers/ToDo/ToDo";
import Title from "./components/Title/Title";

const App=()=> (
    <Fragment>
        <Title title={"SIMPLE TODO LIST"} title2={"FROM RUBY GARAGE"}/>
        <ToDo/>
        <footer>&reg; Ruby Garage</footer>
    </Fragment>
  );

export default App;
