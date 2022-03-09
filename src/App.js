import React from "react";
import './App.css';
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from "react-router-dom";
import PropComp from "./Component/PropComp";
import Header from "./Component/Header";
import SomeData from "./Component/SomeData";
import Navigation from "./Component/Navigation";
import Dialogs from "./Component/Dialogs";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Router>
                <Navigation/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/"/>
                        <Route path="/data" element={<SomeData/>}/>
                        {/*<Route path="/prop" element={<PropComp post={{
                        id: 1,
                        title: "propComp", body: "Description"
                    }}/>}/>*/}
                        <Route path="/dialogs" element={<Dialogs/>}/>
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;