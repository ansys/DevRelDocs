---
uid: Ans.DataProcessing.operators.result.spectrum_data
---

# spectrum_data Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

Read spectral data from the result files contained in the streams or data sources.   ///available inputs: streams (StreamsContainer) (optional), data_sources (DataSources)
            available outputs: participation_factors (FieldsContainer), mode_coefficients (FieldsContainer), damping_ratios (FieldsContainer), global_damping (FieldsContainer), missing_mass (FieldsContainer), rigid_response (FieldsContainer)

spectrum_data()
spectrum_data(streams: object, data_sources: object, config: OperatorConfig)
spectrum_data(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
spectrum_data()
```

#### Constructor

```python
spectrum_data(streams, data_sources, config)
```

**Parameters:**

- `streams` (*object*)
- `data_sources` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
spectrum_data(config)
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
