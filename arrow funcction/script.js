// Traditional function
function sum(a, b) {
    return a + b;
}

// Arrow function - modern syntax
const arrowSum = (a, b) => {
    return a + b;
};

// Even shorter arrow function with implicit return
const shortArrowSum = (a, b) => a + b;

// Demo functionality
document.addEventListener('DOMContentLoaded', function() {
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const calculateBtn = document.getElementById('calculateBtn');
    const resultValue = document.getElementById('resultValue');

    // Function to calculate and display result
    function calculateSum() {
        const num1 = parseInt(num1Input.value) || 0;
        const num2 = parseInt(num2Input.value) || 0;
        
        // Using arrow function for calculation
        const result = arrowSum(num1, num2);
        
        // Animate the result
        resultValue.style.transform = 'scale(1.2)';
        resultValue.textContent = result;
        
        setTimeout(() => {
            resultValue.style.transform = 'scale(1)';
        }, 200);
        
        // Log to console for demonstration
        console.log(`Traditional function: ${sum(num1, num2)}`);
        console.log(`Arrow function: ${arrowSum(num1, num2)}`);
        console.log(`Short arrow function: ${shortArrowSum(num1, num2)}`);
    }

    // Event listeners
    calculateBtn.addEventListener('click', calculateSum);
    
    // Calculate on input change
    num1Input.addEventListener('input', calculateSum);
    num2Input.addEventListener('input', calculateSum);

    // Initial calculation
    calculateSum();

    // Add some fun animations
    const cards = document.querySelectorAll('.feature-card, .info-card, .demo-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add typing effect to title
    const title = document.querySelector('h1');
    const originalText = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            title.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing effect after a short delay
    setTimeout(typeWriter, 500);
});