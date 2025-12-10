---
uid: Ans.DataProcessing.operators.scoping.transpose
---

# transpose Class

**Namespace:** [Ans.DataProcessing.operators.scoping](Ans_DataProcessing_operators_scoping.md)

## Summary

Transposes the input scoping or scopings container (Elemental/Faces --> Nodal, or Nodal ---> Elemental/Faces), based on the input mesh region.

available inputs: `mesh_scoping` (Scoping, ScopingsContainer), `meshed_region` (MeshedRegion, MeshesContainer), `inclusive` (Int32) (optional), `requested_location` (string) (optional)

available outputs: `mesh_scoping` (Scoping ,ScopingsContainer)

## Example

```python
op = transpose()

op = transpose(mesh_scoping=my_mesh_scoping,meshed_region=my_meshed_region,inclusive=my_inclusive,requested_location=my_requested_location)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.scoping` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### mesh_scoping

Scoping or scopings container (the input type is the output type)

**Type:** *LinkableInput*

### meshed_region

**Type:** *LinkableInput*

### inclusive

if inclusive == 1 then all the elements/faces adjacent to the nodes/faces ids in input are added, if inclusive == 0, only the elements/faces which have all their nodes/faces in the scoping are included

**Type:** *LinkableInput*

### requested_location

Output scoping location for meshes with nodes, faces and elements. By default, elemental and faces scopings transpose to nodal, and nodal scopings transpose to elemental.

**Type:** *LinkableInput*

## Outputs

### mesh_scoping

Scoping or scopings container (the input type is the output type)

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
transpose()
```

#### Constructor

```python
transpose(mesh_scoping, meshed_region, inclusive, requested_location, config)
```

**Parameters:**

- `mesh_scoping` (*object*)
- `meshed_region` (*object*)
- `inclusive` (*object*)
- `requested_location` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
transpose(config)
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
