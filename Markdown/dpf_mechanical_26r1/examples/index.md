---
uid: examples
title: Examples
---

# Examples for Ansys Mechanical

Practical code examples demonstrating DPF capabilities in Ansys Mechanical scripting and Python Result objects.

## Basic Examples

### [Load and Inspect Results](basic-load.md)
Load result data in the Mechanical scripting window and inspect basic properties.

### [Extract Displacement](extract-displacement.md)
Get nodal displacement values from Mechanical results.

### [Calculate Stress](calculate-stress.md)
Extract and process stress results in a Python Result object.

## Intermediate Examples

### [Time History Extraction](time-history.md)
Extract values at specific locations across all time steps.

### [Result Averaging](result-averaging.md)
Average element results to nodes.

### [Custom Scoping](custom-scoping.md)
Extract results for specific parts or node/element sets.

## Advanced Examples

### [Operator Chaining](operator-chaining.md)
Build complex workflows by chaining multiple operators.

### [Custom Result Computation](custom-computation.md)
Combine multiple result types for custom calculations.

### [Batch Processing](batch-processing.md)
Process multiple result files efficiently.

## Common Workflows

### Structural Analysis in Mechanical
- Extract displacement and stress from current solution
- Calculate von Mises stress using DPF operators
- Find maximum values and their locations
- Create custom Python Result objects

### Modal Analysis
- Extract mode shapes from Mechanical modal analysis
- Calculate participation factors
- Process frequency data

### Thermal Analysis
- Extract temperature fields from thermal solutions
- Calculate heat flux using DPF
- Track temperature over time steps

## Example Template for Mechanical Scripting Window

All scripting window examples follow this structure:

```python
import Ans.DataProcessing as dpf

# Access Mechanical model
model = ExtAPI.DataModel.Project.Model
solution = model.Analyses[0].Solution

# Create DPF model
data_sources = dpf.DataSources()
data_sources.SetResultFilePath(solution.ResultFileName)
dpf_model = dpf.Model(data_sources)

# Your DPF code here

# Print results
print("Done!")
```

## Example Template for Python Result Object

Python Result examples use this structure:

```python
import Ans.DataProcessing as dpf

# 'this' is the current Python Result object
# Access result file
result_file = this.ResultFileName

# Create DPF model
data_sources = dpf.DataSources()
data_sources.SetResultFilePath(result_file)
dpf_model = dpf.Model(data_sources)

# Your DPF processing code here

# Set display text
this.Text = "Your result value here"
```
