---
uid: Ans.DataProcessing.ScopingsContainer
---

# *class* ScopingsContainer()

Container of scopings.

Can be used to split spatially results on properties (bodies, element shapes (solid, shell, beams), material...)

**Example:**

```python
op = dpf.operators.scoping.splitted_on_property_type() # operator instanciation

op.inputs.mesh_scoping.Connect(my_mesh_scoping)# optional

op.inputs.mesh.Connect(my_mesh)

op.inputs.requested_location.Connect("Nodal")

op.inputs.label.Connect("mat")# optional

my_mesh_scoping = op.outputs.mesh_scoping.GetData()
```
