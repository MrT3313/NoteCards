// src/App.js

import React from "react";
// import NavBar from "./components/NavBar";
import { useAuth0 } from "../react-auth0-spa.js";

import Auth0_buttons from '../components/Auth0_buttons.js'

function App() {
    const { loading } = useAuth0();

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="App">
        <header>
            {/* <NavBar /> */}
            <div>inside app > index.js</div>
            <Auth0_buttons />
        </header>
        </div>
    );
}

export default App;