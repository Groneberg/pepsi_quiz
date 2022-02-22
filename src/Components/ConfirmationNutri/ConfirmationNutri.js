import './ConfirmationNutri.css'
import Header from "../Header/Header";
import img1 from '../../img/Bild_2.png';

function ConfirmationNutri() {

    return (
        <div className="taskContainer dragDropContainer">
            <Header/>
            <div className="contentWrapper">
                <div className="dragDropQuestionWrapper" >
                    <div className="dragDropQuestion">
                        <p>Knapp aber nicht<br/>richtig!</p>
                            <div className= "Subtitel">
                                Pepsi Max hat<br/>Nutriscore B!!
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

export default ConfirmationNutri;
