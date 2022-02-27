import './Scale.css'
import Header from "../Header/Header";
import img1 from '../../img/Bild_2.png';
import {useState} from "react";
import {getQuestionStage} from '../../tools/function';

let selectedAnswer = '';
let result = false;
let answerSum = 0;
const answersSelectedArray = [false, false, false, false, false, false];

const inactive = {
    display: 'none',
};

const active = {
    display: 'flex',
};

function scaleCheckField() {
    const buttonInactive = document.getElementById("buttonInactive");
    const buttonActive = document.getElementById("buttonActive");
    if (answersSelectedArray[0] ||
        answersSelectedArray[1] ||
        answersSelectedArray[2] ||
        answersSelectedArray[3] ||
        answersSelectedArray[4] ||
        answersSelectedArray[5]
    ) {
        buttonInactive.style.display = inactive.display;
        buttonActive.style.display = active.display;
    } else {
        buttonInactive.style.display = active.display;
        buttonActive.style.display = inactive.display;
    }
}

function checkScaleAnswer() {
    result = (`${answerSum}g` === selectedAnswer);
    console.log(`${answerSum}g` === selectedAnswer);
}

function setScaleAnswerElement() {
    console.log(result);
    if (result === false) {
        localStorage.setItem('scaleResult', 'false')
    }  else {
        localStorage.setItem('scaleResult', 'true')
    }
}

function setScaleFilling() {
    const filling = document.getElementById('fillingID');
    filling.style.height = `${filling.offsetHeight + answerSum}px`;
    filling.innerHTML = `${answerSum}g`;
}

function resetFilling() {
    const filling = document.getElementById('fillingID');
    filling.style.height = '56px';
    filling.innerHTML = '0g';
}

function toggleSelection(index, value) {
    const answers = document.querySelectorAll('.answer');
    if (answersSelectedArray[index] === true) {
            answerSum = answerSum + value;
            answers[index].classList.add('selected');
            answers[index].classList.remove('unselected')
    } else {
            answerSum = answerSum - value;
            answers[index].classList.add('unselected')
            answers[index].classList.remove('selected')
    }
}

function Scale() {

    const [questionList /*setEventList*/] = useState(
        [{
            productIMG: '',
            answer: '0g',
        },
        ]
    );
    // todo questions

    let stage = getQuestionStage();
    console.log(`stage = ${stage}`);

    selectedAnswer = questionList[stage].answer;

    return (
        <div className="taskContainer scaleContainer">
            <Header/>
            <div className="contentWrapper">
                <div className="scaleQuestionWrapper" >
                    <div className="scaleQuestion">
                        <p>Schätz mal!<br/>Wie viel Zucker ist in der Pepsi Max?</p>
                        <p>Gib die Grammzahl an Zucker  für die Waage genau an.</p>
                    </div>
                    <div className="scaleAnswerWrapper">
                        <div
                            className="answer unselected"
                            onClick={() => {
                                answersSelectedArray[0] = !answersSelectedArray[0];
                                toggleSelection(0, 0);
                                scaleCheckField();
                                checkScaleAnswer();
                                resetFilling();
                                setScaleFilling();
                                setScaleAnswerElement();
                            }}
                        >
                            <span>0g</span>
                        </div>
                        <div
                            className="answer unselected"
                            onClick={() => {
                                answersSelectedArray[1] = !answersSelectedArray[1];
                                toggleSelection(1, 5);
                                scaleCheckField();
                                checkScaleAnswer();
                                resetFilling();
                                setScaleFilling();
                                setScaleAnswerElement();
                            }}
                        >
                                <span>5g</span>
                        </div>
                        <div
                            className="answer unselected"
                            onClick={() => {
                                answersSelectedArray[2] = !answersSelectedArray[2];
                                toggleSelection(2, 10);
                                scaleCheckField();
                                checkScaleAnswer();
                                resetFilling();
                                setScaleFilling();
                                setScaleAnswerElement();
                            }}
                        >
                                <span>10g</span>
                        </div>
                        <div
                            className="answer unselected"
                            onClick={() => {
                                answersSelectedArray[3] = !answersSelectedArray[3];
                                toggleSelection(3, 20);
                                scaleCheckField();
                                checkScaleAnswer();
                                resetFilling();
                                setScaleFilling();
                                setScaleAnswerElement();
                            }}
                        >
                                <span>20g</span>
                        </div>
                        <div
                            className="answer unselected"
                            onClick={() => {
                                answersSelectedArray[4] = !answersSelectedArray[4];
                                toggleSelection(4, 50);
                                scaleCheckField();
                                checkScaleAnswer();
                                resetFilling();
                                setScaleFilling();
                                setScaleAnswerElement();
                            }}
                        >
                            <span>50g</span>
                        </div>
                        <div
                            className="answer unselected"
                            onClick={() => {
                                answersSelectedArray[5] = !answersSelectedArray[5];
                                toggleSelection(5, 100);
                                scaleCheckField();
                                checkScaleAnswer();
                                resetFilling();
                                setScaleFilling();
                                setScaleAnswerElement();
                            }}
                        >
                            <span>100g</span>
                        </div>
                    </div>
                </div>
                <div className="scaleFieldWrapper">
                    <div className="scaleField">
                        <div className="scale">
                            <div className="filler">
                                <span id="fillingID" className="filling">0g</span>
                            </div>
                            <svg className="scaleFillerEllipse">
                                <ellipse id="Ellipse_1" rx="143.5" ry="19" cx="143.5" cy="19" />
                            </svg>
                        </div>
                        <div className="imageWrapper">
                            <img src={img1} alt=""/>
                            <svg className="scaleFillerEllipse">
                                <ellipse id="Ellipse_2" rx="143.5" ry="19" cx="143.5" cy="19"/>
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
                    <a className="continueLink" href="confirmationScale">
                        <span>Fertig?</span>
                        <span>Check it out.</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Scale;
