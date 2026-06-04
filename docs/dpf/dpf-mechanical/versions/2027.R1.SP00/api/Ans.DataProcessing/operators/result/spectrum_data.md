---
uid: Ans.DataProcessing.operators.result.spectrum_data
---

# *class* spectrum_data(streams: object = None, data_sources: object = None, config: OperatorConfig = None)

Read spectral data from the result files contained in the streams or data sources.

available inputs: `streams` (StreamsContainer) (optional), `data_sources` (DataSources)

available outputs: `participation_factors` (FieldsContainer), `mode_coefficients` (FieldsContainer), `damping_ratios` (FieldsContainer), `global_damping` (FieldsContainer), `missing_mass` (FieldsContainer), `rigid_response` (FieldsContainer)

**DPF Framework Reference:** [spectrum_data operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/spectrum_data.md)

**Parameters:**

* **streams**
* **data_sources**
* **config**

**Example:**

```python
op = spectrum_data()

op = spectrum_data(streams=my_streams,data_sources=my_data_sources)
```

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

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
