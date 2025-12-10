---
uid: Ans.DataProcessing.operators.mesh.from_scoping
---

# from_scoping Class

**Namespace:** [Ans.DataProcessing.operators.mesh](Ans_DataProcessing_operators_mesh.md)

## Summary

Extracts a meshed region from another meshed region based on a scoping. Regarding the property fields whose scoping location is 'Elemental', 'Faces', and 'Nodal', they are scoped to the elements, faces or nodes of the output mesh. The ones whose scoping location is 'Global' are transferred from the input mesh to the output mesh without changes, and the rest of the property fields are not present in the output mesh.

available inputs: `scoping` (Scoping), `inclusive` (Int32) (optional), `nodes_only` (bool) (optional), `mesh` (MeshedRegion)

available outputs: `mesh` (MeshedRegion)

## Example

```python
op = from_scoping()

op = from_scoping(scoping=my_scoping,inclusive=my_inclusive,nodes_only=my_nodes_only,mesh=my_mesh)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mesh` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### scoping

if nodal/face scoping, then the scoping is transposed respecting the inclusive pin

**Type:** *LinkableInput*

### inclusive

if inclusive == 1 then all the elements/faces adjacent to the nodes/faces ids in input are added, if inclusive == 0, only the elements/faces which have all their nodes/faces in the scoping are included

**Type:** *LinkableInput*

### nodes_only

returns mesh with nodes only (without any elements or property fields). Default is false.

**Type:** *LinkableInput*

### mesh

**Type:** *LinkableInput*

## Outputs

### mesh

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
from_scoping()
```

#### Constructor

```python
from_scoping(scoping, inclusive, nodes_only, mesh, config)
```

**Parameters:**

- `scoping` (*object*)
- `inclusive` (*object*)
- `nodes_only` (*object*)
- `mesh` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
from_scoping(config)
```

**Parameters:**

- `config` (*OperatorConfig*)

## Methods

## Properties

#### inputs

**Type:** *InputSpec*

```python
# Get or set the property
value = obj.inputs
obj.inputs = new_value
```

#### outputs

**Type:** *OutputSpec*

```python
# Get or set the property
value = obj.outputs
obj.outputs = new_value
```

#### defaultConfig

**Type:** *Config*

```python
# Get the property (read-only)
value = obj.defaultConfig
```
