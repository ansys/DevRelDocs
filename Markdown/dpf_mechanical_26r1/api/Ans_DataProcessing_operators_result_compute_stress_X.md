---
uid: Ans.DataProcessing.operators.result.compute_stress_X
---

# compute_stress_X Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

Computes the stress from an elastic strain field. compute_total_strain limitations are applicable for stress computation Get the XX normal component (00 component).   ///available inputs: scoping (Scoping) (optional), streams_container (StreamsContainer) (optional), data_sources (DataSources) (optional), requested_location (string) (optional), strain (FieldsContainer, Field)
            available outputs: fields_container (FieldsContainer)

compute_stress_X()
compute_stress_X(scoping: object, streams_container: object, data_sources: object, requested_location: object, strain: object, config: OperatorConfig)
compute_stress_X(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `Ans_Dpf_LivePost_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
compute_stress_X()
```

#### Constructor

```python
compute_stress_X(scoping, streams_container, data_sources, requested_location, strain, config)
```

**Parameters:**

- `scoping` (*object*)
- `streams_container` (*object*)
- `data_sources` (*object*)
- `requested_location` (*object*)
- `strain` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
compute_stress_X(config)
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
