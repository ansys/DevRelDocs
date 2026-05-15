---
uid: getting-started.hello-dpf
---

# Your First DPF Script in Mechanical

Let's create a simple script in the Ansys Mechanical scripting window to access and extract result data using DPF.

## Using the Mechanical Scripting Window

Open Ansys Mechanical and access **View** → **Scripting**, then enter:

```python
import mech_dpf
import Ans.DataProcessing as dpf

# Set the Mechanical API context (REQUIRED)
mech_dpf.setExtAPI(ExtAPI)

# Get the current Mechanical model
analysis = ExtAPI.DataModel.Project.Model.Analyses[0]

# Get result file path from current analysis
result_file = analysis.ResultFileName

# Create DPF data sources
data_sources = dpf.DataSources()
data_sources.SetResultFilePath(result_file)

# Create DPF model
dpf_model = dpf.Model(data_sources)

# Get mesh information
mesh = dpf_model.Mesh
print("Number of nodes: {0}".format(mesh.Nodes.Count))
print("Number of elements: {0}".format(mesh.Elements.Count))

# Get time/frequency support
time_freq_support = dpf_model.TimeFreqSupport
print("Number of time steps: {0}".format(time_freq_support.TimeFrequencies.Count))
```

## Step-by-Step Explanation

### 1. Import Required Modules

```python
import mech_dpf
import Ans.DataProcessing as dpf
```

Import both the `mech_dpf` helper module and the main DPF namespace. Both are available in Mechanical's IronPython environment.

### 2. Set ExtAPI Context (CRITICAL!)

```python
mech_dpf.setExtAPI(ExtAPI)
```

This step is **required** to properly initialize DPF with the Mechanical API context. Without this, many DPF operations will fail.

### 3. Access Mechanical Analysis

```python
analysis = ExtAPI.DataModel.Project.Model.Analyses[0]
```

Get the first analysis from the current Mechanical model.

### 4. Get Result File Path

```python
result_file = analysis.ResultFileName
```

Retrieve the path to the result file (.rst) from the analysis object.

### 4. Create DPF Data Source

```python
data_sources = dpf.DataSources()
data_sources.SetResultFilePath(result_file)
```

Create a DPF data source pointing to your result file.

### 5. Create DPF Model

```python
dpf_model = dpf.Model(data_sources)
```

The DPF Model object provides access to all result data and metadata.

## Using DPF Operators

DPF uses an operator-based approach for data processing. Here's an example extracting stress:

```python
import mech_dpf
import Ans.DataProcessing as dpf

mech_dpf.setExtAPI(ExtAPI)

# Get analysis and result file
analysis = ExtAPI.DataModel.Project.Model.Analyses[0]
filepath = analysis.ResultFileName

# Data sources
data_sources = dpf.DataSources()
data_sources.SetResultFilePath(filepath)

# Create a scoping for node #1
scoping = dpf.Scoping()
scoping.Ids = [1]
scoping.Location = 'Nodal'

# Stress X direction using operator
stressXOp = dpf.operators.result.stress_X()
stressXOp.inputs.data_sources.Connect(data_sources)
stressXOp.inputs.mesh_scoping.Connect(scoping)
sX = stressXOp.outputs.fields_container.GetData()

print("Stress X at node 1: {0}".format(sX.Data))
```

## Using in a Python Result Object

You can also use DPF in a Python Result object for visualization:

```python
def define_dpf_workflow(analysis):
    import mech_dpf
    import Ans.DataProcessing as dpf

    # Set ExtAPI context
    mech_dpf.setExtAPI(ExtAPI)

    # Get result file path
    filepath = analysis.ResultFileName

    # Create data sources
    data_sources = dpf.DataSources()
    data_sources.SetResultFilePath(filepath)

    # Extract displacement (last time step by default)
    disp_op = dpf.operators.result.displacement()
    disp_op.inputs.data_sources.Connect(data_sources)
    disp_field = disp_op.outputs.fields_container.GetData()

    # Get magnitude
    norm_op = dpf.Operator("norm")
    norm_op.SetInput(0, disp_field)
    magnitude = norm_op.GetOutput(0, dpf.Field)

    # Get max value
    max_disp = max(magnitude.Data)

    # Display in result text
    this.Text = "Maximum Displacement: {0:.6e}".format(max_disp)

    # Setup workflow for contour plot
    dpf_workflow = dpf.Workflow()
    dpf_workflow.Add(norm_op)
    dpf_workflow.SetOutputContour(norm_op)
    dpf_workflow.Record('wf_id', False)
    this.WorkflowId = dpf_workflow.GetRecordedId()
```

**Key points for Python Result objects:**
- Must use `define_dpf_workflow(analysis)` function
- Create `dpf.Workflow()` for visualization
- Use `SetOutputContour()` to specify what to plot
- Call `Record()` and set `this.WorkflowId`

## Generating DPF Documentation

To generate comprehensive DPF documentation in Mechanical:

```python
import mech_dpf

# Get the documentation path
print(mech_dpf.help())
```

This will display the path to the DPF HTML documentation file.

## What's Next?

Now that you've run your first script in Mechanical, explore:

- [User Guide](../user-guide/index.md) - Learn DPF core concepts
- [Examples](../examples/index.md) - See more Mechanical-specific examples
- [API Reference](../api/index.md) - Detailed API documentation
