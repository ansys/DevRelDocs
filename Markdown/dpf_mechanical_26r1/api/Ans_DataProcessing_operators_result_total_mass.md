---
uid: Ans.DataProcessing.operators.result.total_mass
title: total_mass
---

# total_mass Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

Reads total mass from mode file.   ///available inputs: data_sources (DataSources)
            available outputs: mass (double)

total_mass()
total_mass(data_sources: object, config: OperatorConfig)
total_mass(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `mapdlOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
total_mass()
```

#### Constructor

```python
total_mass(data_sources, config)
```

**Parameters:**

- `data_sources` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
total_mass(config)
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
