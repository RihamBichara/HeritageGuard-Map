// Sandstorm Animation
const canvas = document.getElementById('sandstormCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

function createParticle() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = Math.random() * 3;
    const speedX = Math.random() * 2 - 1;
    const speedY = Math.random() * 2 - 1;
    particles.push({ x, y, size, speedX, speedY });
}

function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width || particle.y < 0 || particle.y > canvas.height) {
            particle.x = Math.random() * canvas.width;
            particle.y = Math.random() * canvas.height;
        }
    });
    requestAnimationFrame(drawParticles);
}

function startJourney() {
    document.querySelector('.intro').style.display = 'none';
}

for (let i = 0; i < 1000; i++) {
    createParticle();
}

drawParticles();


