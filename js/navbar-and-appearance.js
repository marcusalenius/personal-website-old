let prefersSystemAppearance = true;

// Respond to system appearance changes
if (prefersSystemAppearance) {
    const body = document.body;
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        // enable dark mode
        if (event.matches) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
        }
        // enable light mode
        else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
        }
    })
}

// Load system appearance on page load
function loadSystemAppearance() {
    const body = document.body;
    if (prefersSystemAppearance) {
        // enable system appearance
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
        } 
        else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
        }
    }
}

let isScrollListenerRunning = false;
let yUnhideAppearanceDropdown;

// Toggles the appearance dropdown and adds scroll listener when unhidden
function toggleAppearanceDropdown() {
    const appearanceDropdown = document.getElementById('appearance-drop-down');
    const navbuttonAppearance = document.getElementById('navbutton-appearance');
    // cancel scroll listener if it is running
    if (isScrollListenerRunning) {
        window.removeEventListener('scroll', scrollListener);
        isScrollListenerRunning = false;
    }
    // unhide appearance dropdown
    if (appearanceDropdown.classList.contains('hidden')) {
        appearanceDropdown.classList.remove('hidden');
        navbuttonAppearance.classList.remove('drop-down-hidden');
        navbuttonAppearance.classList.add('drop-down-visible');
        // auto hide on scroll of more tha 200px
        yUnhideAppearanceDropdown = window.scrollY;
        window.addEventListener('scroll', scrollListener);
        isScrollListenerRunning = true;
    }
    // hide
    else {
        appearanceDropdown.classList.add('hidden');
        navbuttonAppearance.classList.remove('drop-down-visible');
        navbuttonAppearance.classList.add('drop-down-hidden');
    }
}

// Function that closes the appearance dropdown if user scrolls more than 200px
function scrollListener() {
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


// Sets the appearance to system
function setSystemAppearance() {
    const body = document.body;
    const dropDownItems = document.querySelectorAll('.appearance-drop-down-item');
    const dropDownItemSystem = document.getElementById('appearance-drop-down-item-system');
    if (prefersSystemAppearance) { return; }
    prefersSystemAppearance = true;
    // enable system appearance
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    } 
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    }
    // make the system item selected
    dropDownItems.forEach((dropDownItem) => {
        if (dropDownItem.classList.contains('selected')) {
            dropDownItem.classList.remove('selected');
        }
        dropDownItemSystem.classList.add('selected');
    })
    // close dropdown menu
    toggleAppearanceDropdown();
}

// Sets the appearance to light
function enableLightMode() {
    const body = document.body;
    const dropDownItems = document.querySelectorAll('.appearance-drop-down-item');
    const dropDownItemLight = document.getElementById('appearance-drop-down-item-light');
    if (dropDownItemLight.classList.contains('selected')) { return; }
    prefersSystemAppearance = false;
    // enable light mode
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    // make the light item selected
    dropDownItems.forEach((dropDownItem) => {
        if (dropDownItem.classList.contains('selected')) {
            dropDownItem.classList.remove('selected');
        }
        dropDownItemLight.classList.add('selected');
    })
    // close dropdown menu
    toggleAppearanceDropdown();
}

// Sets the appearance to dark
function enableDarkMode() {
    const body = document.body;
    const dropDownItems = document.querySelectorAll('.appearance-drop-down-item');
    const dropDownItemDark = document.getElementById('appearance-drop-down-item-dark');
    if (dropDownItemDark.classList.contains('selected')) { return; }
    prefersSystemAppearance = false;
    // enable dark mode
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    // make this item selected
    dropDownItems.forEach((dropDownItem) => {
        if (dropDownItem.classList.contains('selected')) {
            dropDownItem.classList.remove('selected');
        }
        dropDownItemDark.classList.add('selected');
    })
    // close dropdown menu
    toggleAppearanceDropdown();
}

// Scrolls to the top
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// Scrolls to projects
function scrollToProjects() {
    const projectsSection = document.getElementById('projects');
    const yOffset = -120; 
    const y = projectsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
}

// Scrolls to work
function scrollToWork() {
    const workSection = document.getElementById('work');
    const yOffset = -120; 
    const y = workSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
}

// Scrolls to contact i.e. the bottom
function scrollToContact() {
    window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'});
}
