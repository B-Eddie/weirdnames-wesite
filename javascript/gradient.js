document.addEventListener('mousemove', (event) => {
    const x = (window.innerWidth / 2 - event.clientX) / 10;
    const y = (window.innerHeight / 2 - event.clientY) / 10;
    const block = document.querySelector('.block');
    block.style.boxShadow = `${x}px ${y}px 50px 0 rgba(0,0,255,0.5)`;
});