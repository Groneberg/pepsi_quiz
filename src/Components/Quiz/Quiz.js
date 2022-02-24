import './Quiz.css'
import Header from "../Header/Header";

import img1 from '../../img/Bild_2.png';

import {useState} from "react";

let selectedAnswer = '';
let focusedArray = [false, false, false, false];
let result = false;

// function setQuizAnswerElement() {
//     result = (answerSum === selectedAnswer);
// }

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
    console.log(selectedAnswer);
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
            answer: '0g',
        },
        ]
    );
    // todo questions
    selectedAnswer = questionList[0].answer;

    return (
        <div className="taskContainer quizContainer">
            <Header/>
            <div className="contentWrapper">
                <div className="quizQuestionWrapper" >
                    <div className="quizQuestion">
                        <p>Wie viel Prozent unserer Getränke in Deutschland sind sugarfree?</p>
                        <p>Was meinst Du? Tippe auf die Schätzung Deiner Wahl.</p>
                    </div>
                    <div className="quizAnswerWrapper">
                        <div
                            className="answer unselected"
                            onClick={() => {
                                if (focusedArray[0] !== true) {
                                    setFocus(0);
                                    selectedAnswer = 50;
                                } else {
                                    resetFocus();
                                    selectedAnswer = '';
                                }
                                quizCheckField();
                            }}
                        >
                            <span>50%</span>
                        </div>
                        <div
                            className="answer unselected"
                            onClick={() => {
                                if (focusedArray[1] !== true) {
                                    setFocus(1);
                                    selectedAnswer = 20;
                                } else {
                                    resetFocus();
                                    selectedAnswer = '';
                                }
                                quizCheckField();
                            }}
                        >
                            <span>20%</span>
                        </div>
                        <div
                            className="answer unselected"
                            onClick={() => {
                                if (focusedArray[2] !== true) {
                                    setFocus(2);
                                    selectedAnswer = 5;
                                } else {
                                    resetFocus();
                                    selectedAnswer = '';
                                }

                                quizCheckField();
                            }}
                        >
                            <span>5%</span>
                        </div>
                        <div
                            className="answer unselected"
                            onClick={() => {
                                if (focusedArray[3] !== true) {
                                    setFocus(3);
                                    selectedAnswer = 1;
                                } else {
                                    resetFocus();
                                    selectedAnswer = '';
                                }
                                quizCheckField();
                            }}
                        >
                            <span>1%</span>
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
