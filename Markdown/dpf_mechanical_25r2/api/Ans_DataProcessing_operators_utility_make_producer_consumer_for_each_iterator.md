---
uid: Ans.DataProcessing.operators.utility.make_producer_consumer_for_each_iterator
---

# make_producer_consumer_for_each_iterator Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Generates an iterator that can be consumed by the for_each operator.The chain of Operators are split into a first part : the producers and a second part : the consumers.Asynchronous buffers are indeed to connect the producers and the consumers.   ///available inputs: try_generate_iterable (bool) (optional), iterable (object) (optional), operator_to_iterate (Operator), pin_index (Int32), valueA (object), valueB (object), valueC1 (object), valueC2 (object), producer_op11 (Operator), producer_op12 (Operator), output_pin_of_producer_op12 (Int32), input_pin_of_consumer_op12 (Int32), consumer_op12 (Operator)
            available outputs: iterator (object)

make_producer_consumer_for_each_iterator()
make_producer_consumer_for_each_iterator(try_generate_iterable: object, iterable: object, operator_to_iterate: object, pin_index: object, valueA: object, valueB: object, valueC1: object, valueC2: object, producer_op11: object, producer_op12: object, output_pin_of_producer_op12: object, input_pin_of_consumer_op12: object, consumer_op12: object, config: OperatorConfig)
make_producer_consumer_for_each_iterator(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
make_producer_consumer_for_each_iterator()
```

#### Constructor

```python
make_producer_consumer_for_each_iterator(try_generate_iterable, iterable, operator_to_iterate, pin_index, valueA, valueB, valueC1, valueC2, producer_op11, producer_op12, output_pin_of_producer_op12, input_pin_of_consumer_op12, consumer_op12, config)
```

**Parameters:**

- `try_generate_iterable` (*object*)
- `iterable` (*object*)
- `operator_to_iterate` (*object*)
- `pin_index` (*object*)
- `valueA` (*object*)
- `valueB` (*object*)
- `valueC1` (*object*)
- `valueC2` (*object*)
- `producer_op11` (*object*)
- `producer_op12` (*object*)
- `output_pin_of_producer_op12` (*object*)
- `input_pin_of_consumer_op12` (*object*)
- `consumer_op12` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
make_producer_consumer_for_each_iterator(config)
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
