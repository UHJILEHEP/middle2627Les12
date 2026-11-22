const url = 'https://uhjilehep.github.io/middle2627Les12/db.json'
const wrapper = document.querySelector('.produtcs')

fetch(url)
.then(async (res)=>{
    let data = await res.json()
    console.log(data)
    drawCards(data)
})

function drawCards(data){
    data.products.forEach(element => {
        wrapper.innerHTML +=
        `<div class="card">
                <h2 class="productTitle">${element.title}</h2>
                <img class="productPhoto" src="${element.photoUrl}">
                <p class="productPrice">${element.price}</p>
        </div>`
           
    }); 
}