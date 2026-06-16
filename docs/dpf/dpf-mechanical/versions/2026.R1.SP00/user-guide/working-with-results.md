---
uid: user-guide.working-with-results
---

# Working with results

Result extraction in Mechanical relies on DPF result operators connected to the current analysis result file.

## Typical pattern

```python
import mech_dpf
import Ans.DataProcessing as dpf

mech_dpf.setExtAPI(ExtAPI)
analysis = ExtAPI.DataModel.Project.Model.Analyses[0]

ds = dpf.DataSources()
ds.SetResultFilePath(analysis.ResultFileName)

stress_op = dpf.operators.result.stress()
stress_op.inputs.data_sources.Connect(ds)
fc = stress_op.outputs.fields_container.GetData()
field = fc[0]
```

## To go further (DPF framework)

- [Using operators](https://developer.ansys.com/docs/dpf-framework-2026-r1/user-guide/using-operators.md)
- [Workflow examples](https://developer.ansys.com/docs/dpf-framework-2026-r1/user-guide/workflow-examples.md)
