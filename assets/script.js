

async function getArticle() {
    const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=66d0e8899e7740ce846aa4ba8ed7ea38');
    const data = await response.json();
    return data;
}

function showArticle () {
    getArticle().then(data => {
        data.articles.forEach((test)=> {
            console.log(test.author, test.title);
           const parent = document.getElementById('article');
           let text = `<div class="card project">
                            <img src="${test.urlToImage}" alt="">
                            <div class="card-description">
                                <h3 class="card-title">${test.title}</h3>
                                <p class="card-desc">Author: ${test.author}</p>
                                <p class="card-desc">Update: ${test.publishedAt}</p>
                                <p class="card-desc">${test.description}</p>
                                <a href="${test.url}" target="_blank" class="btn-outline w-100">View More <span class="fa fa-search"></span> </a>
                            </div>
                        </div>`
           parent.insertAdjacentHTML('afterbegin', text);
        })
    });
}

showArticle();

const navButton = document.querySelectorAll('a.nav-links');
navButton.forEach((item)=> {
    
            if(item.href == window.location.href){
               item.classList.toggle('nav-active');
            }

});