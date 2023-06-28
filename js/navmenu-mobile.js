// Hide navmenu dropdown if click outside
window.addEventListener('click', event => {
    const navmenu = document.getElementById('navmenu-mobile');
    if (!navmenu.classList.contains('hidden')) {
        if (event.target != navmenu &&
            event.target.parentNode != navmenu &&
            event.target.parentNode.parentNode != navmenu) {
            hideNavmenu();
        }
    }
});

// Switch item to current section on scroll
window.addEventListener('scroll', event => {
    const navmenu = document.getElementById('navmenu-mobile');
    const itemSectionMap = {
        aboutMe :  { item :  document.getElementById('navmenu-item-about-me'), 
                     section : document.getElementById('hero') },
        projects : { item : document.getElementById('navmenu-item-projects'),
                     section : document.getElementById('projects') },
        work :     { item : document.getElementById('navmenu-item-work'),
                     section : document.getElementById('work') },
        contact :  { item : document.getElementById('navmenu-item-contact'),
                     section : document.getElementById('contact') }
    };
    const mostInView = getMostInView(itemSectionMap);
    for (const key in itemSectionMap) {
        // section most in view
        if (itemSectionMap[key].section === mostInView) {
            // remove hidden if navmenu hidden
            if (navmenu.classList.contains('hidden')) {
                if (itemSectionMap[key].item.classList.contains('hidden')) {
                    itemSectionMap[key].item.classList.remove('hidden');
                }    
            }
            // add selected
            if (!itemSectionMap[key].item.classList.contains('selected')) {
                itemSectionMap[key].item.classList.add('selected');
            }
        }
        // section not most in view
        else {
            // add hidden if navmenu hidden
            if (navmenu.classList.contains('hidden')) {
                if (!itemSectionMap[key].item.classList.contains('hidden')) {
                    itemSectionMap[key].item.classList.add('hidden');
                }    
            }
            // remove selected
            if (itemSectionMap[key].item.classList.contains('selected')) {
                itemSectionMap[key].item.classList.remove('selected');
            }
        }
    }
});

// Get the section that is most in view
function getMostInView(itemSectionMap) {
    const viewportTop = window.scrollY;
    const viewportBottom = window.scrollY + window.innerHeight;
    let mostInView;
    let mostInViewAmount = 0;
    for (const key in itemSectionMap) {
        const currSection = itemSectionMap[key].section;
        const sectionTop = currSection.offsetTop;
        const sectionBottom = currSection.offsetTop + currSection.offsetHeight;
        let currInViewAmount;
        // not in viewport 
        if (viewportBottom < sectionTop || viewportTop > sectionBottom) {
            currInViewAmount = 0;
            // console.log(currSection, 'not in viewport');
        }
        // completely in viewport
        else if (viewportTop >= sectionTop && viewportBottom <= sectionBottom) {
            currInViewAmount = 1;
            // console.log(currSection, 'completely in viewport');
        }
        // partially in viewport, space above
        else if (viewportTop < sectionTop && viewportBottom <= sectionBottom) {
            currInViewAmount = (viewportBottom - sectionTop) / (viewportBottom - viewportTop);
            // console.log(currSection, 'space above', currInViewAmount);
        }
        // partially in viewport, space below
        else if (viewportBottom > sectionBottom && viewportTop >= sectionTop) {
            currInViewAmount = (sectionBottom - viewportTop) / (viewportBottom - viewportTop);
            // console.log(currSection, 'space below', currInViewAmount);
        }
        // partially in viewport, space above and below
        else {
            currInViewAmount = 1;
            // console.log(currSection, 'space above and below')
        }
        if (currInViewAmount >= mostInViewAmount) {
            mostInViewAmount = currInViewAmount;
            mostInView = currSection;
        }
    }
    return mostInView;
}


let isNavmenuScrollListenerRunning = false;
let yUnhideNavmenu;

// Unhide navmenu
function unhideNavmenu() {
    const navmenu = document.getElementById('navmenu-mobile');
    const navmenuItems = document.querySelectorAll('.navmenu-item');
    // cancel scroll listener if it is running
    if (isNavmenuScrollListenerRunning) {
        window.removeEventListener('scroll', navmenuScrollListener);
        isNavmenuScrollListenerRunning = false;
    }
    // unhide navmenu
    if (navmenu.classList.contains('hidden')) {
        navmenu.classList.remove('hidden');
        navmenuItems.forEach(item => {
            if (!item.classList.contains('selected')) {
                item.classList.remove('hidden');
            }
        })
        // start navmenu scroll listener
        yUnhideNavmenu = window.scrollY;
        window.addEventListener('scroll', navmenuScrollListener);
        isNavmenuScrollListenerRunning = true;
    }
}

// Hide navmenu
function hideNavmenu() {
    const navmenu = document.getElementById('navmenu-mobile');
    const navmenuItems = document.querySelectorAll('.navmenu-item');
    // cancel scroll listener if it is running
    if (isNavmenuScrollListenerRunning) {
        window.removeEventListener('scroll', navmenuScrollListener);
        isNavmenuScrollListenerRunning = false;
    }
    // hide navmenu
    if (!navmenu.classList.contains('hidden')) {
        navmenu.classList.add('hidden');
        navmenuItems.forEach(item => {
            if (!item.classList.contains('selected')) {
                item.classList.add('hidden');
            }
        })    
    }
}

// Function that closes the navmenu if user scrolls more than 200px
function navmenuScrollListener() {
    const navmenu = document.getElementById('navmenu-mobile');
    const navmenuItems = document.querySelectorAll('.navmenu-item');
    if (Math.abs(yUnhideNavmenu - window.scrollY) >= 200) {
        // hide navmenu
        if (!navmenu.classList.contains('hidden')) {
            navmenu.classList.add('hidden');
            navmenuItems.forEach(item => {
                if (!item.classList.contains('selected')) {
                    item.classList.add('hidden');
                }
            })    
        }
    }
}

// Handle navmenu item clicks

function handleAboutMeClick() {
    const navmenu = document.getElementById('navmenu-mobile');
    if (navmenu.classList.contains('hidden')) { unhideNavmenu(); }
    else { 
        scrollToTop(); 
        hideNavmenu();
    }
}

function handleProjectsClick() {
    const navmenu = document.getElementById('navmenu-mobile');
    if (navmenu.classList.contains('hidden')) { unhideNavmenu(); }
    else { 
        scrollToProjects(); 
        hideNavmenu();
    }

}

function handleWorkClick() {
    const navmenu = document.getElementById('navmenu-mobile');
    if (navmenu.classList.contains('hidden')) { unhideNavmenu(); }
    else { 
        scrollToWork(); 
        hideNavmenu();
    }
}

function handleContactClick() {
    const navmenu = document.getElementById('navmenu-mobile');
    if (navmenu.classList.contains('hidden')) { unhideNavmenu(); }
    else { 
        scrollToContact(); 
        hideNavmenu();
    }
}
