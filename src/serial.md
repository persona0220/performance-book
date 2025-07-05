# Serial Performance

Performance optimization in system design often centers around making things
faster or more scalable. While parallelism plays a major role in this, one
critical limitation remains: some parts of the system simply cannot be
parallelized.

These sequential sections limit overall performance, even in systems with many
cores or distributed architecture.


## Why Sequential Performance Matters

These sequential components---the portions of execution that must occur in a
fixed order---have a disproportionate impact on overall performance.

The fundamental reason is captured by *Amdahl's Law*, which states that the
maximum speedup of a program is limited by the fraction that must be executed
sequentially.

$$
S_{\text{parallel}} = \frac{1}{F_{\text{serial}} + \frac{F_{\text{parallel}}}{N}}
$$

- $S_{\text{parallel}}$:&nbsp;&nbsp;&nbsp;the maximum speedup with $N$ processors
- $F_{\text{serial}}$:&nbsp;&nbsp;&nbsp;the fraction of the workload that is sequential
- $F_{\text{parallel}}$:&nbsp;&nbsp;&nbsp;the fraction that can be parallelized


Even with an infinite number of processors, the sequential portion becomes the
limiting factor. In real-world systems, sequential work is common in areas like
I/O, memory management, synchronization, and task scheduling. This is why
reducing the cost of sequential execution is critical, especially in systems
where parallelism cannot be fully exploited.


## Modeling Serial Execution

To reason about serial performance more clearly, we define the work as a
sequence of tasks:

$$
S_n = \{t_1, t_2, \dots, t_n\}
$$

- $S_n$ :&nbsp;&nbsp;&nbsp;a sequence of $n$ tasks to be executed in order
- $t_i$ :&nbsp;&nbsp;&nbsp;an individual task

This sequence models one logical unit of work, commonly referred to as an
*epoch*. Many systems repeatedly execute similar task sequences---such as
request handling loops, model training steps, or update cycles---and optimizing
these repeated patterns is often the most effective path to performance gains.

Each task $t_i$ contributes directly to the overall runtime of the epoch.
Therefore, the cost of processing the sequence, denoted by $F(S_n)$, is
deterministically influenced by both the content and order of the sequence
$S_n$, as well as by the underlying hardware $F$ on which it runs. This
deterministic nature makes it possible to reason precisely about optimizations
and their effects.


## Latency and Throughput

This model allows us to represent two central performance metrics:

### Latency

The time required to complete a single epoch:

$$
\text{latency} = F(S_n)
$$

Where $F(S_n)$ is the total execution time of the sequence.

### Throughput

The number of epochs that can be completed within a given time:

$$
\text{throughput} = N, \quad \text{such that} \quad N \cdot F(S_n) < T
$$

Here, $T$ is a fixed time budget (e.g. 1 second), and $N$ is the number of full epochs that can be completed.


These definitions provide a simple but powerful model for thinking about serial
performance. The remainder of this guide focuses on how to optimize $F(S_n)$
using structured and feasible strategies.

