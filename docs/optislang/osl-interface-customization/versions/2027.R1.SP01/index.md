# Introduction

This documentation describes how to extend Ansys optiSLang 2027 R1 with custom integration surfaces and Python-based plugins. The APIs documented here are protocol and message contracts—function signatures, keyword arguments (KWARGs), configuration files, and wire formats—not a generated class reference.

## Who should use this documentation

Technical writers, integration developers, and simulation engineers who:

- Connect external solvers or in-house codes to optiSLang workflows
- Package metamodels for reuse through the MOP Solver standalone interface or Functional Mock-up Interface (FMI)
- Implement Python plugins for algorithms, integration nodes, surrogates, postprocessing, wizards, or QML-based settings UIs

## Supported integration types

- **External metamodel solver interfaces** — Invoke metamodels trained in optiSLang from external processes using the MOP Solver standalone C API and related file-based protocols.
- **Functional Mock-up Interface (FMI)** — Export MOP or Adaptive MOP (AMOP) metamodels as Functional Mock-up Units (FMUs) for co-simulation in FMI-compliant tools.
- **Python-based plugins** — Implement custom algorithms, integration nodes, file-access helpers, extraction tooling, surrogates, and postprocessing extensions. Plugin entry points are Python modules backed by a C++ API layer; optional QML files provide settings UIs embedded in optiSLang dialogs.

## How this fits in optiSLang workflows

During workflow setup and execution, optiSLang loads your plugin modules, calls the documented Python functions in sequence, and exchanges design-point data through the KWARG dictionaries described in each topic. Integration nodes use the same pattern to transfer files and signals between optiSLang and remote solvers. For distribution, you can ship open Python sources or encrypted `.pye` builds.

## Main topics

- [External Metamodel Solver Interfaces](opti_api_external_metamodel_solver_interfaces.md)
- [Functional Mock-up Interface](opti_api_functional_mockup_interface.md)
- [Python-Based Plugins](opti_api_python_based_plugins.md)
