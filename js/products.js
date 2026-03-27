// Products data
const products = [
    {id: 1, name: "Black Shirt", price: 5.99, image:"../images/female-black-shirt.jpg", category:"women"},
    {id: 2, name: "Pants", price: 10.99, image:"../images/female-pants.jpg", category:"women"},
    {id: 3, name: "Shirt", price: 6.99, image:"../images/female-shirt.jpg", category:"women"},
    {id: 4, name: "Skirt", price: 5.99, image:"../images/female-skirt.jpg", category:"women"},
    {id: 5, name: "Sweater", price: 7.99, image:"../images/female-sweater.jpg", category:"women"},
    {id: 6, name: "Jacket", price: 11.99, image:"../images/male-jacket.jpg", category:"men"},
    {id: 7, name: "Long Coat", price: 12.99, image:"../images/male-long-coat.jpg", category:"men"},
    {id: 8, name: "Long Jeans", price: 11.99, image:"../images/male-long-jeans.jpg", category:"men"},
    {id: 9, name: "Plaid Shirt", price: 7.99, image:"../images/male-plaid-shirt.jpg", category:"men"},
    {id: 10, name: "Male Sweater", price: 6.99, image:"../images/male-sweater.jpg", category:"men"},
]

// Render products
const productGrid = document.getElementById("product-grid")
products.forEach(product => {
    const card = document.createElement("div")
    card.classList.add("product-card")
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button class="add-btn" data-id="${product.id}">Add to Cart</button>
    `
    productGrid.appendChild(card)
})

// Add to cart
productGrid.addEventListener("click", (event) => {
    if (event.target.classList.contains("add-btn")) {
        const productId = parseInt(event.target.dataset.id)
        const product = products.find(p => p.id === productId)
        cart.push(product)
        saveCart()
        document.getElementById("cart-count").textContent = cart.length
        renderCart()
    }
})
