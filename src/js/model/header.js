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

    carouselDetails(active, imgPath, head, date, details) {
        if (active) {
            return `        
            <div class="carousel-item active">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-8">
                            <img src=${imgPath} class="d-block w-100" style="height:25rem;">
                        </div>
                        <div class="col-4">
                            <h4 class="carousel-info header-details">${head}</h4>
                            <p class="carousel-info sub-details">${date}</p>
                            <p class="carousel-info sub-details">${details}</p>
                        </div>
                    </div>
                </div>
            </div>
            `
        } else {
            return `
                <div class="carousel-item">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-8">
                                <img src=${imgPath} class="d-block w-100" style="height:25rem;">
                            </div>
                            <div class="col-4">
                                <h4 class="carousel-info header-details">${head}</h4>
                                <p class="carousel-info sub-details">${date}</p>
                                <p class="carousel-info sub-details">${details}</p>
                            </div>
                        </div>
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
                    "6 June 2020",
                    "Event Details"));
            } else {
                elem.insertAdjacentHTML("beforeend", this.carouselDetails(
                    false, 
                    imgPath, 
                    "Event title", 
                    "10 June 2020", 
                    "Details 2"));
            }
        });
    }
}