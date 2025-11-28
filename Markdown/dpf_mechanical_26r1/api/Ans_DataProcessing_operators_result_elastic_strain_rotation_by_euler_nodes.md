---
uid: Ans.DataProcessing.operators.result.elastic_strain_rotation_by_euler_nodes
---

# elastic_strain_rotation_by_euler_nodes Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

read Euler angles on elements from the result file and rotate the fields in the fieldsContainer.   ///available inputs: fields_container (FieldsContainer) (optional), streams_container (StreamsContainer, Stream) (optional), data_sources (DataSources)
            available outputs: fields_container (FieldsContainer)

elastic_strain_rotation_by_euler_nodes()
elastic_strain_rotation_by_euler_nodes(fields_container: object, streams_container: object, data_sources: object, config: OperatorConfig)
elastic_strain_rotation_by_euler_nodes(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `mapdlOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
elastic_strain_rotation_by_euler_nodes()
```

#### Constructor

```python
elastic_strain_rotation_by_euler_nodes(fields_container, streams_container, data_sources, config)
```

**Parameters:**

- `fields_container` (*object*)
- `streams_container` (*object*)
- `data_sources` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
elastic_strain_rotation_by_euler_nodes(config)
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
