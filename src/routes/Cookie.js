import React from "react";
import cookie from "../assets/cookie.jpg"
import BackButton from "../components/HomeButton";

function Cookies() {
    return (
        <>
            <img src={cookie} alt="cookies" />
            <BackButton />
        </>)
}

export default Cookies;