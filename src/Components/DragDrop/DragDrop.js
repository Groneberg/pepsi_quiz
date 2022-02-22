import './DragDrop.css'
import Header from "../Header/Header";

import {useState} from "react";
import interact from 'interactjs';


import img1 from '../../img/Bild_2.png';
import img2 from '../../img/kisspng-fizzy-drinks-pepsi-max.png';
import img3 from '../../img/NoPath_-_Kopie.png';

const position_B = { x: 0, y: 0 };
const position_C = { x: 0, y: 0 };
const position_D = { x: 0, y: 0 };

let selectedAnswer = '';
let answerArray = [false,false,false];
let droped_1 = false;
let droped_2 = false;
let droped_3 = false;

function setAnswerElement(index, value ) {
    answerArray[index] = (value === selectedAnswer);
}

function checkField() {
    if (true) {
    // if (droped_1 && droped_2 && droped_3) {
        console.log('wuhuu all droped');
        const buttonInactive = document.getElementById("buttonInactive");
        const buttionActive = document.getElementById("buttionActive");
        buttonInactive.classList.add("inactive");
        buttonInactive.classList.remove("active");
        buttionActive.classList.add("active");
        buttionActive.classList.remove("inactive");
    }

    return true;
}

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
        },
    }
});

interact('.dropField_1').dropzone({
        ondrop: function (event) {
            setAnswerElement(0, event.target.id);
            localStorage.setItem('answerArray1', answerArray);
            checkField();
            droped_1 = true;
            console.log(droped_1);
        }
    }).on('dropactivate', function (event) {
        event.target.classList.add('drop-activated');
}).on('dragleave', function (event) {
        console.log('dragleave');
        droped_1 = false;
        console.log(droped_1);
});

interact('.dropField_2').dropzone({
        ondrop: function (event) {
            setAnswerElement(1, event.target.id);
            localStorage.setItem('answerArray1', answerArray);
            checkField();
            droped_2 = true;
            console.log(droped_2);
        }
    }).on('dropactivate', function (event) {
        event.target.classList.add('drop-activated');
}).on('dragleave', function (event) {
        console.log('dragleave');
        droped_2 = false;
        console.log(droped_2);
});

interact('.dropField_3').dropzone({
        ondrop: function (event) {
            setAnswerElement(2, event.target.id);
            localStorage.setItem('answerArray1', answerArray);
            checkField();
            droped_3 = true;
            console.log(droped_3);
        }
    }).on('dropactivate', function (event) {
        event.target.classList.add('drop-activated')
    }).on('dragleave', function (event) {
        console.log('dragleave');
        droped_3 = false;
        console.log(droped_3);
});


function DragDrop() {

    // const [questionList /*setEventList*/] = useState(
    //     [{
    //         productIMG: '',
    //         nutriScore: 'D',
    //     },
    //     ]
    // );

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
                    <div className="answerWrapper">
                        <div
                            className="answerD draggable_D"
                            onMouseEnter={() => {
                                selectedAnswer = 'D';
                                console.log(selectedAnswer);
                            }}
                            onClick={() => {
                                selectedAnswer = 'D';
                                console.log(selectedAnswer);
                            }}
                        >
                                <span>D</span>
                        </div>
                        <div
                            className="answerB draggable_B"
                            onMouseEnter={() => {
                                selectedAnswer = 'B';
                                console.log(selectedAnswer);

                            }}
                            onClick={() => {
                                selectedAnswer = 'B';
                                console.log(selectedAnswer);
                            }}
                        >
                                <span>B</span>
                        </div>
                        <div
                            className="answerC draggable_C"
                            onMouseEnter={() => {
                                selectedAnswer = 'C';
                                console.log(selectedAnswer);

                            }}
                            onClick={() => {
                                selectedAnswer = 'C';
                                console.log(selectedAnswer);
                            }}
                        >
                                <span>C</span>
                        </div>
                    </div>
                </div>
                <div className="fieldWrapper">
                    <div className="field">
                        <div className="imageWrapper">
                            <img src={img1} alt=""/>
                            <svg className="Ellipse_1">
                                <ellipse id="Ellipse_1" rx="143.5" ry="19" cx="143.5" cy="19">
                                </ellipse>
                            </svg>
                        </div>
                        <div id="C" className="dropField_1" />
                    </div>
                    <div className="field">
                        <div className="imageWrapper">
                            <img src={img2} alt=""/>
                            <svg className="Ellipse_2">
                                <ellipse id="Ellipse_2" rx="143.5" ry="19" cx="143.5" cy="19">
                                </ellipse>
                            </svg>
                        </div>
                        <div id="D" className="dropField_2" />
                    </div>
                    <div className="field">
                        <div className="imageWrapper">
                            <img src={img3} alt=""/>
                            <svg className="Ellipse_3">
                                <ellipse id="Ellipse_3" rx="143.5" ry="19" cx="143.5" cy="19">
                                </ellipse>
                            </svg>
                        </div>
                        <div id="B" className="dropField_3"/>
                    </div>
                </div>
                <div id="buttonInactive" className="buttonWrapper active unanswered" >
                    <p className="continueLink" href="">
                        <span>Fertig?</span>
                        <span>Check it out.</span>
                    </p>
                </div>
                <div id="buttionActive" className="buttonWrapper inactive answered" >
                    <a className="continueLink" href="">
                        <span>Fertig?</span>
                        <span>Check it out.</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default DragDrop;
