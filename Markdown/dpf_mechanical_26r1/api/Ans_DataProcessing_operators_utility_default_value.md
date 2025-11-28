---
uid: Ans.DataProcessing.operators.utility.default_value
---

# default_value Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Returns the value from pin 0 if provided, otherwise returns the default value from pin 1. This operator acts as a fallback mechanism for optional inputs.   ///available inputs: forced_value (object) (optional), default_value (object)
            available outputs: output (object)

default_value()
default_value(forced_value: object, default_value: object, config: OperatorConfig)
default_value(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
default_value()
```

#### Constructor

```python
default_value(forced_value, default_value, config)
```

**Parameters:**

- `forced_value` (*object*)
- `default_value` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
default_value(config)
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
