const navButton = document.querySelectorAll('a.nav-links');

    navButton.forEach((item)=> {
        
                if(item.href == window.location.href){
                   item.classList.toggle('nav-active');
                }
    
    });


async function getArticle() {
    const response = await fetch('http://api.mediastack.com/v1/news?access_key=81b9b357102884bb39214d5b35ffac00');
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }
    const data = await response.json();
    return data;
}

    getArticle().then(data => {
        data.data.forEach((item)=> {
            console.log(item);
           const parent = document.getElementById('article');
           let text = `<div class="card project">
                            <img src="${item.image}" alt="">
                            <div class="card-description">
                                <h3 class="card-title">${item.title}</h3>
                                <p class="card-desc">Author: ${item.author}</p>
                                <p class="card-desc">Update: ${item.published_at}</p>
                                <p class="card-desc">${item.description}</p>
                                <a href="${item.url}" target="_blank" class="btn-outline w-100">View More <span class="fa fa-search"></span> </a>
                            </div>
                        </div>`
           parent.insertAdjacentHTML('afterbegin', text);
        });
    }).catch(error => {
        error.message; // 'An error has occurred: 404'
      });       



