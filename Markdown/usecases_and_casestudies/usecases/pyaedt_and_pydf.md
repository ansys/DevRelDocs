# Automate postprocessing with PyAEDT and PyDPF

> This use case explains how you can automate extraction, analysis, and reporting of electronics simulation results using PyAEDT to orchestrate solves and PyDPF to compute KPIs and generate shareable artifacts.

## Audience and persona

- **Primary users:** RF/microwave and power electronics engineers, simulation platform teams, and Python developers
- **Industry:** Aerospace, automotive, 5G/telecom, semiconductors, power electronics, and EMC/EMI
- **Prerequisites:** Installation of Ansys Electronics Desktop (AEDT) with licenses for needed applications (such as HFSS, Maxwell, Icepak, and more), Python environment with installations of needed PyAnsys libraries (PyAEDT, PyDPF-Core, and optionally PyDPF-Post)

## Problem

Manual postprocessing (opening results, calculating S-parameters or field magnitudes, exporting images/CSVs, and assembling reports) is tedious, inconsistent across engineers, and hard to scale for parametric sweeps or batch jobs.

## Solution

Use PyAEDT to launch AEDT non-interactively, solve or load existing results, and hand the result files to PyDPF for scripted extraction of key metrics (such as minimum S11, maximum E-field, average temperature, and ohmic loss). Produce repeatable reports in CSV, PNG, or JSON formats and drop them into build artifacts or shared storage.

**Benefits**

- Ensures consistent KPIs and thresholds across teams
- Scales to parametric sweeps and nightly regression runs
- Integrates easily with CI/CD and data catalogs

## Features and capabilities used

- **PyAEDT automation:** Headless AEDT launch, project/design access, solve orchestration, parametric sweep control
- **PyDPF operators:** Query fields (E/H/J), S-parameters, losses, temperature; compute norms, min/max/averages over meshes/selections; integrate/area-reduce results
- **Batch processing:** Loop over designs/variants/frequencies and aggregate KPIs
- **Export utilities:** Write CSV/JSON summaries and PNG plots for dashboards and reviews
- **Reproducibility:** Scripted pipeline with explicit versions and deterministic outputs
