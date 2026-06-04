---
uid: Ans.DataProcessing.operators.mapping.on_reduced_coordinates
---

# on_reduced_coordinates Class

**Namespace:** [Ans.DataProcessing.operators.mapping](Ans_DataProcessing_operators_mapping.md)

## Summary

Evaluates a result on specified reduced coordinates of given elements (interpolates results inside elements with shape functions).

available inputs: `fields_container` (FieldsContainer), `reduced_coordinates` (Field, FieldsContainer), `element_ids` (ScopingsContainer), `mesh` (MeshedRegion, MeshesContainer) (optional), `use_quadratic_elements` (bool) (optional)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = on_reduced_coordinates()

op = on_reduced_coordinates(fields_container=my_fields_container,reduced_coordinates=my_reduced_coordinates,element_ids=my_element_ids,mesh=my_mesh,use_quadratic_elements=my_use_quadratic_elements)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mapping` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fields_container

**Type:** *LinkableInput*

### reduced_coordinates

coordinates in the reference elements to find (found with the operator "find_reduced_coordinates")

**Type:** *LinkableInput*

### element_ids

Ids of the elements where each set of reduced coordinates is found (found with the operator "find_reduced_coordinates")

**Type:** *LinkableInput*

### mesh

if the first field in input has no mesh in support, then the mesh in this pin is expected (default is false), if a meshes container with several meshes is set, it should be on the same label spaces as the coordinates fields container

**Type:** *LinkableInput*

### use_quadratic_elements

If this pin is set to true, the interpolation is computed on the quadratic element if the element is quadratic (more precise but less performant). Default is false. To use only when results have mid side nodes values.

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
on_reduced_coordinates()
```

#### Constructor

```python
on_reduced_coordinates(fields_container, reduced_coordinates, element_ids, mesh, use_quadratic_elements, config)
```

**Parameters:**

- `fields_container` (*object*)
- `reduced_coordinates` (*object*)
- `element_ids` (*object*)
- `mesh` (*object*)
- `use_quadratic_elements` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
on_reduced_coordinates(config)
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
