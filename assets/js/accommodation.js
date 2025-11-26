document.addEventListener('DOMContentLoaded', () => {
    fetch('../assets/data/accommodation.json')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load accommodation data');
            return response.json();
        })
        .then(data => {
            renderAccommodation(data);
            initGalleries();
        })
        .catch(error => {
            console.error('Error loading accommodation:', error);
            document.querySelector('.accommodation-section').innerHTML = '<p style="text-align:center;">加载数据失败，请刷新重试。</p>';
        });
});

function renderAccommodation(data) {
    const insideGrid = document.getElementById('inside-grid');
    const outsideGrid = document.getElementById('outside-grid');
    const mainContainer = document.querySelector('main.container');

    // 1. Render Overview Grids
    if (insideGrid) renderOverviewGrid(data.inside, insideGrid);
    if (outsideGrid) renderOverviewGrid(data.outside, outsideGrid);

    // 2. Render Detailed Sections (Append to main container before comments)
    // Find where to insert: after the last overview section and before comments
    const commentsSection = document.querySelector('.comments-section');
    
    // Create a container for details if not exists
    let detailsContainer = document.getElementById('details-container');
    if (!detailsContainer) {
        detailsContainer = document.createElement('div');
        detailsContainer.id = 'details-container';
        mainContainer.insertBefore(detailsContainer, commentsSection);
    }

    renderDetailSections(data.inside, detailsContainer);
    renderDetailSections(data.outside, detailsContainer);
    
    // Initialize animations for new elements
    observeNewElements();
}

function observeNewElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-element:not(.visible)').forEach(el => observer.observe(el));
}

function renderOverviewGrid(items, container) {
    container.innerHTML = items.map(item => `
        <div class="dorm-card" onclick="location.href='#${item.id}'">
            <div class="image-gallery">
                <div class="gallery-container">
                    ${item.images.map(img => `
                        <div class="gallery-item">
                            <img src="${img}" alt="${item.name}">
                        </div>
                    `).join('')}
                </div>
                ${item.images.length > 1 ? `
                <div class="gallery-nav">
                    ${item.images.map((_, i) => `<span class="gallery-dot ${i === 0 ? 'active' : ''}"></span>`).join('')}
                </div>
                ` : ''}
            </div>
            <div class="dorm-info">
                <h3 class="dorm-title">${item.name}</h3>
                <p class="dorm-details">${item.summary}</p>
            </div>
        </div>
    `).join('');
}

function renderDetailSections(items, container) {
    items.forEach(item => {
        const section = document.createElement('section');
        section.id = item.id;
        section.className = 'accommodation-section fade-element';
        
        const detailsHtml = Object.entries(item.details).map(([key, value]) => 
            `<p><strong>${key}：</strong>${value}</p>`
        ).join('');

        section.innerHTML = `
            <h2 class="section-title">${item.name}</h2>
            <div class="image-gallery">
                <div class="gallery-container">
                    ${item.images.map(img => `
                        <div class="gallery-item">
                            <img src="${img}" alt="${item.name}">
                        </div>
                    `).join('')}
                </div>
                ${item.images.length > 1 ? `
                <div class="gallery-nav">
                    ${item.images.map((_, i) => `<span class="gallery-dot ${i === 0 ? 'active' : ''}"></span>`).join('')}
                </div>
                ` : ''}
            </div>
            <div class="dorm-info">
                <div class="dorm-details">
                    ${detailsHtml}
                </div>
            </div>
        `;
        container.appendChild(section);
    });
}

function initGalleries() {
    // Add event listeners for all gallery dots
    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('gallery-dot')) {
            e.preventDefault();
            e.stopPropagation(); // Prevent card click event
            
            const dot = e.target;
            const nav = dot.parentElement;
            const gallery = nav.parentElement; // .image-gallery
            const container = gallery.querySelector('.gallery-container');
            const dots = nav.querySelectorAll('.gallery-dot');
            const index = Array.from(dots).indexOf(dot);

            // Update active dot
            dots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');

            // Slide container
            container.style.transform = `translateX(-${index * 100}%)`;
        }
    });
}
