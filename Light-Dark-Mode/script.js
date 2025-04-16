const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

//Dark or Light Images
function imageMode(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src =`img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}


//Switch between Dark and Light depending on Whether isLight=true (Light Mode) or isLight=false (Dark Mode)
function toggleDarkLightMode(isLight) {
    nav.style.backgroundColor = isLight ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = isLight ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = isLight ? 'Light Mode' : 'DarkMode';
    isLight ? localStorage.setItem('theme', 'light') : localStorage.setItem('theme', 'dark');
    isLight ? toggleIcon.children[1].classList.replace('fa-moon', 'fa-soon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-soon');
    isLight ? imageMode('light') : imageMode('dark');
}

//Switch Theme Dynamically
function switchTheme(event) {
    if(event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleDarkLightMode(false);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        toggleDarkLightMode(true);
    }
}

//Event Listener
toggleSwitch.addEventListener('change', switchTheme);

//Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if(currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleDarkLightMode(false);
    }
}