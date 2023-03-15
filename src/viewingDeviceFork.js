import MobileApp from '../src/apps/mobileApp';
import DesktopApp from '../src/apps/desktopApp';
import '../src/styles/main.scss';


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
    return (
        < MobileApp />
    )
    } else {
    return (
        < DesktopApp />
    )
    };    
}

export default DeviceFork;
