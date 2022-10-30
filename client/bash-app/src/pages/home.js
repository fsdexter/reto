import React from "react";
import {useState, useEffect, useContext}  from 'react';
import { Box } from "../componetn/computerBox";
import { Context } from "../store/appContext"
import Button from 'react-bootstrap/Button';

export const Home = () => {
	const { store} = useContext(Context);


    

    return (
        <div className="container">
            <Box/>
            <Button variant="secondary">Secondary</Button>
        </div>
      )
}

        <>
            {/* <h1>ALIVE</h1>
            <Test data={data}/>
            <p>{store.message }</p> */}
        </>