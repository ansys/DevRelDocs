---
uid: Ans.DataProcessing.operators.serialization.vtk_export
title: vtk_export
---

# vtk_export Class

**Namespace:** [Ans.DataProcessing.operators.serialization](Ans_DataProcessing_operators_serialization.md)

Write the input field and fields container into a given vtk path   ///available inputs: export_type (Int32) (optional), file_path (string), mesh (MeshedRegion) (optional), fields1 (FieldsContainer, Field), fields2 (FieldsContainer, Field)
            available outputs:

vtk_export()
vtk_export(export_type: object, file_path: object, mesh: object, fields1: object, fields2: object, config: OperatorConfig)
vtk_export(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.serialization` |
| Assembly | `meshOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

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
