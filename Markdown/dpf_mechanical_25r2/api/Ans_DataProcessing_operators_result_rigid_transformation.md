---
uid: Ans.DataProcessing.operators.result.rigid_transformation
---

# rigid_transformation Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

Extracts rigid body motions from a displacement in input.   ///available inputs: streams_container (StreamsContainer) (optional), data_sources (DataSources)
            available outputs: fields_container (FieldsContainer)

rigid_transformation()
rigid_transformation(streams_container: object, data_sources: object, config: OperatorConfig)
rigid_transformation(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
rigid_transformation()
```

#### Constructor

```python
rigid_transformation(streams_container, data_sources, config)
```

**Parameters:**

- `streams_container` (*object*)
- `data_sources` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
rigid_transformation(config)
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
