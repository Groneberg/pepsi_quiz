import './ConfirmationQuiz.css'
import Header from "../Header/Header";
import img1 from '../../img/Bild_2.png';
import img2 from '../../img/7Up.png';
import img3 from '../../img/sugarfree.png';
import {useState} from "react";

function getQuizListIndex() {
    if (localStorage.getItem('quizResult') === 'true') {
        return 0;
    } else {
        return 1;
    }

}

function ConfirmationQuiz() {
    const quizResultIndex = getQuizListIndex();
    console.log(quizResultIndex);
    const [resultTextList] = useState(
        [
            {
                resultText: 'Volltreffer!',
                infoText: 'Bereits die Hälfte \nunserer Getränke \nin Deutschland ist \nzuckerfrei.',
            },
            {
                resultText: 'Richtig falsch!',
                infoText: 'Bereits die Hälfte \nunserer Getränke \nin Deutschland ist \nzuckerfrei.',
            },
        ]
    );

    return (
        <div className="taskContainer confirmationContainer">
            <Header/>
            <div className="contentWrapper">
                <div className="confirmationFeedbackWrapper" >
                    <div className="confirmationFeedback smaller">
                        <p>{resultTextList[quizResultIndex].resultText}</p>
                        <p>{resultTextList[quizResultIndex].infoText}</p>
                    </div>
                    <div className="quizFeedbackImageWrapper">
                        <img className="secondImageQuiz"  src={img2} alt=""/>
                        <img className="firstImageQuiz"  src={img1} alt=""/>
                        <svg className="feedbackEllipse">
                            <ellipse id="feedbackEllipse" rx="297" ry="19" cx="297" cy="19">
                            </ellipse>
                        </svg>
                        <svg className="feedbackImageEllipse">
                            <ellipse id="feedbackImageEllipse" rx="115" ry="115" cx="115" cy="115">
                            </ellipse>
                        </svg>
                        <img className="sugar-free"  src={img3} alt=""/>
                        <div className="fiftyPercent">
                            <span>50 %</span>
                        </div>
                    </div>
                    <p className="quizEndInfo">
                        Du hast es geschafft!<br/>
                        Hole dir deine Pepsi ab!
                    </p>
            </div>
                <div className="buttonWrapper continueLink answered quizEndButton" >
                    <a className="continueLink quizEndLink" href="/end">
                        <span>Fertig!</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ConfirmationQuiz;
