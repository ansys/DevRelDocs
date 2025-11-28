---
uid: Ans.DataProcessing.operators.result.euler_nodes
title: euler_nodes
---

# euler_nodes Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

Reads a field made of 3 coordinates and 3 Euler angles (6 dofs) by node from the result file.   ///available inputs: streams_container (StreamsContainer, Stream) (optional), data_sources (DataSources), filter_zeros (bool), coord_and_euler (bool), mesh (MeshedRegion) (optional)
            available outputs: fields_container (FieldsContainer)

euler_nodes()
euler_nodes(streams_container: object, data_sources: object, filter_zeros: object, coord_and_euler: object, mesh: object, config: OperatorConfig)
euler_nodes(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
euler_nodes()
```

#### Constructor

```python
euler_nodes(streams_container, data_sources, filter_zeros, coord_and_euler, mesh, config)
```

**Parameters:**

- `streams_container` (*object*)
- `data_sources` (*object*)
- `filter_zeros` (*object*)
- `coord_and_euler` (*object*)
- `mesh` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
euler_nodes(config)
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
