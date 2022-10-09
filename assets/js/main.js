import { DARK_KEY, showArticles } from "./data.js";
import { checkLocalStorage, makeNavActive} from "./event.js";

const toggleDark = document.getElementById('toggle-dark-mode');
const navButton = document.querySelectorAll('a.nav-links');
const body = document.body;
const parent = document.getElementById('article');

checkLocalStorage(DARK_KEY, toggleDark, body);

//nav active toggle
makeNavActive(navButton);

//Toggle dark mode
toggleDark.onclick = () => {
    if(toggleDark.checked) {
        localStorage.setItem(DARK_KEY, true);
        body.classList.add('dark-mode');
    }else {
        localStorage.removeItem(DARK_KEY);
        body.classList.remove('dark-mode');
    }
};

parent.insertAdjacentHTML('afterbegin', showArticles());




