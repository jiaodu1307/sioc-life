document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.cat-grid');
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeModal = document.querySelector(".close-modal");

    // Load Data
    fetch('../assets/data/cats.json')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load cat data');
            return response.json();
        })
        .then(data => {
            renderCats(data, grid);
            setupModal(modal, modalImg, closeModal);
        })
        .catch(error => {
            console.error('Error loading cats:', error);
            grid.innerHTML = '<p style="text-align:center;width:100%;">加载猫猫数据失败，请稍后重试。</p>';
        });
});

function renderCats(cats, container) {
    container.innerHTML = ''; // Clear placeholder content

    cats.forEach(cat => {
        const card = document.createElement('div');
        card.className = 'cat-card';

        // Construct details HTML
        let detailsHtml = '';
        const orderedKeys = ['别称', '性别', '年龄', '毛色', '特征', '性格', '绝育', '关系', '状态'];
        
        // First render known keys in order
        orderedKeys.forEach(key => {
            if (cat.details[key]) {
                detailsHtml += `<strong>${key}：</strong>${cat.details[key]}<br>`;
            }
        });

        // Then render any other keys not in the ordered list
        for (const [key, value] of Object.entries(cat.details)) {
            if (!orderedKeys.includes(key)) {
                detailsHtml += `<strong>${key}：</strong>${value}<br>`;
            }
        }

        card.innerHTML = `
            <div class="cat-image">
                <img src="${cat.image}" alt="${cat.name}" class="cat-thumbnail" loading="lazy">
            </div>
            <div class="cat-info">
                <h3 class="cat-name">${cat.name}</h3>
                <p class="cat-description">
                    ${detailsHtml}
                </p>
            </div>
        `;
        container.appendChild(card);
    });

    // Add "Coming Soon" card
    const placeholderCard = document.createElement('div');
    placeholderCard.className = 'cat-card';
    placeholderCard.innerHTML = `
        <div class="cat-image">
            <img src="../assets/images/cats/cat_placeholder.jpg" alt="待添加" class="cat-thumbnail">
        </div>
        <div class="cat-info">
            <h3 class="cat-name">待添加</h3>
            <p class="cat-description">欢迎提供更多猫猫信息！</p>
        </div>
    `;
    container.appendChild(placeholderCard);
}

function setupModal(modal, modalImg, closeModal) {
    if (!modal || !modalImg) return;

    // Use event delegation for dynamic elements
    document.querySelector('.cat-grid').addEventListener('click', (e) => {
        if (e.target.classList.contains('cat-thumbnail')) {
            modal.style.display = "flex";
            modalImg.src = e.target.src;
        }
    });

    if (closeModal) {
        closeModal.onclick = () => modal.style.display = "none";
    }

    modal.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
}
