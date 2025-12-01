---
uid: Ans.DataProcessing.operators.utility.mechanical.make_time_chunk_for_each
---

# make_time_chunk_for_each Class

**Namespace:** [Ans.DataProcessing.operators.utility.mechanical](Ans_DataProcessing_operators_utility_mechanical.md)

make_time_chunk_for_each()
make_time_chunk_for_each(target_time_freq_values: object, operator_to_iterate: object, pin_index: object, meshed_region: object, chunk_config: object, producer_op11: object, producer_op12: object, output_pin_of_producer_op12: object, input_pin_of_consumer_op12: object, consumer_op12: object, config: OperatorConfig)
make_time_chunk_for_each(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility.mechanical` |
| Assembly | `Ans_Dpf_Mechanical_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
make_time_chunk_for_each()
```

#### Constructor

```python
make_time_chunk_for_each(target_time_freq_values, operator_to_iterate, pin_index, meshed_region, chunk_config, producer_op11, producer_op12, output_pin_of_producer_op12, input_pin_of_consumer_op12, consumer_op12, config)
```

**Parameters:**

- `target_time_freq_values` (*object*)
- `operator_to_iterate` (*object*)
- `pin_index` (*object*)
- `meshed_region` (*object*)
- `chunk_config` (*object*)
- `producer_op11` (*object*)
- `producer_op12` (*object*)
- `output_pin_of_producer_op12` (*object*)
- `input_pin_of_consumer_op12` (*object*)
- `consumer_op12` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
make_time_chunk_for_each(config)
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
