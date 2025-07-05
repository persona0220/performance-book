# Batching

When the cost for computing a batch of items is lower than the total cost for
computing each item individually, combining these items into batches will
enhance overall efficiency.

As shown in Table 1 (a), for every epoch, duplicate
costs (x 2 , x 4 and x 6 ) are incurred across epochs, and these costs are
repetitively accrued with each iteration of epochs. With batching, depicted in
Table 1 (b), these individual blocks are merged into one big block (x 7 ). To
ensure the efficacy of batching, two conditions must be satisfied: the length of
the optimized sequence should be shorter than that of the original sequence, and
the running time for batched items should be shorter.

In terms of the three principles (§2.1),batching is a methodology which can
effectively leverage all the three principles. First, batching commonly yields
benefits through coalesced computation. By coalescing duplicate tasks together,
particularly when each task incurs significant overhead, the overall runtime can
be reduced. Upon comparing of the original and batched sequences, the latter
removes x 2 and x 4 (P rm ), and replaces x 6 with x 7 (P rep ). Alongside P rm
and P rep , the overall runtime improves. NEVE ( 1 ) is an example of this
approach (see Table 2 for details).

Batching also inherently defers earlier tasks until a batch of tasks is
gathered. Consequently, it has the potential to decrease the overall number of
tasks to be processed by discarding stale tasks at the time of batched request
(P rm ), thereby reducing the overall runtime. For instance, group commit and
write buffer batch multiple updates and apply modifications in a deferred and
batched manner, thereby some stale data that has already been deleted or updated
does not need to be committed anymore. EAW ( 2 ) implements this approach by
enabling applications to update batched items in the log prior to commit.

In addition, when batching is applied, the order of tasks is reordered (P ord ).
For example, initially x 2 was located between x 1 and x 3 , but after
optimization, x 1 and x 3 will be executed consecutively. Therefore, batching
might be employed to maximize the spatial and temporal locality of data. IX ( 3
) efficiently adopts this strategy to batch requests at every stage of the
network stack.

This concept is also closely interwined with caching (§3.2) as batching
eventually provides greater caching opportunities with the improved locality.

In general, batched items can achieve higher bandwidth and throughput by
eliminating redundant costs across tasks. Nevertheless, this approach can lead
to extended latency, as initial earlier tasks in a batch might wait for
subsequent tasks to arrive, and processing a batch usually takes longer than
processing an individual task.
