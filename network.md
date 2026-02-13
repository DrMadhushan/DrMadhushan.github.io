---
title: "Network"
layout: default
permalink: /network/
---

<div class="network-page">
  <div class="network-header">
    <h1>My Network</h1>
    <p class="network-subtitle">An interactive view of my professional and academic relationships</p>
  </div>

  <!-- Filter controls -->
  <div class="network-controls">
    <div class="network-filters">
      <button class="filter-btn active" data-filter="all">
        <i class="fa-solid fa-globe" aria-hidden="true"></i> All
      </button>
      <button class="filter-btn" data-filter="academic">
        <i class="fa-solid fa-graduation-cap" aria-hidden="true"></i> Academic
      </button>
      <button class="filter-btn" data-filter="professional">
        <i class="fa-solid fa-briefcase" aria-hidden="true"></i> Professional
      </button>
    </div>

    <!-- Legend -->
    <div class="network-legend">
      <span class="legend-item"><span class="legend-swatch" style="background:#2563eb"></span>Mentor</span>
      <span class="legend-item"><span class="legend-swatch" style="background:#16a34a"></span>Mentee</span>
      <span class="legend-item"><span class="legend-swatch" style="background:#f59e0b"></span>Peer</span>
    </div>
  </div>

  <!-- Graph container -->
  <div id="network-graph"></div>

  <!-- Tooltip (hidden by default) -->
  <div id="network-tooltip" class="network-tooltip"></div>
</div>

<!-- D3.js v7 from CDN -->
<script src="https://cdn.jsdelivr.net/npm/d3@7/dist/d3.min.js"></script>

<!-- Network visualization module -->
<script src="{{ '/assets/js/network.js' | relative_url }}"></script>

<!-- Initialize with YAML data serialized to JSON by Liquid -->
<script>
  document.addEventListener("DOMContentLoaded", function () {
    var networkData = {{ site.data.network | jsonify }};
    initNetworkGraph(networkData);
  });
</script>
