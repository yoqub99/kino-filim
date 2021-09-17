// let date = new Date(1998, 3,15,20,15);
// let year = date.getFullYear();
// let month = String(date.getMonth()).padStart(2, "0");
// let day = date.getDate();
// console.log(films)
// console.log(`${year}.${month}.${day}`)
// console.log(Math.sqrt(120, 5));
// console.log(Math.abs(-50))

// function x(y){
//     return y
// }

// let arr = "lorem ipsum dolor sit."

// console.log(arr.split("l"))

// let fruits = [ "olma", "nok", "uzum"];

// console.log(fruits.includes("nok"))

// let data = [
//     {
//         title: "Xiaomi Redmi Note 10S 6/64GB",
//         price: "2 948 000 сум",
//         imgSrc: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
//     },
//     {
//         title: "Xiaomi Redmi Note 10S 6/64GB",
//         price: "2 948 000 сум",
//         imgSrc: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
//     },
//     {
//         title: "Xiaomi Redmi Note 10S 6/64GB",
//         price: "2 948 000 сум",
//         imgSrc: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
//     },
//     {
//         title: "Xiaomi Redmi Note 10S 6/64GB",
//         price: "2 948 000 сум",
//         imgSrc: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
//     },
// ]

// data.forEach((params) => {
//     let newLi = document.createElement("li")
//     let newHeader = document.createElement("h3")
//     let newImg = document.createElement("img")
//     let newP = document.createElement("p")

//     newHeader.textContent = params.title
//     newP.textContent = params.price
//     newImg.setAttribute('src', params.imgSrc)
//     newImg.setAttribute('width', "200px")
//     newImg.setAttribute('height', "200px")
//     newImg.setAttribute('class', "img")

//     newLi.appendChild(newHeader);
//     newLi.appendChild(newP);
//     newLi.appendChild(newImg);

//     list.appendChild(newLi);
// })



// let person = [
//     {
//         id: 1,
//         name: "Akmal"
//     },
//     {
//         id: 2,
//         name: "Akmal1"
//     },
//     {
//         id: 3,
//         name: "Akmal2"
//     },
//     {
//         id: 4,
//         name: "Akmal3"
//     },
//     {
//         id: 5,
//         name: "Akmal4"
//     },
//     {
//         id: 5,
//         name: "Akmal5"
//     }
// ];

// for( let i = 0; i < person.length; i++){
//     let newLi = document.createElement("li")
//     newLi.textContent = person[i].name
//     list.appendChild(newLi);
// }

// person.forEach((x,z, arr) =>{
    // console.log(x)
    // let newLi = document.createElement("li")
    // newLi.textContent = x.name + " " + z + arr[z].name
    // list.appendChild(newLi);
// })

// person.map((value, index, array) => {
//     console.log(value)
//     console.log(index)
//     console.log(array)
// })
