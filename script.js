timeElapsed = 0;

function clickMenuItem() {
    var menuItem = document.querySelector('[role="menu"] [tabindex="0"]');
    var clockHands = document.querySelector('[role="menu"] path[fill="#005FD1"]');
    if (menuItem) {
        if (clockHands) {
            var toggleButton = document.querySelector('[data-testid="primaryColumn"] [role="button"]');
            toggleButton.click();
        } else {
            menuItem.click();
        }
    } else {
        setTimeout(clickMenuItem, 10);
    }
}

function clickToggleButton() {
    var toggleButton = document.querySelector('[data-testid="primaryColumn"] [role="button"]');
    if (toggleButton) {
        toggleButton.click();
        clickMenuItem();
    } else if (timeElapsed < 1000) {
        timeElapsed += 10;
        setTimeout(clickToggleButton, 10);
    }
}

document.body.onload = () => {
    timeElapsed = 0;
    clickToggleButton();
};