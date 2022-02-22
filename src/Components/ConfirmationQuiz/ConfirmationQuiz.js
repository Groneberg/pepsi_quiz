import './ConfirmationQuiz.css'
import Header from "../Header/Header";
import img1 from '../../img/Bild_2.png';
import img2 from '../../img/7Up.png';
import img3 from '../../img/sugarfree.png';

function ConfirmationQuiz() {

    return (
        <div className="taskContainer dragDropContainer">
            <Header/>
            <div className="contentWrapper">
                <div className="dragDropQuestionWrapper" >
                    <div className="dragDropQuestion">
                        <p>Volltreffer!</p>
                            <div className= "Subtitel">
                                Bereits die Hälfte<br/>unserer Getränke<br/> in Deutschland sind<br/>zuckerfrei!!
                            </div>

                            <img className="secondImageQuiz"  src={img2} alt=""/>
                            <img className="firstImageQuiz"  src={img1} alt=""/>
                            <svg class="Ellipse_812">
                            <ellipse id="Ellipse_4" rx="115" ry="115" cx="115" cy="115">
                            </ellipse>
                            </svg>
                            <img className="sugar-free"  src={img3} alt=""/>
                            <div className="fiftyPercent">
                            		<span>50 %</span>
                            	</div>
                        <p>
                            Du hast es geschafft!<br/>
                            Hole dir deine Pepsi ab!
                        </p>
                    </div>
            </div>
                <div className="buttonWrapper continueLink" >
                    <p className="continueLink answered" href="">
                        <span>Fertig!</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ConfirmationQuiz;
