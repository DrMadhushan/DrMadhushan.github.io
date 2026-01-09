---
title: "Blogs"
layout: page
permalink: /blogs/
---

<header class="page-header">
  <h1><i class="fa-regular fa-bookmark"></i> Blogs</h1>
  <p class="meta">Notes, essays, and write-ups.</p>
</header>

<div class="blog-controls">
  <label class="search-input">
    <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
    <input id="blog-search" type="search" placeholder="Search blogs" aria-label="Search blogs">
  </label>
  <label class="filter-select">
    <i class="fa-solid fa-tag" aria-hidden="true"></i>
    <select id="blog-filter" aria-label="Filter by keyword">
      <option value="">All keywords</option>
      {% assign all_keywords = "" | split: "" %}
      {% for post in site.blogs %}
        {% if post.keywords %}
          {% for keyword in post.keywords %}
            {% assign all_keywords = all_keywords | push: keyword %}
          {% endfor %}
        {% endif %}
      {% endfor %}
      {% assign all_keywords = all_keywords | uniq | sort %}
      {% for keyword in all_keywords %}
        <option value="{{ keyword | downcase | strip }}">{{ keyword }}</option>
      {% endfor %}
    </select>
  </label>
</div>

<p class="meta blog-empty" id="blog-empty" hidden>No matching blogs found.</p>

{% if posts == empty %}
  <p class="meta">No blogs yet. Add Markdown files under <code>_blogs/</code> to publish new posts.</p>
{% endif %}

{% assign posts = site.blogs | sort: "date" | reverse %}
<div class="grid blog-grid" id="blog-grid">
  {% for post in posts %}
    {% if post.draft != true %}
      <a class="card blog-card" href="{{ post.url | relative_url }}"
        data-title="{{ post.title | downcase }}"
        data-keywords="{{ post.keywords | join: '|' | downcase }}">
        {% if post.date %}
          <p class="eyebrow"><i class="fa-regular fa-calendar" aria-hidden="true"></i> {{ post.date | date: "%d %b %Y" }}</p>
        {% endif %}
        <h3>{{ post.title }}</h3>
        {% if post.keywords %}
          <p class="keywords"><i class="fa-solid fa-tags" aria-hidden="true"></i> {{ post.keywords | join: " · " }}</p>
        {% endif %}
      </a>
    {% endif %}
  {% endfor %}
</div>

<script src="{{ '/assets/js/blogs.js' | relative_url }}"></script>
