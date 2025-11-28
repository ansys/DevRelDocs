---
uid: examples.extract-displacement
title: Extract Displacement
---

# Extract Displacement in Mechanical

Extract nodal displacement values from Mechanical results using DPF operators.

## Complete Example for Scripting Window

```python
import mech_dpf
import Ans.DataProcessing as dpf

# CRITICAL: Set ExtAPI context
mech_dpf.setExtAPI(ExtAPI)

# Access Mechanical analysis
analysis = ExtAPI.DataModel.Project.Model.Analyses[0]

# Create DPF data sources
data_sources = dpf.DataSources()
data_sources.SetResultFilePath(analysis.ResultFileName)

# Use DPF operator to extract displacement
print("=== Extracting Displacement with Operators ===")
disp_op = dpf.operators.result.displacement()
disp_op.inputs.data_sources.Connect(data_sources)
disp_field = disp_op.outputs.fields_container.GetData()

print("Number of nodes: {0}".format(disp_field.ElementaryDataCount))
print("Components: {0} (UX, UY, UZ)".format(disp_field.NumberOfComponents))

# Get displacement for first few nodes
print("\n=== First 5 Nodes ===")
for i in range(min(5, disp_field.ElementaryDataCount)):
    node_id = disp_field.Scoping.GetId(i)
    disp = disp_field.GetEntityDataByIndex(i)
    print("Node {0}: UX={1:.6e}, UY={2:.6e}, UZ={3:.6e}".format(
        node_id, disp[0], disp[1], disp[2]))

# Calculate displacement magnitude using norm operator
print("\n=== Calculating Magnitude ===")
norm_op = dpf.Operator("norm")
norm_op.SetInput(0, disp_field)
magnitude_field = norm_op.GetOutput(0, dpf.Field)

# Find maximum displacement
max_disp = max(magnitude_field.Data)
max_index = list(magnitude_field.Data).index(max_disp)
max_node_id = magnitude_field.Scoping.GetId(max_index)

print("Maximum displacement: {0:.6e}".format(max_disp))
print("At node: {0}".format(max_node_id))
```

## Python Result Object Example

Create a custom Python Result in Mechanical to display maximum displacement with visualization:

```python
def define_dpf_workflow(analysis):
    import mech_dpf
    import Ans.DataProcessing as dpf

    # CRITICAL: Set ExtAPI context
    mech_dpf.setExtAPI(ExtAPI)

    # Get result file
    result_file = analysis.ResultFileName

    # Create DPF data sources
    data_sources = dpf.DataSources()
    data_sources.SetResultFilePath(result_file)

    # Create DPF model to get time info
    dpf_model = dpf.Model(data_sources)
    time_count = dpf_model.TimeFreqSupport.TimeFrequencies.Count
    last_step = time_count

    # Create time scoping for last step
    time_scoping = dpf.Scoping()
    time_scoping.Ids = [last_step]

    # Extract displacement using operator
    disp_op = dpf.operators.result.displacement()
    disp_op.inputs.data_sources.Connect(data_sources)
    disp_op.inputs.time_scoping.Connect(time_scoping)
    disp_field = disp_op.outputs.fields_container.GetData()

    # Calculate magnitude
    norm_op = dpf.Operator("norm")
    norm_op.SetInput(0, disp_field)
    magnitude_field = norm_op.GetOutput(0, dpf.Field)

    # Get maximum value
    max_disp = max(magnitude_field.Data)
    max_index = list(magnitude_field.Data).index(max_disp)
    max_node = magnitude_field.Scoping.GetId(max_index)

    # Display in Python Result
    this.Text = "Max Displacement: {0:.6e}\nAt Node: {1}\nTime Step: {2}".format(
        max_disp, max_node, last_step)

    # Create workflow for visualization
    dpf_workflow = dpf.Workflow()
    dpf_workflow.Add(norm_op)
    dpf_workflow.SetOutputContour(norm_op)
    dpf_workflow.Record('wf_id', False)
    this.WorkflowId = dpf_workflow.GetRecordedId()
```

## Example: Extract Displacement on a Named Selection

Extract displacement only on a specific named selection (remember: uppercase!):

```python
import mech_dpf
import Ans.DataProcessing as dpf

# Set ExtAPI context
mech_dpf.setExtAPI(ExtAPI)

# Get analysis and data sources
analysis = ExtAPI.DataModel.Project.Model.Analyses[0]
data_sources = dpf.DataSources()
data_sources.SetResultFilePath(analysis.ResultFileName)

# Create scoping on named selection (UPPERCASE!)
scoping_op = dpf.operators.scoping.on_named_selection()
scoping_op.inputs.named_selection_name.Connect("MY_SELECTION")
scoping_op.inputs.data_sources.Connect(data_sources)

# Extract displacement on that scoping
disp_op = dpf.operators.result.displacement()
disp_op.inputs.data_sources.Connect(data_sources)
disp_op.inputs.mesh_scoping.Connect(scoping_op.outputs.mesh_scoping)
disp_field = disp_op.outputs.fields_container.GetData()

print("Displacement on named selection:")
print("Number of nodes: {0}".format(disp_field.ElementaryDataCount))

# Get magnitude
norm_op = dpf.Operator("norm")
norm_op.SetInput(0, disp_field)
magnitude = norm_op.GetOutput(0, dpf.Field)

print("Max displacement: {0:.6e}".format(max(magnitude.Data)))
```

## Key Points

- **Always call** `mech_dpf.setExtAPI(ExtAPI)` before using DPF in Mechanical
- Use `dpf.operators.result.*` for result extraction (not Model.Results)
- Named selections must be **UPPERCASE** in DPF
- Use time scoping for multi-step analyses
- Displacement is always a 3-component vector (UX, UY, UZ)
- Use `norm` operator to calculate magnitude
- For Python Result: create `dpf.Workflow()` and set `this.WorkflowId`
- IronPython requires `.format()` instead of f-strings

## See Also

- [Working with Fields](../user-guide/working-with-fields.md)
- [Core Concepts](../user-guide/core-concepts.md)
