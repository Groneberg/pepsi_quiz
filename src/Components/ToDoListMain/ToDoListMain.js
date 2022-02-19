import './ToDoListMain.css'

import listCheckDisplay from '../../svg/listCheckDisplay.svg'

import {useState} from "react";

function ToDoListMain() {

    const [list, /*setList*/] = useState([
        {element:'Personalfragebogen ausfüllen', id: 1},
        {element:'Teilnahme Brandschutz Schulung', id: 2},
        {element:'Teilnahme an Hygiene Schulung', id: 3},
        // {element:'ToDo (Personalfragebogen)', id: 1},
        // {element:'ToDo', id:2},
        // {element:'ToDo', id:3},
    ]);




    return (
        <section className="toDoListMainWrapper">
            <h3>Deine aktuellen To Do´s </h3>
            <ul>
                { list.map((item) =>
                    <li
                        key={item.id}
                        className="listElement"
                    >
                        <object data={listCheckDisplay} type="image/svg+xml" className="listCheckDisplay" >o</object>
                        <a href="/questionnaire">
                            <span>{item.element}</span>
                        </a>
                    </li>) }
            </ul>
        </section>
    );
}

export default ToDoListMain;
