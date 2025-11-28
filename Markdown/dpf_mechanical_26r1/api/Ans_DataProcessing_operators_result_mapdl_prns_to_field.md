---
uid: Ans.DataProcessing.operators.result.mapdl.prns_to_field
title: prns_to_field
---

# prns_to_field Class

**Namespace:** [Ans.DataProcessing.operators.result.mapdl](Ans_DataProcessing_operators_result_mapdl.md)

Read the presol of nodal field generated file from mapdl.   ///available inputs: filepath (string), columns_to_read (Int32, IList int, System.Collections.IEnumerable) (optional)
            available outputs: field (Field)

prns_to_field()
prns_to_field(filepath: object, columns_to_read: object, config: OperatorConfig)
prns_to_field(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result.mapdl` |
| Assembly | `mapdlOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
prns_to_field()
```

#### Constructor

```python
prns_to_field(filepath, columns_to_read, config)
```

**Parameters:**

- `filepath` (*object*)
- `columns_to_read` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
prns_to_field(config)
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
