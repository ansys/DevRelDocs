---
uid: Ans.DataProcessing.operators.utility.server_path
title: server_path
---

# server_path Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Returns the platform-specific path to a folder in the Dpf server   ///available inputs: subpath (Int32) (optional)
            available outputs: path (string)

server_path()
server_path(subpath: object, config: OperatorConfig)
server_path(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
server_path()
```

#### Constructor

```python
server_path(subpath, config)
```

**Parameters:**

- `subpath` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
server_path(config)
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
