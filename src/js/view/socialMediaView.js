import { elements } from '../base';

export const renderIcons = media => {
    const markup = `
        <a href=${media[1]}>
            <i class="fab fa-${media[0]} fa-2x" style="margin:3%"></i>
        </a>
    `

    elements.socialMedia.insertAdjacentHTML('beforeend', markup);
};

// Sample HTML for socialMedia at footer
{/* <a href="https://www.linkedin.com/company/nusstatssoc"><span class="icon-linkedin"></span></a>
<a href="#"><span class="icon-instagram"></span></a>
<a href="https://www.stat.nus.edu.sg/"><span class="icon-home2"></span></a> */}

// Should take in something like: 
//     [ 'facebook', 'https://www.facebook.com/nus.statistics.soc/' ],
