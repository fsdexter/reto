import React from "react";
import {useState, useEffect, useContext}  from 'react';
import { Context } from "../store/appContext"
import { Test } from "../componetn/test";

export const Home = () => {
	const { store} = useContext(Context);


    const [data, setData] = useState([])
    const url = "http://127.0.0.1:80/"
    // http://127.0.0.1:80
    //  "proxy":"http://server:5000",
  
    useEffect(() => {
        fetch(url).then(responses => {
        if (responses.status === 200) {
                console.log(responses)
                return responses.json();
        }
    }).then(data => {
        console.log(data);
        setData(data);
    })
    }, [])

    return (
        <>
            <h1>ALIVE</h1>
            <Test data={data}/>
            <p>{store.message }</p>
        </>
      )
}
