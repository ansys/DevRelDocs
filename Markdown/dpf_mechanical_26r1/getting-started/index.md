---
uid: getting-started
title: Getting Started
---

# Getting Started with DPF Mechanical 2026 R1

This section will help you get up and running with DPF Mechanical 2026 R1 in Ansys Mechanical.

## Prerequisites

Before you begin, ensure you have:

- Ansys Mechanical 2026 R1 installed
- Access to the Mechanical scripting window or Python Result object
- Basic understanding of Python programming
- Familiarity with Ansys Mechanical and simulation concepts

## Topics

### [Installation](installation.md)
Learn how DPF is integrated into Ansys Mechanical and how to access it.

### [Hello DPF](hello-dpf.md)
Your first DPF script in the Mechanical scripting window - load results and extract data.

### [Environment Setup](environment-setup.md)
Configure your Mechanical environment and understand how to use DPF in different contexts.

## Quick Start

Access DPF in Ansys Mechanical through the scripting window:

```python
# DPF is already available in Mechanical scripting environment
import Ans.DataProcessing as dpf

# Access current model's results
model = ExtAPI.DataModel.Project.Model
analysis = model.Analyses[0]
solution = analysis.Solution

# Get result file path
result_path = solution.ResultFileName

# Create DPF data sources
data_sources = dpf.DataSources()
data_sources.SetResultFilePath(result_path)

# Create DPF model
dpf_model = dpf.Model(data_sources)

# Access results
print("Number of time steps: {0}".format(dpf_model.TimeFreqSupport.TimeFrequencies.Count))
```

## Next Steps

Once you've completed the getting started guide, move on to:

- [User Guide](../user-guide/index.md) for in-depth concepts
- [Examples](../examples/index.md) for practical code samples
- [API Reference](../api/index.md) for complete documentation
