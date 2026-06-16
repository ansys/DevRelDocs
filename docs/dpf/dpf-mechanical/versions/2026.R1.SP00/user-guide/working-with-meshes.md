---
uid: user-guide.working-with-meshes
---

# Working with meshes

Use DPF mesh objects to inspect nodes, elements, and connectivity from the active Mechanical analysis.

## Mechanical example

```python
import mech_dpf
import Ans.DataProcessing as dpf

mech_dpf.setExtAPI(ExtAPI)
analysis = ExtAPI.DataModel.Project.Model.Analyses[0]

ds = dpf.DataSources()
ds.SetResultFilePath(analysis.ResultFileName)
model = dpf.Model(ds)

mesh = model.Mesh
print("Nodes: {0}".format(mesh.Nodes.Count))
print("Elements: {0}".format(mesh.Elements.Count))
```

## To go further (DPF framework)

- [Field](https://developer.ansys.com/docs/dpf-framework-2026-r1/core-concepts/field.md)
- [Using data containers](https://developer.ansys.com/docs/dpf-framework-2026-r1/user-guide/using-data-containers.md)
