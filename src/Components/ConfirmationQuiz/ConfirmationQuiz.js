import './ConfirmationQuiz.css'
import Header from "../Header/Header";
import img1 from '../../img/Bild_2.png';
import img2 from '../../img/7Up.png';
import img3 from '../../img/sugarfree.png';
import img4 from '../../img/SodaStream.png';
import {useState} from "react";
import {getQuestionStage} from '../../tools/function';

function getQuizListIndex() {
    if (localStorage.getItem('quizResult') === 'true') {
        return 0;
    } else {
        return 1;
    }
}

function getQuizFeedbackInfo(stage) {
    if (stage === 0) {
        return (
            <div className="quizFeedbackImageWrapper">
                <img className="ImageQuiz1"  src={img1} alt=""/>
                <svg className="feedbackEllipse1">
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
        );
    } else if (stage === 1) {
        return (
            <div className="quizFeedbackImageWrapper">
                <img className="ImageQuiz2"  src={img2} alt=""/>
                <img className="ImageQuiz3"  src={img1} alt=""/>
                <svg className="feedbackEllipse1">
                    <ellipse id="feedbackEllipse" rx="297" ry="19" cx="297" cy="19"/>
                </svg>
            </div>
        );
    } else {
        return (
            <div className="quizFeedbackImageWrapper">
                <img className="ImageQuiz4"  src={img4} alt=""/>
                <svg className="feedbackEllipse2">
                    <ellipse id="Ellipse_1" rx="382" ry="29" cx="382" cy="29"/>
                </svg>
            </div>
        );
    }
}

function ConfirmationQuiz() {
    const quizResultIndex = getQuizListIndex();
    console.log(quizResultIndex);
    const [resultTextList] = useState(
[
            [
                {
                    resultText: 'Volltreffer!',
                    infoText: 'Bereits die Hälfte \nunserer Getränke \nin Deutschland ist \nzuckerfrei.',
                },
                {
                    resultText: 'Richtig falsch!',
                    infoText: 'Bereits die Hälfte \nunserer Getränke \nin Deutschland ist \nzuckerfrei.',
                },
            ],
            [
                {
                    resultText: 'Volltreffer!',
                    infoText: 'Insgesamt sind etwa 70% \nunseres Portfolios \nzucker-reduziert oder zuckerfrei.',
                },
                {
                    resultText: 'Richtig falsch!',
                    infoText: 'Insgesamt sind etwa 70% \nunseres Portfolios \nzucker-reduziert oder zuckerfrei.',
                },
            ],
            [
                {
                    resultText: 'Volltreffer!',
                    infoText: 'Bereits die Hälfte \nunserer Getränke \nin Deutschland ist \nzucker-frei.',
                },
                {
                    resultText: 'Richtig falsch!',
                    infoText: 'Bereits die Hälfte \nunserer Getränke \nin Deutschland ist \nzucker-frei.',
                },
            ],
        ]
    );

    //todo stage
    let stage = getQuestionStage();
    // let stage = 3;
    console.log(`stage = ${stage}`);

    return (
        <div className="taskContainer confirmationContainer">
            <Header/>
            <div className="contentWrapper">
                <div className="confirmationFeedbackWrapper" >
                    <div className="confirmationFeedback smaller">
                        <p>{resultTextList[stage][quizResultIndex].resultText}</p>
                        <p>{resultTextList[stage][quizResultIndex].infoText}</p>
                    </div>
                    {getQuizFeedbackInfo(stage)}
                    {/*<div className="quizFeedbackImageWrapper">*/}
                    {/*    <img className="secondImageQuiz2"  src={img2} alt=""/>*/}
                    {/*    <img className="firstImageQuiz"  src={img1} alt=""/>*/}
                    {/*    <svg className="feedbackEllipse">*/}
                    {/*        <ellipse id="feedbackEllipse" rx="297" ry="19" cx="297" cy="19">*/}
                    {/*        </ellipse>*/}
                    {/*    </svg>*/}
                    {/*    <svg className="feedbackImageEllipse">*/}
                    {/*        <ellipse id="feedbackImageEllipse" rx="115" ry="115" cx="115" cy="115">*/}
                    {/*        </ellipse>*/}
                    {/*    </svg>*/}
                    {/*    <img className="sugar-free"  src={img3} alt=""/>*/}
                    {/*    <div className="fiftyPercent">*/}
                    {/*        <span>50 %</span>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <p className="quizEndInfo">
                        Du hast es geschafft!<br/>
                        Hole Dir Deine Pepsi ab!
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
