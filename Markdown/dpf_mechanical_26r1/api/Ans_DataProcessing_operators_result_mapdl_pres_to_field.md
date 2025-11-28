---
uid: Ans.DataProcessing.operators.result.mapdl.pres_to_field
title: pres_to_field
---

# pres_to_field Class

**Namespace:** [Ans.DataProcessing.operators.result.mapdl](Ans_DataProcessing_operators_result_mapdl.md)

Read the presol generated file from mapdl.   ///available inputs: filepath (string), columns_to_read (Int32) (optional)
            available outputs: field (Field)

pres_to_field()
pres_to_field(filepath: object, columns_to_read: object, config: OperatorConfig)
pres_to_field(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result.mapdl` |
| Assembly | `mapdlOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
pres_to_field()
```

#### Constructor

```python
pres_to_field(filepath, columns_to_read, config)
```

**Parameters:**

- `filepath` (*object*)
- `columns_to_read` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
pres_to_field(config)
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
