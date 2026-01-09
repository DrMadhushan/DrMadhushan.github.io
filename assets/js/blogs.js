(() => {
  const searchInput = document.getElementById("blog-search");
  const filterSelect = document.getElementById("blog-filter");
  const grid = document.getElementById("blog-grid");
  const emptyState = document.getElementById("blog-empty");

  if (!searchInput || !filterSelect || !grid) {
    return;
  }

  const cards = Array.from(grid.querySelectorAll(".blog-card"));

  const applyFilters = () => {
    const query = searchInput.value.trim().toLowerCase();
    const keyword = filterSelect.value.trim().toLowerCase();
    let visibleCount = 0;

    cards.forEach((card) => {
      const title = card.dataset.title || "";
      const keywords = card.dataset.keywords || "";
      const keywordList = keywords
        .split("|")
        .map((item) => item.trim())
        .filter(Boolean);
      const matchesQuery =
        !query || title.includes(query) || keywordList.join(" ").includes(query);
      const matchesKeyword = !keyword || keywordList.includes(keyword);

      if (matchesQuery && matchesKeyword) {
        card.removeAttribute("hidden");
        visibleCount += 1;
      } else {
        card.setAttribute("hidden", "true");
      }
    });

    if (emptyState) {
      emptyState.hidden = visibleCount !== 0;
    }
  };

  searchInput.addEventListener("input", applyFilters);
  filterSelect.addEventListener("change", applyFilters);
})();
