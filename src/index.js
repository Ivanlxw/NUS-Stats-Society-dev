import { elements } from './js/base';
import { renderHeader } from './js/view/headerView';
import SocialMedia from './js/model/socialMedia';
import { renderIcons } from './js/view/socialMediaView';
import { renderContent } from './js/view/contentView';

const state = {};
/*
// Properties:
socialMedia - a List of social media and their ref
aboutUsActivated - boolean. true if active tab is 'about us'
*/

const tab = renderHeader();
state.aboutUsActivated = tab.active;

/*
 Content controller
*/

document.querySelector('#mdc-tab-1').addEventListener('click', e=> {
    // e.preventDefault();
    renderContent('about-us');
});

document.querySelector('#mdc-tab-2').addEventListener('click', e => {
    e.preventDefault();
    // some function
    console.log('events is clicked')
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
   renderIcons(elem); 
});