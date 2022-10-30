import React from "react";
import {useState, useEffect, useContext}  from 'react';
import { Box } from "../componetn/computerBox";
import { Context } from "../store/appContext"
import { Link } from "react-router-dom";


export const Home = () => {
	const { store} = useContext(Context);


    

    return (
        <div className="container">
            <Box/>
            <Link to="/add">
				<button className="btn btn-success">Add Computer</button>
			</Link>
        </div>
      )
}

        <>
            {/* <h1>ALIVE</h1>
            <Test data={data}/>
            <p>{store.message }</p> */}
        </>