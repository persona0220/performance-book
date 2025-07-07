# How to use

SysGPT is a GPT-4o based model fine-tuned using OpenAI's API.
Because of the API’s usage-based pricing, we cannot make the model publicly
accessible without incurring usage costs. As a result, we are unable to
host or deploy it directly.
Instead, we release our training data, evaluation methodology, and benchmarks
used in the paper through the resources below.

## Available Resources

To reproduce or experiment with SysGPT's methodology-aware behavior, refer to the open repository:

🔗 [https://github.com/sslab-gatech/SysGPT](https://github.com/sslab-gatech/SysGPT)

This includes:

- The full training and test dataset used during fine-tuning
- Benchmarks and scenarios described in the paper's evaluation
- Sample task sequences and GPT input formats
- Qualitative and quantitative evaluation results

## Reproducing Results

SysGPT was evaluated in the original paper using two approaches:

- **Section 5.2 – Qualitative Measurements**  
  Model responses were assessed for structure-awareness and alignment with the intended methodology.

- **Section 5.3 – Quantitative Measurements**  
  Suggestions were benchmarked in controlled environments to measure potential improvements in throughput and latency.

These sections can serve as a reference when applying the methodology to your own systems or when evaluating the model’s performance on new workloads.

