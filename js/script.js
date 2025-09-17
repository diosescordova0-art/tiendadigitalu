// TechStore - JavaScript Functionality

// DOM Elements
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('.nav-menu');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const addToCartBtns = document.querySelectorAll('.btn-add-cart');
const newsletterForm = document.querySelector('.newsletter-form');

// Cart State
let cart = JSON.parse(localStorage.getItem('techstore_cart')) || [];

// Product Data
const products = {
    smartphone: {
        id: 'smartphone',
        name: 'Smartphone Pro Max',
        price: 899.99,
        image: 'img/smartphone.jpg',
        description: 'Pantalla 6.7", 128GB, Cámara 48MP'
    },
    laptop: {
        id: 'laptop',
        name: 'Laptop Gaming',
        price: 1299.99,
        image: 'img/laptop.jpg',
        description: 'Intel i7, 16GB RAM, RTX 3060'
    },
    headphones: {
        id: 'headphones',
        name: 'Auriculares Wireless',
        price: 199.99,
        image: 'img/headphones.jpg',
        description: 'Cancelación de ruido, 30h batería'
    },
    tablet: {
        id: 'tablet',
        name: 'Tablet Pro',
        price: 599.99,
        image: 'img/tablet.jpg',
        description: 'Pantalla 11", 256GB, Stylus incluido'
    },
    smartwatch: {
        id: 'smartwatch',
        name: 'Smartwatch Pro',
        price: 299.99,
        image: 'img/smartwatch.jpg',
        description: 'Pantalla AMOLED, GPS, Resistente al agua'
    },
    camera: {
        id: 'camera',
        name: 'Cámara DSLR',
        price: 799.99,
        image: 'img/camera.jpg',
        description: '24MP, 4K Video, Lente 18-55mm'
    }
};

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    updateCartUI();
    setupScrollAnimations();
    setupSmoothScrolling();
}

// Event Listeners
function setupEventListeners() {
    // Mobile menu toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMobileMenu);
    }

    // Cart functionality
    if (cartBtn) {
        cartBtn.addEventListener('click', openCart);
    }

    if (cartClose) {
        cartClose.addEventListener('click', closeCart);
    }

    if (cartOverlay) {
        cartOverlay.addEventListener('click', closeCart);
    }

    // Add to cart buttons
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = this.getAttribute('data-product');
            addToCart(productId);
        });
    });

    // Newsletter form
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }

    // Close mobile menu when clicking on links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Close cart when pressing Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeCart();
            closeMobileMenu();
        }
    });
}

// Mobile Menu Functions
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
}

function closeMobileMenu() {
    navMenu.classList.remove('active');
    menuToggle.classList.remove('active');
}

// Cart Functions
function openCart() {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function addToCart(productId) {
    const product = products[productId];
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    showAddToCartAnimation();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

function updateQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
            saveCart();
            updateCartUI();
        }
    }
}

function saveCart() {
    localStorage.setItem('techstore_cart', JSON.stringify(cart));
}

function updateCartUI() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update cart total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2);

    // Update cart items display
    renderCartItems();
}

function renderCartItems() {
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: #718096;">
                <i class="fas fa-shopping-cart" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.3;"></i>
                <p>Tu carrito está vacío</p>
            </div>
        `;
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="cart-item-controls">
                    <button onclick="updateQuantity('${item.id}', ${item.quantity - 1})" class="quantity-btn">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button onclick="updateQuantity('${item.id}', ${item.quantity + 1})" class="quantity-btn">+</button>
                    <button onclick="removeFromCart('${item.id}')" class="remove-btn">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Animation Functions
function showAddToCartAnimation() {
    // Create a temporary element to show the animation
    const animation = document.createElement('div');
    animation.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #48bb78;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        font-weight: 600;
        z-index: 10000;
        animation: fadeInOut 2s ease forwards;
    `;
    animation.textContent = '¡Agregado al carrito!';
    
    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInOut {
            0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
            20% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
            80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(animation);
    
    setTimeout(() => {
        document.body.removeChild(animation);
        document.head.removeChild(style);
    }, 2000);
}

// Scroll Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.product-card, .feature-item');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Smooth Scrolling
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Newsletter Form
function handleNewsletterSubmit(e) {
    e.preventDefault();
    
    const email = e.target.querySelector('input[type="email"]').value;
    
    if (email && isValidEmail(email)) {
        // Simulate newsletter subscription
        showNotification('¡Gracias por suscribirte! Te mantendremos informado sobre nuestras ofertas.', 'success');
        e.target.reset();
    } else {
        showNotification('Por favor, ingresa un email válido.', 'error');
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 600;
        z-index: 10000;
        animation: slideInRight 0.3s ease forwards;
        max-width: 300px;
    `;
    
    const colors = {
        success: '#48bb78',
        error: '#f56565',
        info: '#4299e1'
    };
    
    notification.style.background = colors[type] || colors.info;
    notification.textContent = message;
    
    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease forwards';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
            if (document.head.contains(style)) {
                document.head.removeChild(style);
            }
        }, 300);
    }, 3000);
}

// Search Functionality
function setupSearch() {
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Buscar productos...';
    searchInput.style.cssText = `
        position: absolute;
        top: 100%;
        right: 0;
        width: 300px;
        padding: 0.75rem;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        display: none;
        z-index: 1000;
    `;
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            searchInput.style.display = searchInput.style.display === 'none' ? 'block' : 'none';
            if (searchInput.style.display === 'block') {
                searchInput.focus();
            }
        });
        
        searchBtn.parentElement.style.position = 'relative';
        searchBtn.parentElement.appendChild(searchInput);
        
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            // Implement search functionality here
            console.log('Searching for:', query);
        });
    }
}

// Initialize search
setupSearch();

// Product Filter (for future enhancement)
function filterProducts(category) {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
            card.style.animation = 'fadeInUp 0.6s ease forwards';
        } else {
            card.style.display = 'none';
        }
    });
}

// Lazy Loading for Images
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Performance Optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Scroll to top functionality
function setupScrollToTop() {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        cursor: pointer;
        font-size: 1.2rem;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    const toggleScrollButton = debounce(() => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    }, 100);
    
    window.addEventListener('scroll', toggleScrollButton);
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize additional features
setupScrollToTop();
setupLazyLoading();

// Export functions for global access
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.filterProducts = filterProducts;

