# The Three Principles of Sequential Optimization

When working with sequential code, performance improvements must come from
altering the sequence of tasks itself. Unlike parallel execution, where
independent tasks can be distributed, sequential code has a strict order and
dependency. As a result, optimization is fundamentally constrained.

This guide introduces **three core principles** for improving sequential
performance. All practical optimization techniques can be understood as
combinations or variations of these principles.


## 1. Removal

**Definition**: Eliminate unnecessary tasks from the sequence.

If a task does not contribute to correctness or output, removing it reduces the
total length and cost of the sequence:

- The new sequence $S_m$ becomes shorter than the original $S_n$, where $m \lt n$.

This is the most direct form of optimization. Redundant computations, logging, duplicate checks, or stale operations are often good candidates for removal.


## 2. Replacement

**Definition**: Replace an existing task with a faster or simpler alternative.

Instead of removing a task entirely, it may be possible to replace it with another that achieves the same purpose more efficiently:

- $S_n = \{ ..., t_i, ... \}$ becomes $S'_n = \{ ..., t_j, ... \}$
- $F(S'_n) \lt F(S_n)$, even though the sequence length $n$ remains the same

Common examples include algorithm substitution, approximate computation, or context-aware decisions.


## 3. Reordering

**Definition**: Explore alternative permutations of $S_n$.

Task order affects memory access patterns, data locality, and hardware
efficiency. By reordering tasks carefully, systems can improve cache
utilization, lock contention, I/O scheduling, or task pipelining.

The goal is to find $S'_n$, a permutation of $S_n$ that leads to lower total cost:

- $F(S'_n) \lt F(S_n)$


## Why These Three?

Sequential performance is deterministic: the total runtime depends directly on
the tasks, their order, and the hardware. Without changing the system's
algorithm or correctness, **removal**, **replacement**, and **reordering** are
the only general-purpose levers available.

All of the optimization methodologies discussed in this guide — such as
batching, caching, or deferring — are built from combinations of these
principles.

In the next section, we define these eight methodologies in detail and show how
each one aligns with these foundational ideas.

