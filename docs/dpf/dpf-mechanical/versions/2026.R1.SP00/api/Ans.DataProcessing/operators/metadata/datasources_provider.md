---
uid: Ans.DataProcessing.operators.metadata.datasources_provider
---

# datasources_provider Class

**Namespace:** [Ans.DataProcessing.operators.metadata](Ans_DataProcessing_operators_metadata.md)

## Summary

Creates a DataSources by expanding another.

available inputs: `data_sources` (DataSources)

available outputs: `data_sources` (DataSources)

## Example

```python
op = datasources_provider()

op = datasources_provider(data_sources=my_data_sources)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.metadata` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### data_sources

**Type:** *LinkableInput*

## Outputs

### data_sources

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
datasources_provider()
```

#### Constructor

```python
datasources_provider(data_sources, config)
```

**Parameters:**

- `data_sources` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
datasources_provider(config)
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
