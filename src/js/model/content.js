import { renderContent } from "../view/contentView";

class EventModel {
    constructor() {
        this.state = {
            shown: null,
        }
    }

    addListeners() {
        // document.querySelector(".show-event-details").addEventListener('click', e => {
        //     const allCollapse = document.querySelectorAll(".collapse")
        //     if(this.state.shown != null) {
        //         allCollapse[this.state.shown].classList.toggle("show")
        //     }
        // })
        const allCards = document.querySelectorAll("#card-select")
        allCards.forEach((elem,index) => {
            elem.addEventListener("click", e => {
                this.state = {
                    ...this.state,
                    shown: index
                }
            })
        })
    }
}

class ContentModel {
    constructor() {
        this.state = {
            rendered: 'about-us',
        }
        this.eventModel = new EventModel();
        renderContent('about-us');
        this.addEventListeners();
    }

    addEventListeners() {
        document.querySelector('#mdc-tab-1').addEventListener('click', e=> {
            e.preventDefault();
            renderContent('about-us');
            this.state = {
                ...this.state,
                rendered: 'about-us'
            }
        });
        
        document.querySelector('#mdc-tab-2').addEventListener('click', e => {
            e.preventDefault();
            // some function
            renderContent('events');
            this.eventModel.addListeners();
            this.state = {
                ...this.state,
                rendered: 'events'
            }
        })
    }    
}

export default ContentModel;
