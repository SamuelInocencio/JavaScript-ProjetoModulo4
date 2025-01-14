const tagList = document.querySelector("#show-items");
const buttonShowAll = document.querySelector(".show-all");
const buttonMapAll = document.querySelector(".map-all");

function ShowAll(productsArray) {
    let myLi = ``;
    productsArray.forEach((product) => {
        myLi += `
        <li>
                <img src=${product.src}>
                <p>${product.name}</p>
                <p class="item-price">R$ ${product.price}</p>
            </li>
        `;
    })
    tagList.innerHTML = myLi;
}

function mapAllItems() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9
    }))
    ShowAll(newPrices);
}

buttonShowAll.addEventListener("click", () => ShowAll(menuOptions));
buttonMapAll.addEventListener("click", mapAllItems);