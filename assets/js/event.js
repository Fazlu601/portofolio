const checkLocalStorage = (key, button, target) => {
    if(localStorage.getItem(key)){
        button.checked = true;
        target.classList.add('dark-mode');
    }else {
        button.checked = false;
        target.classList.remove('dark-mode');
    }
}

const makeNavActive = target => {
    target.forEach(nav => {
        if(nav.href == window.location.href){
            nav.classList.toggle('nav-active');
        }
    })
}

// const goToDarkMode = (toggle, target, key) => {
//     console.log(toggle, target, key);
//     if(toggle.checked) {
//         localStorage.setItem(key, true);
//         target.classList.add('dark-mode');
//     }else {
//         localStorage.removeItem(key);
//         target.classList.remove('dark-mode');
//     }
// }

export {checkLocalStorage, makeNavActive};