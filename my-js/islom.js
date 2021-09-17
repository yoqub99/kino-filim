let elForm = document.querySelector("#form");
let elInput = document.querySelector("#input");
let elSelect = document.querySelector('#select')
let elList = document.getElementById("film");
let elModal = document.querySelector(".modal")

let removeClass = document.querySelector(".btn");
let searchBtn = document.querySelector(".form__btn");
let modalDownload = document.querySelector(".modal__download");

let modalWrite = document.querySelector(".modal__write")


searchBtn.addEventListener("click", () => {
   searchBtn.classList.add("jello-horizontal")
   let $el = searchBtn;
   setTimeout(function () {
      $el.classList.remove('jello-horizontal');
   }, 500);
})
modalDownload.addEventListener("click", () => {
   modalDownload.classList.add("jello-horizontal")
   let $el = modalDownload;
   setTimeout(function () {
      $el.classList.remove('jello-horizontal');
   }, 500);
})


//SELECT RENDER FUNCTION

function selectFunction(films, elem) {
   let result = [];
   films.forEach((film) => {
      film.genres.forEach((ganre) => {
         if (!result.includes(ganre)) {
            result.push(ganre)
         }
      })
   })
   
   result.forEach((ganre) => {
      const newOption = document.createElement("option");
      newOption.value = ganre;
      newOption.textContent = ganre;
      
      elem.appendChild(newOption);
   })
}

selectFunction(films, elSelect)

// HTML RENDER FUNCTION

function render(renderFilm){
   renderFilm.forEach((film) => {
      // let title = document.createElement("h3")
      let img = document.createElement("img");
      // let date = new Date(film.release_date);
      // let year = date.getFullYear();
      // let month = String(date.getMonth()).padStart(2, "0");
      // let day = date.getDate();
      // let fullYear = `${year}.${month}.${day}`;
      let newYearText = document.createElement("p");
      
      // let genres = document.createElement("p");
      let newButton = document.createElement("button");
      let newLi = document.createElement("li");
      
      // newYearText.classList.add("date");
      
      newButton.classList.add("info__btn");
      
      // title.textContent = film.title;
      img.setAttribute("src", film.poster);
      img.setAttribute("width", '200px');
      // newYearText.textContent = fullYear;
      // genres.textContent = film.genres;
      newButton.textContent = "More";
      newButton.dataset.uuid = film.id;
      
      // newLi.appendChild(title);
      newLi.appendChild(img);
      // newLi.appendChild(newYearText);
      // newLi.appendChild(genres);
      newLi.appendChild(newButton);
      elList.appendChild(newLi);
      
      
      newButton.addEventListener("click", (e) =>{
         let filmId = e.target.dataset.uuid;
         
         let x = renderFilm.find((e) => filmId == e.id)
         let modalText = document.querySelector(".modal__text");
         let modalTitle = document.querySelector(".modal__title");
         let modalImg = document.querySelector(".modal__img");
         let modalGanre = document.querySelector(".modal__ganre");
         
         modalImg.setAttribute("src", x.poster);
         modalImg.setAttribute("width", '200px');
         modalTitle.textContent = x.title;
         modalText.textContent = x.overview;
         modalGanre.innerHTML = `<span class="color">Genres:</span> ${x.genres}`;


         let $el = elModal;
         setTimeout(function () {
            $el.classList.add('active');
         }, 500);
         newButton.classList.add("jello-horizontal");
         
      })

      removeClass.addEventListener("click", (e) => {
         elModal.classList.remove("active");
         // elModal.innerHTML = ""
         newButton.classList.remove("jello-horizontal")
      })
   })

}
render(films)

//EVENT SUBMIT

elForm.addEventListener("submit", (evt) => {
   evt.preventDefault();
   elList.innerHTML = "";

   // SEARCH SELECT OPTION

   let searchSelect = [];

   if (elSelect.value){
      searchSelect = films.filter((film) => {
         return film.genres.includes(elSelect.value);
      })
      
   }
   render(searchSelect);
   
   // SEARCH INPUT VALUES

   let searchResult = []

   let search = new RegExp(elInput.value.trim(), "gi");
   for(let i = 0; i < films.length; i++){
      if(films[i].title.match(search)){
         searchResult.push(films[i]);
      }
   }

   render(searchResult)
})