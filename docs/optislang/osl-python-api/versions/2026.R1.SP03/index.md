# Introduction

This documentation describes the optiSLang Python API—a set of Python modules for creating and modifying optiSLang projects, driving optimization and reliability workflows, and customizing postprocessing monitoring.

## Who should use this documentation

Simulation engineers, workflow developers, and integration specialists who:

- Automate optiSLang project setup, execution, and result extraction with Python scripts
- Configure optimization, design of experiments (DOE), and reliability studies programmatically
- Customize postprocessing generation scripts, monitoring visuals, and toolbar shortcuts

## Main capabilities

- **Project and workflow control** — Create simulation chains, manage parameters and designs, and read or write project data (`py_project`, `_optiSLang_Kernel`, `_optiSLang_Actors`).
- **Algorithms and studies** — Configure optimizers, DOE, approximation, and reliability algorithms (`PyOptimizerBase`, `PyNOA`, `os_doe_py_export`, `reliability`, and related modules).
- **Data access** — Work with monitoring databases (`.omdb`, `.bin`), criteria, random variables, and exported designs (`py_omdb`, `py_os_design`, `py_os_criterion`).
- **Postprocessing** — Generate and configure monitoring plots, execute console commands, and register custom script directories ([Postprocessing python scripting](modules/postprocessing-python-scripting.md)).

## Platform and Python support

- **Python:** Python 3 using the interpreter bundled with your optiSLang installation. Import modules in the optiSLang Python console or from scripts launched by optiSLang.
- **Operating systems:** Windows and Linux (paths and environment variables for custom script directories differ by platform; see [Postprocessing python scripting](modules/postprocessing-python-scripting.md)).

Use `help()` on an imported module in the Python console to display class and function reference text for that module.
