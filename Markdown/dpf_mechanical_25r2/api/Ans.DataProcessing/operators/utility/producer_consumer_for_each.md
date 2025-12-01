---
uid: Ans.DataProcessing.operators.utility.producer_consumer_for_each
---

# producer_consumer_for_each Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Allows to write a loop over operators by connecting data to iterate and by requesting the incrementally output merged.The chain of Operators are split into a first part: the producers and a second part: the consumers. These 2 parts will run asynchronously on 2 threads.   ///available inputs: producer_consumer_iterableq (object), forward1 (object), forward2 (object)
            available outputs: empty (object), output1 (object), output2 (object)

producer_consumer_for_each()
producer_consumer_for_each(producer_consumer_iterableq: object, forward1: object, forward2: object, config: OperatorConfig)
producer_consumer_for_each(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
producer_consumer_for_each()
```

#### Constructor

```python
producer_consumer_for_each(producer_consumer_iterableq, forward1, forward2, config)
```

**Parameters:**

- `producer_consumer_iterableq` (*object*)
- `forward1` (*object*)
- `forward2` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
producer_consumer_for_each(config)
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
