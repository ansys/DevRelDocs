---
uid: Ans.DataProcessing.operators.math.centroid_fc
---

# centroid_fc Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

## Summary

Computes the centroid of all the matching fields of a fields container at a given time or frequency, using fieldOut = field1*(1.-fact)+field2*(fact).

available inputs: `fields_container` (FieldsContainer), `time_freq` (double), `step` (Int32) (optional), `time_freq_support` (TimeFreqSupport) (optional)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = centroid_fc()

op = centroid_fc(fields_container=my_fields_container,time_freq=my_time_freq,step=my_step,time_freq_support=my_time_freq_support)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fields_container

FieldsContainer with fields for centroid calculation

**Type:** *LinkableInput*

### time_freq

Time or frequency value for field selection

**Type:** *LinkableInput*

### step

Optional step specification

**Type:** *LinkableInput*

### time_freq_support

Optional TimeFreqSupport for field resolution

**Type:** *LinkableInput*

## Outputs

### fields_container

FieldsContainer with centroid calculation results at specified time/frequency

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
centroid_fc()
```

#### Constructor

```python
centroid_fc(fields_container, time_freq, step, time_freq_support, config)
```

**Parameters:**

- `fields_container` (*object*)
- `time_freq` (*object*)
- `step` (*object*)
- `time_freq_support` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
centroid_fc(config)
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
