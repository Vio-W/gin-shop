// Products data
const products = [
    {id: 1, name: "Black Shirt", price: 5.99, image:"../images/female-black-shirt.jpg", category:"women"},
    {id: 2, name: "Pants", price: 10.99, image:"../images/female-pants.jpg", category:"women"},
    {id: 3, name: "Shirt", price: 6.99, image:"../images/female-shirt.jpg", category:"women"},
    {id: 4, name: "Skirt", price: 5.99, image:"../images/female-skirt.jpg", category:"women"},
    {id: 5, name: "Sweater", price: 7.99, image:"../images/female-sweater.jpg", category:"women"}
]

// Render products
const productGrid = document.getElementById("product-grid")
products.forEach(product => {
    const card = document.createElement("div")
    card.classList.add("product-card", "fade-in")
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button class="add-btn" data-id="${product.id}">Add to Cart</button>
    `
    productGrid.appendChild(card)
    observer.observe(card)
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
