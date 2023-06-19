for (const cardLayout of document.querySelectorAll('.card-layout')) {
    cardLayout.onmousemove = event => {
        for (const card of document.querySelectorAll('.card')) {
            const rect = card.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`)
            card.style.setProperty('--mouse-y', `${y}px`)
        }
    }
}