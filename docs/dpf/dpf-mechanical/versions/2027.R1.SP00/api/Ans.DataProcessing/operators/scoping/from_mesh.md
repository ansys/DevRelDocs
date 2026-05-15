---
uid: Ans.DataProcessing.operators.scoping.from_mesh
---

# *class* from_mesh(mesh: object = None, requested_location: object = None, config: OperatorConfig = None)

Provides the entire mesh scoping based on the requested location

available inputs: `mesh` (MeshedRegion), `requested_location` (string) (optional)

available outputs: `scoping` (Scoping)

**DPF Framework Reference:** [from_mesh operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/scoping/from_mesh.md)

**Parameters:**

* **mesh**
* **requested_location**
* **config**

**Example:**

```python
op = from_mesh()

op = from_mesh(mesh=my_mesh,requested_location=my_requested_location)
```

## Inputs

### mesh

**Type:** *LinkableInput*

### requested_location

if nothing the operator returns the nodes scoping, possible locations are: Nodal(default) or Elemental

**Type:** *LinkableInput*

## Outputs

### scoping

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
