import { elements } from '../base';
import { MDCTabBar } from '@material/tab-bar';
import {MDCTab} from '@material/tab';

export const renderHeader = () => {
    const markup = `
    <div id="logo" class="container-fluid" style="text-align: center;">
        <a href="index.html">
        <img src="images/stats_soc_transparent_black words.png" width="200" height="200" alt="not loaded...">
        </a>
    </div>

    <div class="mdc-tab-bar" role="tablist">
        <div class="mdc-tab-scroller">
            <div class="mdc-tab-scroller__scroll-area">
                <div class="mdc-tab-scroller__scroll-content">
                    <button class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0">
                        <span class="mdc-tab__content">
                            <span class="mdc-tab__icon material-icons" aria-hidden="true">info</span>
                            <span class="mdc-tab__text-label"><b>About Us</b></span>
                        </span>
                        <span class="mdc-tab-indicator mdc-tab-indicator--active">
                            <span class="mdc-tab-indicator__content mdc-tab-indicator__content"></span>
                        </span>
                        <span class="mdc-tab__ripple"></span>
                    </button>
                    <button class="mdc-tab mdc-tab" role="tab" aria-selected="false" tabindex="0">
                        <span class="mdc-tab__content">
                            <span class="mdc-tab__icon material-icons" aria-hidden="true">event</span>
                            <span class="mdc-tab__text-label"><b>Events</b></span>
                        </span>
                        <span class="mdc-tab-indicator mdc-tab-indicator">
                            <span class="mdc-tab-indicator__content mdc-tab-indicator__content"></span>
                        </span>
                        <span class="mdc-tab__ripple"></span>
                    </button>
                </div>
            </div>
        </div>
    </div>


    <div id="containder-fluid" style="height:15%; margin:4%">
        <div id="carouselEvents" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="images/past-event1.jpg" class="d-block w-100" style="height:25rem;">
                </div>
                <div class="carousel-item">
                    <img src="images/past-event1.jpg" class="d-block w-100" style="height:25rem;">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselEvents" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselEvents" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div> 
    </div>
    `
    elements.header.insertAdjacentHTML('afterbegin', markup);
    const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar')); 
    const tab = new MDCTab(document.querySelector('.mdc-tab'));    
    return tab;  // returns the tab object of 'About Us'
}