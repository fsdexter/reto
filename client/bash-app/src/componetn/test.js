import React from "react";

export const Test = ({data}) =>{
    return (
        <div>
            <h1>Test</h1>
            <p>you got a message: {data.msg}</p>
            <p>from: {data.origin}</p>
        </div>
    )
}