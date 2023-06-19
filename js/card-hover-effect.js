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
