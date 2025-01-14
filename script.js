const list = document.querySelector('#show-items')
const buttonShowAll = document.querySelector(".show-all")

let myLi = ''

function showAll() {
    menuOptions.forEach((product) => {
        myLi +=
            `
         <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price">R$ ${product.price}</p>
        </li>
         `
    })
    console.log(myLi)

list.innerHTML = myLi
}




buttonShowAll.addEventListener("click", showAll)