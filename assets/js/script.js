var moneyCount = 0;
var autoclick = 0;
var grandma = 0;
var hotels = 0;
var casinos = 0;
var callgirl = 0;
var multiplier = 1;
var bonustime = 1;
var BonusOn = false;
var CasaPapel = 0;

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
    document.getElementById("CasaPapelprice").innerHTML = ((CasaPapel + 1) * 1000000) + " euros";
    document.getElementById("eurosPerSec").innerHTML = (autoclick + (grandma*10) + (hotels*80) + (casinos*470) + (callgirl*2600)) * multiplier;
    if (moneyCount >= (bonustime * 500)) {
        document.getElementById("button7").style.visibility = "visible";
        document.getElementById("BonusTime").disabled = false;
    }
    if (moneyCount < (bonustime * 500)) {
        document.getElementById("BonusTime").disabled = true;
    }
    if (moneyCount >= ((autoclick + 1) * 12)) {
        document.getElementById("button2").style.visibility = "visible";
        document.getElementById("buyAutoclick").disabled = false;
    }
    if (moneyCount < ((autoclick + 1) * 12)) {
        document.getElementById("buyAutoclick").disabled = true;
    }
    if (moneyCount >= ((hotels + 1) * 880)) {
        document.getElementById("button4").style.visibility = "visible";
        document.getElementById("buyHotel").disabled = false;
    }
    if (moneyCount < ((hotels + 1) * 880)) {
        document.getElementById("buyHotel").disabled = true;
    }
    if (moneyCount >= ((grandma + 1) * 80)) {
        document.getElementById("button3").style.visibility = "visible";
        document.getElementById("buyGrandMa").disabled = false;
    }
    if (moneyCount < ((grandma + 1) * 80)) {
        document.getElementById("buyGrandMa").disabled = true;
    }
    if (moneyCount >= ((casinos + 1) * 9600)) {
        document.getElementById("button5").style.visibility = "visible";
        document.getElementById("buyCasino").disabled = false;
    }
    if (moneyCount < ((casinos + 1) * 9600)) {
        document.getElementById("buyCasino").disabled = true;
    }
    if (moneyCount >= ((callgirl + 1) * 15000)) {
        document.getElementById("button6").style.visibility = "visible";
        document.getElementById("buyCallGirl").disabled = false;
    }
    if (moneyCount < ((callgirl + 1) * 15000)) {
        document.getElementById("buyCallGirl").disabled = true;
    }
    if (moneyCount >= (multiplier * 400)) {
        document.getElementById("button1").style.visibility = "visible";
        document.getElementById("buyMultiplier").disabled = false;
    }
    if (moneyCount < (multiplier * 400)) {
        document.getElementById("buyMultiplier").disabled = true;
    }
    if (moneyCount >= ((CasaPapel + 1) * 1000000)) {
        document.getElementById("button8").style.visibility = "visible";
        document.getElementById("buyCasaPapel").disabled = false;
    }
    if (moneyCount < ((CasaPapel + 1) * 1000000)) {
        document.getElementById("buyCasaPapel").disabled = true;
    }
}

function timer () {
    moneyCount = moneyCount + ((autoclick + (grandma*10) + (hotels*80) + (casinos*470) + (callgirl*2600)) * multiplier);
    update();
}

setInterval(timer, 1000);

function addMoney() {
    if (BonusOn === false) {
        moneyCount = moneyCount + (1*multiplier);
        update();
    }
}

document.getElementById("addMoney").addEventListener("click", addMoney);

document.getElementById("BonusTime").addEventListener("click", () => {
    if (moneyCount >= (bonustime * 500)) {
        BonusOn = true;
        var CountDown = 30;
        moneyCount = moneyCount - (bonustime * 500);
        bonustime = bonustime * 2;
        var bonusAmount = moneyCount * 2;
        document.getElementById("BonusPrice").innerHTML = (bonustime * 500) + " euros";
        document.getElementById("text").value = moneyCount;
        function BonusTime2 () {
            moneyCount = moneyCount + bonusAmount;
            document.getElementById("text").value = moneyCount;
        }
        var x = setInterval(function() {
            CountDown = CountDown - 1;
            CountDown = CountDown < 10 ? "0" + CountDown : CountDown;
            document.getElementById("BonusTime2").innerHTML = CountDown + "s";

            if ((CountDown <= 0) && (BonusOn === true)) {
                clearInterval(x);
                document.getElementById("BonusTime2").innerHTML = "";
                BonusOn = false;
                document.getElementById("addMoney").removeEventListener("click", BonusTime2);
                document.getElementById("addMoney").addEventListener("click", addMoney);
            }

            if (CountDown > 0) {
                document.getElementById("addMoney").removeEventListener("click", addMoney);
                document.getElementById("addMoney").addEventListener("click", BonusTime2);
            }
        }, 1000);
    }
});

document.getElementById("saveParty").addEventListener("click", () => {
    localStorage.setItem("moneyCount", moneyCount);
    localStorage.setItem("autoclick", autoclick);
    localStorage.setItem("grandma", grandma);
    localStorage.setItem("hotels", hotels);
    localStorage.setItem("casinos", casinos);
    localStorage.setItem("callgirl", callgirl);
    localStorage.setItem("multiplier", multiplier);
    localStorage.setItem("CasaPapel", CasaPapel);
    update();
});

document.getElementById("LoadParty").addEventListener("click", () => {
    moneyCount = new Number(localStorage.getItem("moneyCount"));
    autoclick = new Number(localStorage.getItem("autoclick"));
    grandma = new Number(localStorage.getItem("grandma"));
    hotels = new Number(localStorage.getItem("hotels"));
    casinos = new Number(localStorage.getItem("casinos"));
    callgirl = new Number(localStorage.getItem("callgirl"));
    multiplier = new Number(localStorage.getItem("multiplier"));
    CasaPapel = new Number(localStorage.getItem("CasaPapel"));
    update();
});

document.getElementById("buyAutoclick").addEventListener("click", () => {
    if (moneyCount >= ((autoclick + 1) * 12)) {
        moneyCount = moneyCount - ((autoclick + 1) * 12);
        autoclick = autoclick + 1;
        update();
    }
});

document.getElementById("buyHotel").addEventListener("click", () => {
    if (moneyCount >= ((hotels + 1) * 880)) {
        moneyCount = moneyCount - ((hotels + 1) * 880);
        hotels = hotels + 1;
        update();
    }
});

document.getElementById("buyGrandMa").addEventListener("click", () => {
    if (moneyCount >= ((grandma + 1) * 80)) {
        moneyCount = moneyCount - ((grandma + 1) * 80);
        grandma = grandma + 1;
        update();
    }
});

document.getElementById("buyCasino").addEventListener("click", () => {
    if (moneyCount >= ((casinos + 1) * 9600)) {
        moneyCount = moneyCount - ((casinos + 1) * 9600);
        casinos = casinos + 1;
        update();
    }
});

document.getElementById("buyCallGirl").addEventListener("click", () => {
    if (moneyCount >= ((callgirl + 1) * 15000)) {
        moneyCount = moneyCount - ((callgirl + 1) * 15000);
        callgirl = callgirl + 1;
        update();
    }
});

document.getElementById("buyMultiplier").addEventListener("click", () => {
    if (moneyCount >= (multiplier * 400)) {
        moneyCount = moneyCount - (multiplier * 400);
        multiplier = multiplier + 1;
        update();
    }
});

document.getElementById("buyCasaPapel").addEventListener("click", () => {
    if (moneyCount >= ((CasaPapel + 1) * 1000000)) {
        moneyCount = moneyCount - ((CasaPapel + 1) * 1000000);
        moneyCount = moneyCount + ((CasaPapel + 1) * 5000000);
        CasaPapel = CasaPapel + 1;
        update();
    }
});
