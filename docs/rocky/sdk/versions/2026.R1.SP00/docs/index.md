# Introduction

<p id="introduction"></p>

The Rocky Solver SDK enables the development of custom modules for Rocky. A
Rocky [module](glossary.md#module) is a compiled library that attaches to the
Rocky solver at strategic points during the simulation, allowing
execution of custom code. For example, Rocky modules enable users to:

-   Apply custom models to some simulated entities.

-   Collect custom statistics during the simulation.

-   Create custom post-processing data.

The Rocky Solver SDK comprises:

-   Runtime libraries for binding to Rocky simulations at strategic
    moments.

-   C++ header files that export types and macros related to the
    simulation state.

-   Mechanisms to ease compilation of Rocky modules.