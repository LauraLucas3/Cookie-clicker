var moneyCount = 0;
var autoclick = 0;

function update () {
    document.getElementById("text").value = moneyCount;
    document.getElementById("amountAutoclick").innerHTML = autoclick;
    document.getElementById("AutoClickPrice").innerHTML = ((autoclick + 1) * 12) + " euros";
}

function timer () {
    moneyCount = moneyCount + autoclick;
    update();
}

setInterval(timer, 1000);

function addMoney () {
    moneyCount = moneyCount + 1;
    update();
}

function saveParty () {
    localStorage.setItem("moneyCount", moneyCount);
    localStorage.setItem("autoclick", autoclick);
    update();
}

function loadParty () {
    moneyCount = new Number(localStorage.getItem("moneyCount"));
    autoclick = new Number(localeStorage.getItem("autoclick"));
    update();
}

function buyAutoclick () {
    if (moneyCount >= ((autoclick + 1) * 12)) {
        moneyCount = moneyCount - ((autoclick + 1) * 12);
        autoclick = autoclick + 1;
        update();
    }
}