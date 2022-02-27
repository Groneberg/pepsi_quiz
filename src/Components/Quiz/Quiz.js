import './Quiz.css'
import Header from "../Header/Header";

import img1 from '../../img/Bild_2.png';

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

function Quiz() {

    const [questionList /*setEventList*/] = useState(
        [{
            productIMG: '',
            questionText: 'Wie viel Prozent \nunserer Getränke \nin Deutschland \nsind sugarfree?',
            answer: '50%',
            answerChoices: {
                choice1: 50,
                choice2: 20,
                choice3: 5,
                choice4: 1
            }
        },
        {
            productIMG: '',
            questionText: 'Wie viel Prozent \nunserer Produkte \nsind zuckerreduziert \noder zuckerfrei',
            answer: '70%',
            answerChoices: {
                choice1: 10,
                choice2: 30,
                choice3: 70,
                choice4: 50
            }
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
                        <p>{questionList[stage].questionText}</p>
                        <p>Was meinst Du? Tippe auf die Schätzung Deiner Wahl.</p>
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
                    <div className="quizField">
                        <div className="imageWrapper">
                            <img src={img1} alt=""/>
                            <svg className="quizEllipse">
                                <ellipse id="quizEllipse" rx="224.5" ry="19" cx="224.5" cy="19"/>
                            </svg>
                        </div>
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
