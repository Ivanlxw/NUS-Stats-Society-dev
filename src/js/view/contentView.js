import { elements } from '../base';
import {MDCRipple} from '@material/ripple';
import {comms, aboutUs} from '../model/committee';
import { getEvents } from '../model/events';

let filteredData = getEvents()

const commTemplate = (name, src, desc) => {
    const commiteeHTML = `
        <div style="margin-top:4%;">
            <h4 class="committees-header">${name}</h4>            
            <div class="row">
                <div class="col-4">
                    <img class="comm-img" src=${src} alt=${name} style="max-width:100%">            
                </div>
                <div class="col-8">
                    <p class="comm-descrip">${desc}</p>            
                </div>
            </div>        
        </div>
    `
    return commiteeHTML;
}


const cardTemplate = (date, event, details, link) => {
    const eventHTML = `
    <div class="col" style="margin:2%;">
        <div class="mdc-card demo-card" style="height:20%; width:350px;">
            <div class="mdc-card__primary-action demo-card__primary-action mdc-ripple-upgraded" tabindex="0" style="height:12%;">
                <div class="demo-card__primary">
                    <h2 class="demo-card__title mdc-typography mdc-typography--headline6">${event}</h2>
                    <h3 class="demo-card__subtitle mdc-typography mdc-typography--subtitle2">Date: ${date}</h3>
                </div>
                <div class="demo-card__secondary mdc-typography mdc-typography--body2">${details}</div>
            </div>
            <div class="mdc-card__actions">
                <!-- IF YOU WANT TO IMPLEMENT SHARE FUNCTION -->
                <div class="mdc-card__action-icons">
                    <button class="mdc-icon-button material-icons mdc-card__action mdc-card__action--icon--unbounded" title="share" data-mdc-ripple-is-unbounded="true">share</button>     
                    ${
                        link != "" ? `
                        <a href=${link}>
                            <button class="mdc-icon-button material-icons mdc-card__action mdc-card__action--icon--unbounded" title="Link to website" data-mdc-ripple-is-unbounded="true">public</button>
                        </a>
                        ` : ""
                    }              
                </div>
            </div>
        </div>
    </div>
    `
    return eventHTML;
}

export const renderContent = mode => {
    if (mode == "about-us") {
        const markup = `        
            <div class="container">
                <h1 class="about-us-header" style="color:orange; text-align:center;">About Us</h1>
                <p class="about-intro">${aboutUs}</p>
            </div>
            
            <div class="container">
                <h1 class="about-us-header" style="text-align:center;color:orange;">
                    Committees
                </h1>

                ${comms.map(elem => commTemplate(elem[0],elem[1],elem[2]))}
            </div>
        `
        elements.main.innerHTML = markup
    } else if (mode == 'events') {
        const markup = `
            <h1 class="about-us-header" style="color:orange; text-align:center; margin: 3%">UPCOMING EVENTS</h1>
            <div class="container"> 
                    ${
                        filteredData.map(ent => {
                            return(cardTemplate(ent.date, ent.event, ent.details, ent.link))
                        })
                    }       
            </div>
            
        `
        elements.main.innerHTML = markup;
        const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
        const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
            return new MDCRipple(el);
        });   
    }
}

// ${cardTemplate('11-3-2019', 'Exam Collection Pack', 'Collect at S16!', 'www.')}
// ${cardTemplate('11-3-2019', 'Exam Collection Pack', 'Collect at S16!', '')}     