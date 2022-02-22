import './ConfirmationNutri.css'
import Header from "../Header/Header";
import img1 from '../../img/Bild_2.png';
import img2 from '../../img/Bild_3.png';


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
                            <img className="firstImage"  src={img1} alt=""/>
                            <img className="secondImage"  src={img2} alt=""/>
                            <svg class="rectangle1">
                                <rect id="rectangle1" rx="5" ry="5" x="0" y="0" width="58" height="82">
                                </rect>
                            </svg>
                            <div className="B">
                                <span>B</span>
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
