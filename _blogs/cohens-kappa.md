---
title: "Understanding Cohen's Kappa in Machine Learning"
date: 2026-01-16
draft: false
type: writeup
keywords:
  - Core ML
---

In machine learning, we often evaluate model predictions to assess performance. The most common evaluation metrics you will see are **accuracy**, **precision**, and **F1-score**.  

When you see accuracy reported as 98% or 99%, you might think, *“Wow, the model is performing great!”* But the truth is, accuracy is **subjective to the data**. A dumb model can still achieve near-perfect accuracy under certain conditions. Let’s see how.


## What is a Confusion Matrix?

Before diving into accuracy, let’s revisit the **confusion matrix**, especially for a binary prediction scenario.  

You have:
- **Ground truth / true labels**  
- **Model predictions**

From these, we can build a confusion matrix to summarize prediction outcomes:

|                  | Predicted Positive | Predicted Negative |
|------------------|-----------------|-----------------|
| **Actual Positive** | True Positive (TP) | False Negative (FN) |
| **Actual Negative** | False Positive (FP) | True Negative (TN) |

> For example:  
> FN = Actually the value belongs to Positive class, but the model predicted Negative class.

Once you understand FN, the rest are easier to interpret.

## Accuracy

Accuracy measures **how many predictions were correct** out of all predictions.  

$$
Accuracy = \frac{TP + TN}{TP + FP + TN + FN}
$$

Let’s consider a dataset of 100 points with a **biased label distribution**:
- 98 positive class  
- 2 negative class  

Suppose our model predicts **positive for all instances**:

$$
Accuracy = \frac{98 + 0}{100} = 0.98 \rightarrow 98\%
$$

Looks great, right? But clearly, the model **fails completely for the negative class**. Accuracy alone can be misleading.


## Cohen's Kappa

To overcome this, we use **Cohen’s Kappa**, which normalizes agreement by accounting for **expected agreement by chance**.  

The formula is:

$$
\kappa = \frac{P_a - P_e}{1 - P_e}
$$


Where:
- P_a = Observed agreement (basically accuracy)  
- P_e = Expected agreement by chance  

> Expected agreement answers: *“If predictions were made randomly but followed the same class distribution, how often would they match the true labels?”*

**Important:**  
Expected agreement is calculated per class and summed to produce a **single Kappa value**.


### Calculating Kappa: Example

Using the previous example:

- Observed accuracy: \(P_a = 0.98\)

**Positive class**:  
$$
P_{e+} = 0.98 \times 0.98 = 0.9604
$$

**Negative class**:  
$$
P_{e-} = 0.02 \times 0 = 0
$$

$$
P_e = P_{e+} + P_{e-} = 0.9604 + 0 = 0.9604
$$

$$
\kappa = \frac{0.98 - 0.9604}{1 - 0.9604} \approx 0.495
$$

Boom 💥


A Kappa of ~0.5 indicates **moderate agreement beyond chance**.  

- The model **is better than random**, but much of the high accuracy comes from **class imbalance**.  
- Kappa exposes that the “wow” factor of 98% accuracy is misleading.  
- The model **has learned something**, but it’s far from as perfect as raw accuracy suggests.

> In short: if your model looks good only because of class imbalance, Kappa **calls it out**.

 
The Kohen's Kappa is useful in model evaluation when imbalanced datasets and data annotations to evaluate the inter-annotator agreement, we will discuss **Kappa in annotation tasks and other metrics** in the next write up.

---

### Takeaways

1. **Accuracy can be misleading** with imbalanced data.  
2. **Cohen’s Kappa measures agreement beyond chance**.  
3. **High accuracy + skewed labels → moderate Kappa**, exposing the real performance.  
4. Kappa is particularly handy in **model evaluation and annotation tasks**.


