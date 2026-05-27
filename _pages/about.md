---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

<div class="lang-content" data-lang="en" markdown="1">

**Hi there,👋**

I am currently a PhD student with the Department of Electrical and Computer Engineering at University of Massachusetts Lowell.

I received my master's degree from Hong Kong Polytechnic University, where I was advised by [Prof. Kenneth Lam](https://www.eie.polyu.edu.hk/~enkmlam/). My research there focused on deep learning methods for low-light image enhancement. I also work closely with [Prof. Kewen Xia](https://eweb.hebut.edu.cn/FacultySchools/SOEAIE/DS7/d5147b122e5c48a0ac195a950084a521.htm) on intelligent optimization algorithms.

I am now working under the supervision of [Prof. Hengyong Yu](https://sites.uml.edu/hengyong-yu/) <a href='https://scholar.google.com/citations?user=wQcl7k8AAAAJ'><img src="https://img.shields.io/endpoint?logo=Google%20Scholar&url={{ url | url_encode }}&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a> on solving inverse problems in medical imaging, with a focus on Computed Tomography (CT) reconstruction. Our work is supported by the NIH-NIBIB and my research involves developing diffusion-based generative models and physics-informed frameworks to enhance image quality from sparse or limited-angle measurements. I am particularly interested in integrating generative modeling techniques with domain-specific priors to achieve high-fidelity and interpretable reconstructions in clinical applications.

Outside of research, I love photography 📷 (and sometimes share posts on RedNote), playing badminton 🏸, and getting outdoors for things like fishing 🎣, skiing ⛷️, and climbing 🧗‍♂️.

</div>

<div class="lang-content" data-lang="zh" markdown="1">

**你好，👋**

我目前是麻省大学洛厄尔分校电子与计算机工程系的博士生。

我在香港理工大学获得硕士学位，导师是 [Kenneth Lam 教授](https://www.eie.polyu.edu.hk/~enkmlam/)。硕士期间我的研究主要关注面向低光照图像增强的深度学习方法。我也与 [夏克文教授](https://eweb.hebut.edu.cn/FacultySchools/SOEAIE/DS7/d5147b122e5c48a0ac195a950084a521.htm) 合作，研究智能优化算法相关问题。

现在我在 [Hengyong Yu 教授](https://sites.uml.edu/hengyong-yu/) <a href='https://scholar.google.com/citations?user=wQcl7k8AAAAJ'><img src="https://img.shields.io/endpoint?logo=Google%20Scholar&url={{ url | url_encode }}&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a> 的指导下，研究医学影像中的逆问题，重点是计算机断层成像（CT）重建。我们的工作得到 NIH-NIBIB 的支持，我的研究包括开发基于扩散模型的生成式方法和物理信息框架，以提升稀疏角度或有限角度测量下的图像质量。我尤其关注将生成内容技术与领域先验相结合，在临床应用中实现高保真且可解释的重建。

科研之外，我喜欢摄影 📷（偶尔也会在小红书分享）、打羽毛球 🏸，也喜欢钓鱼 🎣、滑雪 ⛷️ 和攀岩 🧗‍♂️ 这样的户外活动。

</div>

<span class='anchor' id='news'></span>

<div class="lang-content" data-lang="en" markdown="1">

# 🔥 News
- *2026.06*: I will be joining Subtle Medical in California as a Research Intern.
- *2026.03*:  My paper was accepted by The 9th International Conference on Image Formation in X-Ray Computed Tomography (CT Meeting), see you in Salt Lake City this June!
- *2025.09*:  My first journal paper was accepted by IEEE TRPMS. 
- *2025.03*:  My paper was accepted by The 18th International Meeting on Fully 3D Image Reconstruction in Radiology and Nuclear Medicine. 
<!-- - *2025.06*:  My first journal paper was submitted to Arxiv.  -->

</div>

<div class="lang-content" data-lang="zh" markdown="1">

# 🔥 近期动态
- *2026.06*: 我将作为研究实习生加入加州的Subtle Medical。
- *2026.03*: 我的论文被第 9 届 International Conference on Image Formation in X-Ray Computed Tomography (CT Meeting)接收, 6月盐湖城见！
- *2025.09*: 我的第一篇期刊论文被 IEEE TRPMS 接收。
- *2025.03*: 我的论文被第 18 届 International Meeting on Fully 3D Image Reconstruction in Radiology and Nuclear Medicine 接收。

</div>

<span class='anchor' id='publications'></span>

<div class="lang-content" data-lang="en" markdown="1">

# 📝 Publications

</div>

<div class="lang-content" data-lang="zh" markdown="1">

# 📝 论文发表

</div>

{% include publications.html %}

<!-- # 🎖 Honors and Awards
- *2021.10* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.09* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  -->

<span class='anchor' id='professional-activities'></span>

<div class="lang-content" data-lang="en" markdown="1">

# 📖 Professional Activities

## Reviewer of

- IEEE Transaction on Medical Imaging
- Biomedical Signal Processing and Control
- Medical Physics
- Journal of X-Ray Science and Technology
- IEEE Access

</div>

<div class="lang-content" data-lang="zh" markdown="1">

# 📖 学术服务

## 审稿人

- IEEE Transaction on Medical Imaging
- Biomedical Signal Processing and Control
- Medical Physics
- Journal of X-Ray Science and Technology
- IEEE Access

</div>

<!-- - *M.S*, <a href="https://www.polyu.edu.hk/en/"><img class="svg" src="/images/others/polyu.png" width="24pt"></a> Electronic Information Engineering, Hong Kong Polytechnic University.
- *B.Eng*, <a href="https://www.imu.edu.cn/"><img class="svg" src="/images/others/imu.png" width="24pt"></a> Electronic Information Science and Technology, Inner Mongolia University.  -->

<!-- # 💬 Invited Talks -->
<!-- - *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/)

# 💻 Internships
- *2019.05 - 2020.02*, [Lorem](https://github.com/), China. -->

<div id="footer">
	<div id="footer-text"></div>
</div>
<hr>

<!-- 页脚和访客地图 -->
<script type='text/javascript' id='clustrmaps' src='//cdn.clustrmaps.com/map_v2.js?cl=999595&w=a&t=tt&d=q6JZWGXT2IjFkdr3egU1Ascp9OxJ72R8tOQbnf6EJfw&co=ffffff&cmo=3acc3a&cmn=ff5353&ct=808080'></script>
<p style="text-align:center;">&copy; Chelsen Fang</p>
<p style="text-align:center;"><span data-i18n-en="Last update: 05/26/2026" data-i18n-zh="最后更新：2026/05/26">Last update: 05/26/2026</span></p>
<!-- <p><center> &copy; Jack Ma </center></p> -->
