import './ToDoCheckList.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {useState} from "react";
import listCheckDisplay from "../../svg/listCheckDisplay.svg";

function ToDoCheckList ()
 {
     const [list, /*setList*/] = useState([
         {element:'Personalfragebogen ausfüllen', id: 1},
         {element:'Teilnahme Brandschutz Schulung', id: 2},
         {element:'Teilnahme an Hygiene Schulung', id: 3},
         {element:'Teilnahme an Strahlenschutz Schulung', id: 4},
         {element:'Bescheinigung der Schulungen', id:5},
         {element:'Fotos für Dienstausweis erstellen', id:6},
     ]);

    return (
        <div className="toDoCheckListWrapper">
            <Header />
                <form className="toDoCheckListForm">
                    <h1 className="toDoChecklistHeadLine">Onboarding Check Liste</h1>
                     <ul className="toDoCheckListUnorderedList">
                    { list.map((item) =>
                        <li
                            key={item.id}
                            className="toDoCheckListListElement"
                        >
                            <object data={listCheckDisplay} type="image/svg+xml" className="listCheckDisplay" >o</object>
                            <span>{item.element}</span>
                        </li>) }
                     </ul>
                </form>
            <Footer />
        </div>
    )
}

export default ToDoCheckList;
