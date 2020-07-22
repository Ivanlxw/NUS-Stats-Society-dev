import HeaderModel from "./js/model/header";
import ContentModel from "./js/model/content";
import SocialMedia from './js/model/socialMedia';

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

const contents = new ContentModel();


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