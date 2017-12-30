import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

class App extends Component{
    render(){
        return([
            <Header key="header"></Header>,
            <Main key="main"></Main>
        ])
    }
}


export default App;