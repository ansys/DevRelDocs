---
uid: Ans.DataProcessing.operators.utility.python_generator
title: python_generator
---

# python_generator Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Generates .py file with specifications for loaded plugin(s).   ///available inputs: dll_source_path (string), output_path (string), load_symbol (string) (optional), library_key (string) (optional)
            available outputs:

python_generator()
python_generator(dll_source_path: object, output_path: object, load_symbol: object, library_key: object, config: OperatorConfig)
python_generator(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
python_generator()
```

#### Constructor

```python
python_generator(dll_source_path, output_path, load_symbol, library_key, config)
```

**Parameters:**

- `dll_source_path` (*object*)
- `output_path` (*object*)
- `load_symbol` (*object*)
- `library_key` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
python_generator(config)
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
