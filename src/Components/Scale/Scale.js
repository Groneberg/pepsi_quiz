import './Scale.css'
import Header from "../Header/Header";
import img1 from '../../img/Bild_2.png';
import img2 from '../../img/pepsi100rPET.png';
import img3 from '../../img/doritos.png';
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

function checkScaleAnswer(unit) {
    result = (`${answerSum}${unit}` === selectedAnswer);
    console.log(`${answerSum}${unit}` === selectedAnswer);
}

function setScaleAnswerElement() {
    console.log(result);
    if (result === false) {
        localStorage.setItem('scaleResult', 'false')
    }  else {
        localStorage.setItem('scaleResult', 'true')
    }
}

function setScaleFilling(unit, factor) {
    const filling = document.getElementById('fillingID');
    if (answerSum !== 0) {
        filling.style.height = `${(filling.offsetHeight + answerSum) * factor}px`;
    } else {
        filling.style.height = `${filling.offsetHeight + answerSum}px`;
    }
    filling.innerHTML = `${answerSum} ${unit}`;
}

function resetFilling(unit) {
    const filling = document.getElementById('fillingID');
    filling.style.height = '56px';
    filling.innerHTML = `0 ${unit}`;
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
            productIMG: img1,
            imageClass: 'image1',
            answer: '0g',
            possibilities: [0,5,10,20,50,100],
            unit: 'g',
            multiplicationFactor: 1,
            questionText: 'Schätz mal! \nWie viel Zucker ist in der Pepsi Max?',
            infoText: 'Setze die Grammzahl an Zucker für die Waage zusammen.',
            pTagClass: 'questionText1',
            answerSpan: 'answerSpan1',
            fillerSpan: 'fillerSpan1',
        },
        {
            productIMG: img2,
            imageClass: 'image2',
            answer: '12Mio.',
            possibilities: [1,2,5,10,20,50],
            unit: 'Mio.',
            multiplicationFactor: 3,
            questionText: 'In Deutschland sparen wir 15.000 Tonnen Neuplastik ein. Kennst Du das Äquivalent hierzu?',
            infoText: 'Alle Getränkeflaschen bestehen aus recyceltem Material. Setze die Anzahl an Legosteinen zusammen, die dem Entspricht.',
            pTagClass: 'questionText2',
            answerSpan: 'answerSpan2',
            fillerSpan: 'fillerSpan2',
        },
        {
            productIMG: img3,
            imageClass: 'image3',
            answer: '23g',
            possibilities: [1,2,5,10,20,50],
            unit: 'g',
            multiplicationFactor: 3,
            questionText: 'Was glaubst Du, \nwie viel Fett in den \nDoritos Dippers Lightly Salted \nenthalten ist? Schätz mal!',
            infoText: 'Platzhalter',
            pTagClass: 'questionText3',
            answerSpan: 'answerSpan3',
            fillerSpan: 'fillerSpan3',
        },
        ]
    );

    //todo stage
    let stage = getQuestionStage();
    // let stage = 2;
    console.log(`stage = ${stage}`);

    selectedAnswer = questionList[stage].answer;

    return (
        <div className="taskContainer scaleContainer">
            <Header/>
            <div className="contentWrapper">
                <div className="scaleQuestionWrapper" >
                    <div className="scaleQuestion">
                        <p className={questionList[stage].pTagClass}>{questionList[stage].questionText}</p>
                        <p className={questionList[stage].pTagClass}>{questionList[stage].infoText}</p>
                    </div>
                    <div className="scaleAnswerWrapper">
                        <div
                            className="answer unselected"
                            onClick={() => {
                                answersSelectedArray[0] = !answersSelectedArray[0];
                                toggleSelection(0, questionList[stage].possibilities[0]);
                                scaleCheckField();
                                checkScaleAnswer(questionList[stage].unit);
                                resetFilling(questionList[stage].unit);
                                setScaleFilling(questionList[stage].unit, questionList[stage].multiplicationFactor);
                                setScaleAnswerElement();
                            }}
                        >
                            <span
                                className={questionList[stage].answerSpan}
                            >{`${questionList[stage].possibilities[0]} ${questionList[stage].unit}`}</span>
                        </div>
                        <div
                            className="answer unselected"
                            onClick={() => {
                                answersSelectedArray[1] = !answersSelectedArray[1];
                                toggleSelection(1, questionList[stage].possibilities[1]);
                                scaleCheckField();
                                checkScaleAnswer(questionList[stage].unit);
                                resetFilling(questionList[stage].unit);
                                setScaleFilling(questionList[stage].unit, questionList[stage].multiplicationFactor);
                                setScaleAnswerElement();
                            }}
                        >
                            <span
                                className={questionList[stage].answerSpan}
                            >{`${questionList[stage].possibilities[1]} ${questionList[stage].unit}`}</span>
                        </div>
                        <div
                            className="answer unselected"
                            onClick={() => {
                                answersSelectedArray[2] = !answersSelectedArray[2];
                                toggleSelection(2, questionList[stage].possibilities[2]);
                                scaleCheckField();
                                checkScaleAnswer(questionList[stage].unit);
                                resetFilling(questionList[stage].unit);
                                setScaleFilling(questionList[stage].unit, questionList[stage].multiplicationFactor);
                                setScaleAnswerElement();
                            }}
                        >
                            <span
                                className={questionList[stage].answerSpan}
                            >{`${questionList[stage].possibilities[2]} ${questionList[stage].unit}`}</span>
                        </div>
                        <div
                            className="answer unselected"
                            onClick={() => {
                                answersSelectedArray[3] = !answersSelectedArray[3];
                                toggleSelection(3, questionList[stage].possibilities[3]);
                                scaleCheckField();
                                checkScaleAnswer(questionList[stage].unit);
                                resetFilling(questionList[stage].unit);
                                setScaleFilling(questionList[stage].unit, questionList[stage].multiplicationFactor);
                                setScaleAnswerElement();
                            }}
                        >
                            <span
                                className={questionList[stage].answerSpan}
                            >{`${questionList[stage].possibilities[3]} ${questionList[stage].unit}`}</span>
                        </div>
                        <div
                            className="answer unselected"
                            onClick={() => {
                                answersSelectedArray[4] = !answersSelectedArray[4];
                                toggleSelection(4, questionList[stage].possibilities[4]);
                                scaleCheckField();
                                checkScaleAnswer(questionList[stage].unit);
                                resetFilling(questionList[stage].unit);
                                setScaleFilling(questionList[stage].unit, questionList[stage].multiplicationFactor);
                                setScaleAnswerElement();
                            }}
                        >
                            <span
                                className={questionList[stage].answerSpan}
                            >{`${questionList[stage].possibilities[4]} ${questionList[stage].unit}`}</span>
                        </div>
                        <div
                            className="answer unselected"
                            onClick={() => {
                                answersSelectedArray[5] = !answersSelectedArray[5];
                                toggleSelection(5, questionList[stage].possibilities[5]);
                                scaleCheckField();
                                checkScaleAnswer(questionList[stage].unit);
                                resetFilling(questionList[stage].unit);
                                setScaleFilling(questionList[stage].unit, questionList[stage].multiplicationFactor);
                                setScaleAnswerElement();
                            }}
                        >
                            <span
                                className={questionList[stage].answerSpan}
                            >{`${questionList[stage].possibilities[5]} ${questionList[stage].unit}`}</span>
                        </div>
                    </div>
                </div>
                <div className="scaleFieldWrapper">
                    <div className="scaleField">
                        <div className="scale">
                            <div className="filler">
                                <span id="fillingID" className="filling">{`0 ${questionList[stage].unit}`}</span>
                            </div>
                            <svg className="scaleFillerEllipse">
                                <ellipse id="Ellipse_1" rx="143.5" ry="19" cx="143.5" cy="19" />
                            </svg>
                        </div>
                        <div className="imageWrapper">
                            <img className={questionList[stage].imageClass} src={questionList[stage].productIMG} alt=""/>
                            <svg className="Ellipse_44">
                                <ellipse id="Ellipse_3" rx="143.5" ry="19" cx="143.5" cy="19"/>
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
