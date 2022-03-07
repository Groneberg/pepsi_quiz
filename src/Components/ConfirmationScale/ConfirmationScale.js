import './ConfirmationScale.css'
import Header from "../Header/Header";
import img1 from '../../img/Bild_2.png';
import {useState} from "react";
import {getQuestionStage} from '../../tools/function';
import img2 from "../../img/Bild_3.png";
import img3 from "../../img/punika2.png";

function getScaleListIndex() {
    if (localStorage.getItem('scaleResult') === 'true') {
        return 0;
    } else {
        return 1;
    }
}

function getScaleFeedbackInfo(stage) {
    if (stage === 0) {
        return   (
            <div className="imageWrapper">
                <img className="scaleFeedbackImage1"  src={img1} alt=""/>
                <svg className="rectangle1">
                    <rect id="rectangle1" rx="5" ry="5" x="0" y="0" width="331" height="122">
                    </rect>
                </svg>
                <div className="sugarfreeInfoText">
                    <span>sugarfree &amp;<br/>Echt lecker</span>
                </div>
                <svg className="confirmationNutriEllipse">
                    <ellipse id="confirmationNutriEllipse" rx="253" ry="19" cx="253" cy="19">
                    </ellipse>
                </svg>
            </div>
        );
    } else if (stage === 1) {
        return   (
            <div className="imageWrapper">
                <img className="scaleFeedbackImage2"  src={img1} alt=""/>
                <svg className="confirmationNutriEllipse">
                    <ellipse id="confirmationNutriEllipse" rx="253" ry="19" cx="253" cy="19">
                    </ellipse>
                </svg>
            </div>
        );
    } else {
        return   (
            <div className="imageWrapper">
                <img className="scaleFeedbackImage3"  src={img1} alt=""/>
                <svg className="confirmationNutriEllipse">
                    <ellipse id="confirmationNutriEllipse" rx="253" ry="19" cx="253" cy="19">
                    </ellipse>
                </svg>
            </div>
        );
    }
}


function ConfirmationScale() {
    const scaleResultIndex = getScaleListIndex();
    console.log(scaleResultIndex);
    const [resultTextList] = useState(
[
            [
                {
                    resultText: 'Yesss, richtig!',
                    infoText: 'Es sind genau \n0g Zucker pro 100ml.',
                },
                {
                    resultText: 'Fast richtig!',
                    infoText: 'Es sind genau \n0g Zucker pro 100ml.',
                },
            ],
            [
                {
                    resultText: 'Yesss, richtig!',
                    infoText: 'Es sind etwa 12Mio. Lego-steine.',
                },
                {
                    resultText: 'Fast richtig!',
                    infoText: 'Es sind etwa 12Mio. Lego-steine.',
                },
            ],
            [
                {
                    resultText: 'Yesss, richtig!',
                    infoText: 'In den Doritos Dippers Lightly Salted sind 23g Fett.',
                },
                {
                    resultText: 'Fast richtig!',
                    infoText: 'In den Doritos Dippers Lightly Salted sind 23g Fett.',
                },
            ],
        ]
    );

    //todo stage
    let stage = getQuestionStage();
    // let stage = 1;
    console.log(`stage = ${stage}`);

    return (
        <div className="taskContainer confirmationContainer">
            <Header/>
            <div className="contentWrapper">
                <div className="confirmationFeedbackWrapper" >
                    <div className="confirmationFeedback">
                        <p>{resultTextList[stage][scaleResultIndex].resultText}</p>
                        <p>{resultTextList[stage][scaleResultIndex].infoText}</p>
                        <p className="confirmationFeedbackInfo">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore
                            magna aliquyam et accusam et justo duo dolores et ea
                        </p>
                    </div>
                    {getScaleFeedbackInfo(stage)}
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
