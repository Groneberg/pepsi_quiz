import './DragDrop.css'
import ConfirmButton from "../ConfirmButton/ConfirmButton";

import img1 from '../../img/FOP_OTEP-Sustainability_Chickpeatif.png';
import img2 from '../../img/pepsi_max_lemon_1500ml_rpet.png';
import img3 from '../../img/FOP_OTEP-Sustainability_Veggie.png';

function DragDrop() {
    return (
        <div className="taskContainer">
            <div className="dragDropContainer">
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
                <ConfirmButton />
            </div>
            {/*<button type="button" className="btn" id="btnID">Bestätigen</button>*/}
        </div>
);
}

export default DragDrop;
