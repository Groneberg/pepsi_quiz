import './DragDrop.css'
import Header from "../Header/Header";
import interact from 'interactjs';
import {useEffect, useState} from "react";
import img1 from '../../img/Bild_2.png';
import img2 from '../../img/kisspng-fizzy-drinks-pepsi-max.png';
import img3 from '../../img/NoPath_-_Kopie.png';
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
let dragRectArray;

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

function getFieldRect(selector) {
    const fields = document.querySelectorAll(selector);
    const array = [];
    for (let i = 0; i < fields.length; i++) {
        array.push(fields[i].getBoundingClientRect());
    }
    return array;
}

function collisionDetection(dragRectArray, dropRectArray) {
    dragRectArray = getFieldRect('.drag');

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (
                ((dragRectArray[i].top > dropRectArray[j].top && dragRectArray[i].top < dropRectArray[j].bottom)
                    ||
                    (dragRectArray[i].bottom > dropRectArray[j].top && dragRectArray[i].bottom < dropRectArray[j].bottom))
                &&
                ((dragRectArray[i].right < dropRectArray[j].right && dragRectArray[0].right > dropRectArray[j].left)
                    ||
                    (dragRectArray[i].left < dropRectArray[j].right && dragRectArray[i].left > dropRectArray[j].left))
            ) {
                return true;
            }
        }
    }
}

// function setBorder(bool, selector, index) {
//     const fields = document.querySelectorAll(selector);
//     if (bool === true && fields[index].classList.value === 'dropField_3 noGlow') {
//         fields[index].classList.add('dropGlow');
//         fields[index].classList.remove('noGlow');
//         console.log(fields[index].classList);
//     } else if (fields[index].classList.value === 'dropField_3 dropGlow') {
//         fields[index].classList.add('noGlow');
//         fields[index].classList.remove('dropGlow');
//         console.log(fields[index].classList);
//     }
// }

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
            console.log(collisionDetection(dragRectArray, dropRectArray));
            // setBorder(collisionDetection(dragRectArray, dropRectArray), '.noGlow', 0);
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
            console.log(collisionDetection(dragRectArray, dropRectArray));
            // setBorder(collisionDetection(dragRectArray, dropRectArray), '.noGlow', 1);
        },
    }
});

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
            console.log(collisionDetection(dragRectArray, dropRectArray));
            // setBorder(collisionDetection(dragRectArray, dropRectArray), '.noGlow', 2);
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
            console.log(droped_1);
        }
    }).on('dropactivate', function (event) {
        const rect = event.target.getBoundingClientRect();
        console.log(rect.top, rect.right, rect.bottom, rect.left);
        // document.getElementById(event.target.id).classList.add('dropGlow');
    }).on('dragleave', function (event) {
        console.log('dragleave');
        droped_1 = false;
        console.log(droped_1);
});

interact('.dropField_2').dropzone({
        ondrop: function (event) {
            checkNutriAnswer(1, event.target.id);
            localStorage.setItem('answerArray1', answerArray);
            droped_2 = true;
            dragDropCheckField();
            setDragDropAnswerElement();
            console.log(droped_2);
        }
    }).on('dropactivate', function (event) {
        const rect = event.target.getBoundingClientRect();
        // document.getElementById(event.target.id).classList.add('dropGlow');
    }).on('dragleave', function (event) {
        console.log('dragleave');
        droped_2 = false;
        console.log(droped_2);
});

interact('.dropField_3').dropzone({
        ondrop: function (event) {
            checkNutriAnswer(2, event.target.id);
            localStorage.setItem('answerArray1', answerArray);
            droped_3 = true;
            dragDropCheckField();
            setDragDropAnswerElement();
            console.log(droped_3);
        }
    }).on('dropactivate', function (event) {
        const rect = event.target.getBoundingClientRect();
        console.log(rect.top, rect.right, rect.bottom, rect.left);
        // document.getElementById(event.target.id).classList.add('dropGlow');
    }).on('dragleave', function (event) {
        console.log('dragleave');
        droped_3 = false;
        console.log(droped_3);
});


function DragDrop() {
    const [questionList /*setEventList*/] = useState(
        [{
            productIMG: '',
            nutriScore1: 'D',
            nutriScore2: 'B',
            nutriScore3: 'C',
        },
        ]
    );

    useEffect(() => {
        dropRectArray = getFieldRect('.noGlow');
        dragRectArray = getFieldRect('.drag');
        console.log(dropRectArray);
        console.log(dragRectArray);
    });

    //todo
    initApp();
    if (localStorage.getItem('stage') === null) {
        initApp();
    }
    let stage = getQuestionStage();
    console.log(`stage = ${stage}`);

    return (
        <div className="taskContainer dragDropContainer">
            <Header/>
            <div className="contentWrapper">
                <div className="dragDropQuestionWrapper" >
                    <div className="dragDropQuestion">
                        <p>Kennst Du <br/>den Nutri Score <br/>der folgenden Produkte?</p>
                        <p>
                            Welche Pepsi-Produkt hat Deiner Meinung nach den Nutri Score B verdient, welches hat C und D?
                            Schnapp Dir den entsprechenden Score und ordne zu.
                        </p>
                    </div>
                    <div className="dragDropAnswerWrapper">
                        <div
                            className="answerD draggable_D drag"
                            onMouseDown={() => {
                                selectedAnswer = questionList[stage].nutriScore1;
                                console.log(selectedAnswer);
                            }}
                            onClick={() => {
                                selectedAnswer = questionList[stage].nutriScore1;
                                console.log(selectedAnswer);
                            }}
                        >
                                <span>D</span>
                        </div>
                        <div
                            className="answerB draggable_B drag"
                            onMouseDown={() => {
                                selectedAnswer = questionList[stage].nutriScore2;
                                console.log(selectedAnswer);

                            }}
                            onClick={() => {
                                selectedAnswer = questionList[stage].nutriScore2;
                                console.log(selectedAnswer);
                            }}
                        >
                                <span>B</span>
                        </div>
                        <div
                            className="answerC draggable_C drag"
                            onMouseDown={() => {
                                selectedAnswer = questionList[stage].nutriScore3;
                                console.log(selectedAnswer);

                            }}
                            onClick={() => {
                                selectedAnswer = questionList[stage].nutriScore3;
                                console.log(selectedAnswer);
                            }}
                        >
                                <span>C</span>
                        </div>
                    </div>
                </div>
                <div className="dragDropFieldWrapper">
                    <div className="field">
                        <div className="dragDropImageWrapper">
                            <img className= "Bild_2 "src={img1} alt=""/>
                            <svg className="Ellipse_1">
                                <ellipse id="Ellipse_1" rx="143.5" ry="19" cx="143.5" cy="19">
                                </ellipse>
                            </svg>
                        </div>
                        <div
                            id="C"
                            className="dropField_1 noGlow"
                        />
                    </div>
                    <div className="field">
                        <div className="dragDropImageWrapper">
                            <img src={img2} alt=""/>
                            <svg className="Ellipse_2">
                                <ellipse id="Ellipse_2" rx="143.5" ry="19" cx="143.5" cy="19">
                                </ellipse>
                            </svg>
                        </div>
                        <div
                            id="D"
                            className="dropField_2 noGlow"
                        />
                    </div>
                    <div className="field">
                        <div className="dragDropImageWrapper">
                            <img src={img3} alt=""/>
                            <svg className="Ellipse_3">
                                <ellipse id="Ellipse_3" rx="143.5" ry="19" cx="143.5" cy="19">
                                </ellipse>
                            </svg>
                        </div>
                        <div
                            id="B"
                            className="dropField_3 noGlow"
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
