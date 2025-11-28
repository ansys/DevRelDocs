---
uid: getting-started.environment-setup
title: Environment Setup
---

# Working with DPF in Ansys Mechanical

Learn how to effectively use DPF in different contexts within Ansys Mechanical.

## Critical Setup Requirements

### Required Imports

```python
import mech_dpf
import Ans.DataProcessing as dpf

# CRITICAL: Initialize DPF with Mechanical context
mech_dpf.setExtAPI(ExtAPI)
```

**Important:** You must call `mech_dpf.setExtAPI(ExtAPI)` before using DPF operators in Mechanical. This initializes DPF with Mechanical's API context.

### Important Usage Conventions

#### Named Selections Must Be UPPERCASE

When using named selections in DPF, they must be specified in **UPPERCASE**, even if created with lowercase in Mechanical:

```python
# Named selection created in Mechanical as "my_selection"
# Use UPPERCASE in DPF:
scoping_on_ns = dpf.operators.scoping.on_named_selection()
scoping_on_ns.inputs.named_selection_name.Connect("MY_SELECTION")
```

#### DPF Operators Pattern

Use hierarchical namespace syntax for operators (not generic `dpf.Operator("name")`):

```python
# CORRECT:
stress_X = dpf.operators.result.stress_X()
disp = dpf.operators.result.displacement()
add_op = dpf.operators.math.add()

# AVOID:
# stress_op = dpf.Operator("stress_X")  # Don't use generic pattern
```

Common operator categories:
- `dpf.operators.result.*` - Result extraction (stress, displacement, etc.)
- `dpf.operators.math.*` - Mathematical operations (add, scale, etc.)
- `dpf.operators.scoping.*` - Scoping operations (on_named_selection, etc.)
- `dpf.operators.min_max.*` - Min/max operations
- `dpf.operators.utility.*` - Utility operations (html_doc, etc.)

## Mechanical Scripting Window

The scripting window in Mechanical provides an interactive environment for DPF scripts:

### Accessing the Scripting Window

1. Open Ansys Mechanical
2. Go to **View** → **Scripting**
3. The scripting window appears at the bottom of the Mechanical interface

### Scripting Window Features

- **Interactive Execution**: Run Python code immediately
- **DPF Pre-loaded**: DPF assemblies are automatically available
- **Mechanical API Access**: Full access to ExtAPI and Mechanical objects
- **Intellisense Support**: Auto-completion for DPF and Mechanical APIs

### Example Scripting Window Usage

```python
import mech_dpf
import Ans.DataProcessing as dpf

# CRITICAL: Set ExtAPI context
mech_dpf.setExtAPI(ExtAPI)

# Access current model
analysis = ExtAPI.DataModel.Project.Model.Analyses[0]

# Get result file
result_file = analysis.ResultFileName

# Use DPF
data_sources = dpf.DataSources()
data_sources.SetResultFilePath(result_file)
dpf_model = dpf.Model(data_sources)

print("Nodes: {0}".format(dpf_model.Mesh.Nodes.Count))
```

## Python Result Objects

Python Result objects allow you to create custom result types in Mechanical:

### Creating a Python Result

1. In the Mechanical tree, right-click on **Solution**
2. Insert → **Result** → **Python Result**
3. Edit the Python code in the properties panel

### Python Result Template

```python
def define_dpf_workflow(analysis):
    import mech_dpf
    import Ans.DataProcessing as dpf

    # CRITICAL: Set ExtAPI context
    mech_dpf.setExtAPI(ExtAPI)

    # Access result file
    result_file = analysis.ResultFileName

    # Create DPF data sources
    data_sources = dpf.DataSources()
    data_sources.SetResultFilePath(result_file)

    # Extract stress using operators
    stress_op = dpf.operators.result.stress()
    stress_op.inputs.data_sources.Connect(data_sources)
    stress_field = stress_op.outputs.fields_container.GetData()

    # Calculate von Mises equivalent
    vm_op = dpf.Operator("eqv")
    vm_op.SetInput(0, stress_field)
    vm_field = vm_op.GetOutput(0, dpf.Field)

    # Get maximum value
    max_stress = max(vm_field.Data)

    # Set result text
    this.Text = "Max von Mises Stress: {0:.2f} MPa".format(max_stress)

    # Create workflow for visualization
    dpf_workflow = dpf.Workflow()
    dpf_workflow.Add(vm_op)
    dpf_workflow.SetOutputContour(vm_op)
    dpf_workflow.Record('wf_id', False)
    this.WorkflowId = dpf_workflow.GetRecordedId()
```

### Python Result Context

- Use `define_dpf_workflow(analysis)` function pattern
- `analysis`: Passed automatically by Mechanical
- `this`: Reference to current Python Result object
- `this.Text`: Display text in Mechanical
- `this.WorkflowId`: Set for visualization support
- `dpf.Workflow()`: Required for contour plotting
- `SetOutputContour()`: Specifies what field to display
- Access to all Mechanical and DPF APIs

**For visualization in Python Result:**
1. Create operators and process data
2. Create `dpf.Workflow()` object
3. Add operators to workflow
4. Call `SetOutputContour()` on final operator
5. Record workflow and set `this.WorkflowId`

## Common Helper Functions

Create reusable functions for common DPF operations in Mechanical:

```python
import mech_dpf
import Ans.DataProcessing as dpf

# Set ExtAPI (call once at start of script)
mech_dpf.setExtAPI(ExtAPI)

def get_dpf_model_from_analysis(analysis):
    """Create DPF model from a Mechanical analysis object"""
    data_sources = dpf.DataSources()
    data_sources.SetResultFilePath(analysis.ResultFileName)
    return dpf.Model(data_sources)

def get_field_max_min(field):
    """Get maximum and minimum values from a field"""
    data = list(field.Data)
    return max(data), min(data)

def get_stress_on_named_selection(data_sources, named_selection_name, time_step=1):
    """Get stress on a named selection (remember: uppercase!)"""
    # Named selection scoping
    scoping_op = dpf.operators.scoping.on_named_selection()
    scoping_op.inputs.named_selection_name.Connect(named_selection_name.upper())
    scoping_op.inputs.data_sources.Connect(data_sources)

    # Time scoping
    time_scoping = dpf.Scoping()
    time_scoping.Ids = [time_step]

    # Stress extraction
    stress_op = dpf.operators.result.stress()
    stress_op.inputs.data_sources.Connect(data_sources)
    stress_op.inputs.mesh_scoping.Connect(scoping_op.outputs.mesh_scoping)
    stress_op.inputs.time_scoping.Connect(time_scoping)

    return stress_op.outputs.fields_container.GetData()

# Usage in scripting window:
analysis = ExtAPI.DataModel.Project.Model.Analyses[0]
dpf_model = get_dpf_model_from_analysis(analysis)

# Get stress on named selection
data_sources = dpf.DataSources()
data_sources.SetResultFilePath(analysis.ResultFileName)
stress_field = get_stress_on_named_selection(data_sources, "my_selection")

max_val, min_val = get_field_max_min(stress_field)
print("Max stress: {0:.6e}, Min stress: {1:.6e}".format(max_val, min_val))
```
## Best Practices for Mechanical

### IronPython Syntax Considerations

Mechanical uses IronPython, which has some differences from CPython:

```python
# Use format() instead of f-strings (f-strings may not work in all versions)
# Good:
message = "Value: {0}".format(value)

# Avoid:
# message = f"Value: {value}"  # May not work

# Convert .NET collections to Python lists when needed
nodes_list = list(mesh.Nodes)

# Access .NET properties directly
count = mesh.Nodes.Count  # Not len(mesh.Nodes)
```

### Error Handling

```python
import Ans.DataProcessing as dpf

try:
    # Your DPF code
    dpf_model = dpf.Model(data_sources)
    field = dpf_model.Results.Stress.GetOutput(0, dpf.LocationEnum.Elemental)
except Exception as e:
    # In Python Result, show error in result text
    this.Text = "Error: {0}".format(str(e))
    # In scripting window
    print("Error: {0}".format(str(e)))
```

### Performance Tips

- Reuse DPF model objects when possible
- Cache frequently accessed data
- Use operators for complex operations
- Minimize data transfers between .NET and Python

## Next Steps

- [Hello DPF](hello-dpf.md) - Run your first Mechanical script
- [User Guide](../user-guide/index.md) - Learn DPF concepts
- [Examples](../examples/index.md) - See Mechanical-specific examples
