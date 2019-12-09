// IMPORTS
import React from "react";
import { useAuth0 } from "../../react-auth0-spa.js";

// COMPONENTS
import Auth0_buttons from '../components/Auth0_buttons.js'

// CSS
// TODO: MOVE THIS TO CSS MODULE
const HomePage_STYLES = {
    border: '1px solid orange',
    padding: '10px'
}

// MAIN COMPONENT TO EXPORT
const HomePage = () => {
    // const { loading } = useAuth0();

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    return (
        <div 
            className="HomePage_VIEW"
            style={HomePage_STYLES}
        >
            {/* <header> */}
                {/* <NavBar /> */}
                <div>This is the APP HOMEPAGE</div>
                <div>src > APP > VIEWS > HomePage</div>
                <Auth0_buttons /> 
            
            {/* </header> */}
        </div>
    );
}

export default HomePage;