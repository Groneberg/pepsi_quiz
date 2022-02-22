import './ConfirmationScale.css'
import Header from "../Header/Header";
import img1 from '../../img/Bild_2.png';

function ConfirmationScale() {

    return (
        <div className="taskContainer dragDropContainer">
            <Header/>
            <div className="contentWrapper">
                <div className="dragDropQuestionWrapper" >
                    <div className="dragDropQuestion">
                        <p>Yesss, richtig!</p>
                            <div className= "Subtitel">
                                Es sind genau<br/>0g Zucker pro<br/>100ml!!
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
                        <span>Alles klar</span>
                        <span>Nächste Frage</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ConfirmationScale;
