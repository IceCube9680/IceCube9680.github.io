/**
 * IceCube Portfolio - Clean & Lightweight Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  initFilterTabs();
});

/* --------------------------------------------------------------------------
   Filter Tabs for Projects & Channels
   -------------------------------------------------------------------------- */
function initFilterTabs() {
  const tabs = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');

  if (!tabs.length || !cards.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
          }, 10);
        } else {
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.display = 'none';
          }, 150);
        }
      });
    });
  });
}
