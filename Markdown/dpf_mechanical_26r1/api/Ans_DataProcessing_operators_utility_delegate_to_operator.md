---
uid: Ans.DataProcessing.operators.utility.delegate_to_operator
---

# delegate_to_operator Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Delegate the run to an Operator instantiated by the name in input (forwards all the input of this Operator to the sub Operator).   ///available inputs: operator_name (string)
            available outputs: any1 (object), any2 (object)

delegate_to_operator()
delegate_to_operator(operator_name: object, config: OperatorConfig)
delegate_to_operator(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
delegate_to_operator()
```

#### Constructor

```python
delegate_to_operator(operator_name, config)
```

**Parameters:**

- `operator_name` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
delegate_to_operator(config)
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
