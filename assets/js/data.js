const DARK_KEY = 'DARK-MODE';

const articles = [
    {
        "author": "Lauren Simonds",
        "title": "Dragonfly GP talks web3’s current and future state at TC Sessions: Crypto",
        "description": "While the overall crypto markets have been in a rough spot lately, web3 venture capitalists have never had more conviction — or more funding at their disposal — to back startups and teams building in the space. The big question on their minds is whether token…",
        "url": "https://techcrunch.com/2022/10/09/dragonfly-gp-talks-web3s-current-and-future-state-at-tc-sessions-crypto/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/08/TC22_Sessions_Crypto_1200x628-schmidt.jpg",
        "publishedAt": "2022-10-09T14:34:47Z"
    },
    {
        "author": "Rita Liao",
        "title": "Elon Musk's X app for 'everything' might be a non-starter in the US",
        "description": "As Elon Musk again nears a deal to buy Twitter, speculation is resurfacing around how the billionaire plans to transform the social network. Musk’s tweet this week offered a clue: “Buying Twitter is an accelerant to creating X, the everything app.” While Musk…",
        "url": "https://techcrunch.com/2022/10/08/elon-musk-x-everything-wechat-tesla-app/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/04/elon-musk-GettyImages.jpg?resize=1200,803",
        "publishedAt": "2022-10-08T16:58:31Z",
    },
    {
        "author": "Mary Ann Azevedo",
        "title": "'Last year was the party. This year is the hangover.'",
        "description": "Index Ventures fintech lead Mark Goldberg believes that the funding frenzy we saw in 2021 has fizzled, and now we're just trying to recover.",
        "url": "https://techcrunch.com/2022/10/09/last-year-was-the-party-this-year-is-the-hangover/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/06/GettyImages-901690670.jpg?resize=1200,1050",
        "publishedAt": "2022-10-07T23:27:12Z",
    },
    {
        "author": "Alex Wilhelm",
        "title": "US VC funding is holding up, but globally things are far from fair",
        "description": "Is the good news from the U.S. venture capital market holding up elsewhere?",
        "url": "https://techcrunch.com/2022/10/08/us-vc-funding-is-holding-up-but-globally-things-are-far-from-fair/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/06/NSussman_Techcrunch_Exchange-multicolor.jpg?resize=1200,900",
        "publishedAt": "2022-10-07T21:56:29Z",
    },
    {
        "author": "Sarah Perez",
        "title": "This Week in Apps: Twitter gets an Edit button, Instagram increases ads, Google gets serious about wearables",
        "description": "Twitter gets an Edit button, Instagram increases ads and Google gets serious about wearables.",
        "url": "https://techcrunch.com/2022/10/08/this-week-in-apps-twitter-gets-an-edit-button-instagram-increases-ads-google-gets-serious-about-wearables/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/07/this-week-in-apps-splash-2022.webp?resize=1200,637",
        "publishedAt": "2022-10-07T21:28:03Z",
    },
    {
        "author": "Greg Kumparak",
        "title": "Elon Musk buying Twitter after all, the 'next Mark Zuckerberg' and fare thee well, Stadia",
        "description": "Welcome back to Week in Review, the newsletter where we quickly sum up some of the most read TechCrunch stories from the past seven days.",
        "url": "https://techcrunch.com/2022/10/08/elon-musk-buying-twitter-after-all-the-next-mark-zuckerberg-and-fare-thee-well-stadia/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/05/GettyImages-1236085489.jpg?resize=1200,927",
        "publishedAt": "2022-10-07T21:24:07Z",
    },
    {
        "author": "Natasha Mascarenhas",
        "title": "Toil and trouble and … startup acquisitions!",
        "description": "Welcome to Startups Weekly, a fresh human-first take on this week’s startup news and trends. To get this in your inbox, subscribe here. I think it took maybe three days after I roasted our rather dry M&A season for the news cycle to prove me wrong. This week …",
        "url": "https://techcrunch.com/2022/10/08/toil-and-trouble-and-startup-acquisitions/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/10/google-ar-ghost.jpg?resize=1200,675",
        "publishedAt": "2022-10-07T21:07:21Z",
    },
    {
    "author": "Rebecca Szkutak",
    "title": "Could corporates be good matchmakers for startups and VCs?",
    "description": "Cloudflare recently announced a $1.25 billion funding program for startups that use its Workers software with VCs footing the bill.",
    "url": "https://techcrunch.com/2022/10/08/could-corporates-be-good-matchmakers-for-startups-and-vcs/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/10/GettyImages-503315323.jpg?resize=1200,800",
    "publishedAt": "2022-10-07T19:44:40Z",
    },
    {
        "author": "Manish Singh",
        "title": "Pakistan central bank revokes pilot approval of YC-backed fintech Tag, orders to pull apps",
        "description": "Pakistan's central bank said its action is in response to Tag violating regulatory requirements and “other concerns.”",
        "url": "https://techcrunch.com/2022/10/07/tag-fintech-state-bank-of-pakistan/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/09/pakistan-tag.jpg?resize=1200,566",
        "publishedAt": "2022-10-07T18:46:32Z",
    },
    {
        "author": "Zack Whittaker",
        "title": "ACLU’s Jennifer Stisa Granick and Google’s Maddie Stone talk security and surveillance at Disrupt",
        "description": "Surveillance is a growing threat to privacy and civil liberties. Hear from leading experts to get a crash course on the surveillance state.",
        "url": "https://techcrunch.com/2022/10/08/aclus-jennifer-stisa-granick-and-googles-maddie-stone-talk-security-and-surveillance-at-disrupt/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/10/maddie_jennifer.jpg?resize=1200,675",
        "publishedAt": "2022-10-07T00:58:13Z",
    }
];

const showArticles = () => {
      let news =  articles.map(array => {
            let text = `<div class="card project">
            <img src="${array.urlToImage}" alt="">
            <div class="card-description">
                <h3 class="card-title">${array.title}</h3>
                <p class="card-desc">Author: ${array.author}</p>
                <p class="card-desc">Update: ${array.publishedAt}</p>
                <p class="card-desc pb-2">${array.description}</p>
                <a href="${array.url}" target="_blank" class="btn-outline w-100">View More <span class="fa fa-search"></span> </a>
            </div>
        </div>`;

        return text;
    });

    return news;
}

export {DARK_KEY, showArticles}
