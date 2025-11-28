---
uid: Ans.DataProcessing.operators.invariant.convertnum_bcs_to_nod
title: convertnum_bcs_to_nod
---

# convertnum_bcs_to_nod Class

**Namespace:** [Ans.DataProcessing.operators.invariant](Ans_DataProcessing_operators_invariant.md)

Converts a fields container from BCS to NOD ordering.   ///available inputs: fields_container (FieldsContainer), data_sources (DataSources)
            available outputs: fields_container (FieldsContainer)

convertnum_bcs_to_nod()
convertnum_bcs_to_nod(fields_container: object, data_sources: object, config: OperatorConfig)
convertnum_bcs_to_nod(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.invariant` |
| Assembly | `mapdlOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
convertnum_bcs_to_nod()
```

#### Constructor

```python
convertnum_bcs_to_nod(fields_container, data_sources, config)
```

**Parameters:**

- `fields_container` (*object*)
- `data_sources` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
convertnum_bcs_to_nod(config)
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
