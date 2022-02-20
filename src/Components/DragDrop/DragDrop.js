import './DragDrop.css'
import ConfirmButton from "../ConfirmButton/ConfirmButton";

import interact from 'interactjs';

import img1 from '../../img/FOP_OTEP-Sustainability_Chickpeatif.png';
import img2 from '../../img/pepsi_max_lemon_1500ml_rpet.png';
import img3 from '../../img/FOP_OTEP-Sustainability_Veggie.png';
import Header from "../Header/Header";

function DragDrop() {
    return (
        <div className="taskContainer dragDropContainer">
            <Header/>
            <div className="dragDropQuestionWrapper" >
                <div className="dragDropQuestion">
                    <p>Kennst Du <br/>den Nutri Score <br/>der folgenden Produkte?</p>
                    <p>
                        Welche Pepsi-Produkt hat Deiner Meinung nach den Nutri Score B verdient, welches hat C und D?
                        Schnapp Dir den entsprechenden Score und ordne zu.
                    </p>
                </div>
                <div className="answerWrapper">
                    <div className="answerD">
                            <span>D</span>
                    </div>
                    <div className="answerB">
                            <span>B</span>
                    </div>
                    <div className="answerC">
                            <span>C</span>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="fieldWrapper">
                    <div className="field">
                        <div className="imageWrapper">
                            <img src={img1} alt=""/>
                        </div>
                        <div className="dropField" />
                    </div>
                    <div className="field">
                        <div className="imageWrapper">
                            <img src={img2} alt=""/>
                        </div>
                        <div className="dropField" />
                    </div>
                    <div className="field">
                        <div className="imageWrapper">
                            <img src={img3} alt=""/>
                        </div>
                        <div className="dropField" />
                    </div>
                </div>
                {/*<div className="buttonWrapper">*/}
                {/*    <ConfirmButton />*/}
                {/*</div>*/}
            </div>




        </div>
    );
}

export default DragDrop;
