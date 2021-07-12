var moneyCount = 0;
var autoclick = 0;
var grandma = 0;
var hotels = 0;
var casinos = 0;
var callgirl = 0;
var multiplier = 1;

function update () {
    document.getElementById("text").value = moneyCount;
    document.getElementById("amountAutoclick").innerHTML = autoclick;
    document.getElementById("AutoClickPrice").innerHTML = ((autoclick + 1) * 12) + " euros";
    document.getElementById("amountHotel").innerHTML = hotels;
    document.getElementById("GrandMaPrice").innerHTML = ((grandma + 1) * 80) + " euros";
    document.getElementById("amountGrandMa").innerHTML =grandma;
    document.getElementById("HotelPrice").innerHTML = ((hotels + 1) * 880) + " euros";
    document.getElementById("CasinoPrice").innerHTML = ((casinos + 1) * 9600) + " euros";
    document.getElementById("amountCasino").innerHTML = casinos;
    document.getElementById("CallGirlPrice").innerHTML = ((callgirl + 1) * 15000) + " euros";
    document.getElementById("amountCallGirl").innerHTML = callgirl;
    document.getElementById("MultiplierPrice").innerHTML = (multiplier * 400) + " euros";
    document.getElementById("amountMultiplier").innerHTML = multiplier;
    document.getElementById("eurosPerSec").innerHTML = (autoclick + (grandma*10) + (hotels*80) + (casinos*470) + (callgirl*2600)) * multiplier;
}

function timer () {
    moneyCount = moneyCount + ((autoclick + (grandma*10) + (hotels*80) + (casinos*470) + (callgirl*2600)) * multiplier);
    update();
}

setInterval(timer, 1000);

function addMoney () {
    moneyCount = moneyCount + (1*multiplier);
    update();
}

function saveParty () {
    localStorage.setItem("moneyCount", moneyCount);
    localStorage.setItem("autoclick", autoclick);
    localStorage.setItem("grandma", grandma);
    localStorage.setItem("hotels", hotels);
    localStorage.setItem("casinos", casinos);
    localStorage.setItem("callgirl", callgirl);
    localStorage.setItem("multiplier", multiplier);
    update();
}

function loadParty () {
    moneyCount = new Number(localStorage.getItem("moneyCount"));
    autoclick = new Number(localeStorage.getItem("autoclick"));
    grandma = new Number(localeStorage.getItem("grandma"));
    hotels = new Number(localeStorage.getItem("hotels"));
    casinos = new Number(localeStorage.getItem("casinos"));
    callgirl = new Number(localeStorage.getItem("callgirl"));
    multiplier = new Number(localeStorage.getItem("multiplier"));
    update();
}

function buyAutoclick () {
    if (moneyCount >= ((autoclick + 1) * 12)) {
        moneyCount = moneyCount - ((autoclick + 1) * 12);
        autoclick = autoclick + 1;
        update();
    }
}

function buyHotel () {
    if (moneyCount >= ((hotels + 1) * 880)) {
        moneyCount = moneyCount - ((hotels + 1) * 880);
        hotels = hotels + 1;
        update();
    }
}

function buyGrandMa () {
    if (moneyCount >= ((grandma + 1) * 80)) {
        moneyCount = moneyCount - ((grandma + 1) * 80);
        grandma = grandma + 1;
        update();
    }
}

function buyCasino () {
    if (moneyCount >= ((casinos + 1) * 9600)) {
        moneyCount = moneyCount - ((casinos + 1) * 9600);
        casinos = casinos + 1;
        update();
    }
}

function buyCallGirl () {
    if (moneyCount >= ((callgirl + 1) * 15000)) {
        moneyCount = moneyCount - ((callgirl + 1) * 15000);
        callgirl = callgirl + 1;
        update();
    }
}

function buyMultiplier () {
    if (moneyCount >= (multiplier * 400)) {
        moneyCount = moneyCount - (multiplier * 400);
        multiplier = multiplier + 1;
        update();
    }
}