import { elements } from './js/base';
import { renderHeader } from './js/view/headerView';
import SocialMedia from './js/model/socialMedia';
import { renderIcons } from './js/view/socialMediaView';
import { renderContent } from './js/view/contentView';

const state = {};

renderHeader();

/*
 Social Media footer controller
*/

if(!state.socialMedia) {
    const sm = new SocialMedia();   
    state.socialMedia = sm.getSocialMedia();
}

renderContent();

state.socialMedia.forEach(elem => {
   renderIcons(elem); 
});

console.log("Hello!");