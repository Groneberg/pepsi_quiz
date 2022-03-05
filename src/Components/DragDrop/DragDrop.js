import './DragDrop.css'
import Header from "../Header/Header";
import interact from 'interactjs';
import {useEffect, useState} from "react";
import img1 from '../../img/Bild_2.png';
import img2 from '../../img/kisspng-fizzy-drinks-pepsi-max.png';
import img3 from '../../img/lipton.png';
import img4 from '../../img/schwipschwap.png';
import img5 from '../../img/NoPath_-_Kopie.png';
import img6 from '../../img/lays.png';
import {getQuestionStage, initApp} from '../../tools/function';

const position_B = { x: 0, y: 0 };
const position_C = { x: 0, y: 0 };
const position_D = { x: 0, y: 0 };

let selectedAnswer = '';
let answerArray = [false,false,false];
let droped_1 = false;
let droped_2 = false;
let droped_3 = false;
let dropRectArray;
let fields;

const inactive = {
    display: 'none',
};

const active = {
    display: 'flex',
};

function dragDropCheckField() {
    if (droped_1 && droped_2 && droped_3) {
        const buttonInactive = document.getElementById("buttonInactive");
        const buttonActive = document.getElementById("buttonActive");
        buttonInactive.style.display = inactive.display;
        buttonActive.style.display = active.display;
    }
    console.log('answerArray =' + answerArray);
}

function checkNutriAnswer(index, value ) {
    answerArray[index] = (value === selectedAnswer);
}

function setDragDropAnswerElement() {
    for (let i = 0; i < answerArray.length; i++) {
        if (answerArray[i] === false) {
            localStorage.setItem('dragDropResult', 'false');
            break;
        } else {
            localStorage.setItem('dragDropResult', 'true');
        }
    }
}

function getFieldArrayRect(selector) {
    const fields = document.querySelectorAll(selector);
    const array = [];
    for (let i = 0; i < fields.length; i++) {
        array.push(fields[i].getBoundingClientRect());
    }
    return array;
}

function getFieldRect(selector) {
    return document.querySelector(selector).getBoundingClientRect();
}

function collisionDetection(selector, dropRectArray) {
    let dragRect = getFieldRect(selector);

    for (let i = 0; i < 3; i++) {
        if (
            ((dragRect.top > dropRectArray[i].top && dragRect.top < dropRectArray[i].bottom)
                ||
                (dragRect.bottom > dropRectArray[i].top && dragRect.bottom < dropRectArray[i].bottom))
            &&
            ((dragRect.right < dropRectArray[i].right && dragRect.right > dropRectArray[i].left)
                ||
                (dragRect.left < dropRectArray[i].right && dragRect.left > dropRectArray[i].left))
        ) {
            fields[i].classList.add('dropGlow');
        } else {
            fields[i].classList.remove('dropGlow');
            if (droped_1) {
                fields[0].classList.add('dropGlow');
            }
            if (droped_2) {
                fields[1].classList.add('dropGlow');
            }
            if (droped_3) {
                fields[2].classList.add('dropGlow');
            }
            if (droped_1 && droped_2 && droped_3) {
                fields[i].classList.add('dropGlow');
            }
        }
    }
}

interact('.draggable_D').draggable({
    listeners: {
        start (event) {
            // console.log(event.type, event.target);
        },
        move (event) {
            position_D.x += event.dx;

            position_D.y += event.dy;
            event.target.style.transform =
                `translate(${position_D.x}px, ${position_D.y}px)`;
            collisionDetection('.drag1', dropRectArray);
        },
    }
});

interact('.draggable_B').draggable({
    listeners: {
        start (event) {
            // console.log(event.type, event.target);
        },
        move (event) {
            position_B.x += event.dx;
            position_B.y += event.dy;

            event.target.style.transform =
                `translate(${position_B.x}px, ${position_B.y}px)`;
            collisionDetection('.drag2', dropRectArray);
        },
    }
});

interact('.draggable_C').draggable({
    listeners: {
        start (event) {
            // console.log(event.type, event.target);
        },
        move (event) {
            position_C.x += event.dx;
            position_C.y += event.dy;

            event.target.style.transform =
                `translate(${position_C.x}px, ${position_C.y}px)`;
            collisionDetection('.drag3', dropRectArray);
        },
    }
});

interact('.dropField_1').dropzone({
        ondrop: function (event) {
            checkNutriAnswer(0, event.target.id);
            localStorage.setItem('dragDropAnswerArray', answerArray);
            droped_1 = true;
            dragDropCheckField();
            setDragDropAnswerElement();
            console.log(`droped_1 = ${droped_1}`);
        }
    }).on('dropactivate', function (event) {

    }).on('dragleave', function (event) {
        console.log('dragleave');
        droped_1 = false;
        console.log(`droped_1 = ${droped_1}`);
});

interact('.dropField_2').dropzone({
        ondrop: function (event) {
            checkNutriAnswer(1, event.target.id);
            localStorage.setItem('answerArray1', answerArray);
            droped_2 = true;
            dragDropCheckField();
            setDragDropAnswerElement();
            console.log(`droped_2 = ${droped_2}`);
        }
    }).on('dropactivate', function (event) {

    }).on('dragleave', function (event) {
        console.log('dragleave');
        droped_2 = false;
        console.log(`droped_2 = ${droped_2}`);
});

interact('.dropField_3').dropzone({
        ondrop: function (event) {
            checkNutriAnswer(2, event.target.id);
            localStorage.setItem('answerArray1', answerArray);
            droped_3 = true;
            dragDropCheckField();
            setDragDropAnswerElement();
            console.log(`droped_3 = ${droped_3}`);
        }
    }).on('dropactivate', function (event) {

    }).on('dragleave', function (event) {
        console.log('dragleave');
        droped_3 = false;
        console.log(`droped_3 = ${droped_3}`);
});

function DragDrop() {
    const [questionList /*setEventList*/] = useState(
        [{
            productIMG1: img1,
            productIMG2: img2,
            productIMG3: img3,
            nutriScore1: 'D',
            nutriScore2: 'B',
            nutriScore3: 'C',
            answerNutri1: 'B',
            answerNutri2: 'D',
            answerNutri3: 'C',
            questionText: 'Kennst Du den Nutri Score der folgenden Produkte?',
            infoText: 'Welches Pepsi-Produkt hat Deiner Meinung nach den Nutri Score B verdient, welches hat C und D? \nSchnapp Dir den entsprechenden Score und ordne zu.'
        },
        {
            productIMG1: img4,
            productIMG2: img5,
            productIMG3: img6,
            nutriScore1: 'D',
            nutriScore2: 'B',
            nutriScore3: 'C',
            answerNutri1: 'C',
            answerNutri2: 'B',
            answerNutri3: 'D',
            questionText: 'Kennst Du den Nutri Score der folgenden Produkte?',
            infoText: 'Welches Pepsi-Produkt hat Deiner Meinung nach den Nutri Score B verdient, welches hat C und D? \nSchnapp Dir den entsprechenden Score und ordne zu.'
        },
        ]
    );

    useEffect(() => {
        dropRectArray = getFieldArrayRect('.drop');
        fields = document.querySelectorAll('.drop');
    });

    //todo
    initApp();
    if (localStorage.getItem('stage') === null) {
        initApp();
    }
    //todo stage
    // let stage = getQuestionStage();
    let stage = 1;
    console.log(`stage = ${stage}`);

    return (
        <div className="taskContainer dragDropContainer">
            <Header/>
            <div className="contentWrapper">
                <div className="dragDropQuestionWrapper" >
                    <div className="dragDropQuestion">
                        <p>{questionList[stage].questionText}</p>
                        <p>{questionList[stage].infoText}</p>
                    </div>
                    <div className="dragDropAnswerWrapper">
                        <div
                            className="answerD draggable_D drag1 beforeDragAnimation"
                            onMouseDown={() => {
                                selectedAnswer = questionList[stage].nutriScore1;
                                console.log(selectedAnswer);
                            }}
                            onClick={(event) => {
                                selectedAnswer = questionList[stage].nutriScore1;
                                console.log(selectedAnswer);
                                event.target.classList.remove('beforeDragAnimation');
                            }}
                        >
                                <span>D</span>
                        </div>
                        <div
                            className="answerB draggable_B drag2 beforeDragAnimation"
                            onMouseDown={() => {
                                selectedAnswer = questionList[stage].nutriScore2;
                                console.log(selectedAnswer);

                            }}
                            onClick={(event) => {
                                selectedAnswer = questionList[stage].nutriScore2;
                                console.log(selectedAnswer);
                                event.target.classList.remove('beforeDragAnimation');
                            }}
                        >
                                <span>B</span>
                        </div>
                        <div
                            className="answerC draggable_C drag3 beforeDragAnimation"
                            onMouseDown={() => {
                                selectedAnswer = questionList[stage].nutriScore3;
                                console.log(selectedAnswer);

                            }}
                            onClick={(event) => {
                                selectedAnswer = questionList[stage].nutriScore3;
                                console.log(selectedAnswer);
                                event.target.classList.remove('beforeDragAnimation');
                            }}
                        >
                                <span>C</span>
                        </div>
                    </div>
                </div>
                <div className="dragDropFieldWrapper">
                    <div className="field">
                        <div className="dragDropImageWrapper">
                            <img src={questionList[stage].productIMG1} alt=""/>
                            <svg className="Ellipse_1">
                                <ellipse id="Ellipse_1" rx="143.5" ry="19" cx="143.5" cy="19">
                                </ellipse>
                            </svg>
                        </div>
                        <div
                            id={questionList[stage].answerNutri1}
                            className="dropField_1 noGlow1 drop"
                        />
                    </div>
                    <div className="field">
                        <div className="dragDropImageWrapper">
                            <img src={questionList[stage].productIMG2} alt=""/>
                            <svg className="Ellipse_2">
                                <ellipse id="Ellipse_2" rx="143.5" ry="19" cx="143.5" cy="19">
                                </ellipse>
                            </svg>
                        </div>
                        <div
                            id={questionList[stage].answerNutri2}
                            className="dropField_2 noGlow2 drop"
                        />
                    </div>
                    <div className="field">
                        <div className="dragDropImageWrapper">
                            <img src={questionList[stage].productIMG3} alt=""/>
                            <svg className="Ellipse_3">
                                <ellipse id="Ellipse_3" rx="143.5" ry="19" cx="143.5" cy="19">
                                </ellipse>
                            </svg>
                        </div>
                        <div
                            id={questionList[stage].answerNutri3}
                            className="dropField_3 noGlow3 drop"
                        />
                    </div>
                </div>
                <div id="buttonInactive" className="buttonWrapper active unanswered" style={active}>
                    <p className="continueLink">
                        <span>Fertig?</span>
                        <span>Check it out.</span>
                    </p>
                </div>
                <div id="buttonActive" className="buttonWrapper answered" style={inactive}>
                    <a className="continueLink" href="/confirmationNutri">
                        <span>Fertig?</span>
                        <span>Check it out.</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default DragDrop;
