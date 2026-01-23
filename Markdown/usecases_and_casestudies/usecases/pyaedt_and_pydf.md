# Automate postprocessing with PyAEDT and PyDPF

> Automate extraction, analysis, and reporting of electronics simulation results using PyAEDT to orchestrate solves and PyDPF to compute KPIs and generate shareable artifacts.

## Audience and persona

- **Primary users:** RF/microwave and power electronics engineers, simulation platform teams, Python developers
- **Industry:** Aerospace, automotive, 5G/telecom, semiconductors, power electronics, EMC/EMI
- **Prerequisites:** Ansys Electronics Desktop (AEDT) installed with licenses (HFSS/Maxwell/Icepak/etc.), Python environment with `pyaedt`, `ansys-dpf-core` (and optional `ansys-dpf-post`) available

## Problem

Manual post-processing (opening results, calculating S-parameters or field magnitudes, exporting images/CSVs, and assembling reports) is tedious, inconsistent across engineers, and hard to scale for parametric sweeps or batch jobs.

## Solution

Use **PyAEDT** to launch AEDT non-interactively, solve or load existing results, and hand the result files to **PyDPF** for scripted extraction of key metrics (e.g., min S11, max E-field, average temperature, ohmic loss). Produce **repeatable reports** (CSV/PNG/JSON) and drop them into build artifacts or shared storage.

**Benefits:**

- Ensures consistent KPIs and thresholds across teams
- Scales to parametric sweeps and nightly regression runs
- Easy integration with CI/CD and data catalogs

## Features and capabilities used

- **PyAEDT automation:** Headless AEDT launch, project/design access, solve orchestration, parametric sweep control
- **PyDPF operators:** Query fields (E/H/J), S-parameters, losses, temperature; compute norms, min/max/averages over meshes/selections; integrate/area-reduce results
- **Batch processing:** Loop over designs/variants/frequencies and aggregate KPIs
- **Export utilities:** Write CSV/JSON summaries and PNG plots for dashboards and reviews
- **Reproducibility:** Scripted pipeline with explicit versions and deterministic outputs
