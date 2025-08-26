---
layout: page
title: About
permalink: /about/
weight: 3
---

# **Bits of Me**
<div class="d-flex">
    <img width=200 src="{{ site.author.image }}" alt="{{ site.title }}" class="img-responsive wow animated zoomIn" data-wow-delay=".1s">
</div>

Hi I am **{{ site.author.name }}** :wave:,<br>
Am a Sri Lankan engineer and data science researcher who’s passionate about using technology to create meaningful impact. I enjoy exploring computer engineering concepts and turning them into solutions for real-world challenges, especially where they intersect with people, communities, and long-term change. I believe in steady, thoughtful work that drives sustainable success, and I approach problems with both a planner’s mindset and a curiosity for learning. Humor and creativity keep me grounded, but when it comes to work, I’m deeply committed and focused.

<div class="row">
{% include about/publications.html title="Publications" source=site.data.publications %}
<!-- {% include about/skills.html title="Other Skills" source=site.data.other-skills %} -->
</div>
<!-- 
<div class="row">
{% include about/certificates.html title="Certifications" source=site.data.certificates %}
</div> -->

<div class="row">
{% include about/timeline.html %}
</div>