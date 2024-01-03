let cookieCount = 0;
let clickMultiplier = 1;
let upgradeCost = 100;
let autoClickerCost = 100;
let autoClickerInterval;

function clickCookie() {
    cookieCount += clickMultiplier;
    updateCookieCount();
}

function updateCookieCount() {
    document.getElementById('cookie-count').innerText = cookieCount + ' cookies';
}

function updateUpgradeCost() {
    document.getElementById('upgrade-cost').innerText = upgradeCost;
}

function updateAutoClickerCost() {
    document.getElementById('auto-clicker-cost').innerText = autoClickerCost;
}

function buyUpgrade() {
    if (cookieCount >= upgradeCost) {
        cookieCount -= upgradeCost;
        upgradeCost += 100;
        clickMultiplier *= 2;
        updateCookieCount();
        updateUpgradeCost();
    } else {
        alert('Not enough cookies to buy the upgrade.');
    }
}

function buyAutoClicker() {
    if (cookieCount >= autoClickerCost) {
        cookieCount -= autoClickerCost;
        autoClickerCost += 100;
        updateCookieCount();
        updateAutoClickerCost();
        startAutoClicker();
    } else {
        alert('Not enough cookies to buy the auto clicker.');
    }
}

function startAutoClicker() {
    autoClickerInterval = setInterval(function() {
        cookieCount += clickMultiplier;
        updateCookieCount();
    }, 1000);
}

updateUpgradeCost();
updateAutoClickerCost();