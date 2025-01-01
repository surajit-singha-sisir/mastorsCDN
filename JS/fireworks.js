function fireWorks() {
  const canvas = document.getElementById("fireworks");
  const ctx = canvas.getContext("2d");

  // CANVAS
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // FIREWORK
  let particles = [];
  function startFireworks() {
    setInterval(() => {
      const x = Math.random() * canvas.width;
      const y = (Math.random() * canvas.height) / 2;

      const baseHue = Math.random() * 360;
      for (let i = 0; i < 100; i++) {
        const hue = (baseHue + Math.random() * 60 - 30) % 360;
        const color = `hsl(${hue}, 100%, 50%)`;
        particles.push(new Particle(x, y, color));
      }
    }, 600);
  }

  function Particle(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.radius = Math.random() * 3 + 1;
    this.speedX = Math.random() * 4 - 2;
    this.speedY = Math.random() * 4 - 2;
    this.alpha = 1;
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle, index) => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      particle.alpha -= 0.02;

      if (particle.alpha <= 0) {
        particles.splice(index, 1);
      } else {
        ctx.globalAlpha = particle.alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    });
    requestAnimationFrame(animateParticles);
  }

  startFireworks();
  animateParticles();
}
window.onload = fireWorks;
