document.addEventListener('DOMContentLoaded', function() {
    const catData = [
        {
            id: 'xixi',
            name: '希希',
            image: '../assets/images/cats/主页/希希0.jpg',
            alt: '希希',
            description: {
                '别称': '女明星，八嘎',
                '性别': '妹妹',
                '年龄': '约1岁',
                '毛色': '狸白',
                '特征': '衔蝉，有刘海，背部及腿部有狸花花纹',
                '性格': '机智亲人，需要独宠',
                '绝育': '已绝育',
                '关系': '敌视所有猫，但打不过',
                '状态': '流浪'
            }
        },
        {
            id: 'wanwan',
            name: '菀菀',
            image: '../assets/images/cats/主页/菀菀0.jpg',
            alt: '菀菀',
            description: {
                '别称': '无',
                '性别': '妹妹',
                '年龄': '约1岁',
                '毛色': '狸白',
                '特征': '嘴部少许花纹，有刘海，背部、腿和脚上均有狸花花纹',
                '性格': '软糯亲人，胆子大',
                '绝育': '已绝育',
                '关系': '人类是好朋友，目前无猫关系',
                '状态': '流浪'
            }
        },
        {
            id: 'dandan',
            name: '蛋大',
            image: '../assets/images/cats/主页/蛋大0.jpg',
            alt: '蛋大',
            description: {
                '别称': '无',
                '性别': '弟弟',
                '年龄': '约1岁',
                '毛色': '狸白',
                '特征': '带有梨花面具，背部和尾巴覆盖狸花，很肥~',
                '性格': '亲人，爱管闲事',
                '绝育': '已绝育',
                '关系': '小老鼠和异瞳的大哥，疑似齐刘海的孩子，母子决裂',
                '状态': '流浪'
            }
        },
        {
            id: 'hongbizi',
            name: '红鼻子',
            image: '../assets/images/cats/主页/红鼻子0.jpg',
            alt: '红鼻子',
            description: {
                '别称': '无',
                '性别': '弟弟',
                '年龄': '2岁',
                '毛色': '橘白',
                '特征': '鼻子上一块色斑',
                '性格': '凶狠且怕人',
                '绝育': '已绝育',
                '关系': '父母姊妹兄弟不详的游侠猫，在咖啡吧小树林和两只白猫构成三口之家',
                '状态': '流浪'
            }
        },
        {
            id: 'xiaolaoshu',
            name: '小老鼠',
            image: '../assets/images/cats/主页/小老鼠0.jpg',
            alt: '小老鼠',
            description: {
                '别称': '无',
                '性别': '弟弟',
                '年龄': '1岁',
                '毛色': '狸白',
                '特征': '只有胸口和爪爪有白色',
                '性格': '胆小，怕人，但喜欢蛋大',
                '绝育': '已绝育',
                '关系': '母亲(疑似):足球猫，蛋大的小跟班',
                '状态': '流浪'
            }
        },
        {
            id: 'xiaobai',
            name: '小白(总裁)',
            image: '../assets/images/cats/主页/小白0.jpg',
            alt: '小白(总裁)',
            description: {
                '别称': '总裁',
                '性别': '弟弟',
                '年龄': '未知',
                '毛色': '白猫蓝眼',
                '特征': '头上有Y字形黑色',
                '性格': '亲人，亲猫。给拾猎给抱',
                '绝育': '已绝育',
                '关系': '母亲(疑似):1号楼异瞳，蛋大的好朋友',
                '状态': '未知'
            }
        },
        {
            id: 'zuqiumao',
            name: '足球猫(齐刘海)',
            image: '../assets/images/cats/主页/足球猫0.jpg',
            alt: '足球猫(齐刘海)',
            description: {
                '别称': '齐刘海',
                '性别': '妹妹',
                '年龄': '未知',
                '毛色': '狸白',
                '特征': '头上的花纹像齐刘海一样，后背纹路像足球',
                '性格': '怕人，是独行侠',
                '绝育': '已绝育',
                '关系': '儿子(疑似):蛋大、小老鼠',
                '状态': '流浪'
            }
        },
        {
            id: 'yitong',
            name: '1号楼异瞳',
            image: '../assets/images/cats/主页/1号楼异瞳0.jpg',
            alt: '1号楼异瞳',
            description: {
                '别称': '无',
                '性别': '妹妹',
                '年龄': '未知',
                '毛色': '白猫异瞳',
                '特征': '头上有点灰色',
                '性格': '怕人，绝育后成为蛋大的小跟班',
                '绝育': '已绝育',
                '关系': '儿子(疑似):小白总的妈妈，蛋大的跟班，属于1号楼帮派',
                '状态': '流浪'
            }
        },
        {
            id: 'limei',
            name: '1号楼小老鼠妹妹(梨妹)',
            image: '../assets/images/cats/主页/梨妹0.jpg',
            alt: '1号楼小老鼠妹妹(梨妹)',
            description: {
                '别称': '梨妹',
                '性别': '妹妹',
                '年龄': '1岁',
                '毛色': '狸白',
                '特征': '胸口爪瓜是白色，长相更秀气',
                '性格': '怕人，胆小，但会对人的呼唤给一个夹子音回应',
                '绝育': '未绝育',
                '关系': '母亲(疑似):足球猫',
                '状态': '隔壁小区流浪'
            }
        },
        {
            id: 'xiaolihua',
            name: '3号楼小梨花',
            image: '../assets/images/cats/主页/小狸花0.jpg',
            alt: '3号楼小梨花',
            description: {
                '别称': '无',
                '性别': '妹妹',
                '年龄': '5岁',
                '毛色': '纯狸花',
                '特征': '有橘色基因，眼睛上面有星星柄色图案',
                '性格': '怕人、一点点风吹草动就开始跑',
                '绝育': '已绝育',
                '关系': '妈妈:曾经1号楼的胖三花，舅舅:囧八(但是狸花猫地位高于白猫)',
                '状态': '流浪'
            }
        },
        {
            id: 'jiong_ba',
            name: '囧八',
            image: '../assets/images/cats/主页/囧八0.jpg',
            alt: '囧八',
            description: {
                '别称': '无',
                '性别': '弟弟',
                '年龄': '4岁',
                '毛色': '白猫蓝眼睛',
                '特征': '头上有个八字',
                '性格': '亲人，喜欢喵喵叫，想被摸摸也会嗷喊叫',
                '绝育': '已绝育',
                '关系': '妈妈:长毛麒麟尾巴三花，侄女:小梨花',
                '状态': '流浪'
            }
        },
        {
            id: 'huangyanjing',
            name: '咖啡吧黄眼睛',
            image: '../assets/images/cats/主页/咖啡吧黄眼睛0.jpg',
            alt: '咖啡吧黄眼睛',
            description: {
                '别称': '无',
                '性别': '妹妹',
                '年龄': '未知',
                '毛色': '纯色白猫',
                '特征': '眼睛像黄水晶一样',
                '性格': '喜欢喵喵叫，靠近了会哈人。怕人',
                '绝育': '已绝育',
                '关系': '母亲:咖啡吧长毛',
                '状态': '流浪'
            }
        },
        {
            id: 'placeholder',
            name: '待添加',
            image: '../assets/images/cats/cat_placeholder.jpg',
            alt: '待添加',
            description: {
                '欢迎': '提供更多猫猫信息！'
            }
        }
    ];

    const catGrid = document.getElementById('cat-grid-container');

    function createCatCard(cat) {
        const card = document.createElement('div');
        card.className = 'cat-card';

        let descriptionHtml = '';
        for (const [key, value] of Object.entries(cat.description)) {
            if (key === '欢迎') {
                descriptionHtml += `<p>${value}</p>`;
            } else {
                descriptionHtml += `<strong>${key}：</strong>${value}<br>`;
            }
        }

        card.innerHTML = `
            <div class="cat-image">
                <img src="${cat.image}" alt="${cat.alt}" class="cat-thumbnail">
            </div>
            <div class="cat-info">
                <h3 class="cat-name">${cat.name}</h3>
                <p class="cat-description">
                    ${descriptionHtml}
                </p>
            </div>
        `;
        return card;
    }

    catData.forEach(cat => {
        catGrid.appendChild(createCatCard(cat));
    });

    // Modal logic
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    var closeModal = document.getElementsByClassName("close-modal")[0];

    catGrid.addEventListener('click', function(event) {
        if (event.target.classList.contains('cat-thumbnail')) {
            modal.style.display = "flex";
            modalImg.src = event.target.src;
        }
    });

    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    modal.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});