document.addEventListener('DOMContentLoaded', () => {
    fetch('../assets/data/courses.json')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load courses data');
            return response.json();
        })
        .then(data => {
            renderCourses(data);
        })
        .catch(error => {
            console.error('Error loading courses:', error);
            document.querySelectorAll('.course-content').forEach(el => {
                el.innerHTML = '<p style="text-align:center;">加载数据失败，请刷新重试。</p>';
            });
        });
});

function renderCourses(data) {
    const compulsoryList = document.getElementById('compulsory-list');
    const electiveList = document.getElementById('elective-list');

    if (compulsoryList && data.compulsory) {
        renderCourseList(data.compulsory, compulsoryList);
    }

    if (electiveList && data.elective) {
        renderCourseList(data.elective, electiveList);
    }

    // Re-trigger animations if common.js has already run
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    // Select the parent sections since they are the ones with .fade-element
    document.querySelectorAll('.section-card.fade-element').forEach(el => observer.observe(el));
}

function renderCourseList(courses, container) {
    container.innerHTML = courses.map(course => `
        <li class="resource-item">
            <div class="resource-title">${course.title}</div>
            <div class="resource-detail">授课老师：${course.teachers}</div>
            <div class="resource-detail">备注：${course.remark}</div>
            <div class="resource-actions">
                ${course.resources.map(res => renderResourceBtn(res)).join('')}
            </div>
        </li>
    `).join('');
}

function renderResourceBtn(resource) {
    // Icons
    const downloadIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`;
    const linkIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;

    const icon = resource.isExternal ? linkIcon : downloadIcon;
    const btnClass = resource.type === 'outline' ? 'btn btn-outline' : 'btn btn-text';
    const target = resource.isExternal ? 'target="_blank"' : '';
    
    // If it's a "text" type (like "上课课件" placeholder), it usually has no icon unless specified
    // But in the original HTML, placeholders were just text links.
    // Let's stick to the original logic: if outline/download/link, use btn-outline with icon. If placeholder, btn-text.
    
    if (resource.type === 'outline') {
        return `
            <a href="${resource.link}" ${target} class="${btnClass}">
                ${icon}
                ${resource.text}
            </a>
        `;
    } else {
        return `<a href="${resource.link}" class="${btnClass}">${resource.text}</a>`;
    }
}
