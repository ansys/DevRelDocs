---
uid: Ans.DataProcessing.operators.serialization.migrate_file_to_vtk
---

# migrate_file_to_vtk Class

**Namespace:** [Ans.DataProcessing.operators.serialization](Ans_DataProcessing_operators_serialization.md)

## Summary

Take an input data sources or streams and convert as much data as possible to vtk.

available inputs: `output_filename` (string) (optional), `streams_container` (StreamsContainer) (optional), `data_sources` (DataSources) (optional)

available outputs: `data_sources` (DataSources)

## Example

```python
op = migrate_file_to_vtk()

op = migrate_file_to_vtk(output_filename=my_output_filename,streams_container=my_streams_container,data_sources=my_data_sources)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.serialization` |
| Assembly | `meshOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### output_filename

**Type:** *LinkableInput*

### streams_container

**Type:** *LinkableInput*

### data_sources

**Type:** *LinkableInput*

## Outputs

### data_sources

Generated output vtk file

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
migrate_file_to_vtk()
```

#### Constructor

```python
migrate_file_to_vtk(output_filename, streams_container, data_sources, config)
```

**Parameters:**

- `output_filename` (*object*)
- `streams_container` (*object*)
- `data_sources` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
migrate_file_to_vtk(config)
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
