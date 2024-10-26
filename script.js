function updateCounter() {
  const visitCounter = document.getElementById('visitCounter');
  let count = parseInt(localStorage.getItem('pageVisitCount')) || 0;
  count++;
  localStorage.setItem('pageVisitCount', count);
  visitCounter.textContent = count;
}

function showPage(pageId) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
}
