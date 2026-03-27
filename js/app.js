// Fade-in animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible")
        }
    })
}, { threshold: 0.1 })

document.querySelectorAll(".fade-in").forEach(el => {
    observer.observe(el)
})
// Cart state
let cart = []

// Grab sidebar elements
const cartButton = document.getElementById("cart-btn")
const cartSideBar = document.getElementById("cart-sidebar")
const closeButton = document.getElementById("close-btn")
const overlay = document.getElementById("overlay")

// Open sidebar
cartButton.addEventListener("click", () => {
    cartSideBar.classList.add("open")
    overlay.classList.add("show")
})

// Close sidebar
closeButton.addEventListener("click", () => {
    cartSideBar.classList.remove("open")
    overlay.classList.remove("show")
})

// Close when overlay clicked
overlay.addEventListener("click", () => {
    cartSideBar.classList.remove("open")
    overlay.classList.remove("show")
})

// Render cart function
function renderCart() {
    const cartItems = document.getElementById("cart-items")
    if (cart.length === 0) {
        cartItems.innerHTML = "<p class='cart-empty'>Your cart is empty.</p>"
        document.getElementById("cart-total").textContent = "$0.00"
        return
    }
    cartItems.innerHTML = ""
    cart.forEach(item => {
        cartItems.innerHTML += `
            <div class="cart-item">
                <div>
                    <p>${item.name}</p>
                    <p>$${item.price.toFixed(2)}</p>
                </div>
                <button class="remove-btn" data-id="${item.id}">Remove</button>
            </div>
        `
    })
    const total = cart.reduce((sum, item) => sum + item.price, 0)
    document.getElementById("cart-total").textContent = `$${total.toFixed(2)}`
}

// Remove from cart
const cartItemsContainer = document.getElementById("cart-items")
cartItemsContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-btn")) {
        const productId = parseInt(event.target.dataset.id)
        cart = cart.filter(item => item.id !== productId)
        saveCart()
        document.getElementById("cart-count").textContent = cart.length
        renderCart()
    }
})

renderCart()

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart))
}

function loadCart() {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
        cart = JSON.parse(savedCart)
    document.getElementById("cart-count").textContent = cart.length
    renderCart()
    }
}

loadCart()




