---
uid: Ans.DataProcessing.MeshScopingFactory
---

# *class* MeshScopingFactory()

Helpers to create mesh scoping inputs

**Example:**

```python
my_displacement = dpf.operators.result.displacement(mesh_scoping = MeshScopingFactory.NodalScoping([1,2,3]))

my_stress = dpf.operators.result.stress(mesh_scoping = MeshScopingFactory.ElementalScoping([1,2,3]))
```

## Methods

#### ElementalScoping(elementIds: list) -> Scoping

**Parameters:**

* **elementIds**

#### NamedSelectionScoping(name: str, model: Model) -> Scoping

Method `NamedSelectionScoping` create elements scoping

**Parameters:**

* **name** - named selection's name
* **model** - model with the data sources

**Example:**

```python
my_stress = dpf.operators.result.stress(mesh_scoping = MeshScopingFactory.NamedSelectionScoping("SELECTION", my_model))
```

#### NodalScoping(nodeIds: list) -> Scoping

**Parameters:**

* **nodeIds**
