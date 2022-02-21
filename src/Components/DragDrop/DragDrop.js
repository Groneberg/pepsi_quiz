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

function setAnswerElement(index, value ) {
    answerArray[index] = (value === selectedAnswer);
}

function checkField() {
    let count = 0;
    if (true) {
        let dropActivatedElements = document.querySelectorAll('.drop-activated');
        // console.log(dropActivatedElements);
        // console.log(dropActivatedElements.length);
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
            // alert(event.relatedTarget.id
            //     + ' was dropped into '
            //     + event.target.id);
            // console.log(answerArray);
            localStorage.setItem('answerArray1', answerArray);
            checkField();
        }
    }).on('dropactivate', function (event) {
        event.target.classList.add('drop-activated');
});

interact('.dropField_2').dropzone({
        ondrop: function (event) {
            setAnswerElement(1, event.target.id);
            // alert(event.relatedTarget.id
            //     + ' was dropped into '
            //     + event.target.id);
            // console.log(answerArray);
            // console.log(localStorage.getItem('answerArray1'));
            checkField();
        }
    }).on('dropactivate', function (event) {
        event.target.classList.add('drop-activated');
});

interact('.dropField_3').dropzone({
        ondrop: function (event) {
            setAnswerElement(2, event.target.id);
            // alert(event.relatedTarget.id
            //     + ' was dropped into '
            //     + event.target.id);
            // console.log(answerArray);
            checkField();
        }
    }).on('dropactivate', function (event) {
        event.target.classList.add('drop-activated')
    }).on('dragleave', function (event) {
        console.log('dragleave');
});

// // enable draggables to be dropped into this
// interact('.dropzone').dropzone({
//     // only accept elements matching this CSS selector
//     accept: '.draggable_D .draggable_B .draggable_C',
//     // Require a 75% element overlap for a drop to be possible
//     overlap: 0.75,
//
//     // listen for drop related events:
//
//     ondropactivate: function (event) {
//         // add active dropzone feedback
//         event.target.classList.add('drop-active')
//     },
//     ondragenter: function (event) {
//         let draggableElement = event.relatedTarget
//         let dropzoneElement = event.target
//
//         // feedback the possibility of a drop
//         dropzoneElement.classList.add('drop-target')
//         draggableElement.classList.add('can-drop')
//         draggableElement.textContent = 'Dragged in'
//     },
//     ondragleave: function (event) {
//         // remove the drop feedback style
//         event.target.classList.remove('drop-target')
//         event.relatedTarget.classList.remove('can-drop')
//         event.relatedTarget.textContent = 'Dragged out'
//     },
//     ondrop: function (event) {
//         event.relatedTarget.textContent = 'Dropped'
//     },
//     ondropdeactivate: function (event) {
//         // remove active dropzone feedback
//         event.target.classList.remove('drop-active')
//         event.target.classList.remove('drop-target')
//     }
// })

function DragDrop() {

    // const [questionList /*setEventList*/] = useState(
    //     [{
    //         productIMG: '',
    //         nutriScore: 'D',
    //     },
    //     ]
    // );

    // const [selectedAnswer, setSelectedAnswer] = useState('');

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
                <div className="buttonWrapper active" >
                    <p className="continueLink unanswered" href="">
                        <span>Fertig?</span>
                        <span>Check it out.</span>
                    </p>
                </div>
                <div className="buttonWrapper inactive" >
                    <a className="continueLink answered" href="">
                        <span>Fertig?</span>
                        <span>Check it out.</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default DragDrop;
