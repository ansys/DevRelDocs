---
uid: Ans.DataProcessing.operators.logic.enrich_materials
---

# enrich_materials Class

**Namespace:** [Ans.DataProcessing.operators.logic](Ans_DataProcessing_operators_logic.md)

## Summary

Takes a MaterialContainer and a stream and enriches the MaterialContainer using stream data.

available inputs: `MaterialContainer` (object), `streams` (StreamsContainer, FieldsContainer), `streams_mapping` (PropertyFieldsContainer)

available outputs: `MaterialContainer` (bool)

## Example

```python
op = enrich_materials()

op = enrich_materials(MaterialContainer=my_MaterialContainer,streams=my_streams,streams_mapping=my_streams_mapping)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.logic` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### MaterialContainer

**Type:** *LinkableInput*

### streams

**Type:** *LinkableInput*

### streams_mapping

**Type:** *LinkableInput*

## Outputs

### MaterialContainer

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
enrich_materials()
```

#### Constructor

```python
enrich_materials(MaterialContainer, streams, streams_mapping, config)
```

**Parameters:**

- `MaterialContainer` (*object*)
- `streams` (*object*)
- `streams_mapping` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
enrich_materials(config)
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
