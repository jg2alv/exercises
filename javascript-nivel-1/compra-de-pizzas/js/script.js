let cart = [];
let modalQt = 1;
let modalIndex = 0;

const c = (e) => document.querySelector(e);
const cs = (e) => document.querySelectorAll(e);

pizzaJson.map((item, index) => {
    let pizzaItem = c(".models .pizza-item").cloneNode(true);

    pizzaItem.querySelector(".pizza-item--img img").src = item.img;
    pizzaItem.querySelector(".pizza-item--price").innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector(".pizza-item--name").innerHTML = item.name;
    pizzaItem.querySelector(".pizza-item--desc").innerHTML = item.desc;

    pizzaItem.querySelector("a").addEventListener("click", (e) => {
        e.preventDefault();
        modalQt = 1;
        modalIndex = index;

        c(".pizzaBig img").src = pizzaJson[index].img;
        c(".pizzaInfo h1").innerHTML = pizzaJson[index].name;
        c(".pizzaInfo--desc").innerHTML = pizzaJson[index].desc;
        c(".pizzaInfo--size.selected").classList.remove("selected");
        cs(".pizzaInfo--size").forEach((size, sizeIndex) => {
            if (sizeIndex == 2) {
                size.classList.add("selected");
            }
            size.querySelector("span").innerHTML = pizzaJson[index].sizes[sizeIndex];
        });

        c(".pizzaInfo--actualPrice").innerHTML = `R$ ${pizzaJson[index].price.toFixed(2)}`;
        c(".pizzaInfo--qt").innerHTML = modalQt;
        c(".pizzaWindowArea").style.opacity = 0;
        c(".pizzaWindowArea").style.display = "flex";
        setTimeout(() => c(".pizzaWindowArea").style.opacity = 1, 200);
    });

    c(".pizza-area").append(pizzaItem);
});

function closeModal() {
    c(".pizzaWindowArea").style.opacity = 0;
    setTimeout(() => c(".pizzaWindowArea").style.display = "none", 200);
};

cs(".pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton").forEach((item) => {
    item.addEventListener("click", closeModal);
});

c(".pizzaInfo--qtmenos").addEventListener("click", () => {
    if (modalQt > 1) {
        modalQt--;
        c(".pizzaInfo--qt").innerHTML = modalQt;
    }
});

c(".pizzaInfo--qtmais").addEventListener("click", () => {
    modalQt++;
    c(".pizzaInfo--qt").innerHTML = modalQt;
});

cs(".pizzaInfo--size").forEach((size) => {
    size.addEventListener("click", () => {
        c(".pizzaInfo--size.selected").classList.remove("selected");
        size.classList.add("selected");
    });
});

c(".pizzaInfo--addButton").addEventListener("click", () => {
    let size = parseInt(c(".pizzaInfo--size.selected").getAttribute("data-key"));
    let id = `${pizzaJson[modalIndex].id}@${size}`;
    let key = cart.findIndex((item) => item.idCode = id);
    cart.push({
        idCode: id,
        id: pizzaJson[modalIndex].id,
        size,
        qt: modalQt
    })
    closeModal();
});