import { elements } from '../base';

export const renderHeader = () => {
    const markup = `
    <div id="logo" class="container-fluid" style="text-align: center;">
        <a href="index.html">
        <img src="images/stats_soc_transparent_black words.png" width="200" height="200" alt="not loaded...">
        </a>
    </div>

    <div id="containder-fluid" style="height:15%">
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
}