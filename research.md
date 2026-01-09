---
title: "Research"
layout: page
permalink: /projects/
---

<div class="grid">
  {% assign projects = site.research | sort: 'priority' %}
  {% for project in projects %}
    {% assign state = project.status | downcase %}
    <div class="card {% if state == 'active' %}card-active{% endif %}">
      <p class="eyebrow">{{ project.type }}</p>
      <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
      {% if project.affiliations %}
        <p class="meta">{{ project.affiliations | join: " · " }}</p>
      {% endif %}
      {% if project.keywords %}
        <p class="keywords">{{ project.keywords | join: " · " }}</p>
      {% endif %}
      <!-- <p class="meta">{{ project.description }}</p> -->
      {% if project.collaborators %}
        <p class="meta"><strong>Collaborators:</strong> {{ project.collaborators | join: ", " }}</p>
      {% endif %}
      {% if project.links %}
        <div class="chip-row">
          {% for link in project.links %}
            <a class="chip" href="{{ link.url }}" target="_blank" rel="noopener">{{ link.label }} <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a>
          {% endfor %}
        </div>
      {% endif %}
    </div>
  {% endfor %}
</div>
