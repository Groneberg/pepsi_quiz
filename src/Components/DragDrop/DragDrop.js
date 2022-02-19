import './DragDrop.css'
import ConfirmButton from "../ConfirmButton/ConfirmButton";

import interact from 'interactjs';

import img1 from '../../img/FOP_OTEP-Sustainability_Chickpeatif.png';
import img2 from '../../img/pepsi_max_lemon_1500ml_rpet.png';
import img3 from '../../img/FOP_OTEP-Sustainability_Veggie.png';
import Header from "../Header/Header";

function DragDrop() {
    return (
        <div className="taskContainer">
            <Header/>
            <div className="dragDropQuestionWrapper" >
                <span
                    className="dragDropQuestion">
                    Wie viel Prozent unseres Getränkeportfolios in Deutschland ist zuckerfrei?
                </span>
            </div>
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
            <div className="buttonWrapper">
                <ConfirmButton />
            </div>
        </div>
    );
}

export default DragDrop;
