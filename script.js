const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('search-box');
const searchResult = document.getElementById('search-result');
const showMore = document.getElementById('show-more');

let keyword = '';
let page=1;

async function searchImages(){
    keyword= searchBox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&per_page=12&client_id=KIZKAd4krpcjPM21TiH0VY3tUY761BQ9_Q1IgP1FSg0`

    const response= await fetch(url);
    const data = await response.json();

    if(page==1){
        searchResult.innerHTML ='';
    }

    const results =data.results;
    results.map((result)=>{
        const image = document.createElement('img');
        image.src = result.urls.small;
        const imgLink = document.createElement('a');
        imgLink.href = result.links.html;
        imgLink.target = '_blank';

        imgLink.appendChild(image);
        searchResult.appendChild(imgLink);

    })
    showMore.style.display='block';

}
searchForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    page=1;
    searchImages();
})

showMore.addEventListener('click', ()=>{
    page++;
    searchImages();
})