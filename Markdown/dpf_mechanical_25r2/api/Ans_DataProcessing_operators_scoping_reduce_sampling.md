---
uid: Ans.DataProcessing.operators.scoping.reduce_sampling
---

# reduce_sampling Class

**Namespace:** [Ans.DataProcessing.operators.scoping](Ans_DataProcessing_operators_scoping.md)

Take a scoping and remove half of it's content.   ///available inputs: mesh_scoping (Scoping), denominator (Int32) (optional)
            available outputs: mesh_scoping (Scoping)

reduce_sampling()
reduce_sampling(mesh_scoping: object, denominator: object, config: OperatorConfig)
reduce_sampling(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.scoping` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
reduce_sampling()
```

#### Constructor

```python
reduce_sampling(mesh_scoping, denominator, config)
```

**Parameters:**

- `mesh_scoping` (*object*)
- `denominator` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
reduce_sampling(config)
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
