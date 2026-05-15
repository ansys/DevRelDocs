---
uid: Ans.DataProcessing.operators.mapping.find_reduced_coordinates
---

# find_reduced_coordinates Class

**Namespace:** [Ans.DataProcessing.operators.mapping](Ans_DataProcessing_operators_mapping.md)

## Summary

Finds the elements corresponding to the given coordinates in input and computes their reduced coordinates in those elements.

available inputs: `coordinates` (Field, FieldsContainer, MeshedRegion, MeshesContainer), `mesh` (MeshedRegion, MeshesContainer) (optional), `use_quadratic_elements` (bool) (optional)

available outputs: `reduced_coordinates` (FieldsContainer), `element_ids` (ScopingsContainer)

## Example

```python
op = find_reduced_coordinates()

op = find_reduced_coordinates(coordinates=my_coordinates,mesh=my_mesh,use_quadratic_elements=my_use_quadratic_elements)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mapping` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### coordinates

**Type:** *LinkableInput*

### mesh

If the first field in input has no mesh in support, then the mesh in this pin is expected (default is false). If a meshes container with several meshes is set, it should be on the same label spaces as the coordinates fields container.

**Type:** *LinkableInput*

### use_quadratic_elements

If this pin is set to true, reduced coordinates are computed on the quadratic element if the element is quadratic (more precise but less performant). Default is false.

**Type:** *LinkableInput*

## Outputs

### reduced_coordinates

coordinates in the reference elements

**Type:** *LinkableOutput*

### element_ids

Ids of the elements where each set of reduced coordinates is found

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
find_reduced_coordinates()
```

#### Constructor

```python
find_reduced_coordinates(coordinates, mesh, use_quadratic_elements, config)
```

**Parameters:**

- `coordinates` (*object*)
- `mesh` (*object*)
- `use_quadratic_elements` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
find_reduced_coordinates(config)
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
