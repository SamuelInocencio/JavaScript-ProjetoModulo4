const tagList = document.querySelector("#show-items");
const buttonSumAll = document.querySelector(".sum-all");
const buttonShowAll = document.querySelector(".show-all");
const buttonMapAll = document.querySelector(".map-all");



function showAll(arrayList) {
    let myList = ``;
    arrayList.forEach(product => {
        myList +=
            `
    <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price">R$ ${product.price}</p>
        </li>
    `
    });
    tagList.innerHTML = myList;
}

function mapAll() {
    const newPrice = menuOptions.map(product => ({
        ...product,
        price: product.price * 0.9
    }))
    showAll(newPrice);
}

function sumAllItens() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0);

    tagList.innerHTML =
        `
    <li>
     <p>O valor  total dos itens é R$ ${totalValue}</pass=>
    </li>
   
    `;
}


buttonShowAll.addEventListener("click", () => showAll(menuOptions))
buttonMapAll.addEventListener("click", mapAll)
buttonSumAll.addEventListener("click", sumAllItens)