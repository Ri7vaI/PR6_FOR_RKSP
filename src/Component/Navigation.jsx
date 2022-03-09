import React from 'react';
import st from '../styles/Navigation.module.css';
import {Link, NavLink} from "react-router-dom";

const Navigation = (props) => {
    return (
        <div className={st.nav}>
            <ul>
                <li><NavLink to="/">Main</NavLink></li>
                <li><NavLink to="/dialogs">Dialogs</NavLink></li>
                <li><NavLink to="/data">SomeData</NavLink></li>
            </ul>
        </div>
    );
};

export default Navigation;