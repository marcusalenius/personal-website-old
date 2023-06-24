// Makes the tab-selected element clickable by pressing enter
window.addEventListener('keydown', event => {
    if (event.key === 'Enter' &&
        document.activeElement.getAttribute('tabindex') !== null) {
            document.activeElement.click();
    }
});