// Collapse navmenu dropdown if click outside
window.addEventListener('click', event => {
    const navmenu = document.getElementById('navmenu-mobile');
    const navmenuItems = document.querySelectorAll('.navmenu-item');
    if (!navmenu.classList.contains('hidden')) {
        if (event.target != navmenu &&
            event.target.parentNode != navmenu &&
            event.target.parentNode.parentNode != navmenu) {
            // collapse
            navmenu.classList.add('hidden');
            navmenuItems.forEach(item => {
                if (!item.classList.contains('selected')) {
                    item.classList.add('hidden');
                }
            })
        }
    }
});

// Switch to current section on scroll
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
        if (currInViewAmount >= mostInViewAmount) {
            mostInViewAmount = currInViewAmount;
            mostInView = currSection;
        }
    }
    return mostInView;
}

