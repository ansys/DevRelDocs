---
uid: Ans.DataProcessing.operators.mapping.prep_sampling_fft
---

# *class* prep_sampling_fft(time_freq_support: object = None, cutoff_frequency: object = None, number_sampling_point: object = None, config: OperatorConfig = None)

Prepare time sampling optimum for FFT computation and expected frequencies in output.

available inputs: `time_freq_support` (TimeFreqSupport), `cutoff_frequency` (double) (optional), `number_sampling_point` (Int32) (optional)

available outputs: `time_tfs_sampled` (TimeFreqSupport), `freq_tfs_fft` (TimeFreqSupport)

**DPF Framework Reference:** [prep_sampling_fft operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/mapping/prep_sampling_fft.md)

**Parameters:**

* **time_freq_support**
* **cutoff_frequency**
* **number_sampling_point**
* **config**

**Example:**

```python
op = prep_sampling_fft()

op = prep_sampling_fft(time_freq_support=my_time_freq_support,cutoff_frequency=my_cutoff_frequency,number_sampling_point=my_number_sampling_point)
```

## Inputs

### time_freq_support

Initial time domain TimeFreqSupport.

**Type:** *LinkableInput*

### cutoff_frequency

Cutoff Frequency. In this case, number of points is calculated computing (time_range * cutoff_freq * 2) and taking the next power of 2 (optimum for fft calculation).

**Type:** *LinkableInput*

### number_sampling_point

For number of sampling point (calculation with cutoff_frequency is ignored).

**Type:** *LinkableInput*

## Outputs

### time_tfs_sampled

Optimum sampled time domain TimeFreqSupport.

**Type:** *LinkableOutput*

### freq_tfs_fft

Frequency domain TimeFreqSupport expected in output of FFT.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
