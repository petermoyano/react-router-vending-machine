import React from "react";
import chocolate from '../assets/chocolate.jpg'
import BackButton from "../components/HomeButton";

function Chocolate() {
    return (<>
        <img src={chocolate} alt="chocolate" />
        <BackButton />
    </>)
}

export default Chocolate;