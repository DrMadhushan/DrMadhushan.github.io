/**
 * Network Visualization – D3.js Force-Directed Graph
 * ====================================================
 * Renders an interactive network graph of professional & academic relationships.
 *
 * Sections:
 *   1. Configuration & Constants
 *   2. Data Preparation
 *   3. SVG & Zoom Setup
 *   4. Force Simulation
 *   5. Rendering (links, nodes, avatars, labels)
 *   6. Tooltip (floating detail card)
 *   7. Filtering (All / Academic / Professional)
 *   8. Responsive Resize
 */

/* global d3 */

function initNetworkGraph(rawData) {
    "use strict";

    // ─── 1. CONFIGURATION & CONSTANTS ─────────────────────────────────────────

    /** Edge colors by relationship type */
    const EDGE_COLORS = {
        mentor: "#2563eb",   // Blue – guidance relationship
        mentee: "#16a34a",   // Green – mentorship given
        peer: "#f59e0b"    // Amber – equal collaboration
    };

    /** Node radius scale: strength 1→5 maps to radius 22→52 (sqrt for area) */
    const RADIUS_SCALE = d3.scaleSqrt().domain([1, 5]).range([22, 52]);

    /** Center node gets a fixed larger radius */
    const CENTER_RADIUS = 60;

    /** Tooltip element */
    const tooltip = d3.select("#network-tooltip");

    /** Container element */
    const container = document.getElementById("network-graph");

    // ─── 2. DATA PREPARATION ──────────────────────────────────────────────────

    /**
     * Build the nodes and links arrays from the raw YAML-sourced data.
     *  – The center node is always index 0
     *  – Each person becomes a node linked to the center
     */
    const centerNode = {
        id: rawData.center.id,
        name: rawData.center.name,
        role: rawData.center.role,
        avatar: rawData.center.avatar,
        isCenter: true,
        radius: CENTER_RADIUS
    };

    const personNodes = rawData.people.map(function (p) {
        return {
            id: p.id,
            name: p.name,
            category: p.category,
            relationship_type: p.relationship_type,
            strength: p.strength,
            avatar: p.avatar,
            collaborations: p.collaborations || [],
            summary: p.summary || "",
            description: p.description || "",
            url: p.url || "",
            isCenter: false,
            radius: RADIUS_SCALE(p.strength)
        };
    });

    const nodes = [centerNode].concat(personNodes);

    /** Every person has one link to the center node */
    const links = personNodes.map(function (p) {
        return {
            source: centerNode.id,
            target: p.id,
            relationship_type: p.relationship_type
        };
    });

    // ─── 3. SVG & ZOOM SETUP ─────────────────────────────────────────────────

    /** Compute initial dimensions from container */
    var width = container.clientWidth;
    var height = Math.max(560, window.innerHeight - 260);

    const svg = d3.select("#network-graph")
        .append("svg")
        .attr("width", "100%")
        .attr("height", height)
        .attr("viewBox", [0, 0, width, height]);

    /** Main group that receives zoom/pan transforms */
    const g = svg.append("g");

    /**
     * Zoom behaviour – scroll to zoom, drag to pan.
     * Scale limited between 0.3× and 4×.
     */
    const zoom = d3.zoom()
        .scaleExtent([0.3, 4])
        .on("zoom", function (event) {
            g.attr("transform", event.transform);
        });

    svg.call(zoom);

    // ─── 4. FORCE SIMULATION ──────────────────────────────────────────────────

    /**
     * Force layout:
     *  – forceLink: connects each person to center
     *  – forceCharge: negative charge pushes nodes apart
     *  – forceCollide: prevents overlap using node radii
     *  – forceCenter: gently pulls everything toward the viewport center
     *  – forceX/Y on center node: pin it strongly to the middle
     */
    const simulation = d3.forceSimulation(nodes)
        .force("link", d3.forceLink(links).id(function (d) { return d.id; }).distance(function (d) {
            // Shorter links for stronger relationships, longer base for more spacing
            var target = typeof d.target === "object" ? d.target : nodes.find(function (n) { return n.id === d.target; });
            var strength = target ? (target.strength || 3) : 3;
            return 250 - strength * 15;
        }))
        .force("charge", d3.forceManyBody().strength(-600))
        .force("collide", d3.forceCollide().radius(function (d) { return d.radius + 20; }))
        .force("center", d3.forceCenter(width / 2, height / 2).strength(0.05))
        .force("x", d3.forceX(width / 2).strength(function (d) { return d.isCenter ? 0.25 : 0.01; }))
        .force("y", d3.forceY(height / 2).strength(function (d) { return d.isCenter ? 0.25 : 0.01; }))
        .alphaDecay(0.02);

    // ─── 5. RENDERING ────────────────────────────────────────────────────────

    /** Draw links (edges) first so they sit behind nodes */
    const linkGroup = g.append("g").attr("class", "links");
    const linkElements = linkGroup.selectAll("line")
        .data(links)
        .join("line")
        .attr("stroke", function (d) { return EDGE_COLORS[d.relationship_type] || "#94a3b8"; })
        .attr("stroke-width", 2.5)
        .attr("stroke-opacity", 0.55);

    /** Draw node groups (circle + clipped avatar + label) */
    const nodeGroup = g.append("g").attr("class", "nodes");
    const nodeElements = nodeGroup.selectAll("g")
        .data(nodes)
        .join("g")
        .attr("class", function (d) {
            var cls = "node";
            if (d.isCenter) cls += " node--center";
            if (d.category) cls += " node--" + d.category;
            return cls;
        })
        .call(drag(simulation));

    /**
     * clipPath for each node so the avatar image is clipped to a circle.
     * Each clip path has a unique ID based on the node id.
     */
    const defs = svg.append("defs");
    nodeElements.each(function (d) {
        defs.append("clipPath")
            .attr("id", "clip-" + d.id)
            .append("circle")
            .attr("r", d.radius)
            .attr("cx", 0)
            .attr("cy", 0);
    });

    /** Background circle (visible ring / border) */
    nodeElements.append("circle")
        .attr("r", function (d) { return d.radius; })
        .attr("fill", function (d) { return d.isCenter ? "var(--link)" : "#e2e8f0"; })
        .attr("stroke", function (d) {
            if (d.isCenter) return "var(--link)";
            return EDGE_COLORS[d.relationship_type] || "#94a3b8";
        })
        .attr("stroke-width", function (d) { return d.isCenter ? 3 : 2; });

    /** Avatar image clipped to circle */
    nodeElements.append("image")
        .attr("xlink:href", function (d) { return d.avatar; })
        .attr("x", function (d) { return -d.radius; })
        .attr("y", function (d) { return -d.radius; })
        .attr("width", function (d) { return d.radius * 2; })
        .attr("height", function (d) { return d.radius * 2; })
        .attr("clip-path", function (d) { return "url(#clip-" + d.id + ")"; })
        .attr("preserveAspectRatio", "xMidYMid slice");

    /** Name label beneath each node */
    nodeElements.append("text")
        .text(function (d) { return d.name; })
        .attr("text-anchor", "middle")
        .attr("dy", function (d) { return d.radius + 16; })
        .attr("class", "node-label")
        .style("font-size", function (d) { return d.isCenter ? "13px" : "11px"; })
        .style("font-weight", function (d) { return d.isCenter ? "700" : "500"; })
        .style("fill", "var(--text)")
        .style("pointer-events", "none");

    /** Update positions every tick of the simulation */
    simulation.on("tick", function () {
        linkElements
            .attr("x1", function (d) { return d.source.x; })
            .attr("y1", function (d) { return d.source.y; })
            .attr("x2", function (d) { return d.target.x; })
            .attr("y2", function (d) { return d.target.y; });

        nodeElements.attr("transform", function (d) {
            return "translate(" + d.x + "," + d.y + ")";
        });
    });

    // ─── 6. TOOLTIP (FLOATING DETAIL CARD) ────────────────────────────────────

    /**
     * Show tooltip on hover.
     * Tooltip content adapts to whether the node is the center node or a person.
     */
    nodeElements
        .on("mouseenter", function (event, d) {
            if (d.isCenter) {
                tooltip.html(
                    '<div class="ntt-header">' +
                    '<strong class="ntt-name">' + d.name + '</strong>' +
                    '<span class="ntt-role">' + d.role + '</span>' +
                    '</div>' +
                    '<p class="ntt-summary">This is me — the center of the network.</p>'
                );
            } else {
                var collabHtml = "";
                if (d.collaborations.length > 0) {
                    collabHtml = '<div class="ntt-collabs"><span class="ntt-collabs-title">Collaborations</span><ul>' +
                        d.collaborations.map(function (c) { return "<li>" + c + "</li>"; }).join("") +
                        "</ul></div>";
                }

                var badge = '<span class="ntt-badge ntt-badge--' + d.category + '">' +
                    d.category.charAt(0).toUpperCase() + d.category.slice(1) + '</span>';

                var relBadge = '<span class="ntt-badge ntt-badge--rel">' +
                    d.relationship_type.charAt(0).toUpperCase() + d.relationship_type.slice(1) + '</span>';

                tooltip.html(
                    '<div class="ntt-header">' +
                    '<strong class="ntt-name">' + d.name + '</strong>' +
                    '<div class="ntt-badges">' + badge + relBadge + '</div>' +
                    '</div>' +
                    (d.summary ? '<p class="ntt-summary">' + d.summary + '</p>' : '') +
                    collabHtml
                );
            }

            tooltip.classed("visible", true);
            positionTooltip(event);
        })
        .on("mousemove", function (event) {
            positionTooltip(event);
        })
        .on("mouseleave", function () {
            tooltip.classed("visible", false);
        });

    /**
     * Position the tooltip near the cursor, keeping it within viewport bounds.
     */
    function positionTooltip(event) {
        var pad = 16;
        var ttNode = tooltip.node();
        var ttW = ttNode.offsetWidth;
        var ttH = ttNode.offsetHeight;
        var x = event.pageX + pad;
        var y = event.pageY + pad;

        if (x + ttW > window.innerWidth - pad) {
            x = event.pageX - ttW - pad;
        }
        if (y + ttH > window.innerHeight - pad) {
            y = event.pageY - ttH - pad;
        }

        tooltip.style("left", x + "px").style("top", y + "px");
    }

    // ─── 7. FILTERING (ALL / ACADEMIC / PROFESSIONAL) ────────────────────────

    /**
     * Filter buttons toggle node + link visibility with smooth opacity transitions.
     * The center node is always visible.
     *
     * How it works:
     *  1. Read the data-filter attribute from the clicked button
     *  2. For each node: if it matches the filter (or is center), set full opacity;
     *     otherwise fade it out.
     *  3. For each link: visible only if the connected person node is visible.
     */
    var filterButtons = document.querySelectorAll(".network-filters .filter-btn");

    filterButtons.forEach(function (btn) {
        btn.addEventListener("click", function () {
            // Update active state on buttons
            filterButtons.forEach(function (b) { b.classList.remove("active"); });
            btn.classList.add("active");

            var filter = btn.getAttribute("data-filter");

            // Determine which node IDs are visible
            var visibleIds = new Set();
            visibleIds.add(centerNode.id);

            nodes.forEach(function (n) {
                if (n.isCenter) return;
                if (filter === "all" || n.category === filter) {
                    visibleIds.add(n.id);
                }
            });

            // Transition nodes
            nodeElements.transition().duration(350)
                .style("opacity", function (d) { return visibleIds.has(d.id) ? 1 : 0.08; })
                .style("pointer-events", function (d) { return visibleIds.has(d.id) ? "all" : "none"; });

            // Transition links
            linkElements.transition().duration(350)
                .style("opacity", function (d) {
                    var targetId = typeof d.target === "object" ? d.target.id : d.target;
                    return visibleIds.has(targetId) ? 0.55 : 0.04;
                });
        });
    });

    // ─── 8. RESPONSIVE RESIZE ────────────────────────────────────────────────

    /**
     * Re-center the simulation and update SVG viewBox when the container resizes.
     */
    if (typeof ResizeObserver !== "undefined") {
        var ro = new ResizeObserver(function (entries) {
            var entry = entries[0];
            var newW = entry.contentRect.width;
            var newH = Math.max(560, window.innerHeight - 260);

            width = newW;
            height = newH;

            svg.attr("viewBox", [0, 0, width, height]);
            svg.attr("height", height);

            simulation.force("center", d3.forceCenter(width / 2, height / 2).strength(0.05));
            simulation.force("x", d3.forceX(width / 2).strength(function (d) { return d.isCenter ? 0.25 : 0.01; }));
            simulation.force("y", d3.forceY(height / 2).strength(function (d) { return d.isCenter ? 0.25 : 0.01; }));
            simulation.alpha(0.25).restart();
        });
        ro.observe(container);
    }

    // ─── DRAG HELPER ──────────────────────────────────────────────────────────

    /**
     * D3 drag behaviour – lets users reposition nodes interactively.
     * Reheats the simulation while dragging to keep the layout alive.
     */
    function drag(sim) {
        return d3.drag()
            .on("start", function (event, d) {
                if (!event.active) sim.alphaTarget(0.25).restart();
                d.fx = d.x;
                d.fy = d.y;
            })
            .on("drag", function (event, d) {
                d.fx = event.x;
                d.fy = event.y;
            })
            .on("end", function (event, d) {
                if (!event.active) sim.alphaTarget(0);
                // Release non-center nodes; keep center pinned
                if (!d.isCenter) {
                    d.fx = null;
                    d.fy = null;
                }
            });
    }
}
