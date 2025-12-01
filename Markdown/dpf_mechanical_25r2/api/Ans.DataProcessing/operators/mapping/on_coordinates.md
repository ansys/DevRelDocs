---
uid: Ans.DataProcessing.operators.mapping.on_coordinates
---

# on_coordinates Class

**Namespace:** [Ans.DataProcessing.operators.mapping](Ans_DataProcessing_operators_mapping.md)

## Summary

Evaluates a result on specified coordinates (interpolates results inside elements with shape functions).

available inputs: `fields_container` (FieldsContainer), `coordinates` (Field, FieldsContainer, MeshedRegion, MeshesContainer), `create_support` (bool) (optional), `mapping_on_scoping` (bool) (optional), `mesh` (MeshedRegion, MeshesContainer) (optional), `use_quadratic_elements` (bool) (optional)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = on_coordinates()

op = on_coordinates(fields_container=my_fields_container,coordinates=my_coordinates,create_support=my_create_support,mapping_on_scoping=my_mapping_on_scoping,mesh=my_mesh,use_quadratic_elements=my_use_quadratic_elements)
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

### coordinates

**Type:** *LinkableInput*

### create_support

if this pin is set to true, then, a support associated to the fields consisting of points is created

**Type:** *LinkableInput*

### mapping_on_scoping

if this pin is set to true, then the mapping between the coordinates and the fields is created only on the first field scoping

**Type:** *LinkableInput*

### mesh

if the first field in input has no mesh in support, then the mesh in this pin is expected (default is false), if a meshes container with several meshes is set, it should be on the same label spaces as the coordinates fields container

**Type:** *LinkableInput*

### use_quadratic_elements

If this pin is set to true, the element search for each coordinate is computed on the quadratic element if the element is quadratic (more precise but less performant). Default is false.

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
on_coordinates()
```

#### Constructor

```python
on_coordinates(fields_container, coordinates, create_support, mapping_on_scoping, mesh, use_quadratic_elements, config)
```

**Parameters:**

- `fields_container` (*object*)
- `coordinates` (*object*)
- `create_support` (*object*)
- `mapping_on_scoping` (*object*)
- `mesh` (*object*)
- `use_quadratic_elements` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
on_coordinates(config)
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
