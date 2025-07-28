document.addEventListener('DOMContentLoaded', function() {
    const dormData = {
        "所里宿舍": [
            {
                id: "inside-a",
                title: "所公寓（高年级）",
                details: "独立卫浴，提供双人间、三人间和四人间",
                images: [
                    "../assets/images/宿舍/所公寓/所公寓1.jpg",
                    "../assets/images/宿舍/所公寓/所公寓2.jpg",
                    "../assets/images/宿舍/所公寓/所公寓3.jpg"
                ],
                location: "徐汇区零陵路357号，快递可填上海市徐汇区零陵路357号中国科学院上海有机化学研究所-客座人员公寓",
                rent: "150元/月（部分房费可能低于150元）",
                utilities: "需缴纳水电费，与房费一起每三个月缴纳一次",
                config: "独立卫浴（费用含在水电费）；房间类型包括双人间（落地床）、三人间（落地床）、四人间（上床下桌），床铺大小为0.8~1.0m×2m",
                other: "无公共洗衣机/烘干机，需宿舍自行购买，也可关注有机所二手交易群：855876685"
            },
            {
                id: "inside-b",
                title: "四号楼（联培/研二）",
                details: "公共卫浴，提供四人间和六人间",
                images: [
                    "../assets/images/宿舍/四号楼/四号楼四人间.jpg"
                ],
                location: "徐汇区零陵路345号（同有机所地址），快递可填上海市徐汇区零陵路357号中国科学院上海有机化学研究所-客座人员公寓",
                rent: "150元/月",
                utilities: "无水费，需缴纳电费，与房费一起每三个月缴纳一次",
                config: "公共卫浴（每层楼都有澡堂且有隔间）（无费用）；所里学生：四人间上床下桌；联培/毕设：六人间上下床（实际可能住不满，为三人间），床铺大小为0.8~0.9m×2m",
                other: "每层楼有公共洗衣机x2+烘干机x1，洗衣价格3r/次，烘干0.03r/次"
            },
            {
                id: "inside-c",
                title: "六号楼（联培/研二）",
                details: "公共卫浴，一楼六人间，其余三人间",
                images: [
                    "../assets/images/宿舍/六号楼/六号楼1.jpg",
                    "../assets/images/宿舍/六号楼/六号楼2.jpg",
                    "../assets/images/宿舍/六号楼/六号楼3.jpg",
                    "../assets/images/宿舍/六号楼/六号楼4.jpg"
                ],
                location: "徐汇区零陵路345号（同有机所地址），快递可填上海市徐汇区零陵路357号中国科学院上海有机化学研究所-客座人员公寓",
                rent: "150元/月",
                utilities: "无水费，需缴纳电费，与房费一起每三个月缴纳一次",
                config: "公共卫浴（每层楼都有澡堂且有隔间）（无费用）；一楼为六人间上下铺，其余楼层为三人间上床下桌，床铺大小为0.8~0.9m×2m",
                other: "每层楼有公共洗衣机x2+烘干机x1，洗衣价格3r/次，烘干0.03r/次"
            }
        ],
        "所外宿舍": [
            {
                id: "outside-d",
                title: "肇嘉浜路（研一）",
                details: "公共卫浴，提供两人/四人/六人间",
                images: [
                    "../assets/images/宿舍/肇家浜路/肇家浜路.jpg"
                ],
                location: "徐汇区肇家浜路407号，快递可填上海市徐汇区肇家浜路407号中国科学院上海分院研究生公寓",
                rent: "南面四人间260元/月，北面两人间220元/月",
                utilities: "没有水费，电费一个月一缴费",
                config: "公共卫浴（每层楼都有澡堂且有隔间）（费用：0.3元/分钟）；有两人/四人/六人间（落地床），床铺大小为0.8~1.0m×2m",
                other: "每层楼有公共洗衣机x2，每两层烘干机x1，洗衣价格3-5r/次，烘干3-5r/次"
            },
            {
                id: "outside-e",
                title: "东安路（职工/联培）",
                details: "公共卫浴，四人间上床下桌",
                images: [
                    "../assets/images/宿舍/东安路/东安路1.jpg",
                    "../assets/images/宿舍/东安路/东安路2.jpg"
                ],
                location: "徐汇区东安路230弄1号楼，快递可填上海市徐汇区东安路230弄1号楼",
                rent: "150元/月（有机所学生）200元/月（职工）240元/月（联培学生）",
                utilities: "无水费，需缴纳电费，一个月一缴",
                config: "公共卫浴（每层楼都有澡堂且有隔间）（费用：0.3元/分钟）；所里学生：四人间上床下桌，床铺大小为0.9~1.0m×2m",
                other: "每层楼有公共洗衣机x2+烘干机x2，男女分开，洗衣价格3-5r/次，烘干3-5r/次"
            },
            {
                id: "outside-f",
                title: "双峰路（联培）",
                details: "独立卫浴，六人间",
                images: [
                    "../assets/images/宿舍/双峰路/双峰路1.jpg",
                    "../assets/images/宿舍/双峰路/双峰路2.jpg",
                    "../assets/images/宿舍/双峰路/双峰路3.jpg",
                    "../assets/images/宿舍/双峰路/双峰路4.jpg"
                ],
                location: "徐汇区枫林路街道双峰路300号（双峰路菜市场楼上）三楼和四楼，快递可填上海市徐汇区双峰路300号",
                rent: "240元/月（联培学生）",
                utilities: "无水电费（可能会有变动）",
                config: "独立卫浴；六人间",
                other: "每层楼有公共洗衣机x2+烘干机x1，洗衣价格3r/次，烘干0.03r/次"
            }
        ]
    };

    function createImageGallery(images) {
        const galleryContainer = images.map(src => `
            <div class="gallery-item">
                <img src="${src}" alt="宿舍图片">
            </div>`).join('');
        const galleryNav = images.length > 1 ? `<div class="gallery-nav">${images.map((_, i) => `<span class="gallery-dot ${i === 0 ? 'active' : ''}"></span>`).join('')}</div>` : '';
        return `
            <div class="image-gallery">
                <div class="gallery-container">${galleryContainer}</div>
                ${galleryNav}
            </div>`;
    }

    function createDormCard(dorm) {
        return `
            <div class="dorm-card" data-target="#${dorm.id}">
                ${createImageGallery(dorm.images)}
                <div class="dorm-info">
                    <h3 class="dorm-title">${dorm.title}</h3>
                    <p class="dorm-details">${dorm.details}</p>
                </div>
            </div>`;
    }

    function createDormSection(dorm) {
        return `
            <section id="${dorm.id}" class="accommodation-section">
                <h2 class="section-title">${dorm.title}</h2>
                ${createImageGallery(dorm.images)}
                <div class="info-section">
                    <div class="info-title">位置信息</div>
                    <div class="info-content">${dorm.location}</div>
                    <div class="info-title">房费信息</div>
                    <div class="info-content">${dorm.rent}</div>
                    <div class="info-title">水电费缴纳</div>
                    <div class="info-content">${dorm.utilities}</div>
                    <div class="info-title">设施配置</div>
                    <div class="info-content">${dorm.config}</div>
                    <div class="info-title">其他信息</div>
                    <div class="info-content">${dorm.other}</div>
                </div>
            </section>`;
    }

    const overviewContainer = document.getElementById('dorm-overview-container');
    const detailsContainer = document.getElementById('dorm-details-container');

    if (overviewContainer && detailsContainer) {
        let overviewHtml = '';
        let detailsHtml = '';

        for (const category in dormData) {
            overviewHtml += `<h3 class="section-title">${category}</h3><div class="dorm-grid">`;
            dormData[category].forEach(dorm => {
                overviewHtml += createDormCard(dorm);
                detailsHtml += createDormSection(dorm);
            });
            overviewHtml += `</div>`;
        }

        overviewContainer.innerHTML = overviewHtml;
        detailsContainer.innerHTML = detailsHtml;
    }

    // Attach click listeners to newly created cards
    document.querySelectorAll('.dorm-card').forEach(card => {
        card.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            if (targetId) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Setup image galleries for newly created elements
    document.querySelectorAll('.image-gallery').forEach(gallery => {
        const container = gallery.querySelector('.gallery-container');
        const items = gallery.querySelectorAll('.gallery-item');
        const dots = gallery.querySelectorAll('.gallery-dot');
        let currentIndex = 0;
        let autoPlayInterval;

        if (items.length > 1) {
            function showSlide(index) {
                const offset = -index * 100;
                container.style.transform = `translateX(${offset}%)`;
                dots.forEach(dot => dot.classList.remove('active'));
                if (dots[index]) {
                    dots[index].classList.add('active');
                }
                currentIndex = index;
            }

            function nextSlide() {
                const newIndex = (currentIndex + 1) % items.length;
                showSlide(newIndex);
            }

            function startAutoPlay() {
                stopAutoPlay();
                autoPlayInterval = setInterval(nextSlide, 3000);
            }

            function stopAutoPlay() {
                clearInterval(autoPlayInterval);
            }

            dots.forEach((dot, index) => {
                dot.addEventListener('click', (e) => {
                    e.stopPropagation();
                    stopAutoPlay();
                    showSlide(index);
                    startAutoPlay();
                });
            });

            gallery.addEventListener('mouseenter', stopAutoPlay);
            gallery.addEventListener('mouseleave', startAutoPlay);

            showSlide(0);
            startAutoPlay();
        }
    });
});