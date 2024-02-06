function goTopage(page) {
    window.location.href = page;
}

document.addEventListener('DOMContentLoaded', function () {
    particlesJS('particles-js', {
      particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: '0000FF' },
        shape: { type: 'circle', stroke: { width: 0, color: '#800080' }, polygon: { nb_sides: 5 } },
        opacity: { value: 0.5, random: false, anim: { enable: false, speed: 0.5, opacity_min: 0.1, sync: false } },
        size: { value: 3, random: true, anim: { enable: false, speed: 0.5, size_min: 0.1, sync: false } },
        line_linked: { enable: true, distance: 150, color: '#800080', opacity: 1.5, width: 1 },
      },
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    showPopup();
});

function showPopup() {
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

