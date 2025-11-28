---
uid: examples.basic-load
title: Load and Inspect Results
---

# Load and Inspect Results in Mechanical

This example shows how to load result data and inspect its properties using the Ansys Mechanical scripting window.

## Complete Example for Scripting Window

Open **View** → **Scripting** in Mechanical and enter:

```python
import mech_dpf
import Ans.DataProcessing as dpf

# CRITICAL: Set ExtAPI context
mech_dpf.setExtAPI(ExtAPI)

# Get the current Mechanical analysis
analysis = ExtAPI.DataModel.Project.Model.Analyses[0]

# Get result file path from Mechanical
result_file = analysis.ResultFileName

# Create DPF data sources
data_sources = dpf.DataSources()
data_sources.SetResultFilePath(result_file)

# Create DPF model
dpf_model = dpf.Model(data_sources)

# Inspect model properties
print("=== Model Information ===")
print("Result file: {0}".format(result_file))

# Mesh information
mesh = dpf_model.Mesh
print("\n=== Mesh Information ===")
print("Number of nodes: {0}".format(mesh.Nodes.Count))
print("Number of elements: {0}".format(mesh.Elements.Count))

# Time/frequency information
time_freq_support = dpf_model.TimeFreqSupport
print("\n=== Time Information ===")
print("Number of time steps: {0}".format(time_freq_support.TimeFrequencies.Count))

# List available time values
for i in range(time_freq_support.TimeFrequencies.Count):
    time_value = time_freq_support.TimeFrequencies.GetData(i)
    print("  Step {0}: {1} seconds".format(i+1, time_value))

print("\n=== Inspection Complete ===")
```

## Expected Output in Scripting Window

```
=== Model Information ===
Result file: C:\...\file0.rst

=== Mesh Information ===
Number of nodes: 15623
Number of elements: 3892

=== Time Information ===
Number of time steps: 10
  Step 1: 0.0 seconds
  Step 2: 0.1 seconds
  Step 3: 0.2 seconds
  ...

=== Inspection Complete ===
```

## Using in a Python Result Object

You can also inspect results within a Python Result object:

```python
def define_dpf_workflow(analysis):
    import mech_dpf
    import Ans.DataProcessing as dpf

    # CRITICAL: Set ExtAPI context
    mech_dpf.setExtAPI(ExtAPI)

    # Access result file from analysis
    result_file = analysis.ResultFileName

    # Create DPF model
    data_sources = dpf.DataSources()
    data_sources.SetResultFilePath(result_file)
    dpf_model = dpf.Model(data_sources)

    # Get mesh info
    mesh = dpf_model.Mesh
    node_count = mesh.Nodes.Count
    element_count = mesh.Elements.Count

    # Get time steps
    time_count = dpf_model.TimeFreqSupport.TimeFrequencies.Count

    # Display in result text
    this.Text = "Mesh: {0} nodes, {1} elements\nTime steps: {2}".format(
    node_count, element_count, time_count)
```

## Key Concepts

- **ExtAPI**: Mechanical API for accessing the model tree
- **DataSources**: Points to result files from Mechanical solutions
- **Model**: DPF model provides access to all data
- **Mesh**: Contains geometry information
- **TimeFreqSupport**: Time/frequency metadata

## Next Steps

- [Extract Displacement](extract-displacement.md) - Get displacement data
- [User Guide](../user-guide/working-with-fields.md) - Learn about fields
