document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const contents = document.querySelectorAll('.content');
    const totalContents = contents.length;
    const wrapper = document.querySelector('.content-wrapper');
    const dotsContainer = document.querySelector('.dots-container');
    
    for (let i = 0; i < totalContents; i++) {
        let dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);
    }
    
    const dots = document.querySelectorAll('.dot');
    
    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    function slideContent() {
        currentIndex = (currentIndex + 1) % totalContents;
        wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateDots();
    }
    
    setInterval(slideContent, 3000);
});