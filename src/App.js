import './App.css';

import Root from "./Components/Root/Root";
import Start from "./Components/Start/Start";
import DragDrop from "./Components/DragDrop/DragDrop";
import Quiz from "./Components/Quiz/Quiz";


import {/*Switch, Link,*/ Route, Routes} from "react-router-dom";


function App() {
  return (

      <Routes>
        <Route path={'/'} element={<Root/> }/>
        <Route path="/start" element={<Start/>}/>
        <Route path="/dragDrop" element={<DragDrop/>}/>
        <Route path="/quiz" element={<Quiz/>}/>

      </Routes>



  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>


  );
}

export default App;
