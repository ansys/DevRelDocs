---
uid: Ans.DataProcessing.operators.mesh.iso_surfaces
---

# iso_surfaces Class

**Namespace:** [Ans.DataProcessing.operators.mesh](Ans_DataProcessing_operators_mesh.md)

iso_surfaces()
iso_surfaces(field: object, num_surfaces: object, mesh: object, slice_surfaces: object, vector_iso_values: object, config: OperatorConfig)
iso_surfaces(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mesh` |
| Assembly | `meshOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### field

Field containing the values for the iso-surface computation. The mesh can be retrieved from this field's support or through pin 2.

**Type:** *LinkableInput*

### num_surfaces

If provided, iso_values are linearly computed between the min and the max of the field of results. If not, iso_values must be provided by the user through pin 4

**Type:** *LinkableInput*

### mesh

Mesh to compute the iso-surface from. Used when not given through the support of the field in pin 0.

**Type:** *LinkableInput*

### slice_surfaces

True: slicing will also take into account shell and skin elements. False: slicing will ignore shell and skin elements. The default is true.

**Type:** *LinkableInput*

### vector_iso_values

If provided, user defined iso_values to compute. If not provided, iso_values are linearly compute between the min and the max of the field of results.

**Type:** *LinkableInput*

## Outputs

### meshes

**Type:** *LinkableOutput*

### fields_container

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
iso_surfaces()
```

#### Constructor

```python
iso_surfaces(field, num_surfaces, mesh, slice_surfaces, vector_iso_values, config)
```

**Parameters:**

- `field` (*object*)
- `num_surfaces` (*object*)
- `mesh` (*object*)
- `slice_surfaces` (*object*)
- `vector_iso_values` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
iso_surfaces(config)
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
