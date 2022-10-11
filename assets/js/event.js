// Function checkLocalStorage, for check if the toggle button is checked or not
const checkLocalStorage = (key, button, target) => {
    // If the key is exist, change button toggle checked and add class dark-mode in target element
    if(localStorage.getItem(key)){
        button.checked = true;
        target.classList.add('dark-mode');
    }
    // If key doesn't exist, change button toggle and remove class dark-mode in target element
    else {
        button.checked = false;
        target.classList.remove('dark-mode');
    }
}

// Function makeNavActive to set button nav active if the button nav url is the same url as current window url.
const makeNavActive = target => {
    target.forEach(nav => {
        if(nav.href == window.location.href){
            nav.classList.toggle('nav-active');
        }
    })
}

export {checkLocalStorage, makeNavActive};