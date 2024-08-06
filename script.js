const apiKey = "a41cd5e1";

async function getMovie(title) {
  try {
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${title}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Movie not found");
      const div = document.querySelector("#output");
    }
    const movies = await response.json();
    const data = movies.Search;
    console.log(data)
    const div = document.querySelector("#output");
    div.innerHTML = "";
    data.forEach((movie) => {
      const title = movie.Title;
      const poster = movie.Poster;
      const movieDiv = document.getElementById("output");
      const div = document.createElement("div");
      div.classList.add("card");
      const img = document.createElement("img");
      img.classList.add("poster");
      img.src = poster;
      img.alt = title;
      const h2 = document.createElement("h2");
      h2.classList.add("title");
      h2.textContent = title;
      const p = document.createElement("p");
      p.classList.add("year");
      p.textContent = "Release Date: " + movie.Year;
      div.appendChild(img);
      div.appendChild(h2);
      div.appendChild(p);
      movieDiv.appendChild(div);
    });
  } catch (error) {
    console.error(error);
  }
}

document.querySelector("#submit").addEventListener("click", () => {
  const title = document.querySelector("#search").value;
  getMovie(title);
  document.querySelector("#output").style.visibility = "visible";
});

{
  /* <div class="card">
    <img class="poster" src="" alt="">
    <h2 class="title">Movie Title</h2>
    <p class="year">Release Date: 2020-01-01</p>
</div> */
}
