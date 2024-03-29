 // esto para dar un ejmplo
let Products = [  
{
    name: "Manzanas",
    codeProduct: "789012",
    brand: "FruitCo",
    description: "Manzanas frescas y jugosas",
    price: 2.99,
    units: 100,
    category:"fruits",
    urlImg:"https://tse1.mm.bing.net/th?id=OIP.7vWMF_Qveu6Mp2a6dNVEpQHaEo&pid=Api&P=0&h=180",
},{
    name: "Naranjas",
    codeProduct: "123456",
    brand: "Frutas del Valle",
    description: "Naranjas frescas y jugosas",
    price: 1.99,
    units: 50,
    category:"fruits",
    urlImg:"https://tse1.mm.bing.net/th?id=OIP.1khMYWWW48Y1OJop4G0btwHaFj&pid=Api&P=0&h=180",
},
{
    name: "Plátanos",
    codeProduct: "234567",
    brand: "Frutería Tropical",
    description: "Plátanos maduros y sabrosos",
    price: 0.99,
    units: 60,
    category:"vegetables",
    urlImg:"https://tse3.mm.bing.net/th?id=OIP._nD6cbN7io9EIhqKCS_kqAHaE8&pid=Api&P=0&h=180",
},
{
    name: "Fresas",
    codeProduct: "345678",
    brand: "Granja Fresca",
    description: "Fresas rojas y dulces",
    price: 3.49,
    units: 40,
    category:"fruits",
    urlImg:"https://tse3.mm.bing.net/th?id=OIP.yTtGN65ExzObbzkuJowOuwHaE8&pid=Api&P=0&h=180",
},
{
    name: "Pan de trigo integral",
    codeProduct: "456789",
    brand: "Panadería Artesanal",
    description: "Pan elaborado con trigo integral",
    price: 2.49,
    units: 30,
    category:"wheat",
    urlImg:"https://tse1.mm.bing.net/th?id=OIP.RjnHwTvZeXKmA8mTgpPQ1QHaFQ&pid=Api&P=0&h=180",
},
{
    name: "Leche desnatada",
    codeProduct: "567890",
    brand: "Lácteos del Campo",
    description: "Leche desnatada baja en grasa",
    price: 1.99,
    units: 70,
    category:"dairy",
    urlImg:"https://tse2.mm.bing.net/th?id=OIP.SxwOM3IhMfb0katxlQ23cQHaHa&pid=Api&P=0&h=180",
},
{
    name: "Yogur natural",
    codeProduct: "678901",
    brand: "Lácteos del Campo",
    description: "Yogur natural sin azúcar",
    price: 0.79,
    units: 80,
    category:"dairy",
    urlImg:"https://tse4.mm.bing.net/th?id=OIP.zGrEEnHeppG-9ZpgmBPMDAHaHa&pid=Api&P=0&h=180",
},
{
    name: "Arroz integral",
    codeProduct: "789012",
    brand: "Arrocería La Casa",
    description: "Arroz de grano largo integral",
    price: 1.49,
    units: 50,
    category:"wheat",
    urlImg:"https://tse4.mm.bing.net/th?id=OIP.nUWsa4i9DT0lyws6hvcV2wHaHa&pid=Api&P=0&h=180",
},
{
    name: "Atún enlatado",
    codeProduct: "890123",
    brand: "Conservas del Mar",
    description: "Atún en aceite de girasol",
    price: 1.99,
    units: 60,
    category:"canned",
    urlImg:"https://tse3.mm.bing.net/th?id=OIP.06kXFZzOQYtuxuZ7Z6Rt6gHaHa&pid=Api&P=0&h=180",
},
{
    name: "Aceite de oliva virgen extra",
    codeProduct: "901234",
    brand: "Aceites del Sur",
    description: "Aceite de oliva de máxima calidad",
    price: 4.99,
    units: 40,
    category:"canned",
    urlImg:"https://tse1.mm.bing.net/th?id=OIP.6WpvMT2lTwtg83sPfT9rLgHaHa&pid=Api&P=0&h=180",
},
{
    name: "Miel pura de abeja",
    codeProduct: "012345",
    brand: "Apicultura Natural",
    description: "Miel recolectada de forma artesanal",
    price: 3.99,
    units: 70,
    category:"canned",
    urlImg:"https://tse1.mm.bing.net/th?id=OIP.m_WOf3H4U7AfBAkh57IF2gHaHa&pid=Api&P=0&h=180",
}
];

function saveProductsToLocalStorage() {
    localStorage.setItem("newProducdefini", JSON.stringify(Products));
}

function loadProductsFromLocalStorage() {
    const storedProducts = localStorage.getItem("newProducdefini");
    if (storedProducts) {
        Products = JSON.parse(storedProducts);
    }
}

const buttonForm = document.querySelector("#buttonForm");
const formContain = document.querySelector(".form-add-product")
const listConatiner = document.querySelector(".table-product")

function handleClickadd() {
    formContain.classList.remove("inactive");
    listConatiner.classList.add("inactive");
};

function closeForm() {
    formContain.classList.add("inactive")
    listConatiner.classList.remove("inactive")
};

function confirmExit() {
    const confirmClose = document.querySelector(".confirmClose")
    confirmClose.classList.remove("inactive")

    const yesClose = document.querySelector(".yes-Close")
    const noClose = document.querySelector(".no-Close")

    yesClose.addEventListener("click", function () {
        confirmClose.classList.add("inactive")
        closeForm()
    });

    noClose.addEventListener("click", function () {
        confirmClose.classList.add("inactive")
    });
};

function getDates() {
    const name = document.getElementById("name").value;
    const codeProduct = document.getElementById("codeProduct").value;
    const brand = document.getElementById("brand").value;
    const description = document.getElementById("description").value;
    const price = document.getElementById("price").value;
    const units = document.getElementById("units").value;
    const category = document.getElementById("opciones").value;
    const imgurl = document.getElementById("imgurl").value;

    let product = {
        name: name,
        codeProduct: codeProduct,
        brand: brand,
        description: description,
        price: price,
        units: units,
        category: category,
        imgurl: imgurl,
    };
    Products.push(product);
};

function AllProduct() {
    const containerAllProductoText = document.querySelector(".containerAllProducto-text")
    containerAllProductoText.innerHTML = Products.length;
};

function viuwProduct() {

    const productListHTML = Products.map((product, index) => `
    <tr class="tableProduct" data-index="${index}">
        <th scope="row">${index + 1}</th>
        <td>${product.name}</td>
        <td>${product.codeProduct}</td>
        <td>${product.brand}</td>
        <td>${product.description}</td>
        <td>${product.price}</td>
        <td>${product.units}</td>
        <td>${product.category}</td>
        <td><button class="delete-button"><img src="https://cdn-icons-png.flaticon.com/512/8428/8428183.png" alt="icon deleted"></button></td>
        <td><button class="moreProduct-button"><img src="https://static.vecteezy.com/system/resources/previews/009/392/103/original/button-plus-icon-sign-symbol-design-free-png.png" alt="logo de mas"></button></td>
        <td><button class="minProduct-button"><img src="https://pngimg.com/uploads/minus/minus_PNG37.png" alt="icon de menos"></button></td>
    </tr>
    `).join('');

    const tbodyy = document.getElementById("tbody");
    tbodyy.innerHTML = productListHTML;

    const NotProducts = document.querySelector(".noProducts");
    if (Products.length > 0) {
        NotProducts.classList.add("inactive")
    }else{
        NotProducts.classList.remove("inactive")
    }

    const buttonDeletedProduct = document.querySelectorAll(".delete-button")
    const moreProductButton = document.querySelectorAll(".moreProduct-button")
    const minProductButton = document.querySelectorAll(".minProduct-button")

    buttonDeletedProduct.forEach((button) => {
        button.addEventListener("click", function() {
            const indexButton = button.closest("tr").dataset.index;
            deletedProduct(indexButton)
        } )
    })
    moreProductButton.forEach((btn) => {
        btn.addEventListener("click", () => {
            const IndexBtn  = btn.closest("tr").dataset.index;
            moreProduct(IndexBtn)
        })
    })
    minProductButton.forEach((btn) => {
        btn.addEventListener("click", () => {
            const IndexBtn  = btn.closest("tr").dataset.index;
            minProduct(IndexBtn)
        })
    })
    saveProductsToLocalStorage();
};

function modeRedToProduct() {
    const filasTabla = document.querySelectorAll(".tableProduct");
    filasTabla.forEach((fila, index) => {
        const unidades = Products[index].units;
        if (unidades < 10) {
            fila.style.backgroundColor = "rgb(255, 200, 200)";
        } else {
            fila.style.backgroundColor = ""; 
        }
    });
}


function deletedProduct(index){
    Products.splice(index, 1)
    saveProductsToLocalStorage();
    viuwProduct()
    AllProduct()
}

function moreProduct(index) {
   Products[index].units++
   viuwProduct()
   modeRedToProduct()
}
function minProduct(index) {
    if (Products[index].units == 0) {
        return;
    }else{
        Products[index].units--;
    } 
    viuwProduct()
    modeRedToProduct()
}

function btnGet(event) {
    event.preventDefault()
    const form = document.querySelector(".form")
    getDates()
    viuwProduct()
    form.reset()
    closeForm()
    modeRedToProduct()
    AllProduct()
    saveProductsToLocalStorage();
}


window.addEventListener("DOMContentLoaded", () => {
    loadProductsFromLocalStorage();
    viuwProduct();
    modeRedToProduct()
    AllProduct()
});
