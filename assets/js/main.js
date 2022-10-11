// Import const Key dark-mode and function showArticles from data.js
import { DARK_KEY, showArticles } from "./data.js";
// Import function checkLocalStorage and makeNavActive from event.js
import { checkLocalStorage, makeNavActive} from "./event.js";

// Get element from document html
const toggleDark = document.getElementById('toggle-dark-mode');
const navButton = document.querySelectorAll('a.nav-links');
const body = document.body;
const parent = document.getElementById('article');

// Call checkLocalStorage and send dark mode key, button event, and body for target styling to the argument.
checkLocalStorage(DARK_KEY, toggleDark, body);

// Call makeNavActive() and send navButton array to the argument.
makeNavActive(navButton);

// Toggle dark mode
toggleDark.onclick = () => {
    // if button checked set items to the local storage and add class dark-mode in body element
    if(toggleDark.checked) {
        localStorage.setItem(DARK_KEY, true);
        body.classList.add('dark-mode');
    }
    // remove items of the local storage if button check is not true or checked and set remove class dark-mode in body element
    else {
        localStorage.removeItem(DARK_KEY);
        body.classList.remove('dark-mode');
    }
};

// Call showArticles() and add for the second argument of insertAdjacentHTML to insert articles in parent element.
parent.insertAdjacentHTML('afterbegin', showArticles());




