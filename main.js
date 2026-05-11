// WhatsApp Order Logic
document.getElementById('order-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const address = document.getElementById('address').value;

    const storeNumber = "5513999999999";
    
    // Format message for WhatsApp
    const message = `Olá Bia da Candy's! Gostaria de fazer uma encomenda:%0A%0A` +
                    `*Nome:* ${name}%0A` +
                    `*Produto:* ${product}%0A` +
                    `*Quantidade:* ${quantity}%0A` +
                    `*WhatsApp:* ${whatsapp}%0A` +
                    `*Endereço:* ${address}%0A%0A` +
                    `Vi seu site e fiquei encantado(a)! Aguardo confirmação. 🌻`;

    const whatsappUrl = `https://wa.me/${storeNumber}?text=${message}`;
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
});

// Helper function to select product from cards
function selectProduct(productName) {
    const productSelect = document.getElementById('product');
    productSelect.value = productName;
    
    // Scroll to form
    document.getElementById('encomenda').scrollIntoView({ behavior: 'smooth' });
    
    // Highlight the form
    const formWrapper = document.querySelector('.form-wrapper');
    formWrapper.style.transform = 'scale(1.02)';
    setTimeout(() => {
        formWrapper.style.transform = 'scale(1)';
    }, 300);
}

// Simple reveal animation on scroll
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.product-card, .form-wrapper');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// Initial state for animations
document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.product-card, .form-wrapper');
    reveals.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
    });
});
