document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction);

function flightHandlerFunction (event) {
    document.querySelector("#flight").classList.remove('disabled');
    document.querySelector("#flight").classList.add('enabled');
}

document.querySelector("#activate-mindreading").addEventListener("click", mindreadingHandlerFunction);

function mindreadingHandlerFunction (event) {
    document.querySelector("#mindreading").classList.remove('disabled');
    document.querySelector("#mindreading").classList.add('enabled');
}

document.querySelector("#activate-xray").addEventListener("click", xrayHandlerFunction);

function xrayHandlerFunction (event) {
    document.querySelector("#xray").classList.remove('disabled');
    document.querySelector("#xray").classList.add('enabled');
}

document.querySelector("#activate-all").addEventListener("click", activateAllHandlerFunction);

// function activateAllHandlerFunction (event) {
//     document.querySelector("#flight").classList.remove('disabled');
//     document.querySelector("#flight").classList.add('enabled');
//     document.querySelector("#mindreading").classList.remove('disabled');
//     document.querySelector("#mindreading").classList.add('enabled');
//     document.querySelector("#xray").classList.remove('disabled');
//     document.querySelector("#xray").classList.add('enabled');
// }

// document.querySelector("#deactivate-all").addEventListener("click", deactivateAllHandlerFunction);

// function deactivateAllHandlerFunction (event) {
//     document.querySelector("#flight").classList.remove('enabled');
//     document.querySelector("#flight").classList.add('disabled');
//     document.querySelector("#mindreading").classList.remove('enabled');
//     document.querySelector("#mindreading").classList.add('disabled');
//     document.querySelector("#xray").classList.remove('enabled');
//     document.querySelector("#xray").classList.add('disabled');
// }

document.querySelector("#activate-all").addEventListener("click", activateAllHandlerFunction);

function activateAllHandlerFunction (event) {
    const powerList = document.querySelectorAll(".disabled");
    for (let i = 0; i < powerList.length; i++) {
        powerList[i].classList.remove('disabled');
        powerList[i].classList.add('enabled');
    }
}

document.querySelector("#deactivate-all").addEventListener("click", deactivateAllHandlerFunction);

function deactivateAllHandlerFunction (event) {
    const powerList = document.querySelectorAll(".enabled");
    for (let i = 0; i < powerList.length; i++) {
        powerList[i].classList.remove('enabled');
        powerList[i].classList.add('disabled');
    }
}