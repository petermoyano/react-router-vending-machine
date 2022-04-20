import React from "react";
import coke from '../assets/coke.jpg'
import BackButton from "../components/HomeButton";

function Coke() {
    return (<>
        <img src={coke} alt="coke" />
        <BackButton />
    </>)
}

export default Coke;