---
title: "Uncertainty-Aware Tabular Prediction: Evaluating VBLL-Enhanced TabPFN in Safety-Critical Medical Data"
authors:
  - "Madhushan Ramalingam"
venue: "arXiv preprint"
year: 2025
status: "Preprint"
abstract: "Contrary to expectations, integrating VBLL with TabPFN did not improve uncertainty calibration compared to the original TabPFN on medical tabular datasets."
links:
  - label: "arXiv"
    url: "https://arxiv.org/pdf/2509.10048?"
  # - label: "Project Page"
  #   url: "https://example.com/calibration-robustness"
---

Predictive models are being increasingly used across a wide range of domains, including safety-critical applications such as medical diagnosis and criminal justice. Reliable uncertainty estimation is a crucial task in such settings. Tabular Prior-data Fitted Network (TabPFN) is a recently proposed machine learning foundation model for tabular dataset, which uses a generative transformer architecture. Variational Bayesian Last Layers (VBLL) is a state-of-the-art lightweight variational formulation that effectively improves uncertainty estimation with minimal computational overhead. In this work we aim to evaluate the performance of VBLL integrated with the recently proposed TabPFN in uncertainty calibration. Our experiments, conducted on three benchmark medical tabular datasets, compare the performance of the original TabPFN and the VBLL-integrated version. Contrary to expectations, we observed that original TabPFN consistently outperforms VBLL integrated TabPFN in uncertainty calibration across all datasets.