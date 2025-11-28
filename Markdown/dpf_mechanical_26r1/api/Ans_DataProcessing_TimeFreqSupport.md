---
uid: Ans.DataProcessing.TimeFreqSupport
title: TimeFreqSupport
---

# TimeFreqSupport Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

The time freq support describes an analysis' temporal or frequential space. 
            For a transient or static analysis all the time sets cumulatives indices with their times and their load steps are described. 
            For a harmonic analysis, the real and imaginary frequencies, the RPMs, the load steps are described.
            For a modal analysis, the modes frequencies can be found.

TimeFreqSupport()
TimeFreqSupport(pTimeFreqSupport: IntPtr)


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

#### GetInternalData

```python
result = obj.GetInternalData()
```

**Returns:** *IntPtr*

#### GetHarmonicIndices

```python
result = obj.GetHarmonicIndices(num_stage)
```

**Parameters:**

- `num_stage` (*int* (optional))

**Returns:** *Field*

#### SetHarmonicIndices

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

```python
result = obj.GetTimeFreq(stepIndex, subStepIndex)
```

**Parameters:**

- `stepIndex` (*int*)
- `subStepIndex` (*int*)

**Returns:** *float*

#### GetImaginaryFreq

```python
result = obj.GetImaginaryFreq(stepIndex, subStepIndex)
```

**Parameters:**

- `stepIndex` (*int*)
- `subStepIndex` (*int*)

**Returns:** *float*

#### GetTimeFreq

```python
result = obj.GetTimeFreq(iCumulativeIndex)
```

**Parameters:**

- `iCumulativeIndex` (*int*)

**Returns:** *float*

#### GetImaginaryFreq

```python
result = obj.GetImaginaryFreq(iCumulativeIndex)
```

**Parameters:**

- `iCumulativeIndex` (*int*)

**Returns:** *float*

#### GetCyclicHarmonicIndex

```python
result = obj.GetCyclicHarmonicIndex(iCumulativeIndex)
```

**Parameters:**

- `iCumulativeIndex` (*int*)

**Returns:** *int*

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

## Properties

#### NumberSets

**Type:** *int*

```python
# Get the property (read-only)
value = obj.NumberSets
```

#### TimeFreqs

**Type:** *Field*

```python
# Get or set the property
value = obj.TimeFreqs
obj.TimeFreqs = new_value
```

#### ImaginaryFreqs

**Type:** *Field*

```python
# Get or set the property
value = obj.ImaginaryFreqs
obj.ImaginaryFreqs = new_value
```

#### Rpms

**Type:** *Field*

```python
# Get or set the property
value = obj.Rpms
obj.Rpms = new_value
```
