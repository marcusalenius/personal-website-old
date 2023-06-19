// Apply hover effect to cards in card layout
for (const cardLayout of document.querySelectorAll('.card-layout')) {
    cardLayout.onmousemove = event => {
        for (const card of document.querySelectorAll('.card')) {
            const rect = card.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            card.style.setProperty('--mouseX', `${x}px`)
            card.style.setProperty('--mouseY', `${y}px`)
        }
    }
}

// Apply hover effect to hero-card
const heroCard = document.getElementById('hero-card')
heroCard.onmousemove = event => {
    const rect = heroCard.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    heroCard.style.setProperty('--mouseX', `${x}px`)
    heroCard.style.setProperty('--mouseY', `${y}px`)
}

// Apply hover effect to contact cards
for (const cardLayout of document.querySelectorAll('.contact-card-layout')) {
    cardLayout.onmousemove = event => {
        for (const card of document.querySelectorAll('.contact-card')) {
            const rect = card.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            card.style.setProperty('--mouseX', `${x}px`)
            card.style.setProperty('--mouseY', `${y}px`)
        }
    }
}

// Apply hover effect to nav-right navbuttons
document.getElementById('nav-right').onmousemove = event => {
    for (const navbutton of document.querySelectorAll('.navbutton')) {
        const rect = navbutton.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        navbutton.style.setProperty('--mouseX', `${x}px`)
        navbutton.style.setProperty('--mouseY', `${y}px`)
    }
}

// Apply hover effect to appearance drop-down
const appearanceDropDown = document.getElementById('appearance-drop-down')
appearanceDropDown.onmousemove = event => {
    const rect = appearanceDropDown.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    appearanceDropDown.style.setProperty('--mouseX', `${x}px`)
    appearanceDropDown.style.setProperty('--mouseY', `${y}px`)
}

// Apply hover effects to navbutton-home
const navbuttonHome = document.getElementById('navbutton-home')
navbuttonHome.onmousemove = event => {
    const rect = navbuttonHome.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    navbuttonHome.style.setProperty('--mouseX', `${x}px`)
    navbuttonHome.style.setProperty('--mouseY', `${y}px`)
}
