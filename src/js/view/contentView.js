import { elements } from '../base';
import { MDCTabBar } from '@material/tab-bar';

export const renderContent = () => {
    const markup = `
    <div class="mdc-tab-bar" role="tablist">
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
                    <span class="mdc-tab-indicator mdc-tab-indicator--active">
                        <span class="mdc-tab-indicator__content mdc-tab-indicator__content"></span>
                    </span>
                    <span class="mdc-tab__ripple"></span>
                </button>
            </div>
        </div>
    </div>
    `

    elements.main.insertAdjacentHTML('afterbegin', markup);
    const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar')); 
    const tabIndicator = new MDCTabIndicator(document.querySelector('.mdc-tab-indicator'));
}