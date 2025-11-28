---
uid: Ans.DataProcessing.operators.invariant.convertnum_op
title: convertnum_op
---

# convertnum_op Class

**Namespace:** [Ans.DataProcessing.operators.invariant](Ans_DataProcessing_operators_invariant.md)

Converts a fields container from one mapdl ordering to another mapdl ordering. Supported mapdl ordering are BCS=0, FUL=1, NOD=2.   ///available inputs: input_ordering (Int32), output_ordering (Int32), fields_container (FieldsContainer), data_sources (DataSources)
            available outputs: fields_container (FieldsContainer)

convertnum_op()
convertnum_op(input_ordering: object, output_ordering: object, fields_container: object, data_sources: object, config: OperatorConfig)
convertnum_op(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.invariant` |
| Assembly | `mapdlOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
convertnum_op()
```

#### Constructor

```python
convertnum_op(input_ordering, output_ordering, fields_container, data_sources, config)
```

**Parameters:**

- `input_ordering` (*object*)
- `output_ordering` (*object*)
- `fields_container` (*object*)
- `data_sources` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
convertnum_op(config)
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
