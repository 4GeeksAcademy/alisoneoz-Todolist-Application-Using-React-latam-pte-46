import React from "react";
import { useState } from "react";

//create your first component
const Home = () => {
  const [tarea, setTarea] = useState("");
  const [listaDeTareas, setListaDeTareas] = useState([]); // cambiar a ([{}])
  console.log(listaDeTareas);

  return (
    <div className="the-app">
      <div className="main-container">
        <h1>Todo List</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setListaDeTareas([tarea, ...listaDeTareas]);
            setTarea("");
          }}
        >
          <input
            type="text"
            onChange={(event) => {
              setTarea(event.target.value);
            }}
            value={tarea}
            className="form-control"
            placeholder=""
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </form>
        <div className="">
          {listaDeTareas.length == 0 ? (
            <p>No tasks </p>
          ) : (
            <>
              <ul className="list-group">
                {listaDeTareas.map((tareaAMostrar, indexMap) => {
                  return (
                    <li key={indexMap} className="list-group-item">
                      {tareaAMostrar}
                      <button
                        className="btn-de-eliminar"
                        onClick={() => {
                          setListaDeTareas(
                            listaDeTareas.filter(
                              (tarea, indexFilter) => indexFilter != indexMap
                            )
                          );
                          console.log(tareaAMostrar);
                        }}
                      >
                        ❌
                      </button>
                    </li>
                  );
                })}
              </ul>
              <div>{listaDeTareas.length} tareas en la lista</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
