async function getTrendingMoviesPreview (){
    const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY);
    const data = await res.json();

    const movie = data.results;
    console.log({data, movie});
    movie.forEach(movie =>{
        const tredingPreviewMoviesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList')
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src', `https://image.tmdb.org/t/p/w300/${movie.poster_path}`);
        movieContainer.appendChild(movieImg); 
        tredingPreviewMoviesContainer.appendChild(movieContainer); 
    });
    console.log(movie[0].poster_path);
    

}
getTrendingMoviesPreview();