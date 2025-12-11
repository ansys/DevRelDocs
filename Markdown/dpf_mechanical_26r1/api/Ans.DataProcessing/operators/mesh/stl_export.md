---
uid: Ans.DataProcessing.operators.mesh.stl_export
---

# stl_export Class

**Namespace:** [Ans.DataProcessing.operators.mesh](Ans_DataProcessing_operators_mesh.md)

## Summary

export a mesh into a stl file.

available inputs: `mesh` (MeshedRegion), `file_path` (string)

available outputs: `data_sources` (DataSources)

## Example

```python
op = stl_export()

op = stl_export(mesh=my_mesh,file_path=my_file_path)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mesh` |
| Assembly | `meshOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### mesh

**Type:** *LinkableInput*

### file_path

**Type:** *LinkableInput*

## Outputs

### data_sources

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
stl_export()
```

#### Constructor

```python
stl_export(mesh, file_path, config)
```

**Parameters:**

- `mesh` (*object*)
- `file_path` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
stl_export(config)
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
