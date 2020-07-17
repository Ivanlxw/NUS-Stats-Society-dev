import { elements } from '../base';
import {comms, aboutUs} from '../model/committee';
import { getEvents } from '../model/eventData';

import { MDCRipple } from '@material/ripple';
import "./contentView.css";

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

const linkIcon = (link) => (
    `
    <a href=${link}>
        <button class="mdc-icon-button material-icons mdc-card__action mdc-card__action--icon--unbounded" title="Link to website" data-mdc-ripple-is-unbounded="true">public</button>
    </a>
    `
)

const cardTemplate = (date, event, details, link) => {
    const eventHTML = `
        <div class="col-sm-4" style="margin-bottom:2%;">
            <div class="mdc-card demo-card">
                <div class="mdc-card__primary-action demo-card__primary-action mdc-ripple-upgraded" tabindex="0" style="height:12%;">
                    <div class="demo-card__primary">
                        <h2 class="demo-card__title mdc-typography mdc-typography--headline6">${event}</h2>
                        <h3 class="demo-card__subtitle mdc-typography mdc-typography--subtitle2">Date: ${date}</h3>
                    </div>
                    <div class="demo-card__secondary mdc-typography mdc-typography--body2">${details}</div>
                </div>
                <div class="mdc-card__actions">
                    <div class="mdc-card__action-icons">
                        <button class="mdc-icon-button material-icons mdc-card__action mdc-card__action--icon--unbounded" title="Share" data-mdc-ripple-is-unbounded="true">share</button>     
                        ${
                            link != "" ?  linkIcon(link) : link
                        }              
                    </div>
                </div>
            </div>
        </div>
    `
    return eventHTML;
}

const bsCardTemplate = (date, event, details, link, index) => {
    const collapse = `
    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#accordionEvents">
        <div class="card-body">
            ${details}
            <div class="mdc-card__actions">
                <div class="mdc-card__action-icons">
                    <button class="mdc-icon-button material-icons mdc-card__action mdc-card__action--icon--unbounded" title="Share" data-mdc-ripple-is-unbounded="true">share</button>     
                    ${
                        link != "" ?  linkIcon(link) : link
                    }              
                </div>
            </div>
        </div>
    </div>
    `

    const test = `
    <div class="col-sm-4" style="margin-bottom:2%;">
        <div class="card" id="heading${index}">
            <div class="card-header" id="card-select">
            <h2 class="mb-0">
                <button style="color:black;" class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                    <h4 class="card-title">${event}</h4>
                    <h6 class="card-subtitle"> Date: ${date}</h6>  
                </button>
            </h2>
            </div>
        </div>
    </div>
    `

    // 
    const detailsButton = document.querySelector("#collapseView")
    detailsButton.insertAdjacentHTML("beforeend", collapse);
    return test;
}

export const renderContent = mode => {
    if (mode == "about-us") {
        let markup = `        
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
        let markup = `
            <h1 class="about-us-header" style="color:orange; text-align:center; margin: 3%">UPCOMING EVENTS</h1>
            <div class="container"> 
                <div id="accordionEvents">   
                <div class="card" id="collapseView">
                    <div class="card-header" id="heading">
                    <h2 class="mb-0">
                        <button class="btn btn-link show-event-details" type="button" data-toggle="collapse" data-target=".collapse" aria-expanded="true" aria-controls="collapse" style="width:100%">
                            <i class="material-icons mdc-button__icon" aria-hidden="true">local_activity</i>
                            <h3 class="mdc-button__label">Event Details</h3>
                        </button>
                    </h2>
                    </div>
                </div>
                    <div class="row row-cols-3" id="event-card"></div>
                </div>
            </div>
        `
        elements.main.innerHTML = markup;

        // add event-cards
        const upcomingEventsElem = document.querySelector("#event-card");
        filteredData.forEach((ent, index) => {
            upcomingEventsElem.insertAdjacentHTML("beforeend", bsCardTemplate(ent.date, ent.event, ent.details, ent.link,index));
        })

        // const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
        // const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
        //     return new MDCRipple(el);
        // });   
        // const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));
        // return ripples
    }
}