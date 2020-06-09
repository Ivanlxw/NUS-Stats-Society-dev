import { headerComponent } from "../view/headerView";

export default class HeaderModel {
    constructor() {
        this.tab = this.renderHeader();
        this.addDetailstoCarousel();
    }

    renderHeader() {
        return headerComponent();
    }

    getTab() {
        return this.tab;
    }

    carouselDetails(active, imgPath, head, sub) {
        console.log(head)
        if (active) {
            return `        
            <div class="carousel-item active">
                <img src=${imgPath} class="d-block w-100" style="height:25rem;">
                <div class="carousel-caption d-none d-md-block">
                    <h4 class="carousel-info header-details">${head}</h4>
                    <p class="carousel-info sub-details">${"6 June 2020"}</p>                
                </div>
            </div>
            `
        } else {
            return `
            <div class="carousel-item">
                <img src=${imgPath} class="d-block w-100" style="height:25rem;">
                <div class="carousel-caption d-none d-md-block">
                    <h4 class="carousel-info header-details">${head}</h4>
                    <p class="carousel-info sub-details">${sub}</p>                
                </div>
            </div>
            `    
        }
    }

    addDetailstoCarousel() {
        const imagePaths = ["images/past-event1.jpg", "images/past-event1.jpg"];
        const elem = document.querySelector(".carousel-images");
        imagePaths.forEach((imgPath, index) => {
            if (index === 0) {
                elem.insertAdjacentHTML("beforeend", this.carouselDetails(
                    true, 
                    imgPath, 
                    "Welcome to NUS Statistics Society", 
                    "6 June 2020"));
            } else {
                elem.insertAdjacentHTML("beforeend", this.carouselDetails(false, imgPath, "", ""));
            }
        });
    }
}