# The Eight Optimization Methodologies

While sequential performance optimization often appears open-ended or
intuition-driven, it can actually be explained using a small set of recurring
strategies.

This guide defines eight core methodologies, each grounded in the principles
of removal, replacement, and reordering introduced earlier.

These methodologies have emerged from analyzing hundreds of real system papers
and implementations. They cover the most common and effective patterns used to
reduce latency and improve throughput in sequential execution.


## Overview

Each methodology provides a different way to reduce the cost of sequential task
sequences. They are often used in combination, and many real systems apply
multiple strategies at once.

Click on any item to explore details, examples, and design conditions.

- [Batching](./batching.md): Combine similar or repeated operations into larger units to reduce overhead.
- [Caching](./caching.md): Store and reuse the results of expensive computations to avoid recomputation.
- [Precomputing](./precomputing.md): Execute certain tasks ahead of time, outside the critical path.
- [Deferring](./deferring.md): Delay non-essential tasks until a more favorable time.
- [Relaxation](./relaxation.md): Trade accuracy, consistency, or durability for performance gains.
- [Contextualization](./context.md): Use runtime information to make decisions more tailored and efficient.
- [Hardware Specialization](./hardware.md): Leverage specialized hardware to reduce task cost.
- [Layering](./layering.md): Restructure or bypass software layers to remove unnecessary overhead.


Each of the following sections covers:

- What the methodology does
- How it relates to the three principles
- Conditions and caveats for applying it
- Real-world examples from systems research

Together, these form a practical vocabulary for designing or analyzing
performance optimizations in modern systems.

