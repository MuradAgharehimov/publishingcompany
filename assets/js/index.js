const div = document.getElementById("productsList");
const div2 = document.getElementById("productsList2");
const btn = document.getElementById("pagi");

let page = 1;
let limit = 4;
let db = [];

async function getProducts() {
    try {
        const response = await axios.get(`https://655c81de25b76d9884fd6913.mockapi.io/products?page=${page}&limit=${limit}`);
        const data = response.data;
        db = data;

        data.forEach(item => {
            const box = document.createElement("div");
            box.className = "boxDiv";
            box.innerHTML = `
            <img src="${item.image}" alt="">
            <p class="title">${item.title}</p>
            <p class="price">${item.price}</p>
                <button onclick="addToBasket(${item.id})">Add to basket</button>
            `;
            div.appendChild(box);
        });
        page++;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

btn.addEventListener('click', getProducts);

function addToBasket(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const selectedItem = db.find(item => item.id == id);
    cart.push(selectedItem);
    localStorage.setItem('cart', JSON.stringify(cart));
}

window.onload = () => {
    getProducts();
};




const SrchBtn = document.getElementById('SrchBtn')
const inp = document.getElementById('inp')
const srchInp = document.getElementById('srchInp')




function getbyname() {
    div2.innerHTML = "";
    div.style.display = 'none';
    div2.style.display = 'block';
    axios.get(`https://655c81de25b76d9884fd6913.mockapi.io/products?title=${inp.value}`)
        .then(response=>{
            let db = response.data
            db.forEach(item => {
                const box = document.createElement("div");
                box.className = "boxDivx";
                box.innerHTML = `
                <img src="${item.image}" alt="">
                <p class="title">${item.title}</p>
                    <button onclick="addToBasket(${item.id})">Add to basket</button>
                `;
                div2.appendChild(box);
            });
        })
       

}

SrchBtn.addEventListener("click", getbyname)









