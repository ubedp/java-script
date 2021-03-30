 
 //http://www.omdbapi.com/?s=tt3896198&apikey=c8ab329a


 let input=document.getElementById("search");
 input.addEventListener("keyup", e =>{
     if(e.keyCode===13){
     let value =e.target.value;
     SearchMovies(value);
     }
 });

 function  SearchMovies(searchText)

 {
     window.fetch(`http://www.omdbapi.com/?s=${searchText}&apikey=c8ab329a`)
     .then(data =>{
         //convert response body into json object
         data.json().then(movies =>{
             let moviedata=movies.Search;
             let output =[];
             for(let movie of moviedata)
             {
                 console.log(movie);
                 output +=`
                 <div>
                 <img src=${movie.Poster} alt=${movie.Title}/>
                 <h1>${movie.Title}</h1>
                 <p>${movie.Type}</p>
                 <p>${movie.Year}</p>
                 </div>
                 `;
             }
             document.getElementById("template").innerHTML=output;
         }).catch(err => console.log(err))
     })
     .catch(err=>console.log(err));

     console.log(searchText);
 }