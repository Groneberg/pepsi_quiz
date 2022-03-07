import './EndScreen.css'
import Header from "../Header/Header";
import img1 from '../../img/PepsiCo_Lays_mit_Nutri-Score_2.png';
import img2 from '../../img/Bild_2.png';
import img3 from '../../img/pepsican.png';
import {useState} from "react";
import {setQuestionStage, getQuestionStage} from '../../tools/function';

let pepsiPlacement = '1';
const dragDropResult = localStorage.getItem('dragDropResult');
const scaleResult = localStorage.getItem('scaleResult');
const quizResult = localStorage.getItem('quizResult');

let stage = getQuestionStage();
console.log(`stage = ${stage}`);

stage++;
console.log(`stage = ${stage}`);

function getQuizListIndex() {
    if (dragDropResult === 'true' && scaleResult === 'true' && quizResult === 'true') {
        pepsiPlacement = '1';
        return 0;
    } else if ((dragDropResult === 'true' && scaleResult === 'true' && quizResult === 'false')
        ||
        (dragDropResult === 'true' && scaleResult === 'false' && quizResult === 'true')
        ||
        (dragDropResult === 'false' && scaleResult === 'true' && quizResult === 'true')
    ) {
        pepsiPlacement = '2';
        return 1;
    } else {
        pepsiPlacement = '3';
        return 2;
    }
}

function getImageWrapper() {
    if (pepsiPlacement === '1') {
        return   (
            <div className="endFeedbackImageWrapper">
                <img className="endFeedbackImage1 image" src={img1} alt=""/>
                <img className="endFeedbackImage1 image" src={img2} alt=""/>
                <svg className="endEllipse1">
                    <ellipse id="endEllipse1" rx="390" ry="30" cx="390" cy="30" />
                </svg>
            </div>
        );
    } else if (pepsiPlacement === '2') {
        return   (
            <div className="endFeedbackImageWrapper">
                <img className="endFeedbackImage2 image" src={img2} alt=""/>
                <svg className="endEllipse2">
                    <ellipse id="Ellipse_5" rx="313" ry="30" cx="313" cy="30"/>
                </svg>
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

function EndScreen() {
    const quizResultIndex = getQuizListIndex();
    console.log(quizResultIndex);
    const [resultTextList] = useState(
        [
            {
                resultText: 'Yeeeew,',
                infoText: 'Du bist ein Echter\n Pepsi-Exterte. Congrats!',
            },
            {
                resultText: 'Weiter so,',
                infoText: 'Du bist bald ein Echter \nPepsi-Exterte. Gut gemacht!'
            },
            {
                resultText: 'Nicht übel!',
                infoText: 'Übung macht den Meister, \nDanke fürs Mitmachen.',
            },
        ]
    );

    setQuestionStage(stage);

    return (
        <div className="taskContainer confirmationContainer">
            <Header/>
            <div className="contentWrapper">
                <div className="confirmationFeedbackWrapper" >
                    <div className="confirmationFeedback smaller">
                        <p>{resultTextList[quizResultIndex].resultText}</p>
                        <p>{resultTextList[quizResultIndex].infoText}</p>
                    </div>
                    {getImageWrapper()}
                    <p className="quizEndInfo">
                        Vergiss Deinen Preis nicht.
                    </p>
            </div>
                <div className="buttonWrapper continueLink answered" >
                    <a className="continueLink" href="/">
                        <span>Ende</span>
                        <span>Quiz beenden</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default EndScreen;
