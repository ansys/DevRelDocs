---
uid: Ans.DataProcessing.TimeFreqSupport
---

# *class* TimeFreqSupport()

The time freq support describes an analysis' temporal or frequential space.

For a transient or static analysis all the time sets cumulatives indices with their times and their load steps are described.

For a harmonic analysis, the real and imaginary frequencies, the RPMs, the load steps are described.

For a modal analysis, the modes frequencies can be found.

**Example:**

```python
my_model = dpf.Model("../.../file.rst")

time_freq = my_model.TimeFreqSupport

#get number of time/freq sets

time_freq.NumberSets

# get field of real time freqs

my_time_freq_field = time_freq.TimeFreqs

my_time_freq_field.Unit #usually s or Hz

#get time or freqs on the first load step

my_time_freq_field.GetEntityDataById(1)
```

## Methods

#### AppendStep(step_id: int, step_time_frequencies: list, step_complex_frequencies: list = None, rpm_value: float = 0.0, step_harmonic_indices: dict = None) -> None

**Parameters:**

* **step_id**
* **step_time_frequencies**
* **step_complex_frequencies** (*optional*)
* **rpm_value** (*optional*)
* **step_harmonic_indices** (*optional*)

#### GetCyclicHarmonicIndex(iCumulativeIndex: int) -> int

Method `GetCyclicHarmonicIndex` return the cyclic harmonic index at the cumulative index asked

**Parameters:**

* **iCumulativeIndex** - set index trough all the steps

#### GetHarmonicIndices(num_stage: int = 0) -> Field

Method `GetHarmonicIndices` return the harmonic indices field that matches with the specified stage number

**Parameters:**

* **num_stage** (*optional*) - Specific stage number (default: 0)

#### GetImaginaryFreq(stepIndex: int, subStepIndex: int) -> float

Method `GetImaginaryFreq` return the time or frequency at the step and substep asked

**Parameters:**

* **stepIndex** - load step
* **subStepIndex** - set in the given step

#### GetImaginaryFreqsCummulativeIndex(dVal: float, i1: Int32&, i2: Int32&) -> int

**Parameters:**

* **dVal**
* **i1** (*out*)
* **i2** (*out*)

#### GetTimeFreq(stepIndex: int, subStepIndex: int) -> float

Method `GetTimeFreq` return the time or frequency at the step and substep asked

**Parameters:**

* **stepIndex** - load step
* **subStepIndex** - set in the given step

#### GetTimeFreqCummulativeIndex(dVal: float, i1: Int32&, i2: Int32&) -> int

**Parameters:**

* **dVal**
* **i1** (*out*)
* **i2** (*out*)

#### SetHarmonicIndices(field: Field, num_stage: int = 0) -> None

Method `SetHarmonicIndices` set the TimeFreqSupport harmonic indices field for a specified stage number

**Parameters:**

* **field** - Field that contains the harmonic indices
* **num_stage** (*optional*) - Specific stage number (default: 0)

## Properties

#### *property* NumberSets: int

Property `NumberSets` number of time/freq sets in the model (in all the steps)

*get*

#### *property* TimeFreqs: Field

Property `TimeFreqs` field of time frequency of the model. Each entity data of the field is a time/freq step

*get/set*

#### *property* ImaginaryFreqs: Field

Property `TimeFreqs` field of the imaginary time frequency of the model. Each entity data of the field is a time/freq step

*get/set*

#### *property* Rpms: Field

Property `Rpms` field having one rpm value by step

*get/set*
