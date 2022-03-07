import './Quiz.css'
import Header from "../Header/Header";
import img1 from '../../img/Bild_2.png';
import img2 from '../../img/collection.png';
import {useState} from "react";
import {getQuestionStage} from "../../tools/function";

let selectedAnswer = '';
let focusedArray = [false, false, false, false];
let userAnswer = '';
let result = false;

const inactive = {
    display: 'none',
};

const active = {
    display: 'flex',
};

function quizCheckField() {
    const buttonInactive = document.getElementById("buttonInactive");
    const buttonActive = document.getElementById("buttonActive");
    if (selectedAnswer !== '') {
        buttonInactive.style.display = inactive.display;
        buttonActive.style.display = active.display;
    } else {
        buttonInactive.style.display = active.display;
        buttonActive.style.display = inactive.display;
    }
}

function checkQuizAnswer() {
    result = (`${userAnswer}%` === selectedAnswer);
}

function setQuizAnswerElement() {
    console.log(result);
    if (result === false) {
        localStorage.setItem('quizResult', 'false')
    }  else {
        localStorage.setItem('quizResult', 'true')
    }
}

function resetFocus() {
    for (let i = 0; i< focusedArray.length; i++) {
        focusedArray[i] = false;
        toggleAnswerSelection(i);
    }
}

function setFocus(index) {
    for (let i = 0; i< focusedArray.length; i++) {
        focusedArray[i] = i === index;
        toggleAnswerSelection(i);
    }
}

function toggleAnswerSelection(index) {
    const answers = document.querySelectorAll('.answer');
    if (focusedArray[index] === true) {
            answers[index].classList.add('selected');
            answers[index].classList.remove('unselected')
    } else {
            answers[index].classList.add('unselected')
            answers[index].classList.remove('selected')
    }
}

function getEllipse(stage) {
    if (stage === 0) {
        return (
            <svg className="quizEllipse1">
                <ellipse id="Ellipse_54" rx="224.5" ry="19" cx="224.5" cy="19"/>
            </svg>
        );
    } else if (stage === 1) {
        return (
            <svg className="quizEllipse2">
                <ellipse id="Ellipse_1" rx="345.5" ry="25" cx="345.5" cy="25"/>
            </svg>
        );
    }
}

function Quiz() {

    const [questionList /*setEventList*/] = useState(
        [{
                productIMG: img1,
                imageClass: 'image1',
                questionText: 'Wie viel Prozent \nunserer Getränke \nin Deutschland \nsind sugarfree?',
                answer: '50%',
                answerChoices: {
                    choice1: 50,
                    choice2: 20,
                    choice3: 5,
                    choice4: 1
                },
                pTagClass: 'questionText1',
                answerSpan: 'answerSpan1',
            },
            {
                productIMG: img2,
                imageClass: 'image2',
                questionText: 'Wie viel Prozent \nunserer Produkte \nsind zuckerreduziert \noder zuckerfrei?',
                infoText: 'Was meinst Du? Tippe auf die Schätzung \nDeiner Wahl.',
                answer: '70%',
                answerChoices: {
                    choice1: 10,
                    choice2: 30,
                    choice3: 70,
                    choice4: 50
                },
                pTagClass: 'questionText2',
                answerSpan: 'answerSpan2',
            },
        ]
    );

    // todo questions
    let stage = getQuestionStage();
    console.log(`stage = ${stage}`);

    selectedAnswer = questionList[stage].answer;

    return (
        <div className="taskContainer quizContainer">
            <Header/>
            <div className="contentWrapper">
                <div className="quizQuestionWrapper" >
                    <div className="quizQuestion">
                        <p className={questionList[stage].pTagClass}>{questionList[stage].questionText}</p>
                        <p>{questionList[stage].infoText}</p>
                    </div>
                    <div className="quizAnswerWrapper">
                        <div
                            className="answer unselected"
                            // onMouseDown={() => {
                            // }}
                            onClick={() => {
                                if (focusedArray[0] !== true) {
                                    setFocus(0);
                                    userAnswer = questionList[stage].answerChoices.choice1;
                                    checkQuizAnswer();
                                    setQuizAnswerElement();
                                } else {
                                    resetFocus();
                                    userAnswer = '';
                                }
                                quizCheckField();
                            }}
                        >
                            <span>{questionList[stage].answerChoices.choice1}%</span>
                        </div>
                        <div
                            className="answer unselected"
                            // onMouseDown={() => {
                            // }}
                            onClick={() => {
                                if (focusedArray[1] !== true) {
                                    setFocus(1);
                                    userAnswer = questionList[stage].answerChoices.choice2;
                                    checkQuizAnswer();
                                    setQuizAnswerElement();
                                } else {
                                    resetFocus();
                                    userAnswer = '';
                                }
                                quizCheckField();
                            }}
                        >
                            <span>{questionList[stage].answerChoices.choice2}%</span>
                        </div>
                        <div
                            className="answer unselected"
                            // onMouseDown={() => {
                            // }}
                            onClick={() => {
                                if (focusedArray[2] !== true) {
                                    setFocus(2);
                                    userAnswer = questionList[stage].answerChoices.choice3;
                                    checkQuizAnswer();
                                    setQuizAnswerElement();
                                } else {
                                    resetFocus();
                                    userAnswer = '';
                                }
                                quizCheckField();
                            }}
                        >
                            <span>{questionList[stage].answerChoices.choice3}%</span>
                        </div>
                        <div
                            className="answer unselected"
                            onMouseDown={() => {
                            }}
                            onClick={() => {
                                if (focusedArray[3] !== true) {
                                    setFocus(3);
                                    userAnswer = questionList[stage].answerChoices.choice4;
                                    checkQuizAnswer();
                                    setQuizAnswerElement();
                                } else {
                                    resetFocus();
                                    userAnswer = '';
                                }
                                quizCheckField();
                            }}
                        >
                            <span>{questionList[stage].answerChoices.choice4}%</span>
                        </div>
                    </div>
                </div>
                <div className="quizFieldWrapper">
                        <div className="imageWrapper">
                            <img className={questionList[stage].imageClass} src={questionList[stage].productIMG} alt=""/>
                            {getEllipse(stage)}
                    </div>
                </div>
                <div id="buttonInactive" className="buttonWrapper active unanswered" style={active}>
                    <p className="continueLink">
                        <span>Fertig?</span>
                        <span>Check it out.</span>
                    </p>
                </div>
                <div id="buttonActive" className="buttonWrapper answered" style={inactive}>
                    <a className="continueLink" href="confirmationQuiz">
                        <span>Fertig?</span>
                        <span>Check it out.</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Quiz;
