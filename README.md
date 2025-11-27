# SIOC生活指南

这是一个为中国科学院上海有机化学研究所（SIOC）的师生提供生活指南的网站。网站包含了住宿、餐饮、交通等多个方面的实用信息。

## 网站内容

- 住宿指南：所内外各类宿舍的详细信息
- 餐饮攻略：周边餐饮推荐
- 交通出行：交通指南
- 娱乐休闲：周边娱乐场所
- 学习资源：课程、实验、文献阅读等学习资源

## 如何访问

网站已部署在GitHub Pages上，您可以通过以下链接访问：
[SIOC生活指南](https://jiaodu1307.github.io/sioc-life/)

## 本地开发

1. 克隆仓库：
```bash
git clone https://github.com/jiaodu1307/sioc-life.git
```

2. 使用任意HTTP服务器运行网站，例如使用Python：
```bash
python -m http.server
```

3. 在浏览器中访问 `http://localhost:8000`

#### 贡献

如果您发现任何需要更新或补充的信息，欢迎提交Pull Request或提出Issue。

## 如何添加内容

### 猫猫图鉴 (cats.html)
编辑 `assets/data/cats.json` 添加新猫猫条目。格式如下：

```json
{
  "name": "猫猫名字",
  "image": "../assets/images/cats/主页/猫猫照片.jpg",
  "details": {
    "别称": "猫猫别称",
    "性别": "性别",
    "年龄": "年龄",
    "毛色": "毛色",
    "特征": "特征描述",
    "性格": "性格描述",
    "绝育": "是否绝育",
    "关系": "与其他猫的关系",
    "状态": "流浪/领养"
  }
}
```

### 饮食攻略 (food.html)
编辑 `assets/data/food.json` 添加新餐饮条目。格式如下：

```json
{
  "name": "餐饮名称",
  "category": "所内", 
  "tags": ["标签1", "标签2"],
  "price": "价格范围",
  "distance": "距离描述",
  "image": "../assets/images/food/餐饮照片.jpg",
  "shortReview": "简短评价",
  "mapUrl": "地图链接（可选）"
}
```
注：
- `category` 可选值："所内" 或 "所外"
- 如果是多张图片，可以使用 `"images": ["path1.jpg", "path2.jpg"]` 替代 `"image"` 字段。