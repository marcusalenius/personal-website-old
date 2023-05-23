function darkModeToggle() {
    let elements = document.querySelectorAll('.light-mode');
    if (elements.length !== 0) {
        elements.forEach((element) => {
            element.classList.remove('light-mode');
            element.classList.add('dark-mode');
        })
    }
    else {
        elements = document.querySelectorAll('.dark-mode');
        elements.forEach((element) => {
            element.classList.remove('dark-mode');
            element.classList.add('light-mode');
        })
    }
}