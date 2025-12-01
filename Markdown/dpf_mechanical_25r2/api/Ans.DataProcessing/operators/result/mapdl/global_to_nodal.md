---
uid: Ans.DataProcessing.operators.result.mapdl.global_to_nodal
---

# global_to_nodal Class

**Namespace:** [Ans.DataProcessing.operators.result.mapdl](Ans_DataProcessing_operators_result_mapdl.md)

Rotate results from global coordinate system to local coordinate system.   ///available inputs: fieldA (Field), fieldB (Field)
            available outputs: field (Field)

global_to_nodal()
global_to_nodal(fieldA: object, fieldB: object, config: OperatorConfig)
global_to_nodal(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result.mapdl` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
global_to_nodal()
```

#### Constructor

```python
global_to_nodal(fieldA, fieldB, config)
```

**Parameters:**

- `fieldA` (*object*)
- `fieldB` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
global_to_nodal(config)
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
