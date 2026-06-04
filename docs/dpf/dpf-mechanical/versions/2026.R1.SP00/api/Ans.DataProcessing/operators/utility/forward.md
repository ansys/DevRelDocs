---
uid: Ans.DataProcessing.operators.utility.forward
---

# forward Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

## Summary

Return all the inputs as outputs.

available inputs: `any` (object)

available outputs: `any` (object)

## Example

```python
op = forward()

op = forward(any=my_any)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### any

any type of input

**Type:** *LinkableInput*

## Outputs

### any

same types as inputs

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
forward()
```

#### Constructor

```python
forward(any, config)
```

**Parameters:**

- `any` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
forward(config)
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
