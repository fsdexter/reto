import React, { useContext } from "react";
import { Context } from "../store/appContext";
import ComputerCard from "./computerCard";
import "../App.css"


export const Box = () => {
	const { store, actions } = useContext(Context);

	const makeBox = store.computers.map((item, index)=>{
		return(
			<div className="" key={index} >
				<ComputerCard 
                name={item.name}
                path={item.path}
                />
			</div>
		)
	})

	return (
		<div className="container">
			<h1>Box</h1>
			<div className="gallery">
				{makeBox}
			</div>
			
		</div>
	);
};