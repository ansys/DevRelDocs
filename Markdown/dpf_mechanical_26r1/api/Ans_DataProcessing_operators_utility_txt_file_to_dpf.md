---
uid: Ans.DataProcessing.operators.utility.txt_file_to_dpf
title: txt_file_to_dpf
---

# txt_file_to_dpf Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Take an input string and parse it into dataProcessing type   ///available inputs: input_string (string)
            available outputs: any_output1 (object), any_output2 (object)

txt_file_to_dpf()
txt_file_to_dpf(input_string: object, config: OperatorConfig)
txt_file_to_dpf(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

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
