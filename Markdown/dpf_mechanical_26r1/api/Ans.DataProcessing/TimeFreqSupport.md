---
uid: Ans.DataProcessing.TimeFreqSupport
---

# TimeFreqSupport Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

## Summary

The time freq support describes an analysis' temporal or frequential space.

For a transient or static analysis all the time sets cumulatives indices with their times and their load steps are described.

For a harmonic analysis, the real and imaginary frequencies, the RPMs, the load steps are described.

For a modal analysis, the modes frequencies can be found.

## Example

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

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing` |
| Assembly | `CS_DataProcessing` |
| Base Class | `Ans.DataProcessing.internal_objects.DpfType` |

## Constructors

#### Constructor

```python
TimeFreqSupport()
```

#### Constructor

```python
TimeFreqSupport(pTimeFreqSupport)
```

**Parameters:**

- `pTimeFreqSupport` (*IntPtr*)

## Methods

#### AppendStep

```python
obj.AppendStep(step_id, step_time_frequencies, step_complex_frequencies, rpm_value, step_harmonic_indices)
```

**Parameters:**

- `step_id` (*int*)
- `step_time_frequencies` (*list*)
- `step_complex_frequencies` (*list* (optional))
- `rpm_value` (*float* (optional))
- `step_harmonic_indices` (*dict* (optional))

#### GetInternalData

```python
result = obj.GetInternalData()
```

**Returns:** *IntPtr*

#### GetHarmonicIndices

Method `GetHarmonicIndices` return the harmonic indices field that matches with the specified stage number

```python
result = obj.GetHarmonicIndices(num_stage)
```

**Parameters:**

- `num_stage` (*int* (optional))

**Returns:** *Field*

#### SetHarmonicIndices

Method `SetHarmonicIndices` set the TimeFreqSupport harmonic indices field for a specified stage number

```python
obj.SetHarmonicIndices(field, num_stage)
```

**Parameters:**

- `field` (*Field*)
- `num_stage` (*int* (optional))

#### GetTimeFreqCummulativeIndex

```python
result = obj.GetTimeFreqCummulativeIndex(dVal, i1, i2)
```

**Parameters:**

- `dVal` (*float*)
- `i1` (*Int32&* (out))
- `i2` (*Int32&* (out))

**Returns:** *int*

#### GetTimeFreqCummulativeIndex

Method `GetTimeFreqCummulativeIndex` return the index through all the steps of the step and substep asked

This cumulative index + 1 allow to request specific time set to the result provider (stress, strain...)

```python
result = obj.GetTimeFreqCummulativeIndex(stepIndex, subStepIndex)
```

**Parameters:**

- `stepIndex` (*int*)
- `subStepIndex` (*int*)

**Returns:** *int*

#### GetImaginaryFreqsCummulativeIndex

```python
result = obj.GetImaginaryFreqsCummulativeIndex(dVal, i1, i2)
```

**Parameters:**

- `dVal` (*float*)
- `i1` (*Int32&* (out))
- `i2` (*Int32&* (out))

**Returns:** *int*

#### GetTimeFreq

Method `GetTimeFreq` return the time or frequency at the step and substep asked

```python
result = obj.GetTimeFreq(stepIndex, subStepIndex)
```

**Parameters:**

- `stepIndex` (*int*)
- `subStepIndex` (*int*)

**Returns:** *float*

#### GetImaginaryFreq

Method `GetImaginaryFreq` return the time or frequency at the step and substep asked

```python
result = obj.GetImaginaryFreq(stepIndex, subStepIndex)
```

**Parameters:**

- `stepIndex` (*int*)
- `subStepIndex` (*int*)

**Returns:** *float*

#### GetTimeFreq

Method `GetTimeFreq` return the time or frequency at the cumulative index asked

```python
result = obj.GetTimeFreq(iCumulativeIndex)
```

**Parameters:**

- `iCumulativeIndex` (*int*)

**Returns:** *float*

#### GetImaginaryFreq

Method `GetImaginaryFreq` return the time or frequency at the cumulative index asked

```python
result = obj.GetImaginaryFreq(iCumulativeIndex)
```

**Parameters:**

- `iCumulativeIndex` (*int*)

**Returns:** *float*

#### GetCyclicHarmonicIndex

Method `GetCyclicHarmonicIndex` return the cyclic harmonic index at the cumulative index asked

```python
result = obj.GetCyclicHarmonicIndex(iCumulativeIndex)
```

**Parameters:**

- `iCumulativeIndex` (*int*)

**Returns:** *int*

## Properties

#### NumberSets

Property `NumberSets` number of time/freq sets in the model (in all the steps)

**Type:** *int*

```python
# Get the property (read-only)
value = obj.NumberSets
```

#### TimeFreqs

Property `TimeFreqs` field of time frequency of the model. Each entity data of the field is a time/freq step

**Type:** *Field*

```python
# Get or set the property
value = obj.TimeFreqs
obj.TimeFreqs = new_value
```

#### ImaginaryFreqs

Property `TimeFreqs` field of the imaginary time frequency of the model. Each entity data of the field is a time/freq step

**Type:** *Field*

```python
# Get or set the property
value = obj.ImaginaryFreqs
obj.ImaginaryFreqs = new_value
```

#### Rpms

Property `Rpms` field having one rpm value by step

**Type:** *Field*

```python
# Get or set the property
value = obj.Rpms
obj.Rpms = new_value
```
