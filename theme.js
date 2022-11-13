/*  This JavaScript file will give my site the functionality to change theme colors. */


document.addEventListener('loadstart', event => {
    if (localStorage.getItem('theme') == "NULL") {
        changeTheme('default');
    }
    else {
        changeTheme(JSON.parse(localStorage.getItem("theme")));
    }
})

function changeTheme(bright) {
    console.log(bright);
    //localStorage.setItem('theme', JSON.stringify(theme));
}

changeTheme(bright);

// Bright Theme colors from Colormind Palette Generator
const carrera ='#F4F4F1';
const scooter = '#27AECD';
const flamingo = '#EF602A';
const tuliptree = '#EBBA3A';
const shark = '#272B2F';

let bright = {
    "theme-name": "bright",
    "main-color": flamingo,
    "light-color": carrera,
    "dark-color": shark,
    "accent-color-1": scooter,
    "accent-color-2": tuliptree,
}
