---
title: "Publications"
layout: page
permalink: /publications/
---

<div class="grid">
  {% assign pubs = site.publications | sort: 'year' | reverse %}
  {% for pub in pubs %}
    <div class="card">
      <p class="eyebrow">{{ pub.status | default: "Publication" }}</p>
      <p class="citation">
        {% if pub.authors %}{{ pub.authors | join: ", " }}.{% endif %}
        <strong>{{ pub.title }}</strong>.
        {% if pub.venue %}{{ pub.venue }}, {% endif %}
        {% if pub.year %}{{ pub.year }}.{% endif %}
      </p>
      {% if pub.abstract %}<p class="keywords">{{ pub.abstract | truncate: 180 }}</p>{% endif %}
      {% if pub.links %}
        <div class="chip-row">
          {% for link in pub.links %}
            <a class="chip" href="{{ link.url }}" target="_blank" rel="noopener">{{ link.label }} <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a>
          {% endfor %}
        </div>
      {% endif %}
    </div>
  {% endfor %}
</div>
