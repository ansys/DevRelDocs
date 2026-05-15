---
uid: Ans.DataProcessing.operators.serialization.vtk_export
---

# vtk_export Class

**Namespace:** [Ans.DataProcessing.operators.serialization](Ans_DataProcessing_operators_serialization.md)

## Summary

Write the input field and fields container into a given vtk path

available inputs: `export_type` (Int32) (optional), `file_path` (string), `mesh` (MeshedRegion) (optional), `fields1` (FieldsContainer, Field), `fields2` (FieldsContainer, Field)

available outputs:

## Example

```python
op = vtk_export()

op = vtk_export(export_type=my_export_type,file_path=my_file_path,mesh=my_mesh,fields1=my_fields1,fields2=my_fields2)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.serialization` |
| Assembly | `meshOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### export_type

Either export volume elements in the mesh with their fields with value 0 or faces elements in the mesh with their fields with value 1 (default is 0)

**Type:** *LinkableInput*

### file_path

path with vtk extension were the export occurs

**Type:** *LinkableInput*

### mesh

necessary if the first field or fields container don't have a mesh in their support

**Type:** *LinkableInput*

### fields1

fields exported

**Type:** *LinkableInput*

### fields2

fields exported

**Type:** *LinkableInput*

## Outputs

## Constructors

#### Constructor

```python
vtk_export()
```

#### Constructor

```python
vtk_export(export_type, file_path, mesh, fields1, fields2, config)
```

**Parameters:**

- `export_type` (*object*)
- `file_path` (*object*)
- `mesh` (*object*)
- `fields1` (*object*)
- `fields2` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
vtk_export(config)
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
