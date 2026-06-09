---
uid: examples
---

# Examples for Ansys Mechanical

Practical code examples demonstrating DPF capabilities in Ansys Mechanical scripting and Python Result objects.

## Basic Examples

### [Load and inspect results](basic-load.md)
Load result data in the Mechanical scripting window and inspect basic properties.

### [Extract displacement](extract-displacement.md)
Get nodal displacement values from Mechanical results.

### [Calculate stress](calculate-stress.md)
Extract and process stress results in a Python Result object.

## Intermediate Examples

### [Time history extraction](time-history.md)
Extract values at specific locations across all time steps.

### [Result averaging](result-averaging.md)
Average element results to nodes.

### [Custom scoping](custom-scoping.md)
Extract results for specific parts or node/element sets.

## Advanced Examples

### [Operator chaining](operator-chaining.md)
Build complex workflows by chaining multiple operators.

### [Custom result computation](custom-computation.md)
Combine multiple result types for custom calculations.

### [Batch processing](batch-processing.md)
Process multiple result files efficiently.

## Common workflows

### Structural analysis in Mechanical
- Extract displacement and stress from current solution
- Calculate von Mises stress using DPF operators
- Find maximum values and their locations
- Create custom Python Result objects

### Modal analysis
- Extract mode shapes from Mechanical modal analysis
- Calculate participation factors
- Process frequency data

### Thermal analysis
- Extract temperature fields from thermal solutions
- Calculate heat flux using DPF
- Track temperature over time steps

## Example template for Mechanical scripting window

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

## Example template for Python result object

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
