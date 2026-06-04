---
uid: Ans.DataProcessing.operators.utility.extract_time_freq
---

# extract_time_freq Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

## Summary

Extract timefreqs with sets scoping from a time freq support

available inputs: `time_freq_support` (TimeFreqSupport), `time_scoping` (Scoping) (optional), `real_or_complex` (bool) (optional)

available outputs: `field` (Field ,FieldsContainer)

## Example

```python
op = extract_time_freq()

op = extract_time_freq(time_freq_support=my_time_freq_support,time_scoping=my_time_scoping,real_or_complex=my_real_or_complex)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### time_freq_support

**Type:** *LinkableInput*

### time_scoping

**Type:** *LinkableInput*

### real_or_complex

False for real only (default). True for complex output.

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
extract_time_freq()
```

#### Constructor

```python
extract_time_freq(time_freq_support, time_scoping, real_or_complex, config)
```

**Parameters:**

- `time_freq_support` (*object*)
- `time_scoping` (*object*)
- `real_or_complex` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
extract_time_freq(config)
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
