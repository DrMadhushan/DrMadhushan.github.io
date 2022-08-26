---
layout: page
title: About
permalink: /about/
weight: 3
---

# **About Me**
<div class="d-flex">
    <img width=200 src="{{ site.author.image }}" alt="{{ site.title }}" class="img-responsive wow animated zoomIn" data-wow-delay=".1s">
</div>

Hi I am **{{ site.author.name }}** :wave:,<br>
Am a Sri Lankan-based engineering individual who loves the business picture of his work. I love to learn computer engineering concepts and apply them to solve real-world problems. For that, I prefer good work over smart work and hard work for sustainable success. It makes me an excellent long-term planner. Fun and comedy drive me and relieve my stress, but I am serious at work.

<div class="row">
{% include about/skills.html title="Programming Skills" source=site.data.programming-skills %}
{% include about/skills.html title="Other Skills" source=site.data.other-skills %}
</div>
<!-- 
<div class="row">
{% include about/certificates.html title="Certifications" source=site.data.certificates %}
</div> -->

<div class="row">
{% include about/timeline.html %}
</div>