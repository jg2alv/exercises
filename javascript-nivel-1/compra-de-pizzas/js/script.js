const c = (e) => document.querySelector(e);
const cs = (e) => document.querySelectorAll(e);

pizzaJson.map((item, index) => {
    let pizzaItem = c(".models .pizza-item").cloneNode(true);
    pizzaItem.querySelector("a").addEventListener("click", (e) => {
        e.preventDefault();
        c(".pizzaBig img").src = pizzaJson[index].img;
        c(".pizzaInfo h1").innerHTML = pizzaJson[index].name;
        c(".pizzaInfo--desc").innerHTML = pizzaJson[index].desc;
        cs(".pizzaInfo--size").forEach((size, sizeIndex) => {
            size.querySelector("span").innerHTML = pizzaJson[index].sizes[sizeIndex];
        });
        c(".pizzaInfo--actualPrice").innerHTML = `R$ ${pizzaJson[index].price.toFixed(2)}`;

        c(".pizzaWindowArea").style.opacity = 0;
        c(".pizzaWindowArea").style.display = "flex";
        setTimeout(() => c(".pizzaWindowArea").style.opacity = 1, 200);
    });
    pizzaItem.querySelector(".pizza-item--img img").src = item.img;
    pizzaItem.querySelector(".pizza-item--price").innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector(".pizza-item--name").innerHTML = item.name;
    pizzaItem.querySelector(".pizza-item--desc").innerHTML = item.desc;
    c(".pizza-area").append(pizzaItem);
});