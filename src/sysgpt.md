# SysGPT

SysGPT is a language model assistant fine-tuned to suggest serial performance
optimizations in system software. It encodes the eight methodologies covered in
this guide and provides actionable advice tailored to specific task sequences or
execution traces.

Rather than replacing domain expertise, SysGPT acts as an interactive
collaborator:
It helps system designers explore ideas, challenge assumptions, and identify
overlooked optimization opportunities.


## Motivation

Improving sequential performance often requires expert-level understanding of hardware, scheduling, caching, and software structure.
However, this knowledge is often fragmented across papers, systems, and teams.

SysGPT captures the distilled methodology and applies it flexibly across domains.
Given problem description and observations, it can suggest:

- Which methodology is relevant (e.g., batching, decoupling, deferring)
- What structural transformation might help
- Detailed and actionable suggestions to try

The goal is not to produce code, but to frame design decisions with methodology-aware suggestions.


## Limitations

SysGPT is not a static optimizer or an automated code rewriter.
It does not understand full program semantics or guarantee correctness.
Its value lies in design-level feedback, not in low-level transformation.

It should be used interactively, with the user verifying or rejecting its suggestions.

---

Up next: [How to Use →](./use.md)
