const api = "api_key=000033f9c67f3e074279606186b782d4";
const base_url ="https://api.themoviedb.org/3";
const banner_url ="https://image.tmdb.org/t/p/original";
const img_url ="https://image.tmdb.org/t/p/w300";

const requests = {
    
    fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
   fetchNetflixOriginals: `${base_url}/discover/tv?${api}&with_networks=213`,
    fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
    fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
    fetchTVMovies: `${base_url}/discover/movie?${api}&with_genres=10770`,
    fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
    fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,
};

function truncate(str, n){
    return str?.length > n ? str.substr(0, n-1)+ "..." : str ;
}
//banner
fetch(requests.fetchNetflixOriginals)
  .then((res) => res.json())

  .then((data) => {
    console.log(data.results);
    const setMovie = 
        data.results[Math.floor(Math.random() * data.results.length - 1)];

        var banner = document.getElementById("banner");
        var banner_Title = document.getElementById("banner_title");
        var banner_Desc = document.getElementById("banner_description");

       

        banner.style.backgroundImage  =
          "url(" + banner_url + setMovie.backdrop_path + ")";
        banner_Desc.innerHTML = truncate(setMovie.overview, 150);
        banner_Title.innerHTML = setMovie.name;
        console.log("setMoviename");
  });

    fetch(requests.fetchNetflixOriginals)
    .then((res) => res.json())
  
  
    .then((data) => {
      const headrow = document.getElementById("headrow");
      const row = document.createElement("div");
  
      row.className = "row";
      row.classList.add("netflixrow");
  
      headrow.appendChild(row);
  
      const title = document.createElement("h2");
  
      title.className = "row_title";
      title.innerHTML = "Netflix Orginals";
  
      row.appendChild(title);
  
      const rowPosters = document.createElement("div");
      rowPosters.className = "row_posters";
      row.appendChild(rowPosters);
  
  
  
      data.results.forEach(movie => {
        
        const poster = document.createElement("img");
        poster.className = "row_PosterLarge";
  
        var s = movie.name.replace(/\s+/g, "");
  
        poster.id = s;
        poster.src = img_url  + movie.poster_path;
        rowPosters.appendChild(poster);
      });
  
    }); 

 //trending
 fetch(requests.fetchTrending)
 .then((res)=> res.json())

 .then((data)=>{
     const headrow= document.getElementById("headrow");
     const row= document.createElement("div");


     row.className ="row";
     headrow.appendChild(row);

     const title=document.createElement("h2");

     title.className= "row_title";
     title.innerText="Trending Now";

     row.appendChild(title);
     
     const row_posters=document.createElement("div");
     row_posters.className="row_posters";
     row.appendChild(row_posters);

     data.results.forEach((movie)=> {

     const poster=document.createElement("img");
     poster.className="row_posterLarge";

     var s2=movie.id;

     poster.id=s2;
     poster.src=img_url + movie.poster_path;
     row_posters.appendChild(poster);
     });
 });

 //Action movie
 fetch(requests.fetchActionMovies)
 .then((res)=> res.json())

 .then((data)=>{
     const headrow= document.getElementById("headrow");
     const row= document.createElement("div");


     row.className="row";
     headrow.appendChild(row);

     const title=document.createElement("h2");
     title.className= "row_title";
     title.innerText="Action Movies";

     row.appendChild(title);
     
     const row_posters=document.createElement("div");
     row_posters.className="row_posters";

     row.appendChild(row_posters);

     data.results.forEach((movie)=> {

     const poster=document.createElement("img");
     poster.className="row_posterLarge";

     var s2=movie.id;
     poster.id=s2;
     poster.src=img_url + movie.backdrop_path;
     row_posters.appendChild(poster);

     });
 });

 //comedy movies
 fetch(requests.fetchComedyMovies)
 .then((res)=> res.json())

 .then((data)=>{
     const headrow= document.getElementById("headrow");
     const row= document.createElement("div");


     row.className="row";
     headrow.appendChild(row);

     const title=document.createElement("h2");
     title.className= "row_title";
     title.innerText="Comedy Movies";
     row.appendChild(title);
     
     const row_posters=document.createElement("div");
     row_posters.className="row_posters";
     row.appendChild(row_posters);

     data.results.forEach((movie)=> {
     const poster=document.createElement("img");
     poster.className="row_posterLarge";
     var s2=movie.id;
     poster.id=s2;
     poster.src=img_url + movie.backdrop_path;
     row_posters.appendChild(poster);
     });
 });
 fetch(requests.fetchTVMovies)
 .then((res)=> res.json())

 .then((data)=>{
     const headrow= document.getElementById("headrow");
     const row= document.createElement("div");


     row.className="row";
     headrow.appendChild(row);

     const title=document.createElement("h2");
     title.className= "row_title";
     title.innerText="TV  Movies";
     row.appendChild(title);
     
     const row_posters=document.createElement("div");
     row_posters.className="row_posters";
     row.appendChild(row_posters);

     data.results.forEach((movie)=> {

     const poster=document.createElement("img");
     poster.className="row_posterLarge";

     var s2=movie.id;
     
     poster.id=s2;
     poster.src=img_url + movie.backdrop_path;
     row_posters.appendChild(poster);


     });
 });

//horror movies
 fetch(requests.fetchHorrorMovies)
 .then((res)=> res.json())

 .then((data)=>{
     const headrow= document.getElementById("headrow");
     const row= document.createElement("div");


     row.className="row";
     headrow.appendChild(row);

     const title=document.createElement("h2");
     title.className= "row_title";
     title.innerText="Horror Movies";
     row.appendChild(title);
     
     const row_posters=document.createElement("div");
     row_posters.className="row_posters";
     row.appendChild(row_posters);

     data.results.forEach((movie)=> {
     const poster=document.createElement("img");
     poster.className="row_posterLarge";
     var s2=movie.id;
     poster.id=s2;
     poster.src=img_url + movie.backdrop_path;
     row_posters.appendChild(poster);
     });
 });

 //documenty
 fetch(requests.fetchDocumentaries)
 .then((res)=> res.json())

 .then((data)=>{
     const headrow= document.getElementById("headrow");
     const row= document.createElement("div");


     row.className="row";
     row.classList.add("popularrow");
     headrow.appendChild(row);

     const title=document.createElement("h2");
     title.className= "row_title";
     title.innerText="Documentaries";
     row.appendChild(title);
     
     const row_posters=document.createElement("div");
     row_posters.className="row_posters";
     row.appendChild(row_posters);

     data.results.forEach((movie)=> {
     const poster=document.createElement("img");
     poster.className="row_posterLarge";
     var s2=movie.id;
     poster.id=s2;
     poster.src=img_url + movie.backdrop_path;
     row_posters.appendChild(poster);
     });
 });

