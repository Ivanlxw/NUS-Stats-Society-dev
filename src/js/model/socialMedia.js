const mediaWebLinks = {
    facebook : "https://www.facebook.com/nus.statistics.soc/",
    linkedin : "https://www.linkedin.com/company/nusstatssoc",
    instagram : "#"
}

export default class SocialMedia {
    constructor() {
        this.socialMediaList = [];
        this.append();
    }

    append() {
        Object.entries(mediaWebLinks).forEach(elem => {
            this.socialMediaList.push(elem);
        });
    }

    getSocialMedia() {
        return this.socialMediaList;
        // Should look sth like this:
        // [
        //     [ 'linkedin', 'https://www.linkedin.com/company/nusstatssoc' ],
        //     [ 'instagram', '#' ]
        //]
    }
}

// const sm = new SocialMedia();
// sm.getSocialMedia();
