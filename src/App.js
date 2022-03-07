import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import PropComp from "./Component/PropComp";
import Header from "./Component/Header";
import SomeData from "./Component/SomeData";
import Navigation from "./Component/navigation";
import Dialogs from "./Component/Dialogs";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <header>
            <Router>
                <Navigation/>
                <Routes>
                    <Route path="/"/>
                    <Route path="/data" element={<SomeData/>}/>
                    <Route path="/head" element={<Header/>}/>
                    <Route path="/prop" element={<PropComp post={{id: 1,
                        title: "propComp", body: "Description"}}/>}/>
                    <Route path="/dialogs" element={<Dialogs/>}/>
                </Routes>
            </Router>
            </header>
        </div>
    );
}

export default App;