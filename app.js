// let urlapi = "https://fakestoreapi.com/products"
// async function getapi (url){
//     let resp = await fetch(url);
//     let data = await resp.json()
//     console.log(data);

//     let carts = ""
//     data.forEach(element => {
//      carts += `
//      <div class="cart">
//         <img src=${element.image} alt="" width="200px" height="auto">
//         <p>${element.title}
//         </p>
//         // <p>${element.description}
//         </p>

//         <h2>PRICE:${element.price}</h2>
//         <button>ADD TO CART</button>

//     </div> 
//      ` 
//         document.getElementById("main").innerHTML = carts
//     });
// }
// getapi(urlapi)
let apiurl = "https://fakestoreapi.com/products"

async function getapi (url){
    let response = await fetch(url)
    let data = await response.json()
    console.log(data);

    let carts = ""
    data.forEach(element => {
        carts += `
        <div class="cart">
        <img class="imgs" src=${element.image} alt="" width="200px" height="auto">
        <p>${element.title}
        </p>
       

        <h2>PRICE:${element.price}</h2>
        <button>ADD TO CART</button>

    </div>        
        `
        document.getElementById("main").innerHTML = carts
        
    });



}
getapi(apiurl)