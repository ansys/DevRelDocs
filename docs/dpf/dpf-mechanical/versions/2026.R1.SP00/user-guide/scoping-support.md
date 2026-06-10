---
uid: user-guide.scoping-support
---

# Scoping and support

A **scoping** is a list of entity IDs with an associated location (for example `'Nodal'`,
`'Elemental'`, `'TimeFreq_sets'`). It tells an operator which subset of the data to
process. A **support** (such as `TimeFreqSupport`) describes the full spatial or temporal
context of an analysis and is used to translate between load steps, substeps, and cumulative
set indices.

## Mesh scoping

### Manual construction

```python
import Ans.DataProcessing as dpf

# Nodal scoping
sc = dpf.Scoping()
sc.Location = 'Nodal'       # or dpf.locations.nodal if available
sc.Ids = [1, 2, 3, 100]

print("Count: {0}".format(sc.Count))
print("ID at index 0: {0}".format(sc.IdByIndex(0)))
print("Index of ID 100: {0}".format(sc.IndexById(100)))
print("Has ID 5: {0}".format(sc.HasId(5)))
```

Supported location strings: `'Nodal'`, `'Elemental'`, `'ElementalNodal'`.

### Factory helpers

`MeshScopingFactory` provides shorthand constructors to create mesh scopings:

```python
import Ans.DataProcessing as dpf

# Nodal scoping from a list of node IDs
nodal_sc = dpf.MeshScopingFactory.NodalScoping([1, 2, 3, 100])

# Elemental scoping from a list of element IDs
elem_sc = dpf.MeshScopingFactory.ElementalScoping([10, 11, 12])
```

### Named selection scoping

Named selections created in Mechanical can be resolved to a mesh scoping through either the
factory or the dedicated operator. **The name must be passed in uppercase.**

```python
import mech_dpf
import Ans.DataProcessing as dpf

mech_dpf.setExtAPI(ExtAPI)

analysis = ExtAPI.DataModel.Project.Model.Analyses[0]
ds       = dpf.DataSources()
ds.SetResultFilePath(analysis.ResultFileName)
model    = dpf.Model(ds)

# Option 1 - factory (returns a Scoping directly)
ns_sc = dpf.MeshScopingFactory.NamedSelectionScoping("MY_SELECTION", model)

# Option 2 - operator (connects lazily inside a chain)
ns_op = dpf.operators.scoping.on_named_selection()
ns_op.inputs.named_selection_name.Connect("MY_SELECTION")
ns_op.inputs.data_sources.Connect(ds)

stress_op = dpf.operators.result.stress()
stress_op.inputs.data_sources.Connect(ds)
stress_op.inputs.mesh_scoping.Connect(ns_op.outputs.mesh_scoping)
```

## Time scoping

Time scopings select which time or frequency sets an operator works with. Cumulative set
indices are 1-based and span all load steps.

### Factory helpers

`TimeFreqScopingFactory` provides the recommended way to build time scopings:

```python
import Ans.DataProcessing as dpf

# Single load step (all substeps of load step 2)
ts_ls = dpf.TimeFreqScopingFactory.ScopingByLoadStep(2)

# Multiple load steps
ts_mls = dpf.TimeFreqScopingFactory.ScopingByLoadSteps([1, 2])

# Single cumulative set (1-based index across all steps)
ts_set = dpf.TimeFreqScopingFactory.ScopingBySet(5)

# Multiple cumulative sets
ts_sets = dpf.TimeFreqScopingFactory.ScopingBySets([1, 2, 3])

# By step and substep (requires a Model or TimeFreqSupport)
ts_sub = dpf.TimeFreqScopingFactory.ScopingByStepAndSubstep(1, 2, model)

# All time/frequency sets
ts_all = dpf.TimeFreqScopingFactory.ScopingOnAllTimeFreqs(model.TimeFreqSupport)
```

Pass the scoping to a result operator:

```python
disp_op = dpf.operators.result.displacement()
disp_op.inputs.data_sources.Connect(ds)
disp_op.inputs.time_scoping.Connect(ts_ls)
```

### Manual construction

For simple cases a plain `dpf.Scoping` with `'TimeFreq_sets'` location works too:

```python
sc = dpf.Scoping()
sc.Location = 'TimeFreq_sets'
sc.Ids = [1]           # cumulative set index
disp_op.inputs.time_scoping.Connect(sc)
```

## TimeFreqSupport

`TimeFreqSupport` describes the full temporal or frequential space of the analysis. It is
available from the model and is useful for translating between step/substep and cumulative
indices.

```python
import mech_dpf
import Ans.DataProcessing as dpf

mech_dpf.setExtAPI(ExtAPI)

analysis = ExtAPI.DataModel.Project.Model.Analyses[0]
ds       = dpf.DataSources()
ds.SetResultFilePath(analysis.ResultFileName)
model    = dpf.Model(ds)

tfs = model.TimeFreqSupport

# Total number of time/frequency sets across all steps
print("Sets: {0}".format(tfs.NumberSets))

# Field of real time values (unit usually 's' or 'Hz')
time_field = tfs.TimeFreqs
print("Unit: {0}".format(time_field.Unit))

# Time value at a given step / substep (both 1-based)
t = tfs.GetTimeFreq(1, 1)
print("Step 1 substep 1 time: {0}".format(t))

# Cumulative index from step and substep (add 1 to use as set ID)
cum_idx = tfs.GetTimeFreqCummulativeIndex(1, 1)
print("Cumulative index: {0}".format(cum_idx))
```

## To go further (DPF framework)

- [Field](https://developer.ansys.com/docs/dpf-framework-2026-r1/core-concepts/field.md)
- [Using data containers](https://developer.ansys.com/docs/dpf-framework-2026-r1/user-guide/using-data-containers.md)
