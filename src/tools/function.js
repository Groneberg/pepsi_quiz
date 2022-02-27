function setQuestionStage(stage) {
    localStorage.setItem('stage', `${stage}`);
}

function getQuestionStage() {
    return Number.parseInt(localStorage.getItem('stage'));
}

function initApp() {
    localStorage.setItem('stage', `${0}`);
}

function isFirstRound(stage) {
    if (stage !== 0) {
        return false;
    } else {
        return true;
    }
}

export {setQuestionStage, getQuestionStage, initApp, isFirstRound};
