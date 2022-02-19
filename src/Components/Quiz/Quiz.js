import './Quiz.css'
import ConfirmButton from "../ConfirmButton/ConfirmButton";
import Header from "../Header/Header";

import img1 from '../../img/FOP_OTEP-Sustainability_Chickpeatif.png';


function Quiz() {
    return (
        <div className="taskContainer">
            <Header />
            <div className="quizContainer">
                <p className="quizQuestion" >was</p>
                <img className="questionImage"  src={img1} alt=""/>
                <div className="answerContainer">
                    <p className="quizAnswer" >was</p>
                    <p className="quizAnswer" >was</p>
                    <p className="quizAnswer" >was</p>
                    <p className="quizAnswer" >was</p>
                </div>
                <div className="buttonWrapper">
                    <ConfirmButton />
                </div>
            </div>
        </div>
    );
}

export default Quiz;
