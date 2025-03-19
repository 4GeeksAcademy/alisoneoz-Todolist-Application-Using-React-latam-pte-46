import React from "react";
import { useState } from "react";

//create your first component
const Home = () => {
	const [tarea, setTarea] = useState("");
	const [listaDeTareas, setListaDeTareas] = useState([""]);
	console.log(typeof listaDeTareas)

	return (
		<div className="">
			<form onSubmit={(event) => {
				event.preventDefault()
				setListaDeTareas([tarea, ...listaDeTareas])
				setTarea("")
			}}>
				<input type="text"
					onChange={(event) => {
						setTarea(event.target.value)

					}}
					value={tarea} className="form-control"
					placeholder="qlqmuchachos"
					aria-label="Username" aria-describedby="basic-addon1" />
				<button
					type="submit"

				>enter</button>
			</form>
			<div className="">
				<ul className="list-group">
					{listaDeTareas.map((tareaAMostrar) => {
						return(
						<li className="list-group-item">
							{tareaAMostrar}
						</li>
						)
					})}
				</ul>
			</div>
		</div>
	);
};

export default Home;