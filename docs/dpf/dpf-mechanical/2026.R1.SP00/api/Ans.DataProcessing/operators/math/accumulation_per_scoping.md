---
uid: Ans.DataProcessing.operators.math.accumulation_per_scoping
---

# accumulation_per_scoping Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

## Summary

This operator calculates the sum and the percentage of total sum of the input fields container for each scoping of the scopings container.

available inputs: `fields_container` (FieldsContainer), `mesh_scoping` (Scoping) (optional), `streams_container` (StreamsContainer), `data_sources` (DataSources), `scopings_container` (ScopingsContainer)

available outputs: `accumulation_per_scoping` (FieldsContainer), `accumulation_per_scoping_percentage` (FieldsContainer)

## Example

```python
op = accumulation_per_scoping()

op = accumulation_per_scoping(fields_container=my_fields_container,mesh_scoping=my_mesh_scoping,streams_container=my_streams_container,data_sources=my_data_sources,scopings_container=my_scopings_container)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fields_container

**Type:** *LinkableInput*

### mesh_scoping

Master scoping. All scopings in the Scopings Container will be intersected with this scoping.

**Type:** *LinkableInput*

### streams_container

**Type:** *LinkableInput*

### data_sources

**Type:** *LinkableInput*

### scopings_container

The intersection between the of the first will be used.

**Type:** *LinkableInput*

## Outputs

### accumulation_per_scoping

**Type:** *LinkableOutput*

### accumulation_per_scoping_percentage

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
accumulation_per_scoping()
```

#### Constructor

```python
accumulation_per_scoping(fields_container, mesh_scoping, streams_container, data_sources, scopings_container, config)
```

**Parameters:**

- `fields_container` (*object*)
- `mesh_scoping` (*object*)
- `streams_container` (*object*)
- `data_sources` (*object*)
- `scopings_container` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
accumulation_per_scoping(config)
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
