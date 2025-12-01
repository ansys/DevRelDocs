---
uid: Ans.DataProcessing.operators.min_max.min_max_over_time_by_entity
---

# min_max_over_time_by_entity Class

**Namespace:** [Ans.DataProcessing.operators.min_max](Ans_DataProcessing_operators_min_max.md)

For each entity and component, evaluates minimum and maximum over time/frequency.  
            Input pin 4 `compute_amplitude` is only effective when given `fields_container` contains the `complex` label.  
            if given input `fields_container` has a `time_freq_support`, output pins 2 and 3 `fields_container` contains time/freq indices of the minimum and maximum values.     ///available inputs: fields_container (FieldsContainer), compute_absolute_value (bool) (optional), compute_amplitude (bool) (optional)
            available outputs: min (FieldsContainer), max (FieldsContainer), time_freq_of_min (FieldsContainer), time_freq_of_max (FieldsContainer)

min_max_over_time_by_entity()
min_max_over_time_by_entity(fields_container: object, compute_absolute_value: object, compute_amplitude: object, config: OperatorConfig)
min_max_over_time_by_entity(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.min_max` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
min_max_over_time_by_entity()
```

#### Constructor

```python
min_max_over_time_by_entity(fields_container, compute_absolute_value, compute_amplitude, config)
```

**Parameters:**

- `fields_container` (*object*)
- `compute_absolute_value` (*object*)
- `compute_amplitude` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
min_max_over_time_by_entity(config)
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
