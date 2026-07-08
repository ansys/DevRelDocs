---
uid: user-guide.operators-workflows
---

# Operators and workflows

In MechDPF, operators are the fundamental processing units.
Every data transformation (reading results, computing norms, averaging, filtering) is done by connecting operators together rather than writing imperative Python loops.
A workflow is a named graph of connected operators that Mechanical can execute
and optionally display as a contour plot in a Python Result object.

## Required setup

Always initialize the Mechanical context before using any operator:

```python
import mech_dpf
import Ans.DataProcessing as dpf

mech_dpf.setExtAPI(ExtAPI)
```

Without `mech_dpf.setExtAPI(ExtAPI)`, operator execution silently fails or raises unexpected errors.

## Creating operators

Use the hierarchical `dpf.operators` namespace to instantiate operators by category:

```python
# Result operators
disp_op   = dpf.operators.result.displacement()
stress_op = dpf.operators.result.stress()
strain_op = dpf.operators.result.elastic_strain()

# Math operators
add_op   = dpf.operators.math.add()
scale_op = dpf.operators.math.scale()

# Averaging
avg_op = dpf.operators.averaging.elemental_nodal_to_nodal_fc()

# Scoping
ns_op = dpf.operators.scoping.on_named_selection()

# Min/max
minmax_op = dpf.operators.min_max.min_max_fc()
```

Operator names match the entries in the [API reference](../api/index.md).

## Connecting inputs

Each operator exposes typed input pins via `.inputs`. Connect data sources, scopings, and
other operator outputs by name:

```python
import mech_dpf
import Ans.DataProcessing as dpf

mech_dpf.setExtAPI(ExtAPI)

analysis  = ExtAPI.DataModel.Project.Model.Analyses[0]
ds        = dpf.DataSources()
ds.SetResultFilePath(analysis.ResultFileName)

# Connect data source to a result operator
disp_op = dpf.operators.result.displacement()
disp_op.inputs.data_sources.Connect(ds)

# Connect a time scoping (load step index, 1-based)
time_scoping       = dpf.Scoping()
time_scoping.Ids   = [1]
disp_op.inputs.time_scoping.Connect(time_scoping)

# Connect a named-selection scoping (must be UPPERCASE)
ns_op = dpf.operators.scoping.on_named_selection()
ns_op.inputs.named_selection_name.Connect("MY_SELECTION")
ns_op.inputs.data_sources.Connect(ds)
disp_op.inputs.mesh_scoping.Connect(ns_op.outputs.mesh_scoping)
```

## Getting outputs

Retrieve results from a typed output pin with `.GetData()`:

```python
# FieldsContainer output (multi-step or all entities)
fc    = disp_op.outputs.fields_container.GetData()
```

Operators that consume a `FieldsContainer` and produce another `FieldsContainer` follow the same pattern.
Use the matching output pin name (for example `fields_container`) and call `.GetData()`:

```python
norm_op = dpf.operators.math.norm_fc()
norm_op.inputs.fields_container.Connect(fc)
norm_fc = norm_op.outputs.fields_container.GetData()
```

## Chaining operators

Chain operators by connecting one operator's output directly to the next operator's input:

```python
import mech_dpf
import Ans.DataProcessing as dpf

mech_dpf.setExtAPI(ExtAPI)

analysis = ExtAPI.DataModel.Project.Model.Analyses[0]
ds       = dpf.DataSources()
ds.SetResultFilePath(analysis.ResultFileName)

# Step 1 - read stress
stress_op = dpf.operators.result.stress()
stress_op.inputs.data_sources.Connect(ds)

# Step 2 - compute von Mises equivalent
eqv_op = dpf.operators.invariant.von_mises_eqv_fc()
eqv_op.inputs.fields_container.Connect(stress_op.outputs.fields_container)

# Step 3 - get min/max over the fields container
mm_op = dpf.operators.min_max.min_max_fc()
mm_op.inputs.fields_container.Connect(eqv_op.outputs.fields_container)

max_field = mm_op.outputs.field_max.GetData()
print("Max von Mises: {0:.6e}".format(max_field.Data[0]))
```

## Workflows

A `dpf.Workflow` groups a connected set of operators into a named, reusable graph. You can evaluate
it directly in a scripting window to encapsulate a multi-step computation, or register it with
Mechanical for contour rendering inside a Python Result object.

### Creating and evaluating a workflow

```python
import mech_dpf
import Ans.DataProcessing as dpf

mech_dpf.setExtAPI(ExtAPI)

analysis = ExtAPI.DataModel.Project.Model.Analyses[0]
ds       = dpf.DataSources()
ds.SetResultFilePath(analysis.ResultFileName)

# Build the operator chain as usual
disp_op = dpf.operators.result.displacement()
disp_op.inputs.data_sources.Connect(ds)

norm_op = dpf.operators.math.norm_fc()
norm_op.inputs.fields_container.Connect(disp_op.outputs.fields_container)

mm_op = dpf.operators.min_max.min_max_fc()
mm_op.inputs.fields_container.Connect(norm_op.outputs.fields_container)

# Wrap operators into a workflow
wf = dpf.Workflow()
wf.Add(disp_op)
wf.Add(norm_op)
wf.Add(mm_op)

# Expose named outputs so callers can retrieve results without knowing internals
wf.SetOutputName('max', mm_op, 1)   # pin 1 = field_max on min_max_fc

# Evaluate: retrieve the named output
max_field = wf.GetOutputField('max')
print("Max displacement: {0:.6e}".format(max_field.Data[0]))
```

Workflows can also expose named inputs so that the same graph can be reused with different
data sources or scopings without rebuilding every operator each time.

### Workflows in Python Result objects

When used inside a `define_dpf_workflow(analysis)` function, a workflow must additionally be
recorded so that Mechanical can render its output as a contour plot. The final operator added to
the workflow must expose a `FieldsContainer` that Mechanical will use for the result display.

```python
def define_dpf_workflow(analysis):
    import mech_dpf
    import Ans.DataProcessing as dpf

    mech_dpf.setExtAPI(ExtAPI)

    ds = dpf.DataSources()
    ds.SetResultFilePath(analysis.ResultFileName)

    # Build operator chain
    disp_op = dpf.operators.result.displacement()
    disp_op.inputs.data_sources.Connect(ds)

    norm_op = dpf.operators.math.norm_fc()
    norm_op.inputs.fields_container.Connect(disp_op.outputs.fields_container)

    # Scalar summary for the text panel
    mm_op = dpf.operators.min_max.min_max_fc()
    mm_op.inputs.fields_container.Connect(norm_op.outputs.fields_container)
    max_val = mm_op.outputs.field_max.GetData().Data[0]
    this.Text = "Max displacement magnitude: {0:.6e}".format(max_val)

    # Register workflow for contour rendering
    wf = dpf.Workflow()
    wf.Add(norm_op)
    wf.SetOutputContour(norm_op)
    wf.Record('wf_id', False)
    this.WorkflowId = wf.GetRecordedId()
```

Key rules for Python Result workflows:

| Step | What to do |
|------|-----------|
| 1 | Build and connect operators normally |
| 2 | Create `dpf.Workflow()` |
| 3 | Call `wf.Add(op)` for every operator that must be part of the graph |
| 4 | Call `wf.SetOutputContour(final_op)` to declare the field to plot |
| 5 | Call `wf.Record('wf_id', False)` and assign `this.WorkflowId = wf.GetRecordedId()` |

The operator passed to `wf.SetOutputContour` must produce a `FieldsContainer` output.

## To go further (DPF framework)

- [Using operators](https://developer.ansys.com/docs/dpf-framework-2026-r1/user-guide/using-operators.md)
- [Workflow examples](https://developer.ansys.com/docs/dpf-framework-2026-r1/user-guide/workflow-examples.md)
