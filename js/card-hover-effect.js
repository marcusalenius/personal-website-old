// Apply hover effect to cards in card layout
const cardLayouts = document.querySelectorAll('.card-layout');
if (cardLayouts !== null) {
    for (const cardLayout of cardLayouts) {
        cardLayout.onmousemove = event => {
            for (const card of document.querySelectorAll('.card')) {
                const rect = card.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;
                card.style.setProperty('--mouseX', `${x}px`);
                card.style.setProperty('--mouseY', `${y}px`);
            }
        }
    }    
}

// Apply hover effect to hero-card
const heroCard = document.getElementById('hero-card');
if (heroCard !== null) {
    heroCard.onmousemove = event => {
        const rect = heroCard.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        heroCard.style.setProperty('--mouseX', `${x}px`);
        heroCard.style.setProperty('--mouseY', `${y}px`);
    }    
}

// Apply hover effect to contact cards
const contactCardLayouts = document.querySelectorAll('.contact-card-layout');
if (contactCardLayouts !== null) {
    for (const contactCardLayout of contactCardLayouts) {
        contactCardLayout.onmousemove = event => {
            for (const card of document.querySelectorAll('.contact-card')) {
                const rect = card.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;
                card.style.setProperty('--mouseX', `${x}px`);
                card.style.setProperty('--mouseY', `${y}px`);
            }
        }
    }    
}

// Apply hover effect to nav-right navbuttons
const navRight = document.getElementById('nav-right');
if (navRight !== null) {
    navRight.onmousemove = event => {
        for (const navbutton of document.querySelectorAll('.navbutton')) {
            const rect = navbutton.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            navbutton.style.setProperty('--mouseX', `${x}px`);
            navbutton.style.setProperty('--mouseY', `${y}px`);
        }
    }    
}

// Apply hover effect to appearance drop-down
const appearanceDropDown = document.getElementById('appearance-drop-down');
if (appearanceDropDown !== null) {
    appearanceDropDown.onmousemove = event => {
        const rect = appearanceDropDown.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        appearanceDropDown.style.setProperty('--mouseX', `${x}px`);
        appearanceDropDown.style.setProperty('--mouseY', `${y}px`);
    }    
}

// Apply hover effect to navbutton-home
const navbuttonHome = document.getElementById('navbutton-home');
if (navbuttonHome !== null) {
    navbuttonHome.onmousemove = event => {
        const rect = navbuttonHome.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        navbuttonHome.style.setProperty('--mouseX', `${x}px`);
        navbuttonHome.style.setProperty('--mouseY', `${y}px`);
    }    
}

// Apply hover effect to navbutton-appearance in post pages
const navbuttonAppearance = document.getElementById('navbutton-appearance');
if (navbuttonAppearance !== null) {
    navbuttonAppearance.onmousemove = event => {
        const rect = navbuttonAppearance.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        navbuttonAppearance.style.setProperty('--mouseX', `${x}px`);
        navbuttonAppearance.style.setProperty('--mouseY', `${y}px`);
    }    
}

// Apply hover effect to navbutton-back in post pages
const navButtonBack = document.getElementById('navbutton-back');
if (navButtonBack !== null) {
    navButtonBack.onmousemove = event => {
        const rect = navButtonBack.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        navButtonBack.style.setProperty('--mouseX', `${x}px`);
        navButtonBack.style.setProperty('--mouseY', `${y}px`);
    }    
}

// Apply hover effect to navmenu-mobile
const navmenuMobile = document.getElementById('navmenu-mobile');
if (navmenuMobile !== null) {
    navmenuMobile.onmousemove = event => {
        const rect = navmenuMobile.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        navmenuMobile.style.setProperty('--mouseX', `${x}px`);
        navmenuMobile.style.setProperty('--mouseY', `${y}px`);
    }    

}