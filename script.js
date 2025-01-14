const tagList = document.querySelector("#show-items");
const buttonSumAll = document.querySelector(".sum-all");
const buttonShowAll = document.querySelector(".show-all");
const buttonMapAll = document.querySelector(".map-all");
const buttonFilterAll = document.querySelector(".filter-all");

function formatCurrency(currency) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(currency);
}

function showAll(arrayList) {
    let myList = ``;
    arrayList.forEach(product => {
        myList +=
            `
    <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price">${formatCurrency(product.price)}</p>
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
    const sumItens = menuOptions.reduce((acc, curr) => acc + curr.price, 0);
    tagList.innerHTML =
        `
    <li>
         <p>O valor total é ${formatCurrency(sumItens)}</p>
     </li>
    `;
}

function filterVegetarian() {
    const filterVegetarian = menuOptions.filter(product => product.vegan)
    showAll(filterVegetarian);
}


buttonShowAll.addEventListener("click", () => showAll(menuOptions))
buttonMapAll.addEventListener("click", mapAll)
buttonSumAll.addEventListener("click", sumAllItens)
buttonFilterAll.addEventListener("click", filterVegetarian)