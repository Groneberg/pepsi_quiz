import './ConfirmationNutri.css'
import Header from "../Header/Header";
import img1 from '../../img/Bild_2.png';
import img2 from '../../img/Bild_3.png';
import {useState} from "react";

function getListIndex() {
    if (localStorage.getItem('dragDropResult') === 'true') {
        return 0;
    } else {
        return 1;
    }
}

function ConfirmationNutri() {
    const dragDropResultIndex = getListIndex();
    console.log(dragDropResultIndex);
    const [resultTextList] = useState(
        [
            {
            resultText: 'Du Pepsi-Profi,\n richtig!',
            infoText: 'Pepsi Max hat \nNutriscore B!!',
            },
            {
            resultText: 'Knapp aber nicht \nrichtig!',
            infoText: 'Pepsi Max hat \nNutriscore B!!',
            },
        ]
    );


    return (
        <div className="taskContainer confirmationNutriContainer">
            <Header/>
            <div className="contentWrapper">
                <div className="confirmationNutriFeedbackWrapper" >
                    <div className="confirmationNutriFeedback">

                        <p>{resultTextList[dragDropResultIndex].resultText}</p>
                        {/*<p>Knapp aber nicht<br/>richtig!</p>*/}

                        <p>{resultTextList[dragDropResultIndex].infoText}</p>
                        {/*<p>Pepsi Max hat<br/>Nutriscore B!!</p>*/}

                        <p className="confirmationNutriFeedbackInfo">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore
                            magna aliquyam et accusam et justo duo dolores et ea
                        </p>
                    </div>
                    <div className="confirmationNutriImageDisplay">
                        <img className="firstImage"  src={img1} alt=""/>
                        <img className="secondImage"  src={img2} alt=""/>
                        <svg className="rectangle1">
                            <rect id="rectangle1" rx="5" ry="5" x="0" y="0" width="58" height="82">
                            </rect>
                        </svg>
                        <svg className="confirmationNutriEllipse">
                            <ellipse id="confirmationNutriEllipse" rx="253" ry="19" cx="253" cy="19">
                            </ellipse>
                        </svg>
                        <div className="B">
                            <span>B</span>
                        </div>
                    </div>
                </div>
                <div className="buttonWrapper continueLink answered" >
                    <a className="continueLink" href="/scale">
                        <span>Alles klar</span>
                        <span>Nächste Frage</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ConfirmationNutri;
