import './ConfirmationQuiz.css'
import Header from "../Header/Header";
import img1 from '../../img/Bild_2.png';

function ConfirmationQuiz() {

    return (
        <div className="taskContainer dragDropContainer">
            <Header/>
            <div className="contentWrapper">
                <div className="dragDropQuestionWrapper" >
                    <div className="dragDropQuestion">
                        <p>Volltreffer!</p>
                            <div className= "Subtitel">
                                Bereits die Hälfte<br/>unserer Getränke<br/> in Deutschland sind<br/>zuckerfrei!!
                            </div>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore
                            magna aliquyam et accusam et justo duo dolores et ea
                        </p>
                    </div>
            </div>
                <div className="buttonWrapper continueLink" >
                    <p className="continueLink answered" href="">
                        <span>Fertig!</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ConfirmationQuiz;
