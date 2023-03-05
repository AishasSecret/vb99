import {PATH, location} from './shared/locations' 
import {links} from './shared/links'
import './style.scss';
import {user} from './components/main/main';

window.onload = () => {
    const pathURL = window.location.pathname
    switch (pathURL) {
        case location.main:
            links()
            user()
            break;
        case location.page1:
            links()
            break;
        case location.page2:
            links()
            break;
        case location.page3:
            links()
            break;
        case location.page4:
            links()
            break;
        default:
            window.location.href = PATH.main
            break;
        
    }
}