---
uid: Ans.DataProcessing.operators.utility.mesh
---

# mesh Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

## Summary

Incrementaly merge the input.

available inputs: `input` (MeshedRegion)

available outputs: `incremented_result` (object)

## Example

```python
op = mesh()

op = mesh(input=my_input)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### input

**Type:** *LinkableInput*

## Outputs

### incremented_result

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
mesh()
```

#### Constructor

```python
mesh(input, config)
```

**Parameters:**

- `input` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
mesh(config)
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
