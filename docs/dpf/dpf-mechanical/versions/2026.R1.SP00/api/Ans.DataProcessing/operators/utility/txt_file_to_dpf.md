---
uid: Ans.DataProcessing.operators.utility.txt_file_to_dpf
---

# txt_file_to_dpf Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

## Summary

Take an input string and parse it into dataProcessing type

available inputs: `input_string` (string)

available outputs: `any_output1` (object), `any_output2` (object)

## Example

```python
op = txt_file_to_dpf()

op = txt_file_to_dpf(input_string=my_input_string)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### input_string

**Type:** *LinkableInput*

## Outputs

### any_output1

any output

**Type:** *LinkableOutput*

### any_output2

any output

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
txt_file_to_dpf()
```

#### Constructor

```python
txt_file_to_dpf(input_string, config)
```

**Parameters:**

- `input_string` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
txt_file_to_dpf(config)
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
