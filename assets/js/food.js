(() => {
  const DATA_URL = '../assets/data/food.json';
  const PLACEHOLDER = '../assets/images/food/placeholder.svg';

  document.addEventListener('DOMContentLoaded', async () => {
    try {
      const res = await fetch(DATA_URL, { cache: 'no-cache' });
      if (!res.ok) throw new Error('Failed to load data');
      const items = await res.json();

      const internal = items.filter(i => i.category === '所内');
      const external = items.filter(i => i.category === '所外');

      renderSection('#internal-food', internal);
      renderSection('#external-food', external);
    } catch (err) {
      console.error('加载餐饮信息失败:', err);
      showError('#internal-food');
      showError('#external-food');
    }
  });

  function renderSection(selector, items) {
    const section = document.querySelector(selector);
    if (!section) return;
    const grid = section.querySelector('.food-grid');
    if (!grid) return;
    grid.innerHTML = items.map(cardHTML).join('');
    enhanceGalleries();
  }

  function cardHTML(item) {
    const tags = Array.isArray(item.tags) ? item.tags.map(t => `<span class="tag">${t}</span>`).join('') : '';
    const mapLink = item.mapUrl ? `<a class="food-card__link" href="${item.mapUrl}" target="_blank" rel="noopener">🗺️ 地图</a>` : '';
    const images = Array.isArray(item.images) && item.images.length > 0
      ? item.images
      : (item.image ? [item.image] : [PLACEHOLDER]);
    const imgSrc = images[0] || PLACEHOLDER;
    const hasMultiple = images.length > 1;

    return `
      <article class="food-card">
        <div class="food-card__media" data-images='${JSON.stringify(images).replace(/"/g, '&quot;')}'>
          <img class="main-img" src="${imgSrc}" alt="${item.name || '餐饮'}" loading="lazy" onerror="this.src='${PLACEHOLDER}';this.onerror=null;">
          ${hasMultiple ? `
            <button class="media-nav nav-prev" aria-label="上一张">‹</button>
            <button class="media-nav nav-next" aria-label="下一张">›</button>
          ` : ''}
        </div>
        <div class="food-card__content">
          <div class="food-card__title">${item.name || ''}</div>
          <div class="food-card__tags">${tags}</div>
          <p class="food-card__review">${item.shortReview || ''}</p>
          <div class="food-card__meta">
            <span>${item.price || ''}</span>
            <span>${item.distance || ''}</span>
          </div>
        </div>
        <div class="food-card__actions">${mapLink}</div>
      </article>
    `;
  }

  function enhanceGalleries() {
    document.querySelectorAll('.food-card__media').forEach(media => {
      let images = [];
      try {
        images = JSON.parse((media.dataset.images || '[]').replace(/&quot;/g, '"'));
      } catch (e) {
        images = [];
      }
      const main = media.querySelector('.main-img');
      const prev = media.querySelector('.nav-prev');
      const next = media.querySelector('.nav-next');

      if (!images.length || !main) return;
      let index = 0;

      const update = (i) => {
        index = (i + images.length) % images.length;
        main.src = images[index] || PLACEHOLDER;
      };

      if (prev) prev.addEventListener('click', () => update(index - 1));
      if (next) next.addEventListener('click', () => update(index + 1));

      update(0);
    });
  }

  function showError(selector) {
    const section = document.querySelector(selector);
    if (!section) return;
    const grid = section.querySelector('.food-grid');
    if (!grid) return;
    grid.innerHTML = '<div class="food-card"><div class="food-card__content"><div class="food-card__title">数据加载失败</div><p class="food-card__review">请稍后重试或刷新页面。</p></div></div>';
  }
})();