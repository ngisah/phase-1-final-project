document.addEventListener("DOMContentLoaded", function () {
    const APIURL =
        "https://api.themoviedb.org/3/discover/movie?api_key=967a3d4be0fc593097976038fca7edfc";

    getMovies(APIURL);
    function getMovies(url) {
        fetch(url)
            .then((res) => res.json())
            .then((results) => displayMovies(results.results));
    }

    function displayMovies(movies) {
        const main = document.querySelector("#main");
        const img = "https://image.tmdb.org/t/p/w1280";
        main.innerHTML = "";

        movies.forEach((movie) => {
            const { poster_path, release_date, title, vote_average, overview } =
                movie;

            const movieDesc = document.createElement("div");

            movieDesc.classList.add("movie");

            movieDesc.innerHTML = `<img src="${img + poster_path}" alt="${title}"/>

            <div class="movie_info">
                <h3>${title}</h3>
                <span class="vote_average">Rating: ${vote_average}</span>
                <span class="release_date">Release date: ${release_date}</span>
            </div>
            <div class="overview">
                <h3>Overview:</h3>
                ${overview}
            </div>
        `;

            main.appendChild(movieDesc);
        });
    }

    const form = document.querySelector("#form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const searchAPI =
            "https://api.themoviedb.org/3/search/movie?&api_key=967a3d4be0fc593097976038fca7edfc&query=";
        const search = document.querySelector("#search");

        const searchValue = search.value;

        if (searchValue) {
            getMovies(searchAPI + searchValue);

            search.value = "";
        }
    });

    const post = document.querySelector("#post");
    post.addEventListener("click", function () {

        const commentBox = document.querySelector("#comment-box").value;
        commentBox.value=''
        const li = document.createElement("li");
        const text = document.createTextNode(commentBox);
        li.appendChild(text);
        document.getElementById("unordered").appendChild(li);
        
    });
});
