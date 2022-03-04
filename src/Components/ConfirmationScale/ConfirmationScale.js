import './ConfirmationScale.css'
import Header from "../Header/Header";
import img1 from '../../img/Bild_2.png';
import {useState} from "react";

function getScaleListIndex() {
    if (localStorage.getItem('scaleResult') === 'true') {
        return 0;
    } else {
        return 1;
    }
}

function ConfirmationScale() {
    const scaleResultIndex = getScaleListIndex();
    console.log(scaleResultIndex);
    const [resultTextList] = useState(
        [
            {
                resultText: 'Yesss, richtig!',
                infoText: 'Es sind genau \n0g Zucker pro 100ml.',
            },
            {
                resultText: 'Fast richtig!',
                infoText: 'Es sind genau \n0g Zucker pro 100ml.',
            },
        ]
    );

    return (
        <div className="taskContainer confirmationContainer">
            <Header/>
            <div className="contentWrapper">
                <div className="confirmationFeedbackWrapper" >
                    <div className="confirmationFeedback">
                        <p>{resultTextList[scaleResultIndex].resultText}</p>
                        <p>{resultTextList[scaleResultIndex].infoText}</p>
                        <p className="confirmationFeedbackInfo">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore
                            magna aliquyam et accusam et justo duo dolores et ea
                        </p>
                    </div>
                    <img className="firstImageScale"  src={img1} alt=""/>
                    <svg className="Rechteck_129">
                        <rect id="Rechteck_129" rx="5" ry="5" x="0" y="0" width="331" height="122">
                        </rect>
                    </svg>
                    <div className="sugarfree__Echt_lecker">
                        <span>sugarfree &amp;<br/>Echt lecker</span>
                    </div>
                    <svg class="confirmationNutriEllipse">
                    <ellipse id="confirmationNutriEllipse" rx="253" ry="19" cx="253" cy="19">
                    </ellipse>
                    </svg>
                </div>
            </div>
            <div className="buttonWrapper continueLink answered" >
                <a className="continueLink" href="/quiz">
                    <span>Alles klar</span>
                    <span>Nächste Frage</span>
                </a>
            </div>
        </div>
    );
}

export default ConfirmationScale;
