---
uid: Ans.DataProcessing.operators.result.total_mass
---

# total_mass Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

## Summary

Reads total mass from mode file.

available inputs: `data_sources` (DataSources)

available outputs: `mass` (double)

## Example

```python
op = total_mass()

op = total_mass(data_sources=my_data_sources)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `mapdlOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### data_sources

Data sources (must contain at least one mode file).

**Type:** *LinkableInput*

## Outputs

### mass

the unit should be grabbed from the rst file

**Type:** *LinkableOutput*

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
