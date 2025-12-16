---
title: "Enhancing Safety in Diabetic Retinopathy Detection: Uncertainty-Aware Deep Learning Models with Rejection Capabilities"
authors:
  - "Madhushan Ramalingam"
  - "Yaish R"
  - "Priyanthi R"
  - "Piyumi D"
venue: "arXiv preprint"
year: 2025
status: "Preprint"
abstract: "This study uses uncertainty-aware deep learning and selective rejection to improve the reliability of diabetic retinopathy diagnosis by balancing prediction accuracy with caution."
links:
  - label: "arXiv"
    url: "https://arxiv.org/pdf/2510.00029"
  # - label: "Code"
  #   url: "https://github.com/example/benchmarking-llms"
---

Diabetic retinopathy (DR) is a major cause of visual impairment, and effective treatment options depend heavily on timely and accurate diagnosis. Deep learning models have demonstrated great success identifying DR from retinal images. However, relying only on predictions made by models, without any indication of model confidence, creates uncertainty and poses significant risk in clinical settings. This paper investigates an alternative in uncertainty-aware deep learning models, including a rejection mechanism to reject low-confidence predictions, contextualized by deferred decision-making in clinical practice. The results show there is a trade-off between prediction coverage and coverage reliability. The Variational Bayesian model adopted a more conservative strategy when predicting DR, subsequently rejecting the uncertain predictions. The model is evaluated by means of important performance metrics such as Accuracy on accepted predictions, the proportion of accepted cases (coverage), the rejection-ratio, and Expected Calibration Error (ECE). The findings also demonstrate a clear trade-off between accuracy and caution, establishing that the use of uncertainty estimation and selective rejection improves the model's reliability in safety-critical diagnostic use cases.
