import React from "react";
import Vendingmachine from "../assets/vendingMachine.jpg";
import { Link } from "react-router-dom";

function VendingMachine() {
    return <>
        <img className="vending-machine" src={Vendingmachine} alt="vending machine" />
        <p> go to <Link to="/chocolate"> Chocolate </Link> page </p>
        <p> go to <Link to="/coke"> Coke </Link> page </p>
        <p> go to <Link to="/cookie"> Cookies </Link> page </p>
    </>
}

export default VendingMachine;