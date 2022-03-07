import './ConfirmationNutri.css'
import Header from "../Header/Header";
import img1 from '../../img/Bild_2.png';
import img2 from '../../img/Bild_3.png';
import img3 from '../../img/punika2.png';
import {useState} from "react";
import {getQuestionStage} from '../../tools/function';

function getNutriListIndex() {
    if (localStorage.getItem('dragDropResult') === 'true') {
        return 0;
    } else {
        return 1;
    }
}

function getNutriFeedbackInfo(stage) {
    if (stage === 0) {
        return   (
            <div className="confirmationNutriImageDisplay">
                <img className="firstImage1"  src={img1} alt=""/>
                <img className="secondImage"  src={img2} alt=""/>
                <svg className="rectangle5">
                    <rect id="rectangle5" rx="5" ry="5" x="0" y="0" width="58" height="82">
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
        );
    } else if (stage === 1) {
        return   (
            <div className="confirmationNutriImageDisplay">
                <img className="firstImage2"  src={img3} alt=""/>
                <img className="secondImage"  src={img2} alt=""/>
                <svg className="rectangle5">
                    <rect id="rectangle5" rx="5" ry="5" x="0" y="0" width="58" height="82">
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
        );
    } else {
        return   (
            <div className="endFeedbackImageWrapper">
                <img className="endFeedbackImage3 image" src={img3} alt=""/>
                <svg className="endEllipse3">
                    <ellipse id="Ellipse_5" rx="313" ry="30" cx="313" cy="30"/>
                </svg>
            </div>
        );
    }
}

function ConfirmationNutri() {
    const dragDropResultIndex = getNutriListIndex();
    console.log(dragDropResultIndex);
    const [resultTextList] = useState(
        [
            [
                {
                    resultText: 'Du Pepsi-Profi,\n richtig!',
                    infoText: 'Pepsi Max hat \nNutriscore B!!',
                    info2: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,\n nonumy eirmod tempor invidunt ut labore et dolore\n magna aliquyam et accusam et justo duo dolores et ea'
                },
                {
                    resultText: 'Knapp aber \nnicht richtig!',
                    infoText: 'Pepsi Max hat \nNutriscore B!!',
                    info2: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,\n nonumy eirmod tempor invidunt ut labore et dolore\n magna aliquyam et accusam et justo duo dolores et ea'
                },
            ],
            [
                {
                    resultText: 'Du Pepsi-Profi,\n richtig!',
                    infoText: 'Punika hat \nNutriscore B!!',
                    info2: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,\n nonumy eirmod tempor invidunt ut labore et dolore\n magna aliquyam et accusam et justo duo dolores et ea'
                },
                {
                    resultText: 'Knapp aber \nnicht richtig!',
                    infoText: 'Punika hat \nNutriscore B!!',
                    info2: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,\n nonumy eirmod tempor invidunt ut labore et dolore\n magna aliquyam et accusam et justo duo dolores et ea'
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
                        <p>{resultTextList[stage][dragDropResultIndex].resultText}</p>
                        <p>{resultTextList[stage][dragDropResultIndex].infoText}</p>
                        <p className="confirmationFeedbackInfo">
                            {resultTextList[stage][dragDropResultIndex].info2}
                        </p>
                    </div>
                    {getNutriFeedbackInfo(stage)}
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
