---
uid: Ans.DataProcessing.TimeFreqScopingFactory
title: TimeFreqScopingFactory
---

# TimeFreqScopingFactory Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

Helpers to create time scoping inputs



## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing` |
| Assembly | `CS_DataProcessing` |

## Methods

#### ScopingByLoadStep

```csharp
Scoping ScopingByLoadStep(Int32 loadStep)
```

**Parameters:**

- `loadStep` (*Int32*)

**Returns:** *Scoping*

#### ScopingByLoadSteps

```csharp
Scoping ScopingByLoadSteps(IList`1 loadSteps)
```

**Parameters:**

- `loadSteps` (*IList`1*)

**Returns:** *Scoping*

#### ScopingBySet

```csharp
Scoping ScopingBySet(Int32 cumulativeSet)
```

**Parameters:**

- `cumulativeSet` (*Int32*)

**Returns:** *Scoping*

#### ScopingBySets

```csharp
Scoping ScopingBySets(IList`1 cumulativeSets)
```

**Parameters:**

- `cumulativeSets` (*IList`1*)

**Returns:** *Scoping*

#### ScopingByStepAndSubstep

```csharp
Scoping ScopingByStepAndSubstep(Int32 loadStepId, Int32 subsetId, TimeFreqSupport timeFreqSupport)
```

**Parameters:**

- `loadStepId` (*Int32*)
- `subsetId` (*Int32*)
- `timeFreqSupport` (*TimeFreqSupport*)

**Returns:** *Scoping*

#### ScopingByStepAndSubstep

```csharp
Scoping ScopingByStepAndSubstep(Int32 loadStepId, Int32 subsetId, Model model)
```

**Parameters:**

- `loadStepId` (*Int32*)
- `subsetId` (*Int32*)
- `model` (*Model*)

**Returns:** *Scoping*

#### ScopingOnAllTimeFreqs

```csharp
Scoping ScopingOnAllTimeFreqs(TimeFreqSupport timeFreqSupport)
```

**Parameters:**

- `timeFreqSupport` (*TimeFreqSupport*)

**Returns:** *Scoping*

#### ScopingOnAllTimeFreqs

```csharp
Scoping ScopingOnAllTimeFreqs(Model model)
```

**Parameters:**

- `model` (*Model*)

**Returns:** *Scoping*
