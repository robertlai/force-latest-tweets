var timeElapsed = 0;

function clickMenuItem() {
    var menuItem = document.querySelector('[role="menu"] [tabindex="0"]');
    if (menuItem) {
        menuItem.click();
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

clickToggleButton();
