import './Start.css'
import Header from "../Header/Header";

import pepsi from '../../img/kisspng-pepsi-max-fizzy-drinks.png';

function Start() {
    return (
        <div className="taskContainer startContainer" style={{ backgroundImage: `url(${pepsi})` }}>
            <Header />
            <div className="startInfoContainer">
                <div className="startInfoWrapper">
                    <p className="info-1">Bist Du ein </p>
                    <p className="info-2">Echter</p>
                </div>
                <div className="startInfoWrapper">
                    <p className="info-3">Pepsi-Experte?</p>
                </div>
                <div className="startInfoWrapper">
                    <p className="info-4">
                        Zeige in 3 Antworten, dass Du das Zeug zum
                        Echten Pepsi-Pro hast. Am Ende wartet eine Eiskalte Pepsi auf Dich!
                    </p>
                </div>
            </div>
            <div className="continueLinkWrapper">
                <a className="startContinueLink" href="/dragDrop">
                    <span>Ready?</span>
                    <span>Los geht's</span>
                </a>
            </div>
        </div>
    );
}

export default Start;
