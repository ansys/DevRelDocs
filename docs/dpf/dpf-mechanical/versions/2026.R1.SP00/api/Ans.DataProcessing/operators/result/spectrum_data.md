---
uid: Ans.DataProcessing.operators.result.spectrum_data
---

# spectrum_data Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

## Summary

Read spectral data from the result files contained in the streams or data sources.

available inputs: `streams` (StreamsContainer) (optional), `data_sources` (DataSources)

available outputs: `participation_factors` (FieldsContainer), `mode_coefficients` (FieldsContainer), `damping_ratios` (FieldsContainer), `global_damping` (FieldsContainer), `missing_mass` (FieldsContainer), `rigid_response` (FieldsContainer)

## Example

```python
op = spectrum_data()

op = spectrum_data(streams=my_streams,data_sources=my_data_sources)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### streams

Result file container allowed to be kept open to cache data.

**Type:** *LinkableInput*

### data_sources

Result file path container, used if no streams are set.

**Type:** *LinkableInput*

## Outputs

### participation_factors

Fields container holding participation factors.

**Type:** *LinkableOutput*

### mode_coefficients

Fields container holding mode coefficients (PRS File).

**Type:** *LinkableOutput*

### damping_ratios

Fields container holding damping ratios (PRS File).

**Type:** *LinkableOutput*

### global_damping

**Type:** *LinkableOutput*

### missing_mass

Fields container holding for each spectrum: Missing Mass Mode (0: None, 1: Active), Missing Mass Effect ZPA (PRS File).

**Type:** *LinkableOutput*

### rigid_response

Fields container holding for each spectrum: Rigid Response Mode (0: None, 1: Gupta, 2: Lindley), Freq Begin (Gupta) / ZPA (Lindley), Freq End (Gupta) (PRS File).

**Type:** *LinkableOutput*

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
