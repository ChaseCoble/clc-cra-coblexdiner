import mobApp from './apps/mobApp';
import dtApp from './apps/dtApp';

const mobAppVar = mobApp();
const dtAppVar = dtApp();

function DeviceFork() { 
  function vpdetect() {
    var height = window.innerHeight;
    var width = window.innerWidth;
    if (height <= 800) {
        if (width <= 400) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
  }
  if (vpdetect() === true) {
    return mobAppVar
    } else {
    return dtAppVar
    };    
}

export default DeviceFork;
