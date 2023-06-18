// Get stored preferred appearance
let preferredAppearance = localStorage.getItem("preferredAppearance");
if (preferredAppearance === null) {
    preferredAppearance = 'system';
}
if (preferredAppearance === 'light') {
    setLightMode();
}
else if (preferredAppearance === 'dark') {
    setDarkMode();
}
else {
    setSystemAppearance();
}

// Add event listener to respond to system appearance changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (preferredAppearance === 'system') {
        const body = document.body;
        // enable dark mode
        if (event.matches) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
        }
        // enable dark mode
        else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
        }
    }
})

// Function that sets the appearance to system
function setSystemAppearance() {
    const body = document.body;
    const dropDownItems = document.querySelectorAll('.appearance-drop-down-item');
    const dropDownItemSystem = document.getElementById('appearance-drop-down-item-system');
    // enable system appearance
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    } 
    else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    }
    // make the system item selected
    dropDownItems.forEach((dropDownItem) => {
        if (dropDownItem.classList.contains('selected')) {
            dropDownItem.classList.remove('selected');
        }
    })
    dropDownItemSystem.classList.add('selected');
}

// Called by button click to set appearance to system
function buttonClickToSetSystemAppearance() {
    if (preferredAppearance === 'system') { return; }
    preferredAppearance = 'system';
    // store preferredAppearance
    localStorage.setItem("preferredAppearance", preferredAppearance);
    setSystemAppearance();
    // close dropdown menu
    toggleAppearanceDropdown();
}

// Function that sets the appearance to light
function setLightMode() {
    const body = document.body;
    const dropDownItems = document.querySelectorAll('.appearance-drop-down-item');
    const dropDownItemLight = document.getElementById('appearance-drop-down-item-light');
    // enable light mode
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    // make the light item selected
    dropDownItems.forEach((dropDownItem) => {
        if (dropDownItem.classList.contains('selected')) {
            dropDownItem.classList.remove('selected');
        }
    })
    dropDownItemLight.classList.add('selected');
}

// Called by button click to set appearance to light
function buttonClickToSetLightMode() {
    if (preferredAppearance === 'light') { return; }
    preferredAppearance = 'light';
    // store preferredAppearance
    localStorage.setItem("preferredAppearance", preferredAppearance);
    setLightMode();
    // close dropdown menu
    toggleAppearanceDropdown();
}

// Function that sets the appearance to dark
function setDarkMode() {
    const body = document.body;
    const dropDownItems = document.querySelectorAll('.appearance-drop-down-item');
    const dropDownItemDark = document.getElementById('appearance-drop-down-item-dark');
    // enable dark mode
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    // make this item selected
    dropDownItems.forEach((dropDownItem) => {
        if (dropDownItem.classList.contains('selected')) {
            dropDownItem.classList.remove('selected');
        }
    })
    dropDownItemDark.classList.add('selected');
}

// Called by button click to set appearance to dark
function buttonClickToSetDarkMode() {
    if (preferredAppearance === 'dark') { return; }
    preferredAppearance = 'dark';
    // store preferredAppearance
    localStorage.setItem("preferredAppearance", preferredAppearance);
    setDarkMode();
    // close dropdown menu
    toggleAppearanceDropdown();
}


let isAppearanceScrollListenerRunning = false;
let yUnhideAppearanceDropdown;

// Toggles the appearance dropdown and adds scroll listener when unhidden
function toggleAppearanceDropdown() {
    const appearanceDropdown = document.getElementById('appearance-drop-down');
    const navbuttonAppearance = document.getElementById('navbutton-appearance');
    // cancel scroll listener if it is running
    if (isAppearanceScrollListenerRunning) {
        window.removeEventListener('scroll', appearanceScrollListener);
        isAppearanceScrollListenerRunning = false;
    }
    // unhide appearance dropdown
    if (appearanceDropdown.classList.contains('hidden')) {
        appearanceDropdown.classList.remove('hidden');
        navbuttonAppearance.classList.remove('drop-down-hidden');
        navbuttonAppearance.classList.add('drop-down-visible');
        // auto hide on scroll of more tha 200px
        yUnhideAppearanceDropdown = window.scrollY;
        window.addEventListener('scroll', appearanceScrollListener);
        isAppearanceScrollListenerRunning = true;
    }
    // hide
    else {
        appearanceDropdown.classList.add('hidden');
        navbuttonAppearance.classList.remove('drop-down-visible');
        navbuttonAppearance.classList.add('drop-down-hidden');
    }
}

// Function that closes the appearance dropdown if user scrolls more than 200px
function appearanceScrollListener() {
    const appearanceDropdown = document.getElementById('appearance-drop-down');
    const navbuttonAppearance = document.getElementById('navbutton-appearance');
    if (Math.abs(yUnhideAppearanceDropdown - window.scrollY) >= 200) {
        // hide
        appearanceDropdown.classList.add('hidden');
        navbuttonAppearance.classList.remove('drop-down-visible');
        navbuttonAppearance.classList.add('drop-down-hidden');
    }
}

// Close the appearance dropdown if click outside
window.addEventListener('click', event => {
    const appearanceDropdown = document.getElementById('appearance-drop-down');
    const navbuttonAppearance = document.getElementById('navbutton-appearance');
    if (!appearanceDropdown.classList.contains('hidden')) {
        if (event.target != appearanceDropdown && 
            event.target != navbuttonAppearance && 
            event.target.parentNode != navbuttonAppearance) {
            // hide
            appearanceDropdown.classList.add('hidden');
            navbuttonAppearance.classList.remove('drop-down-visible');
            navbuttonAppearance.classList.add('drop-down-hidden');
        }
    }
})

// Scrolls to the top
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// Scrolls to projects
function scrollToProjects() {
    const projectsSection = document.getElementById('projects');
    const yOffset = window.matchMedia("(max-width: 740px)").matches 
        ? -85
        : -120;
    const y = projectsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
}

// Scrolls to work
function scrollToWork() {
    const workSection = document.getElementById('work');
    const yOffset = window.matchMedia("(max-width: 740px)").matches 
        ? -85
        : -120;
    const y = workSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
}

// Scrolls to contact i.e. the bottom
function scrollToContact() {
    window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'});
}
