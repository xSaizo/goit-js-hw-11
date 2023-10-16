import {save, load} from "./storage.js"
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(updateCurrentTime, 1000));

function updateCurrentTime(data) {
  
  const currentTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
}

player.loadVideo("https://player.vimeo.com/video/236203659").then(() => {

  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime) {
    player.setCurrentTime(parseFloat(savedTime));
  }
});