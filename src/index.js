import generateJoke from './generateJoke';
import './style/main.scss';
import smiley from './assets/smiley-face.png';

const laughImage = document.getElementById('laugh');
laughImage.src = smiley;

console.log(generateJoke());