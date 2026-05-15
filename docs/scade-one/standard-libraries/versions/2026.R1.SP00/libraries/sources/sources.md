# Sources

The Sources library provides a set of flow generators, mostly numeric, for usage in test harnesses.

-   Periodic generators: sine, triangular, square
-   Other generators: step, ramp
-   Sequences: from arrays

The periodicity is either expressed in number of cycles \(module `Sources::N`\) or with a period and a sample time \(module `Sources::T`\). For example, the flow produced by a generator with a period of 1 s and a sample time of 20 ms is discretized in 50 cycles. The periodicity is considered only at the beginning of each period \(meaning that the number of steps to perform is evaluated when starting the period. Any change in the inputs during the period is ignored.\).

The periodic generators take as input an amplitude \(1.0 by default\) and an offset to zero \(0.0 by default\). The amplitude applies a gain on the original flow and the offset applies an offset.

-   **[Sources::N](./sources_n.md)**  
Flow generators whose periodicity is expressed in number of cycles \(module `Sources::N`\).
-   **[Sources::T](./sources_t.md)**  
Flow generators whose periodicity is expressed with a period and a sample time \(module `Sources::T`\).

**Parent topic:**[Libraries](./../../index.md)

