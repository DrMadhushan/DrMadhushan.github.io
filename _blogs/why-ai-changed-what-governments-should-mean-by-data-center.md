---
title: "Why AI Changed What Governments Should Mean by 'Data Center'"
date: 2026-04-29
draft: false
type: essay
keywords:
  - Data center
  - Policy
  - AI
links:
  # - label: "Medium"
  #   url: "https://medium.com/"
  # - label: "Company Blog"
  #   url: "https://example.com/"
---

A few years back, when governments discussed building a “data center,” they typically referred to a secure facility designed to host digital public infrastructure: government websites, databases, email systems, internal applications, and backup services.

That definition is shifting.

The rapid rise of artificial intelligence, particularly large language models, image generation systems, and emerging “world models”, has introduced a new set of problems that can be solved efficiently with advanced computing infrastructure. These systems require far more than conventional servers and storage. They demand dense computing clusters, industrial-scale electricity supply, advanced cooling systems, and ultra-fast internal networks.

As a result, the term “AI-ready data center” or “AI-native data center” should not be understood as simply a traditional data center with better hardware.

In many cases, it is entirely a different class of infrastructure.
This distinction matters because decisions around national digital infrastructure increasingly involve public investment, long-term energy planning, environmental trade-offs, and questions of technological sovereignty.

It is important for policymakers to understand what has changed.

## What is a traditional data center?
A traditional data center is a physical facility which houses servers, storage systems, and networking equipment to store and process vast amounts of data, and deliver reliable, secure and fault tolerant digital services.

#### The most common workloads are:
- hosting websites and online portals
- storing databases and digital records
- running enterprise applications
- processing transactions
- supporting backup and disaster recovery

These workloads are often diverse but relatively predictable. Most traditional data centers are therefore designed around CPUs (Central Processing Units), which are optimized for handling many different types of sequential and transactional tasks efficiently.

Inside these facilities, there are rows of server racks connected to storage systems, network switches, backup power supplies, and cooling systems. Continuous power supply and cooling are important considerations, but in many traditional deployments, rack densities are relatively moderate.

For governments, such facilities are often sufficient to support e-government and public-sector digitization goals.

<img src="/assets/img/blogs/datacenter-blog.png" alt="AI-native Datacenter" style="width: 90%; height: auto;">

## Why AI changes the infrastructure requirement
Modern AI systems operate differently. Training and serving large AI models involves enormous volumes of matrix and vector calculations performed continuously and across many processors in parallel. For example, generating text from a large language model or processing real-time video in an AI system may require billions of arithmetic operations within seconds.

This is why AI systems rely heavily on GPUs (Graphics Processing Units), which are designed to perform thousands of numerical operations simultaneously.

Compared to CPUs, GPUs provide significantly higher throughput for AI-related tasks such as:
- model training
- inference at scale
- image and video processing
- simulation and autonomous systems

However, this increase in computational density creates cascading infrastructure demands. AI-native data centers are not merely “faster” traditional data centers. They are denser, hotter, and significantly more demanding on surrounding infrastructure.

## Traditional vs AI-native data centers
At a physical level, both facilities may appear similar. Both contain racks, servers, cables, and cooling systems. The difference lies in the density of compute resources and the infrastructure needed to support them.

A traditional enterprise rack may consume 5–10 kW [1].
A high-density AI rack may consume 30 - 80 kW, and in some advanced deployments, exceed 100 kW per rack [2]. For comparison, a single AI server rack can consume as much power as hundreds of households in a developing country.

This increased density directly affects:
- electricity demand
- heat generation
- cooling design
- internal networking requirements

In practical terms, an AI-native data center is closer to an industrial utility installation than a conventional IT facility which poses 3 key national infrastructure challenges;

## The power challenge
Electricity is one of the most critical constraints. Traditional government or enterprise data centers may operate within a range of a few hundred kilowatts to several megawatts.

As we discussed above, AI-native facilities require tens or even hundreds of megawatts. For example, Google is developing a 1 GW datacenter in Vizag, India [3], which is one of the largest in the southern hemisphere. It could roughly consume the electricity that can power tens of thousands of homes, depending on local consumption patterns.

This creates national-level implications. For example, in Ireland, rapid growth in data center development has raised concerns over grid stability and electricity allocation, particularly around Dublin [4]. In Singapore, the government previously imposed restrictions on new data center developments partly due to energy and land constraints.

For policymakers, the key questions are not just purely technical:
1. Can the national grid support the additional demand?
2. Will this require dedicated substations or transmission upgrades?
3. Will energy demand compete with households or industry?
4. Can renewable energy support these loads sustainably?

## The cooling challenge
Nearly all electricity consumed by computing equipment is converted into heat at the end. As compute density increases, cooling becomes a primary engineering and operational challenge. Low tier traditional data centers commonly rely on air-based cooling systems and top tier ones are cooled with hybrid approaches.

AI-native facilities increasingly require liquid cooling technologies because air cooling alone may not be sufficient for high-density GPU clusters. Climate plays a key role as in warmer climates, cooling can account for a significant portion of operational energy usage. Cooling requires fresh water and consumes substantial electricity. Fresh water consumption is a critical constraint for policy makers.

For example, some data center projects in parts of Mexico have faced scrutiny over their freshwater consumption and its impact on local residents’ water access. [4]. Countries with tropical climates, like Sri Lanka, may face higher cooling costs and reduced efficiency compared to colder regions.

Hence policymakers must evaluate climate suitability, water availability, environmental trade-offs, and long-term cooling costs.

## Why this matters for policymakers
For governments, misunderstanding these differences can lead to poor infrastructure planning and expensive mistakes.

The key policy question is not:

“How do we build a data center?”

It is:

“What type of digital infrastructure is actually needed for the country’s goals?”

If the objective is hosting public services, a non-AI-native data center may be sufficient. To support universities and research labs, high performance computer (HPC) clusters can be more appropriate. When the government needs to enable large-scale AI model training or implement national AI platforms or accelerate advanced AI for defence, AI-native infrastructure may be necessary.

For developing nations, plans for AI-native datacenters come with a package of serious political and public policy decisions that affect:
- national electricity planning
- environmental sustainability
- public spending priorities
- digital sovereignty and local innovation capacity

**Not every country may need an AI-native data center. And for those that do, the decision should be based on evidence, projected demand, and long-term national strategy, not global hype.**

## References
1. [https://journal.uptimeinstitute.com/rack-density-is-rising/](https://journal.uptimeinstitute.com/rack-density-is-rising/)
2. [https://www.hanwhadatacenters.com/blog/what-are-the-power-requirements-for-ai-data-centers/](https://www.hanwhadatacenters.com/blog/what-are-the-power-requirements-for-ai-data-centers/)
3. [https://www.googlecloudpresscorner.com/2026-04-28-Google-Breaks-Ground-on-India-AI-Hub,-Launching-a-National-Industrial-Ecosystem-Alongside-Indias-Digital-Infrastructure-Milestone](https://www.googlecloudpresscorner.com/2026-04-28-Google-Breaks-Ground-on-India-AI-Hub,-Launching-a-National-Industrial-Ecosystem-Alongside-Indias-Digital-Infrastructure-Milestone) 
4. [https://www.nytimes.com/2025/10/20/technology/ai-data-center-backlash-mexico-ireland.html](https://www.nytimes.com/2025/10/20/technology/ai-data-center-backlash-mexico-ireland.html) 