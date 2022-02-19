import './Start.css'
import Header from "../Header/Header";

// import img1 from '../../img/FOP_OTEP-Sustainability_Chickpeatif.png';


function Start() {
    return (
        <div className="taskContainer">
            <Header />
            <div className="start-info">
                <div id="Bist_Du_ein__Echter__">
                    <span className="info-1">Bist Du ein </span>
                    <span className="info-2">Echter</span>
                </div>
                <div id="Pepsi-Experte">
                    <span className="info-3">Pepsi-Experte?</span>
                </div>
                <div id="Zeige_in_3_Antworten__dass_Du_">
                    <span className="info-4">
                        Zeige in 3 Antworten, dass Du das Zeug zum
                        Echten Pepsi-Pro hast. Am Ende wartet eine Eiskalte Pepsi auf Dich!
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Start;
