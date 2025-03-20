import React from "react";
import { useState } from "react";

//create your first component
const Home = () => {
	const [tarea, setTarea] = useState("");
	const [listaDeTareas, setListaDeTareas] = useState([]); // cambiar a ([{}])
	console.log(listaDeTareas)


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
					placeholder=""
					aria-label="Username" aria-describedby="basic-addon1" />
	
			</form>
			<div className="">
				<ul className="list-group">
					{listaDeTareas.map((tareaAMostrar, indexMap) => {
						//const elId=crypto.randomUUID();
						return (
							<li key={indexMap} className="list-group-item">
								{tareaAMostrar}
								<button onClick={() => {
									setListaDeTareas(listaDeTareas.filter((tarea, indexFilter) =>  indexFilter != indexMap))
									console.log(tareaAMostrar)
								}} >❌</button>
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	);
};

export default Home;