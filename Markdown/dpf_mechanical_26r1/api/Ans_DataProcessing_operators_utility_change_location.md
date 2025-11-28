---
uid: Ans.DataProcessing.operators.utility.change_location
---

# change_location Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Changes the location property of a field without modifying the field data.   ///available inputs: field (Field), new_location (string)
            available outputs: field (Field)

change_location()
change_location(field: object, new_location: object, config: OperatorConfig)
change_location(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
change_location()
```

#### Constructor

```python
change_location(field, new_location, config)
```

**Parameters:**

- `field` (*object*)
- `new_location` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
change_location(config)
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
