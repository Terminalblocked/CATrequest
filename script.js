const main = document.querySelector('.main');
const btns = document.querySelector('.main__buttons');
const catblock = document.querySelector('.main__cats');
const categoryURL = 'https://api.thecatapi.com/v1/categories';





function categoryRequest () {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', categoryURL);
    xhr.onload = (response) => {
        let answer = JSON.parse(response.target.response);
        answer.forEach(el => {
            let button = document.createElement('button')
            button.classList.add('btn');
            button.innerHTML = el.name;
            btns.appendChild(button);
            let num = el.id;
            let catsURL = ` https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${num} `
            catsRequest(catsURL);
            button.addEventListener('click', () => {
                num = el.id;
                catblock.innerHTML = '';
                catsRequest(catsURL);
            })
        });
    }
    xhr.send();
    
}
categoryRequest();


function catsRequest (url) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = (response) => {
        let answer = JSON.parse(response.target.response);
        answer.forEach(el => {
            let image = document.createElement('img');
            image.setAttribute('src', `${el.url}`);
            image.classList.add('cat');
            catblock.append(image);
        })
    }
    xhr.send();
}





