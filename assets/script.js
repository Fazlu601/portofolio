const navButton = document.querySelectorAll('a.nav-links');

    navButton.forEach((item)=> {
        
                if(item.href == window.location.href){
                   item.classList.toggle('nav-active');
                }
    
    });


async function getArticle() {
    const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=66d0e8899e7740ce846aa4ba8ed7ea38');
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }
    const data = await response.json();
    return data;
}

function showArticle () {
    getArticle().then(data => {
        data.articles.forEach((item)=> {
           const parent = document.getElementById('article');
           let text = `<div class="card project">
                            <img src="${item.urlToImage}" alt="">
                            <div class="card-description">
                                <h3 class="card-title">${item.title}</h3>
                                <p class="card-desc">Author: ${item.author}</p>
                                <p class="card-desc">Update: ${item.publishedAt}</p>
                                <p class="card-desc">${item.description}</p>
                                <a href="${item.url}" target="_blank" class="btn-outline w-100">View More <span class="fa fa-search"></span> </a>
                            </div>
                        </div>`
           parent.insertAdjacentHTML('afterbegin', text);
        }).catch(error => {
            error.message; // 'An error has occurred: 404'
          });
    });
}

showArticle();

