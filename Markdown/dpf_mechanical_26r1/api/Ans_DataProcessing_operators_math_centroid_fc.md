---
uid: Ans.DataProcessing.operators.math.centroid_fc
---

# centroid_fc Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

Computes the centroid of all the matching fields of a fields container at a given time or frequency, using fieldOut = field1*(1.-fact)+field2*(fact).   ///available inputs: fields_container (FieldsContainer), time_freq (double), step (Int32) (optional), time_freq_support (TimeFreqSupport) (optional)
            available outputs: fields_container (FieldsContainer)

centroid_fc()
centroid_fc(fields_container: object, time_freq: object, step: object, time_freq_support: object, config: OperatorConfig)
centroid_fc(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

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
