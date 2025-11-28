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

```csharp
new TimeFreqSupport()
```

#### Constructor

```csharp
new TimeFreqSupport(IntPtr pTimeFreqSupport)
```

**Parameters:**

- `pTimeFreqSupport` (*IntPtr*)

## Methods

#### GetInternalData

```csharp
IntPtr GetInternalData()
```

**Returns:** *IntPtr*

#### GetHarmonicIndices

```csharp
Field GetHarmonicIndices(Int32 num_stage (optional))
```

**Parameters:**

- `num_stage` (*Int32*)

**Returns:** *Field*

#### SetHarmonicIndices

```csharp
Void SetHarmonicIndices(Field field, Int32 num_stage (optional))
```

**Parameters:**

- `field` (*Field*)
- `num_stage` (*Int32*)

#### GetTimeFreqCummulativeIndex

```csharp
Int32 GetTimeFreqCummulativeIndex(Double dVal, Int32& i1 (out), Int32& i2 (out))
```

**Parameters:**

- `dVal` (*Double*)
- `i1` (*Int32&*)
- `i2` (*Int32&*)

**Returns:** *Int32*

#### GetTimeFreqCummulativeIndex

```csharp
Int32 GetTimeFreqCummulativeIndex(Int32 stepIndex, Int32 subStepIndex)
```

**Parameters:**

- `stepIndex` (*Int32*)
- `subStepIndex` (*Int32*)

**Returns:** *Int32*

#### GetImaginaryFreqsCummulativeIndex

```csharp
Int32 GetImaginaryFreqsCummulativeIndex(Double dVal, Int32& i1 (out), Int32& i2 (out))
```

**Parameters:**

- `dVal` (*Double*)
- `i1` (*Int32&*)
- `i2` (*Int32&*)

**Returns:** *Int32*

#### GetTimeFreq

```csharp
Double GetTimeFreq(Int32 stepIndex, Int32 subStepIndex)
```

**Parameters:**

- `stepIndex` (*Int32*)
- `subStepIndex` (*Int32*)

**Returns:** *Double*

#### GetImaginaryFreq

```csharp
Double GetImaginaryFreq(Int32 stepIndex, Int32 subStepIndex)
```

**Parameters:**

- `stepIndex` (*Int32*)
- `subStepIndex` (*Int32*)

**Returns:** *Double*

#### GetTimeFreq

```csharp
Double GetTimeFreq(Int32 iCumulativeIndex)
```

**Parameters:**

- `iCumulativeIndex` (*Int32*)

**Returns:** *Double*

#### GetImaginaryFreq

```csharp
Double GetImaginaryFreq(Int32 iCumulativeIndex)
```

**Parameters:**

- `iCumulativeIndex` (*Int32*)

**Returns:** *Double*

#### GetCyclicHarmonicIndex

```csharp
Int32 GetCyclicHarmonicIndex(Int32 iCumulativeIndex)
```

**Parameters:**

- `iCumulativeIndex` (*Int32*)

**Returns:** *Int32*

#### AppendStep

```csharp
Void AppendStep(Int32 step_id, IList`1 step_time_frequencies, IList`1 step_complex_frequencies (optional), Double rpm_value (optional), IDictionary`2 step_harmonic_indices (optional))
```

**Parameters:**

- `step_id` (*Int32*)
- `step_time_frequencies` (*IList`1*)
- `step_complex_frequencies` (*IList`1*)
- `rpm_value` (*Double*)
- `step_harmonic_indices` (*IDictionary`2*)

## Properties

#### NumberSets

```csharp
Int32 NumberSets { get; }
```

#### TimeFreqs

```csharp
Field TimeFreqs { get; set; }
```

#### ImaginaryFreqs

```csharp
Field ImaginaryFreqs { get; set; }
```

#### Rpms

```csharp
Field Rpms { get; set; }
```
