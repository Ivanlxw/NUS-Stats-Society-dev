import { elements } from '../base';

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

// list of lists: each item should be [name, image, description]
const comms = [
    ["Publicity", "images/StatsSocLogo.jpg", "The publicity unit designs posters, publicizes events, does event photography and keeps members as well as followers updated about internship openings and upcoming events on social media. Not only that, the team shares amazing articles about Data Science and Statistics on Facebook and LinkedIn on a weekly basis. Also, the team has web developers whose job isn't just to update and manage our official website, but also to create web pages specially for Data Science Competition, the annual flagship event of our society."],
    ["Team Experience", "images/photoshoots/team%20experience.JPG", "The TeamXP Unit organizes exclusive members-only events such as BBQ, movie nights, steamboat dinner, etc. with the primary goal of bonding members and creating a sense of belonging within the society. The team also puts in collective efforts to encourage members with birthday messages and providing snacks during societal meetings. The team believes in the motto: “Happy members lead to greater commitment and better results”, and their ultimate goal is to bring the 'society' in NUS Statistics Society to life."],
    ["Marketing", "", "The Marketing Unit focuses on outreach to expand our society’s name across NUS as well as the working industry. They work on a week-to-week basis to find long-term publicity or event partners that have an interest to work with the society in our cause. These partners can be companies, or even student-led clubs in NUS. The team also finds dedicated sponsors for the society’s large-scale events such as the NUS Data Science Competition, and the Math and Stats Orientation Camp."],
    ["Career", "", "The Career Unit organises career-based events such as career talks, interview workshops, networking events, etc. that help NUS students better prepare for their future careers. These events target students who are interested in statistics or data science and analytics, and focus on industries where data science is playing an increasingly important role. The team cooperates closely with career consulting companies to ensure that the events cover a wide range of topics, including but not limited to analysis and forecasts of the industry, advice on technical and soft skill development, and tips for passing assessments in the hiring process."], 
    ["Science Events", "", "The Science Events Unit cooperates with the Science Club in their goal of increasing the vibrancy of the Faculty of Science, by holding various events throughout the academic year, including Halloween, Valentine’s Day, Science Day and Science Open Day. During these events, the team will prepare a booth, provide sales of our society’s products, carry out fun games, and introduce our society to the audience. Come and have a look at our booth during the next event!"],
    ["Workshops", "", "The Workshop Unit organises workshops on topics related to data science and statistics. There will be special workshops only for society members, as well as larger scale workshops open to all NUS students. The team also works with companies which are interested to host their own technical workshops for our students. Examples of past events include workshops for the data science project workflow, SQL, and machine learning with Scikit-learn."],
    ["Data Science Competion", "", "The Data Science Competition Unit is in charge of the NUS Data Science Competition (DSC), our annual flagship event of the NUS Statistics society. It is open to all the undergraduates and polytechnic students of Singapore. The team is responsible for the end to end execution of this event and work with various other teams of the society in getting sponsors, dataset partners, conducting student workshops, event publicity within NUS & other colleges/institutions across Singapore and finally, planning the grand finale."]
]

export const renderContent = mode => {
    console.log(mode);
    if (mode == "about-us") {
        const markup = `        
            <div class="container" style="margin:5%;">
                <h1 class="about-us-header" style="color:orange; text-align:center;">About Us</h1>
                <p class="about-intro">The ellipses that are centered around βˆ represent regions of constant
                RSS. In other words, all of the points on a given ellipse share a common
                value of the RSS. As the ellipses expand away from the least squares coefficient estimates, the RSS increases. Equations (6.8) and (6.9) indicate
                that the lasso and ridge regression coefficient estimates are given by the
                first point at which an ellipse contacts the constraint region. Since ridge
                regression has a circular constraint with no sharp points, this intersection
                will not generally occur on an axis, and so the ridge regression coefficient
                estimates will be exclusively non-zero. However, the lasso constraint has
                corners at each of the axes, and so the ellipse will often intersect the constraint region at an axis. When this occurs, one of the coefficients will equal
                zero. In higher dimensions, many of the coefficient estimates may equal zero
                simultaneously. In Figure 6.7, the intersection occurs at β1 = 0, and so the
                resulting model will only include β2.</p>
            </div>
            
            <div class="container" style="margin:3%;">
                <h1 class="about-us-header" style="text-align:center;color:orange;">
                    Committees
                </h1>

                ${comms.map(elem => commTemplate(elem[0],elem[1],elem[2]))}
            </div>
        `
        elements.main.innerHTML = markup
    } else {
        const markup = `
            okay
        `
        elements.main.innerHTML = markup;
    }
}