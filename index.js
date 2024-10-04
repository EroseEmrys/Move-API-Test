function search() {
  alert("Searching...");
  let movie = document.getElementById("searchBar").value;
  console.log(movie);

  const htmlRequest = new XMLHttpRequest();
  htmlRequest.open("GET", "http://www.omdbapi.com/?apikey=1597bec9&t=" + movie);
  htmlRequest.responseType = "json";
  htmlRequest.send();

  htmlRequest.onload = function () {
    if (htmlRequest.status == 200) {
      let response = htmlRequest.response;
      console.log(response);

      if (response.Response === "True") {
        document.getElementById("content").innerHTML = `
            <h2>${response.Title}</h2>
            <p>${response.Plot}</p>
            <img src="${response.Poster}" alt="Movie Poster">
          `;
      } else {
        document.getElementById(
          "content"
        ).innerHTML = `<p>Movie not found!</p>`;
      }
    } else {
      document.getElementById(
        "content"
      ).innerHTML = `<p>Error fetching data!</p>`;
    }
  };
}
