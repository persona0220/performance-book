# Introduction

This site presents a structured set of concepts and strategies for optimizing
sequential performance in modern systems.
It is a restructured and accessible version of the ideas presented in the
paper *"[Principles and Methodologies for Serial Performance Optimization
(OSDI'25)](https://www.usenix.org/conference/osdi25/presentation/park-sujin)"*.

The content is intended to serve as a reference and guide, helping system
designers and engineers identify opportunities for improving latency and
throughput when facing performance bottlenecks, especially in the parts of the
system that cannot be parallelized.


## Why Sequential Performance?

Improving performance has long been a core challenge in system design. Even with
continued progress in parallel computing, many critical bottlenecks arise from
sequential execution, where code must run in a specific order and cannot be
parallelized due to logical or data dependencies.

According to Amdahl’s Law, the portion of a system that remains sequential
limits the maximum achievable speedup. So, even in highly parallel systems,
improving sequential performance is essential for making meaningful overall
gains.


## A Structured Approach

To make sequential performance optimization more systematic, this guide
introduces [three foundational principles](./principles.md):

- **Removal** – Eliminate unnecessary tasks.
- **Replacement** – Substitute with faster alternatives.
- **Reordering** – Execute tasks in a more efficient sequence.

These principles are the basis for *eight actionable methodologies* that appear
again and again in systems research and practice:

- [Batching](./batching.md)
- [Caching](./caching.md)
- [Precomputing](./precomputing.md)
- [Deferring](./deferring.md)
- [Relaxation](./relaxation.md)
- [Contextualization](./context.md)
- [Hardware Specialization](./hardware.md)
- [Layering](./layering.md)


## More Than Theory

Each methodology in this guide is explained through clear examples, diagrams,
and patterns found in real systems. The goal is not only to provide insight, but
also to serve as a *checklist* and *design vocabulary* that helps you:

- Understand where inefficiencies come from
- Apply proven optimization strategies
- Discover new directions for improving throughput and latency

To bridge theory and application, the final section introduces
[SysGPT](./sysgpt.md), a language model fine-tuned to suggest system performance
improvements using this exact methodology.
