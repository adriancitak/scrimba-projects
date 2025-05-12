const APIKey = '1c7d7fbe';
const inputEl = document.querySelector('input')
const btn = document.querySelector('button')
const moviesEl = document.querySelector('.movies')
const emptyEl = document.querySelector('.empty-logo')

const movie = 'Star wars'



async function fetchMovies() {
    try {
        const response = await fetch (`http://www.omdbapi.com/?apikey=${APIKey}&s=${inputEl.value}`);
        const json = await response.json();
        

        const detailedMoviesPromises = json.Search.map(async (movie) => {
            const detailResponse = await fetch(`http://www.omdbapi.com/?apikey=${APIKey}&i=${movie.imdbID}&plot=full`);
            return detailResponse.json();
        });
        
        const detailedMovies = await Promise.all(detailedMoviesPromises)

        console.log(detailedMovies[0])

        let moviesHTML = ''

        detailedMovies.forEach(movie => {

            // add an if statement and rewrite the plot description to end with ... and read more. Make it clickable 
            if (movie.Plot.length > 360){
                movie.Plot = movie.Plot.slice(0, 360) + '...';
            }
                    

            moviesHTML += `
            
            <div class = "movie-container">
                <div class = "movie-left-side">
                    <img src="${movie.Poster}" alt="movie poster of ${movie.Title}">
                </div>
                <div class = "movie-right-side">
                    <div class ="title-and-rating">
                        <p>${movie.Title}</p>
                        <p>⭐ ${movie.imdbRating}</p>
                    </div>
                    <div class = "runtime-genre-watchlist">
                        <p>${movie.Runtime}</p>
                        <p>${movie.Genre}</p>
                        <button>Watchlist</button>
                    </div>
                        <p>${movie.Plot}</p>
                        <p>${movie.Plot.length}</p>
                </div>
            </div>


            `

        })

        moviesEl.innerHTML = moviesHTML
        emptyEl.classList.toggle('hidden')
        

        
       


    } catch (error){
        console.error('Error: ', error)
    }
}

btn.addEventListener('click', fetchMovies)