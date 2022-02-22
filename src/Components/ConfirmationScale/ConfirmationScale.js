import './ConfirmationScale.css'
import Header from "../Header/Header";
import img1 from '../../img/Bild_2.png';

function ConfirmationScale() {

    return (
        <div className="taskContainer dragDropContainer">
            <Header/>
            <div className="contentWrapper">
                <div className="dragDropQuestionWrapper" >
                    <div className="dragDropQuestion">
                        <p>Yesss, richtig!</p>
                            <div className= "Subtitel">
                                Es sind genau<br/>0g Zucker pro<br/>100ml!!
                            </div>
                            <img className="firstImageScale"  src={img1} alt=""/>

                            <svg class="Rechteck_129">
                            		<rect id="Rechteck_129" rx="5" ry="5" x="0" y="0" width="331" height="122">
                            		</rect>
                            	</svg>
                            <div className="sugarfree__Echt_lecker">
                            		<span>sugarfree &amp;<br/>Echt lecker</span>
                            	</div>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore
                            magna aliquyam et accusam et justo duo dolores et ea
                        </p>
                    </div>
            </div>
                <div className="buttonWrapper continueLink" >
                    <p className="continueLink answered" href="">
                        <span>Alles klar</span>
                        <span>Nächste Frage</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ConfirmationScale;
