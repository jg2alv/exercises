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

c(".menu-openner").addEventListener("click", () => {
    if (cart.length > 0) {
        c("aside").style.left = "0";
    };
});

c(".menu-closer").addEventListener("click", () => {
    c("aside").style.left = "100vw";
});

c(".pizzaInfo--addButton").addEventListener("click", () => {
    let size = parseInt(c(".pizzaInfo--size.selected").getAttribute("data-key"));
    let id = `${pizzaJson[modalIndex].id}@${size}`;
    let key = cart.findIndex((item) => item.idCode == id);
    if (key > -1) {
        cart[key].qt += modalQt;
    } else {
        cart.push({
            idCode: id,
            id: pizzaJson[modalIndex].id,
            size,
            qt: modalQt
        })
    }
    updateCart();
    closeModal();
});

function updateCart() {
    c(".menu-openner span").innerHTML = cart.length;
    if (cart.length > 0) {
        c("aside").classList.add("show");
        c(".cart").innerHTML = "";
        let subtotal = 0;
        let total = 0;
        let desconto = 0;
        for (let i in cart) {
            let pizzaItem = pizzaJson.find((item) => item.id == cart[i].id);
            subtotal += pizzaItem.price * cart[i].qt;
            let cartItem = c(".models .cart--item").cloneNode(true);
            let pizzaName;
            switch (cart[i].size) {
                case 0:
                    pizzaName = `${pizzaItem.name} (P)`
                    break;
                case 1:
                    pizzaName = `${pizzaItem.name} (M)`
                    break;
                case 2:
                    pizzaName = `${pizzaItem.name} (G)`
                    break;
            }
            cartItem.querySelector("img").src = pizzaItem.img;
            cartItem.querySelector(".cart--item-nome").innerHTML = pizzaName;
            cartItem.querySelector(".cart--item--qt").innerHTML = cart[i].qt;
            cartItem.querySelector(".cart--item-qtmenos").addEventListener("click", () => {
                if (cart[i].qt > 1) {
                    cart[i].qt--;

                } else {
                    cart.splice(i, 1)
                }
                updateCart();
            });

            cartItem.querySelector(".cart--item-qtmais").addEventListener("click", () => {
                cart[i].qt++;
                updateCart();
            });
            c(".cart").append(cartItem);
        }
        desconto = subtotal * 0.1;
        total = subtotal - desconto;
        c(".subtotal span:last-child").innerHTML = `R$ ${subtotal.toFixed(2)}`;
        c(".desconto span:last-child").innerHTML = `R$ ${desconto.toFixed(2)}`;
        c(".total span:last-child").innerHTML = `R$ ${total.toFixed(2)}`;
    } else {
        c("aside").classList.remove("show");
        c("aside").style.left = "100vw";
    }
}