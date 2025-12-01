---
uid: Ans.DataProcessing.operators.utility.incremental.merge.fields_container
---

# fields_container Class

**Namespace:** [Ans.DataProcessing.operators.utility.incremental.merge](Ans_DataProcessing_operators_utility_incremental_merge.md)

Incrementaly merge the input.   ///available inputs: input (FieldsContainer)
            available outputs: incremented_result (object)

fields_container()
fields_container(input: object, config: OperatorConfig)
fields_container(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility.incremental.merge` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
fields_container()
```

#### Constructor

```python
fields_container(input, config)
```

**Parameters:**

- `input` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
fields_container(config)
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
