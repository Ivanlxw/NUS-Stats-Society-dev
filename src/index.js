import HeaderModel from "./js/model/header";
import SocialMedia from './js/model/socialMedia';
import { renderContent } from './js/view/contentView';

const state = {};
const Header = new HeaderModel();

/*
// Properties:
socialMedia - a List of social media and their ref
aboutUsActivated - boolean. true if active tab is 'about us'
*/

state.aboutUsActivated = Header.getTab().active;

/*
 Content controller
*/

renderContent('about-us')

document.querySelector('#mdc-tab-1').addEventListener('click', e=> {
    // e.preventDefault();
    renderContent('about-us');
});

document.querySelector('#mdc-tab-2').addEventListener('click', e => {
    e.preventDefault();
    // some function
    renderContent('events');
})

/*
 Social Media footer controller
*/

if(!state.socialMedia) {
    const sm = new SocialMedia();   
    state.socialMedia = sm.getSocialMedia();
}

state.socialMedia.forEach(elem => {
   SocialMedia.getIcons(elem); 
});